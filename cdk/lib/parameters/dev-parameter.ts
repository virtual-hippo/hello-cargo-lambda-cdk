import { AppParameterType } from "./app-parameter-type";

export const DEV_PARAMETER: AppParameterType = {
  env: {
    account: "123456789012",
    region: "ap-northeast-1",
  },
} as const;
