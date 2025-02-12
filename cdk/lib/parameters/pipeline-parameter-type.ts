import * as cdk from "aws-cdk-lib";

export interface PipelineParameterType {
  readonly env: cdk.Environment;
  readonly sourceRepository: string;
  readonly sourceBranch: string;
}
