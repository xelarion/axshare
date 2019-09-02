#!/usr/bin/env bash
docker build -t ervincheung/axshare .
docker run -it -p 8080:80 -d --rm --name dockerize-axshare ervincheung/axshare
