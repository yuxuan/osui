#!/bin/bash

# 将stories从组件文件夹复制到demo中
# Example:
# pnpm copy-to-docs all

COMPONENT_NAME_ARG=$1
TARGET="icloud" # 默认
UI_FODER=./packages/ui/
EXCLUDE_FOLDER='/$|ui$|/docs$|\.\.$'

# 列出所有 packages/ui/下面的目录名称，除了ui
COMPONENT_LIST=$(find $UI_FODER -maxdepth 1 -type d | grep -v -E $EXCLUDE_FOLDER | sed 's|./packages/ui/||' | sed 's|^/||')
# 根据target给出是哪个component list，来选择复制组件到docs中去
echo $COMPONENT_LIST

if [ $COMPONENT_NAME_ARG == 'all' ]
then
    find $UI_FODER -maxdepth 1 -type d | grep -v -E $EXCLUDE_FOLDER | while IFS= read -r d; do
        COMPONENT_DIR=`echo $d | sed 's|//|/|g'` # mac的兼容，find时会保留最后的/，导致会有两个// 例如 ./packages/ui//tabs
        COMPONENT_NAME=`echo ${COMPONENT_DIR} | sed 's|./packages/ui/||'`

        echo "copy ${COMPONENT_NAME} stories from ${COMPONENT_DIR}"

        for var in $COMPONENT_LIST; do
            if [[ $COMPONENT_NAME =~ (^|[[:space:]])$var($|[[:space:]]) ]]
            then
                mkdir -p demo/stories/${COMPONENT_NAME}/
                # 复制剩余的所有内容
                cp -r ${COMPONENT_DIR}/stories/* demo/stories/${COMPONENT_NAME}/
                # 替换../src并清理bak文件
                find demo/stories/${COMPONENT_NAME}/*.tsx -print0 |xargs -0 sed -i.bak "s|../src|@osui/${COMPONENT_NAME}|"
                find demo/stories/${COMPONENT_NAME}/*.bak -print0 |xargs -0 rm -f
                # 复制demo目录
                if [[ -d "${COMPONENT_DIR}/stories/${TARGET}-demo" ]]
                then
                    echo "${COMPONENT_DIR}/stories/${TARGET}-demo"
                    rm -rf demo/stories/${COMPONENT_NAME}/${TARGET}-demo
                    cp -r ${COMPONENT_DIR}/stories/${TARGET}-demo demo/stories/${COMPONENT_NAME}/${TARGET}-demo
                    find demo/stories/${COMPONENT_NAME}/${TARGET}-demo/*.tsx -print0 |xargs -0 sed -i.bak "s|../../src|@osui/${COMPONENT_NAME}|"
                    find demo/stories/${COMPONENT_NAME}/${TARGET}-demo/*.bak -print0 |xargs -0 rm -f
                fi
            fi
        done
    done
else
    # 单个组件复制
    mkdir -p demo/stories/${COMPONENT_NAME_ARG}
    cp -r packages/ui/${COMPONENT_NAME_ARG}/stories/* demo/stories/${COMPONENT_NAME_ARG}/
    find demo/stories/${COMPONENT_NAME_ARG}/*.tsx -print0 |xargs -0 sed -i.bak "s|../src|@osui/${COMPONENT_NAME_ARG}|"
    find demo/stories/${COMPONENT_NAME_ARG}/*.bak -print0 |xargs -0 rm -f
    # 复制demo目录
    rm -rf packages/ui/${COMPONENT_NAME_ARG}/stories/${TARGET}-demo && cp -r packages/ui/${COMPONENT_NAME_ARG}/stories/${TARGET}-demo demo/stories/${COMPONENT_NAME}/${TARGET}-demo
    find demo/stories/${COMPONENT_NAME_ARG}/${TARGET}-demo/*.tsx -print0 |xargs -0 sed -i.bak "s|../../src|@osui/${COMPONENT_NAME_ARG}|"
    find demo/stories/${COMPONENT_NAME_ARG}/${TARGET}-demo/*.bak -print0 |xargs -0 rm -f
    # 替换../../src并清理bak文件
fi
