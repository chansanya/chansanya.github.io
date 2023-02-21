#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成文档
yarn run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo 'blog.lovefile.com' > CNAME

if [ -z "$GIT_PAGES_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:chansanya/chansanya.github.io.git
else
  msg='来自github action的自动部署'
  githubUrl=https://chansanya:${GIT_PAGES_TOKEN}@github.com/chansanya/chansanya.github.io.git
  git config --global user.name "yan"
  git config --global user.email "984038622@qq.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master 

cd -

rm -rf docs/.vuepress/dist