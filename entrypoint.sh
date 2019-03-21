#!/usr/bin/env bash

cd /srv/src/app
ln -s /srv/node_modules /srv/src/app/node_modules

while true; do
    npm start
    sleep 30
done

