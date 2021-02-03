echo "node $(node -v)"
echo "npm $(npm -v)"
echo "yarn $(yarn -v)"

rm -rf dist
node -r esm rollup.js
cp -R svg dist/svg
cp -R raw dist/raw

cp src/index.d.ts dist/
