rm -rf es
rm -rf lib

mkdir -p es
mkdir -p lib

node --experimental-specifier-resolution=node ./scripts/version.mjs