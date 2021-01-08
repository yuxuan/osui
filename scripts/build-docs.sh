#!/bin/bash
TARGET=$1

cd packages/ui/docs/$TARGET && yarn build-storybook

echo "DONE"
