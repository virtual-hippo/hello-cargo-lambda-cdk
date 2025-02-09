import { AppParameterType } from "./app-parameter-type";
import { DEV_PARAMETER } from "./dev-parameter";

export const envs = ["DEV"] as const;
export type Env = (typeof envs)[number];

export const PARAMETERS: Record<Env, AppParameterType> = {
    DEV: DEV_PARAMETER,
} as const;
