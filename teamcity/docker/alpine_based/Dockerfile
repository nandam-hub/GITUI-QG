FROM testcafe/testcafe
USER root
ENV PYTHONUNBUFFERED=1

RUN apk add --update --no-cache python3
RUN ln -sf python3 /usr/bin/python
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools

RUN apk add openjdk11
ENV JAVA_HOME=/usr/lib/jvm/java-11-openjdk/jre
ENV PATH="$JAVA_HOME/bin:${PATH}"

RUN apk add bash
RUN apk add bash-completion
RUN apk add g++
RUN apk add make

RUN npm install -g npm-cli-login
RUN npm install -g json

RUN mkdir -p /opt/gtui
ADD startUi.sh /opt/gtui/startUi.sh
RUN chmod a+x /opt/gtui/startUi.sh
RUN chmod -R 777 /opt/gtui

USER user
ENV DISPLAY=:1.0
ENTRYPOINT ["/bin/bash"]