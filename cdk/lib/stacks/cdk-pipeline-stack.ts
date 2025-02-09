import * as cdk from "aws-cdk-lib";
import { aws_iam as iam, pipelines } from "aws-cdk-lib";
import { StringParameter } from "aws-cdk-lib/aws-ssm";
import { Construct } from "constructs";
import { AppParameterType } from "../parameters";
import { HelloCargoLambdaCdkStage } from "../stages";

export interface HelloCargoLambdaCdkPipelineProps extends cdk.StackProps {
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

    const pipeline = new pipelines.CodePipeline(this, "Pipeline", {
      crossAccountKeys: true,
      synth: new pipelines.CodeBuildStep("SynthStep", {
        input: pipelines.CodePipelineSource.connection(props.sourceRepository, props.sourceBranch, {
          connectionArn: connectionArn,
        }),
        installCommands: ["n stable", "node --version", "npm i -g pnpm@9.15.4", "pnpm --version"],
        commands: ["cd cdk", "pnpm i --frozen-lockfile -P", "pnpm cdk synth"],
        role: deployRole,
        primaryOutputDirectory: "./cdk/cdk.out",
      }),
    });

    const testStep = new pipelines.ShellStep("RunTests", {
      installCommands: ["n stable", "node --version", "npm i -g pnpm@9.15.4", "pnpm --version"],
      commands: ["cd cdk", "pnpm i --frozen-lockfile", "pnpm cdk test"],
    });

    pipeline.addStage(
      new HelloCargoLambdaCdkStage(this, "HelloCargoLambdaCdkStage", { appParameter: props.appParameter }),
      {
        pre: [testStep],
      },
    );
  }
}
