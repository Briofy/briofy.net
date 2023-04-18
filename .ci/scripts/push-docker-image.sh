#!/usr/bin/env bash
#

# exit immediately when a command fails
set -e

# only exit with zero if all commands of the pipeline exit successfully
set -o pipefail

export DOCKER_CLI_EXPERIMENTAL=enabled
export REGISTRIES="${REGISTRIES:-"ghcr.io"}"

echo "Building image: $IMG_NAME:$IMG_TAG"

# Build image
docker build -t $IMG_NAME:$IMG_TAG .

# Push docker image to registry
docker push "${IMG_NAME}:${IMG_TAG}"
