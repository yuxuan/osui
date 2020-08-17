#!/bin/bash

# 将stories从组件文件夹复制到docs中

COMPONENT_NAME_ARG=$1
UI_FODER=./packages/ui/
EXCLUDE_FOLDER='/$|ui$|/docs$'

if [ $COMPONENT_NAME_ARG == 'all' ]
then
    find $UI_FODER -maxdepth 1 -type d | grep -v -E $EXCLUDE_FOLDER | while IFS= read -r d; do
        COMPONENT_DIR=$d
        COMPONENT_NAME=`echo ${COMPONENT_DIR} | sed 's|./packages/ui/||'`
        echo "copy ${COMPONENT_NAME} stories"

        mkdir -p packages/ui/docs/stories/${COMPONENT_NAME}
        cp -R ${COMPONENT_DIR}/stories/* packages/ui/docs/stories/${COMPONENT_NAME}
        sed -i "s|../src|@osui/${COMPONENT_NAME}|" packages/ui/docs/stories/${COMPONENT_NAME}/index.stories.tsx
    done
else
    # 单个组件复制
    mkdir -p packages/ui/docs/stories/${COMPONENT_NAME_ARG}
    cp -R packages/ui/${COMPONENT_NAME_ARG}/stories/* packages/ui/docs/stories/${COMPONENT_NAME_ARG}
    sed -i "s|../src|@osui/${COMPONENT_NAME_ARG}|" packages/ui/docs/stories/${COMPONENT_NAME_ARG}/index.stories.tsx
fi
