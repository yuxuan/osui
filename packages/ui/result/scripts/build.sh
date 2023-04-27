rm -rf es
rm -rf lib

tsc -p .

swc src -d es --source-maps
cp -r tmp/* es

swc src -d lib --source-maps --config module.type=commonjs
cp -r tmp/* lib

rm -rf tmp

echo "build success"
