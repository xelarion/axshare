#!/usr/bin/env bash
docker build -t ervincheung/axshare .
docker stop axshare
docker run -v /docker/data/axshare/config/nginx.conf:/etc/nginx/conf.d/default.conf \
  -v /docker/data/axshare/config/config.js:/usr/share/nginx/html/static/config.js \
  -p 9666:80 -d --rm --name axshare ervincheung/axshare
