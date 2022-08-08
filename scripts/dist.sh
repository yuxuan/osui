echo "pnpm $(pnpm -v)"
# pnpm install --production=false

rm -rf es
$(npm bin)/cpy '**/*' '!**/*.ts' '!**/*.tsx' '!**/*.js' '!**/*.jsx' ../tmp/ --cwd=src/ --parents
$(npm bin)/tsc
$(npm bin)/babel tmp --out-dir es --ignore "src/**/*.test.js" --copy-files --source-maps
rm -rf tmp
