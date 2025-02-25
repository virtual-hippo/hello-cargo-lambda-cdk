import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { AppParameterType } from "../parameters";
import { HelloCargoLambdaCdkStack } from "../stacks";

export interface HelloCargoLambdaCdkStageProps extends cdk.StageProps {
  readonly appParameter: AppParameterType;
}

export class HelloCargoLambdaCdkStage extends cdk.Stage {
  // for test
  readonly helloCargoLambdaCdkStack: HelloCargoLambdaCdkStack;

  constructor(scope: Construct, id: string, props: HelloCargoLambdaCdkStageProps) {
    super(scope, id, props);

    const helloCargoLambdaCdkStack = new HelloCargoLambdaCdkStack(this, "HelloCargoLambdaCdk", {
      env: props.appParameter.env,
    });

    this.helloCargoLambdaCdkStack = helloCargoLambdaCdkStack;
  }
}
