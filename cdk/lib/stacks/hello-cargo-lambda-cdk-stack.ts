import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { RustFunction } from "cargo-lambda-cdk";

import * as path from "path";

export interface HelloCargoLambdaCdkStackProps extends cdk.StackProps {}

export class HelloCargoLambdaCdkStack extends cdk.Stack {
  constructor(
    scope: Construct,
    id: string,
    props?: HelloCargoLambdaCdkStackProps
  ) {
    super(scope, id, props);

    new RustFunction(this, "RustFunction", {
      manifestPath: path.join(
        __dirname,
        "../../../",
        "aws-lambda-functions",
        "Cargo.toml"
      ),
      binaryName: "hello",
    });
  }
}
