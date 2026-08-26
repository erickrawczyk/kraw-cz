#!/bin/bash

npm run build
if [ $? != 0 ]
  then
    echo "Exiting from Build Failure"
    exit 1
fi

aws s3 cp s3://eric.kraw.cz/ s3://kraw.cz/backups/$(date "+%Y-%m-%d") --recursive --profile eric

# Hashed assets (Vite's /assets/*) are content-addressed and never change once
# published, so they can be cached by browsers and CDNs indefinitely.
aws s3 cp dist s3://eric.kraw.cz --recursive --profile eric \
  --exclude "*" --include "assets/*" \
  --cache-control "public, max-age=31536000, immutable"

# Everything else (index.html, favicon, robots.txt, etc.) can change on any
# deploy without a new filename, so it must always be revalidated.
aws s3 cp dist s3://eric.kraw.cz --recursive --profile eric \
  --exclude "assets/*" \
  --cache-control "public, max-age=0, must-revalidate"
