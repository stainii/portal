FROM jenkins/jenkins:2.155

# install Docker
USER root
RUN apt-get -y upgrade && apt-get update && \
                        apt-get -y install apt-transport-https \
                             ca-certificates \
                             curl \
                             gnupg2 \
                             software-properties-common && \
                        curl -fsSL https://download.docker.com/linux/$(. /etc/os-release; echo "$ID")/gpg > /tmp/dkey; apt-key add /tmp/dkey && \
                        add-apt-repository \
                           "deb [arch=amd64] https://download.docker.com/linux/$(. /etc/os-release; echo "$ID") \
                           $(lsb_release -cs) \
                           stable" && \
                        apt-get update && \
                        apt-get -y install docker-ce
USER jenkins
RUN /usr/local/bin/install-plugins.sh embeddable-build-status blueocean