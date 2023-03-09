#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git pull

# 生成文档
yarn run build

mv -f ./docs/.vuepress/dist  /opt/docker/nginx/html
rm -rf ./docs/.vuepress/dist