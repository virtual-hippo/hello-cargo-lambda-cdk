import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { HelloCargoLambdaCdkStack } from "../stacks";

export interface HelloCargoLambdaCdkStageProps extends cdk.StageProps {}

export class HelloCargoLambdaCdkStage extends cdk.Stage {
  constructor(scope: Construct, id: string, props: HelloCargoLambdaCdkStageProps) {
    super(scope, id, props);

    new HelloCargoLambdaCdkStack(this, "HelloCargoLambdaCdkStack", {
    });
  }
}
