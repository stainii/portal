FROM maven:3-jdk-11-slim

RUN apt-get update && \
    apt install -y curl software-properties-common gnupg2 wget
    #
#   curl -sL https://deb.nodesource.com/setup_10.x | bash - && \
#   apt-get install -y nodejs bash git mercurial && \
#   npm install -g gulp-cli && npm install gulp -D

# Install Google Chrome
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -y google-chrome-stable