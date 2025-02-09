import * as cdk from "aws-cdk-lib";

export interface AppParameterType {
  readonly env: cdk.Environment;
}
