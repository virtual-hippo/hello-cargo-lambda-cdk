# hello-cargo-lambda-cdk

## 概要

このプロジェクトは、Cargo Lambda CDK を使用して AWS Lambda をデプロイするサンプルプロジェクトです。

Cargo Lambda CDK を試し、学習することを目的としています。

## 主要ディレクトリの説明

```
.
├── aws-lambda-functions
│  └── src
│     └── bin           # Lambda 関数のエントリポイントを定義
├── cdk                 # AWS CDK によるインフラリソースの定義
└── modules             # アプリケーションの内部ロジック
   └── api              # アプリケーションインターフェースの定義
```

## デプロイ方法

デプロイ時は、以下のコマンドを実行します。

```shell
makers deploy
```

### **NOTE**: 

- コマンド実行前に **AWS へのログイン** と [CDK Bootstrapping](https://docs.aws.amazon.com/ja_jp/cdk/v2/guide/bootstrapping.html) を実施してください。
- デプロイ先の **AWS アカウント** および **リージョン** は [`dev-parameter.ts`](cdk/lib/parameters/dev-parameter.ts) で定義することができます。

## CodePipeline を利用したデプロイ方法

このプロジェクトでは CodePipeline を利用したデプロイができます。

詳細は今後記載する予定です。

## ツール

プロジェクトの実行に必要なツールについては、[TOOLS.ja.md](TOOLS.ja.md) を参照してください。
