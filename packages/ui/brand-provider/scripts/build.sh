rm -rf es
rm -rf lib

$(npm bin)/swc src -d es --source-maps
$(npm bin)/swc src -d lib --source-maps --config module.type=commonjs

echo "build success"
