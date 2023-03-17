rm -rf es
rm -rf lib

tsc -p .

$(npm bin)/swc src -d es --source-maps
cp tmp/* es

$(npm bin)/swc src -d lib --source-maps --config module.type=commonjs
cp tmp/* lib

rm -rf tmp

echo "build success"
