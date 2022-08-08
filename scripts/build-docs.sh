#!/bin/bash
TARGET=$1

cd packages/ui/docs/$TARGET && pnpm build-storybook

echo "DONE"
