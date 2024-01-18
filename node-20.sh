#!/usr/bin/env bash

docker run \
    --user "$(id -u):$(id -g)" \
    -it \
    --rm \
    -w /app \
    -v "$(pwd)":/app \
    -p 8080:8080 \
    node:20 \
    "$@"
