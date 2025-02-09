import { AppParameterType } from "./app-parameter-type";
import { DEV_PARAMETER, DEV_PIPELINE_PARAMETER } from "./dev-parameter";
import { PipelineParameterType } from "./pipeline-parameter-type";

export const envs = ["DEV"] as const;
export type Env = (typeof envs)[number];

export const APP_PARAMETERS: Record<Env, AppParameterType> = {
  DEV: DEV_PARAMETER,
} as const;

export const PIPELINE_PARAMETERS: Record<Env, PipelineParameterType> = {
  DEV: DEV_PIPELINE_PARAMETER,
} as const;
