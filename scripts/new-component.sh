#!/bin/bash
# @author tianyanbo
# 用于根据模板创建组件
set -e

COMPONENT_NAME=$1

echo "create $COMPONENT_NAME"

# 大驼峰改中划线
PKG_COMPONENT_NAME=`echo $COMPONENT_NAME | sed -E 's/([A-Z])/-\1/g' | sed -E 's/^-//g' | tr 'A-Z' 'a-z'`
echo $PKG_COMPONENT_NAME

# 复制template
mkdir packages/ui/$PKG_COMPONENT_NAME
cp -R templates/component/ packages/ui/$PKG_COMPONENT_NAME/

# 把组件包名替换
find packages/ui/$PKG_COMPONENT_NAME -type f -exec sed -i '' "s/{PkgComponentName}/${PKG_COMPONENT_NAME}/g" {} \;
find packages/ui/$PKG_COMPONENT_NAME -type f -exec sed -i '' "s/{ComponentName}/${COMPONENT_NAME}/g" {} \;
