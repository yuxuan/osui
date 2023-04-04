echo 'file changed...'

tsc
echo 'tsc done'
node scripts/build.mjs

cp -r patches/* dist
cp -r vars/* dist/theme

echo "build success"