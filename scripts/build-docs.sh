#!/bin/bash
TARGET=$1

cd packages/docs/$TARGET && pnpm build-storybook

echo "DONE"
