echo "node $(node -v)"
echo "npm $(npm -v)"
echo "pnpm $(pnpm -v)"

rm -rf dist
node rollup.mjs
cp -R svg dist/svg
cp -R raw dist/raw

cp src/index.d.ts dist/
