# Tools

This document describes the development tools required to run code in this repository.

## Rust

The main programming language used.
To match the version of cargo-lambda, we use `v1.81.0`.

## Cargo Lambda

A tool for developing AWS Lambda functions in Rust.

### Installation

Refer to the official documentation.

🔗 https://www.cargo-lambda.info/guide/getting-started.html

## Cargo Lambda CDK

A Construct library that enables managing Rust Lambda functions built with Cargo Lambda using AWS CDK.

This repository was created to use Cargo Lambda CDK.

🔗 GitHub: https://github.com/cargo-lambda/cargo-lambda-cdk

## asdf

A tool version management tool.

The [.tool-versions](.tool-versions) file defines the versions of each tool.

In this repository, it is used for managing the versions of Node.js, pnpm, and awscli.

### Installation

Refer to the official documentation.

🔗 https://asdf-vm.com/guide/getting-started.html

## awscli

A CLI tool for using AWS APIs.

### Installation

```shell
asdf install awscli 2.12.6
asdf local awscli 2.12.6
```

## Node.js

A JavaScript runtime required for using AWS CDK.

### Installation

```shell
asdf install nodejs 22.13.1
asdf local nodejs 22.13.1
```

## pnpm

A package manager for Node.js.

### Installation

```shell
asdf install pnpm 9.15.4
asdf local pnpm 9.15.4
```

## AWS CDK

An IaC (Infrastructure as Code) tool that allows defining AWS resources using programming languages.

If not installed, it will be automatically installed when executing the `makers deploy` command.

## cargo-make

A task runner for Rust, used for building, testing, and linting.

### Installation

```shell
# https://github.com/sagiegurari/cargo-make?tab=readme-ov-file#installation
cargo install --force cargo-make
```

## awscurl

Used to verify the operation of deployed Lambda functions.

### Installation

```shell
# https://github.com/okigan/awscurl?tab=readme-ov-file#installation
pip install awscurl
```

