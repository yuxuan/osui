export PATH=$NODEJS_BIN_LATEST:$YARN_BIN_LATEST:$PATH

echo "node $(node -v)"
echo "npm $(npm -v)"
echo "yarn $(yarn -v)"

rm -rf dist output

yarn install --production=false
# yarn test
yarn run build || { echo 'build failed'; exit 1; }

mkdir output
cp ./conf/* ./output
cd dist
tar czf ../output/bundle.tar.gz ./

cd ..
echo "build success"
