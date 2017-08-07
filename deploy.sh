#!/bin/bash

yarn build
if [ $? != 0 ]
  then
    echo "Exiting from Build Failure"
    exit 1
fi

aws s3 cp s3://eric.kraw.cz/ s3://kraw.cz/backups/$(date "+%Y-%m-%d") --recursive --profile eric
aws s3 cp build s3://eric.kraw.cz --recursive --profile eric
