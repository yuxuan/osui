

rm -rf dist
rm -rf vars
mkdir -p dist/theme
mkdir -p vars

tsc
echo 'tsc done'
node scripts/build.js

cp -r patches/* dist
cp -r vars/* dist/theme

echo "build success"
