# export PATH=$NODEJS_BIN_LATEST:$YARN_BIN_LATEST:$PATH

echo "node $(node -v)"
echo "npm $(npm -v)"
echo "yarn $(yarn -v)"

rm -rf dist

yarn install --production=false
# yarn test

$(npm bin)/cpy '**/*' '!**/*.ts' '!**/*.tsx' '!**/*.js' '!**/*.jsx' ../tmp/ --cwd=src/ --parents
$(npm bin)/tsc
$(npm bin)/babel tmp --out-dir dist --ignore "src/**/*.test.js" --copy-files --source-maps

rm -rf tmp

echo "build success"
