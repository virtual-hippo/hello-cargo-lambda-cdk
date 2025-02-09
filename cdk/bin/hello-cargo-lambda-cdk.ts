#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { APP_PARAMETERS, PIPELINE_PARAMETERS } from "../lib/parameters";
import { HelloCargoLambdaCdkPipelineStack } from "../lib/stacks";

const app = new cdk.App();

new HelloCargoLambdaCdkPipelineStack(app, "HelloCargoLambdaCdkPipeline", {
  ...PIPELINE_PARAMETERS.DEV,
  envAlias: "DEV",
  appParameter: APP_PARAMETERS.DEV,
});
