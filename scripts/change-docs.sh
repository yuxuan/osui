#!/bin/bash

# 将所有组件列出来，echo 组件文件夹

COMPONENT_NAME_ARG=$1
UI_FODER=./packages/ui/
EXCLUDE_FOLDER='/$|ui$|/docs$|\.\.$'

find $UI_FODER -maxdepth 1 -type d | grep -v -E $EXCLUDE_FOLDER | while IFS= read -r d; do
    COMPONENT_DIR=`echo $d | sed 's|//|/|g'` # mac的兼容，find时会保留最后的/，导致会有两个// 例如 ./packages/ui//tabs
    echo $COMPONENT_DIR
done
