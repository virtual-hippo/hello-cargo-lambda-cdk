import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

export interface HelloCargoLambdaCdkStackProps extends cdk.StackProps {}

export class HelloCargoLambdaCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: HelloCargoLambdaCdkStackProps) {
    super(scope, id, props);
  }
}
