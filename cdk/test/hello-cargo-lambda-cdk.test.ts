import * as cdk from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { APP_PARAMETERS, PIPELINE_PARAMETERS } from "../lib/parameters";
import { HelloCargoLambdaCdkPipelineStack } from "../lib/stacks";
import { HelloCargoLambdaCdkStage } from "../lib/stages";

const serializer = {
  test: (val: unknown) => typeof val === "string",
  serialize: (val: string): string =>
    `"${val
      // Asset hash をダミー値に置き換え
      .replace(/([a-f0-9]{64})/, "HASH_REPLACED")
      // Construct address をダミー値に置き換え
      .replace(/[a-f0-9]{42}/, "[CONSTRUCT_ADDR_REPLACED]")}"`,
};

test("Snapshot test for Dev stage", () => {
  const app = new cdk.App();
  const stage = new HelloCargoLambdaCdkStage(app, "Dev", {
    appParameter: APP_PARAMETERS.Dev,
  });

  expect.addSnapshotSerializer(serializer);
  expect(Template.fromStack(stage.helloCargoLambdaCdkStack)).toMatchSnapshot();
});

test("Snapshot test for Dev pipeline", () => {
  const app = new cdk.App();
  const pipelineStack = new HelloCargoLambdaCdkPipelineStack(app, "HelloCargoLambdaCdkPipeline", {
    ...PIPELINE_PARAMETERS.Dev,
    env: {
      account: "123456789012",
      region: PIPELINE_PARAMETERS.Dev.env.region,
    },
    envAlias: "Dev",
    appParameter: APP_PARAMETERS.Dev,
  });

  expect.addSnapshotSerializer(serializer);
  expect(Template.fromStack(pipelineStack)).toMatchSnapshot();
});
