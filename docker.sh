#!/usr/bin/env bash
docker run -v /mnt/docker/data/axshare/config/nginx.conf:/etc/nginx/conf.d/default.conf \
  -p 9666:80 -d --rm --name axshare registry.cn-shanghai.aliyuncs.com/ervincheung/axshare
