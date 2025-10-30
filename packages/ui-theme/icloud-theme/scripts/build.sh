rm -rf es
rm -rf dist 
rm -rf vars


tsc -p .

swc variables -d es/theme --source-maps
# 把.d.ts文件复制到es/theme目录下
tsc --emitDeclarationOnly --declaration --outDir es/theme

mkdir -p dist/theme

node scripts/build.mjs

cp -r patches/* es
cp -r patches/* dist

# 需要把替换好的css变量复制到es里
cp -r vars/*.css es/theme
cp -r vars/* dist/theme


echo "build success"