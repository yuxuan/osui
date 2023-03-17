rm -rf es
rm -rf lib

tsc -p .

$(npm bin)/swc src -d es --source-maps
cp src/*.less src/arrow.svg es
cp tmp/* es

$(npm bin)/swc src -d lib --source-maps --config module.type=commonjs
cp src/*.less lib
cp tmp/* lib

rm -rf tmp

echo "build success"
