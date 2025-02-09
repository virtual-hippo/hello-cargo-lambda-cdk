import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { AppParameterType } from "../parameters";
import { HelloCargoLambdaCdkStack } from "../stacks";

export interface HelloCargoLambdaCdkStageProps extends cdk.StageProps {
  readonly appParameter: AppParameterType;
}

export class HelloCargoLambdaCdkStage extends cdk.Stage {
  constructor(scope: Construct, id: string, props: HelloCargoLambdaCdkStageProps) {
    super(scope, id, props);

    new HelloCargoLambdaCdkStack(this, "HelloCargoLambdaCdkStack", {
      env: props.appParameter.env
    });
  }
}
