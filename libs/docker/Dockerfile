#Grabbing Ubuntu:22.04 as it has newer glibc version which accomodates "n" NodeJS version manager
#Nodesource which is used for downloading Node/NPM is also incompatible with older versions of Ubuntu
FROM ubuntu:22.04

ENV NODE_VERSION 18.16.1

#Installing commands
RUN apt-get -y update &&\
    apt-get -y install curl &&\
    apt-get -y install sudo &&\
    apt-get -y install software-properties-common &&\
    apt-get -y install wget &&\
    apt-get -y install unzip && \
    apt-get -y install tzdata &&\
    apt-get -y install dpkg &&\
    apt-get -y install less

#Don't need to install Python as Ubuntu 22.04 comes bundled with Python 3.10.x

#Getting Chrome
RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN sudo apt-get install -y software-properties-common
RUN sudo apt install -y ./google-chrome-stable_current_amd64.deb

#Getting Node & NPM version that is bundled with Node
RUN sudo apt-get update
RUN sudo apt-get install -y ca-certificates curl gnupg
RUN sudo mkdir -p /etc/apt/keyrings
RUN curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg

ENV NODE_MAJOR 20
RUN echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list

RUN sudo apt-get update
RUN sudo apt-get install nodejs -y

#Getting specific Node version using n and n will also fetch associated npm version
RUN npm install -g n
RUN n install $NODE_VERSION

#Getting Java JDK 11
RUN sudo -E add-apt-repository ppa:openjdk-r/ppa

RUN apt-get update && apt-get install -y \
	xvfb \
	bash \
	bash-completion \
	g++ \
	make \
	openjdk-11-jdk-headless

ENV JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64
ENV PATH="$JAVA_HOME/bin:${PATH}"

#Start UI script
RUN mkdir -p /opt/gtui
ADD startUi.sh /opt/gtui/startUi.sh
RUN chmod a+x /opt/gtui/startUi.sh
RUN chmod -R 777 /opt/gtui

#========================================
# Add normal user with passwordless sudo
#========================================
RUN useradd -u 1000 gotham \
         --shell /bin/sh  \
         --create-home \
  && usermod -a -G sudo gotham \
  && echo 'ALL ALL = (ALL) NOPASSWD: ALL' >> /etc/sudoers \
  && echo 'gotham:secret' | chpasswd

ENV DISPLAY=:1.0
ENTRYPOINT ["/bin/bash", "-l", "-c"]

#Checking versions
CMD echo "NPM ver:" &&\
    npm -v &&\
    echo "Node ver:" &&\
    node -v &&\
    echo "Java ver:" &&\
    java --version &&\
    echo "Python3 ver:" &&\
    python3 --version

USER gotham