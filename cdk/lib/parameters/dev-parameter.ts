import { AppParameterType } from "./app-parameter-type";
import { PipelineParameterType } from "./pipeline-parameter-type";

export const DEV_PARAMETER: AppParameterType = {
  env: {
    account: "123456789012",
    region: "ap-northeast-1",
  },
} as const;

export const DEV_PIPELINE_PARAMETER: PipelineParameterType = {
  env: {
    account: "123456789012",
    region: "ap-northeast-1",
  },
  sourceRepository: "virtual-hippo/hello-cargo-lambda-cdk",
  sourceBranch: "dev",
} as const;
