#!/bin/bash

# 将stories从组件文件夹复制到docs中

COMPONENT_NAME=$1

mkdir -p packages/ui/docs/stories/${COMPONENT_NAME}

cp -R packages/ui/${COMPONENT_NAME}/stories/* packages/ui/docs/stories/${COMPONENT_NAME}

sed -i "s|../src|@osui/${COMPONENT_NAME}|" packages/ui/docs/stories/${COMPONENT_NAME}/index.stories.tsx
