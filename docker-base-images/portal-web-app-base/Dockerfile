FROM maven:3-jdk-14

RUN yum install -y curl software-properties-common gnupg2 wget
RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_x86_64.rpm
RUN yum install -y ./google-chrome-stable_current_*.rpm
