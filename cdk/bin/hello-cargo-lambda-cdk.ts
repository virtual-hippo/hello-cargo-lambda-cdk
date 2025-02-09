#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { PARAMETERS } from "../lib/parameters";
import { HelloCargoLambdaCdkStage } from "../lib/stages";

const app = new cdk.App();

new HelloCargoLambdaCdkStage(app, "HelloCargoLambdaCdkStage", {
  appParameter: PARAMETERS.DEV,
});
