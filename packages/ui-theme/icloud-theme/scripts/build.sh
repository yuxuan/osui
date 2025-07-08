echo "node $(node -v)"
echo "npm $(npm -v)"
echo "pnpm $(pnpm -v)"

rm -rf es
swc variables -d es --source-maps

rm -rf lib
swc variables -d lib --source-maps --config module.type=commonjs

mkdir -p tmp
tsc --declaration 
cp -r tmp/* es
cp -r tmp/* lib
rm -rf tmp

echo 'tsc done'

# 生成CSS变量文件
node scripts/build.mjs

# 进行变量替换，将变量引用替换为实际值
echo 'Starting variable replacement...'
node scripts/advanced-replacer.mjs es/acud/acudTheme.js
node scripts/advanced-replacer.mjs lib/acud/acudTheme.js

cp -r patches/* es
cp -r patches/* lib

echo "build success"
