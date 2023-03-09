#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git pull

# 生成文档
yarn run build

rm -rf  /opt/docker/nginx/html/dist/*
echo 删除当前版本文件
mv -f ./docs/.vuepress/dist  /opt/docker/nginx/html
echo 移动新版本文件至目标路径
rm -rf ./docs/.vuepress/dist
echo 删除打包文件
echo 操作成功
