FROM ghcr.io/cargo-lambda/cargo-lambda:1.6.3

# Reference: https://github.com/aws/aws-codebuild-docker-images/blob/master/ubuntu/standard/7.0/Dockerfile

# Install AWS CLI v2
# https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-linux.html
RUN curl https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip -o /tmp/awscliv2.zip \
    && unzip -q /tmp/awscliv2.zip -d /opt/awscli \
    && /opt/awscli/aws/install --update -i /usr/local/aws-cli -b /usr/local/bin \
    && rm -rf /opt/awscli /tmp/* \
    && aws --version

#****************      NODEJS     ****************************************************
#nodejs
ARG SRC_DIR="/usr/src"
ARG N_SRC_DIR="$SRC_DIR/n"

ENV NODE_22_VERSION="22.13.1"

RUN git clone https://github.com/tj/n $N_SRC_DIR \
    && cd $N_SRC_DIR && make install

RUN n $NODE_22_VERSION && npm install --save-dev -g -f grunt \
    && npm install --save-dev -g -f grunt-cli \
    && npm install --save-dev -g -f webpack \
    && npm install --save-dev -g -f yarn

RUN cd / && rm -rf $N_SRC_DIR && rm -rf /tmp/*

RUN npm install -g pnpm@9.15.4

# Preserve latest npm version
ENV N_PRESERVE_NPM=1 \
    N_PRESERVE_COREPACK=1
#****************      END NODEJS     ****************************************************
