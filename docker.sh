#!/usr/bin/env bash
docker build -t ervincheung/axshare .
docker stop axshare
docker run -p 9666:80 -d --rm --name axshare ervincheung/axshare
