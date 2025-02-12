# Tools

このリポジトリでコードを実行するために必要な開発ツールについて記します.

## Rust

メインで使用するプログラミング言語です.  
cargo-lambda のバージョンと揃えるため, `v1.81.0` を利用します.

## Cargo Lambda

Rust で AWS Lambda 関数を開発するためのツールです.

### インストール方法

公式ドキュメントを参照してください.

🔗 https://www.cargo-lambda.info/guide/getting-started.html

## Cargo Lambda CDK

Cargo Lambda でビルドされた Rust Lambda 関数を AWS CDK で管理できるようにする Construct ライブラリです.

本リポジトリは Cargo Lambda CDK を利用するために作成されました.

🔗 GitHub: https://github.com/cargo-lambda/cargo-lambda-cdk

## asdf

ツールのバージョン管理ツールです.

[.tool-versions](.tool-versions) ファイルに各ツールのバージョンが定義されています.

本リポジトリでは, Node.js, pnpm, awscli のバージョン管理に使用します.

### インストール方法

公式ドキュメントを参照してください.

🔗 https://asdf-vm.com/guide/getting-started.html

## awscli

AWS の API を利用するための CLI ツールです.

### インストール方法

```shell
asdf install awscli 2.12.6
asdf local awscli 2.12.6
```

## Node.js

JavaScript のランタイムです. AWS CDK を使用するために必要です.

### インストール方法

```shell
asdf install nodejs 22.13.1
asdf local nodejs 22.13.1
```

## pnpm

Node.js 用のパッケージマネージャです.

### インストール方法

```shell
asdf install pnpm 9.15.4
asdf local pnpm 9.15.4
```

## AWS CDK

AWS のリソースをプログラミング言語で定義できる IaC (Infrastructure as Code) ツールです.

インストールされていない場合, `makers deploy` コマンド実行時に自動でインストールされます.

## cargo-make

Rust のタスクランナーで, ビルドやテスト, リントに利用します.

### インストール方法

```shell
# https://github.com/sagiegurari/cargo-make?tab=readme-ov-file#installation
cargo install --force cargo-make
```

## awscurl

デプロイした Lambda 関数の動作確認に使用します.

### インストール方法

```shell
# https://github.com/okigan/awscurl?tab=readme-ov-file#installation
pip install awscurl
```
