#!/usr/bin/env bash

# replace "site" with your database name
docker exec api-mongo mongodump -d site -o /srv/database/mongodump
