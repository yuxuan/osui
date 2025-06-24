echo "node $(node -v)"
echo "npm $(npm -v)"
echo "pnpm $(pnpm -v)"

rm -rf es
swc variables -d es --source-maps

rm -rf lib
swc variables -d lib --source-maps --config module.type=commonjs

mkdir -p tmp
tsc --declaration 
cp -r tmp/* es
cp -r tmp/* lib
rm -rf tmp

echo 'tsc done'
node scripts/build.mjs

cp -r patches/* es
cp -r patches/* lib

echo "build success (without variable replacement)" 