#!/usr/bin/env bash

docker run \
    --user "$(id -u):$(id -g)" \
    -it \
    --rm \
    -w /app \
    -v "$(pwd)":/app \
    node:20 \
    "$@"
