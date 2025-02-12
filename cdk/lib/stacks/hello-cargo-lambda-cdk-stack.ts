import * as cdk from "aws-cdk-lib";
import { RustFunction } from "cargo-lambda-cdk";
import { Construct } from "constructs";

import * as path from "path";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface HelloCargoLambdaCdkStackProps extends cdk.StackProps {}

export class HelloCargoLambdaCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: HelloCargoLambdaCdkStackProps) {
    super(scope, id, props);

    {
      const fn = new RustFunction(this, "HelloFunction", {
        manifestPath: path.join(__dirname, "../../../", "aws-lambda-functions", "Cargo.toml"),
        binaryName: "hello",
      });

      const fnUrl = fn.addFunctionUrl();

      new cdk.CfnOutput(this, "HelloFunctionUrl", { value: fnUrl.url });
    }

    {
      const fn = new RustFunction(this, "AddFunction", {
        manifestPath: path.join(__dirname, "../../../", "aws-lambda-functions", "Cargo.toml"),
        binaryName: "add",
      });

      const fnUrl = fn.addFunctionUrl();

      new cdk.CfnOutput(this, "AddFunctionUrl", { value: fnUrl.url });
    }
  }
}
