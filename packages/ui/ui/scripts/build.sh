#!/bin/sh
# build ui完整库的脚本
# 注意： 要在 packages/ui/ui/ 目录下运行， 否则 ./src 或者 ../ 这种相对路径会错误
# 注意： 在MAC下用gsed，在linux下请将gsed替换成sed

rm -rf es

ROOT=.. # 在packages/ui/ui 目录下执行本脚本， ROOT目录应该是packages/ui/ui
EXCLUDE_FOLDER='docs$|ui$|\/$|\.\.$' # docs, ui, / 目录都要过滤掉

# 重置index.ts
echo "// @ts-nocheck" > ./src/index.ts

DEPENDENCIES=""

# 把各个包包名从package.json中读取出来
find $ROOT -maxdepth 1 -type d | grep -v -E $EXCLUDE_FOLDER | ( while IFS= read -r d; do
    COMPONENT=`echo $d | gsed  's|../||'`
    COMPONENT_NAME="$COMPONENT"
    # message 和 notification 和 version 需要保持小写
    if [[ "$COMPONENT_NAME" != "message" ]] && [[ "$COMPONENT_NAME" != "notification" ]] && [[ "$COMPONENT_NAME" != "version" ]]
    then
        COMPONENT_NAME=`echo $(tr '[:lower:]' '[:upper:]' <<< ${COMPONENT:0:1})${COMPONENT:1} | gsed -E 's/-(.)/\U\1/g'`
    fi
    echo "building $COMPONENT => $COMPONENT_NAME"
    PACKAGE_NAME=`cat $d/package.json | grep '"name":' | gsed -E 's/"name": "(.*)",/\1/g' | gsed -E 's/^[[:space:]]*//'` ;
    echo $PACKAGE_NAME
    DEPENDENCIES+="$PACKAGE_NAME "
    # echo "export {default as $COMPONENT_NAME} from '$PACKAGE_NAME';" >> ./src/index.ts
    # 之前是import from packagename，但是在commonjs nextjs的情况下，单包需要单独处理没有一个包
    # 尝试ui使用相对路径是否能简化配置
    # 先保留pagckagename的方式吧，得看一下build包大小什么的
    echo "export {default as $COMPONENT_NAME} from '$PACKAGE_NAME';" >> ./src/index.ts
done
echo "$DEPENDENCIES" ) # while 是 subshell， 括号来group subshell

echo "Add interfaces"
cat ./src/props.d.ts >> ./src/index.ts

# build index
$(npm bin)/tsc
$(npm bin)/tsc -p tsconfig.cjs.json

echo "build success"
