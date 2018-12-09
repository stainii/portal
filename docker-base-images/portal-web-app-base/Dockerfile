FROM maven:3-jdk-11-slim

RUN apt-get update && \
    apt install -y curl software-properties-common gnupg2 && \
    curl -sL https://deb.nodesource.com/setup_10.x | bash - && \
    apt-get install -y nodejs bash git mercurial && \
    npm install -g gulp-cli && npm install gulp -D