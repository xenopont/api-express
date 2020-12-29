#!/usr/bin/env bash

docker exec api-mongo mongorestore /srv/database/mongodump
