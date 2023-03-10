

rm -rf es
rm -rf lib

# pnpm install --production=false
# # pnpm test

$(npm bin)/cpy '**/*' '!**/*.ts' '!**/*.tsx' '!**/*.js' '!**/*.jsx' ../tmp/ --cwd=src/ --parents
$(npm bin)/tsc
# build es
$(npm bin)/babel tmp --out-dir es --ignore "src/**/*.test.js" --copy-files --source-maps
# build cjs
$(npm bin)/babel tmp --out-dir lib --ignore "src/**/*.test.js" --copy-files --source-maps --config-file './babel.cjsconfig.js';

rm -rf tmp

echo "build success"
