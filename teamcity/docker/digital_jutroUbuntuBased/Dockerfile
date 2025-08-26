FROM artifactory.guidewire.com/jutro-docker-dev/testcafe:86.0_82.0-yarn
USER root
RUN add-apt-repository ppa:openjdk-r/ppa

RUN apt-get update && apt-get install -y \
	xvfb \
	python3 \
    python3-pip \
	bash \
	bash-completion \
	g++ \
	make \
	openjdk-11-jdk-headless
	
RUN ln -sf python3 /usr/bin/python

ENV JAVA_HOME=/usr/lib/jvm/java-11-openjdk/jre
ENV PATH="$JAVA_HOME/bin:${PATH}"


RUN mkdir -p /opt/gtui
ADD startUi.sh /opt/gtui/startUi.sh
RUN chmod a+x /opt/gtui/startUi.sh
RUN chmod -R 777 /opt/gtui

USER user
ENV DISPLAY=:1.0
ENTRYPOINT ["/bin/bash"]