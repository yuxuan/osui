#!/bin/bash
# @author huoyuxuan
# 用于根据模板创建组件
set -e

COMPONENT_NAME=$1

echo "create $COMPONENT_NAME"

# 复制template
cp -R templates/component packages/ui/$COMPONENT_NAME

# 把组件名替换成第一个字母大写， 把 - 换成大小写
CAP_COMPONENT_NAME=`echo $(tr '[:lower:]' '[:upper:]' <<< ${COMPONENT_NAME:0:1})${COMPONENT_NAME:1} |  gsed -E 's/-(.)/\U\1/g'`
echo $CAP_COMPONENT_NAME

# 把组件包名替换
find packages/ui/$COMPONENT_NAME -type f -exec sed -i '' "s/{componentName}/${COMPONENT_NAME}/g" {} \;
find packages/ui/$COMPONENT_NAME -type f -exec sed -i '' "s/{CapComponentName}/${CAP_COMPONENT_NAME}/g" {} \;
