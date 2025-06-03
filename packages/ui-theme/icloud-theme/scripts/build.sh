echo "node $(node -v)"
echo "npm $(npm -v)"
echo "pnpm $(pnpm -v)"

rm -rf es
swc variables -d es --source-maps
cp -r tmp/* es

rm -rf tmp

rm -rf dist
rm -rf vars
mkdir -p dist/theme
mkdir -p vars

tsc
echo 'tsc done'
node scripts/build.mjs

cp -r patches/* dist
cp -r vars/* dist/theme

echo "build success"
