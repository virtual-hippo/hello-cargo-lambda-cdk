import * as cdk from "aws-cdk-lib";
import { aws_codebuild as codebuild, aws_iam as iam, pipelines } from "aws-cdk-lib";
import { StringParameter } from "aws-cdk-lib/aws-ssm";
import { Construct } from "constructs";

import * as path from "path";

import { AppParameterType, Env } from "../parameters";
import { HelloCargoLambdaCdkStage } from "../stages";

export interface HelloCargoLambdaCdkPipelineProps extends cdk.StackProps {
  readonly envAlias: Env;
  readonly sourceRepository: string;
  readonly sourceBranch: string;
  readonly appParameter: AppParameterType;
}

export class HelloCargoLambdaCdkPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: HelloCargoLambdaCdkPipelineProps) {
    super(scope, id, props);

    const deployRole = new iam.Role(this, "CodeBuildDeployRole", {
      assumedBy: new iam.ServicePrincipal("codebuild.amazonaws.com"),
      managedPolicies: [
        {
          managedPolicyArn: "arn:aws:iam::aws:policy/AdministratorAccess",
        },
      ],
    });

    const connectionArn = StringParameter.valueFromLookup(this, "/github/hello-cargo-lambda-cdk/connectionArn");

    const buildImage = codebuild.LinuxBuildImage.fromAsset(this, "LinuxBuildImage", {
      directory: path.join(__dirname, "../../", "assets/docker-images/codebuild"),
    });

    const pipeline = new pipelines.CodePipeline(this, "Pipeline", {
      codeBuildDefaults: { buildEnvironment: { buildImage } },
      synth: new pipelines.CodeBuildStep("SynthStep", {
        input: pipelines.CodePipelineSource.connection(props.sourceRepository, props.sourceBranch, {
          connectionArn: connectionArn,
        }),
        commands: [
          // アカウント ID 明示的に定義していないので動的に指定する
          "export AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)",
          "cd cdk",
          "pnpm i --frozen-lockfile",
          "pnpm fmt",
          "pnpm lint",
          "pnpm test",
          "pnpm cdk synth",
        ],
        role: deployRole,
        primaryOutputDirectory: "./cdk/cdk.out",
      }),
    });

    const testStep = new pipelines.ShellStep("Testing", {
      commands: ["makers clippy-ci", "makers test-ci"],
    });

    pipeline.addStage(new HelloCargoLambdaCdkStage(this, props.envAlias, { appParameter: props.appParameter }), {
      pre: [testStep],
    });
  }
}
