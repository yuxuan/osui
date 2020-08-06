# export PATH=$NODEJS_BIN_LATEST:$YARN_BIN_LATEST:$PATH

echo "node $(node -v)"
echo "npm $(npm -v)"
echo "yarn $(yarn -v)"

rm -rf dist
mkdir dist
cp -r src/* dist

echo "build success"
