#!/bin/bash
set -e

rm -rf output

mkdir output 

cd demo 

yarn install --silent 

yarn run build-storybook

cd storybook-static

tar czf  ../../output/bundle.tar.gz ./

cd ../../

echo "build success"
