# export PATH=$NODEJS_BIN_LATEST:$YARN_BIN_LATEST:$PATH

echo "node $(node -v)"
echo "npm $(npm -v)"
echo "yarn $(yarn -v)"

rm -rf dist
mkdir -p dist/theme
cp -r src/* dist
cp -r vars/* dist/theme

echo "build success"
