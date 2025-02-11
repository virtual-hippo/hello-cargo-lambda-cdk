import * as cdk from "aws-cdk-lib";
import { RustFunction } from "cargo-lambda-cdk";
import { Construct } from "constructs";

import * as path from "path";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface HelloCargoLambdaCdkStackProps extends cdk.StackProps {}

export class HelloCargoLambdaCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: HelloCargoLambdaCdkStackProps) {
    super(scope, id, props);

    const fn = new RustFunction(this, "RustFunction", {
      manifestPath: path.join(__dirname, "../../../", "aws-lambda-functions", "Cargo.toml"),
      binaryName: "hello",
    });

    const fnUrl = fn.addFunctionUrl();

    new cdk.CfnOutput(this, "RustFunctionUrl", { value: fnUrl.url });
  }
}
