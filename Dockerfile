FROM rustybrooks/flannelcat-base:latest

RUN apt-get -y update \
 && DEBIAN_FRONTEND=noninteractive apt-get -yq install curl apt-utils \
 && curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash - \
 && apt-get install -y nodejs

COPY . /srv/src
RUN mkdir /srv/node_modules && ln -s /srv/node_modules /srv/src/app/node_modules
WORKDIR /srv/src/app
RUN npm install
RUN npm run build

ENTRYPOINT /srv/src/entrypoint.sh
