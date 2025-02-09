import { AppParameterType } from "./app-parameter-type";
import { PipelineParameterType } from "./pipeline-parameter-type";

export const DEV_PARAMETER: AppParameterType = {
  env: {
    // 公開リポジトリのためアカウント ID は明示的に記載しない
    // account: "123456789012",
    region: "ap-northeast-1",
  },
} as const;

export const DEV_PIPELINE_PARAMETER: PipelineParameterType = {
  env: {
    // 公開リポジトリのためアカウント ID は明示的に記載しない
    // account: "123456789012",
    account: process.env.AWS_ACCOUNT_ID!,
    region: "ap-northeast-1",
  },
  sourceRepository: "virtual-hippo/hello-cargo-lambda-cdk",
  sourceBranch: "dev",
} as const;
