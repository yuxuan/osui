# build ui完整库的脚本
# 注意： 要在 packages/ui/ui/ 目录下运行， 否则 ./src 或者 ../ 这种相对路径会错误

rm -rf dist

ROOT=../ # 在packages/ui/ui 目录下执行本脚本， ROOT目录应该是packages/ui/ui
EXCLUDE_FOLDER='docs$|ui$|\/$' # docs, ui, / 目录都要过滤掉

# 重置index.ts
echo "// @ts-nocheck" > ./src/index.ts

# 注意：需要提前build好各个包
# 把各个包的dist目录复制到 dist
find $ROOT -maxdepth 1 -type d | grep -v -E $EXCLUDE_FOLDER | while IFS= read -r d; do
    COMPONENT=`echo $d | sed 's/..\///'`
    COMPONENT_NAME=`echo ${COMPONENT^} | sed -E 's/-(.)/\U\1/g'`
    echo "building $COMPONENT => $COMPONENT_NAME"
    mkdir -p dist/$COMPONENT
    # 复制dist
    cp -R $d/dist/* dist/$COMPONENT
    # 复制README
    cp $d/README.md dist/$COMPONENT
    #
    echo "export {default as $COMPONENT_NAME} from './$COMPONENT';" >> ./src/index.ts
done

# build index
$(npm bin)/tsc

echo "build success"
