FROM node:15.14.0-alpine3.13


ENV DOCKERIZE_VERSION v0.7.0

WORKDIR /usr/src/app

RUN apk update --no-cache \
    && apk add --no-cache wget openssl \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apk del wget

RUN npm install

EXPOSE 3000
