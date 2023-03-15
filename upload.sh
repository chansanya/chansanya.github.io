#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成文档
yarn run build

echo 上传新版本文件至目标路径
scp -P 22 -r  ./docs/.vuepress/dist/ root@1.116.69.228:/opt/docker/nginx/html


scp -P 22 -r  ./docs/.vuepress/dist/ root@43.154.116.232:/usr/tools/blog

rm -rf ./docs/.vuepress/dist
echo 删除打包文件
echo 操作成功
