# export PATH=$NODEJS_BIN_LATEST:$YARN_BIN_LATEST:$PATH

rm -rf dist

ROOT=../ # 在packages/ui/ui 目录下执行本脚本， ROOT目录应该是packages/ui/ui
EXCLUDE_FOLDER='docs$|ui$|\/$' # docs, ui, / 目录都要过滤掉

# 注意：需要提前build好各个包
# 把各个包的dist目录复制到 dist
find $ROOT -maxdepth 1 -type d | grep -v -E $EXCLUDE_FOLDER | while IFS= read -r d; do
    COMPONENT=`echo $d | sed 's/..\///'`
    echo "building $COMPONENT"
    mkdir -p dist/$COMPONENT
    cp -R $d/dist/* dist/$COMPONENT
done

# build index
$(npm bin)/tsc

echo "build success"
