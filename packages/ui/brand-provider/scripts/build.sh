rm -rf es
rm -rf lib

tsc -p .

swc src -d es --source-maps
cp tmp/* es
# cp src/*.less es

swc src -d lib --source-maps --config module.type=commonjs
cp tmp/* lib
# cp src/*.less lib

rm -rf tmp

echo "build success"
