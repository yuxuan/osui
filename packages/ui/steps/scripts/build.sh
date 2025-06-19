rm -rf es
rm -rf lib

tsc -p .

swc src -d es --source-maps
cp src/arrow.svg es
cp -r tmp/* es

swc src -d lib --source-maps --config module.type=commonjs

cp -r tmp/* lib
cp src/arrow.svg lib
rm -rf tmp

echo "build success"
