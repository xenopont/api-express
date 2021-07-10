FROM node:16.4.2-alpine3.13

LABEL maintainer="smith404@live.com"

RUN apk update

WORKDIR /srv/server

ENV ENV="/root/.ashrc"
ENV NODE_ENV="development"

COPY ./docker/dev-server.start.sh /tmp/start.sh

CMD ["ash", "/tmp/start.sh"]
