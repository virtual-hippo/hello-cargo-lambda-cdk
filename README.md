# hello-cargo-lambda-cdk

[日本語版](README.ja.md)

## Overview

This project is a sample project for deploying AWS Lambda using Cargo Lambda CDK.

The purpose is to experiment with and learn Cargo Lambda CDK.

## Description of Key Directories

```
.
├── aws-lambda-functions
│  └── src
│     └── bin           # Defines the entry points for Lambda functions
├── cdk                 # Defines infrastructure resources using AWS CDK
└── modules             # Internal application logic
   └── api              # Defines the application interface
```

## Deployment Method

To deploy, execute the following command:

```shell
makers deploy
```

### **NOTE**: 

- Before executing the command, ensure you have **logged in to AWS** and performed [CDK Bootstrapping](https://docs.aws.amazon.com/cdk/v2/guide/bootstrapping.html).
- The target **AWS account** and **region** can be defined in [`dev-parameter.ts`](cdk/lib/parameters/dev-parameter.ts).

## Deployment Using CodePipeline

This project supports deployment using CodePipeline.

Details will be documented in the future.

## Tools

For the tools required to run the project, refer to [TOOLS.md](TOOLS.md).

