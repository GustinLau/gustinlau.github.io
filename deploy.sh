#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
{
  npm run build
} || {
  npm run build:legacy
}


# 进入生成的文件夹
cd dist

# deploy to github pages
# echo 'xxx.com' > CNAME

if [ -n "$GITHUB_TOKEN" ]; then
  msg='来自github actions的自动部署'
  githubUrl=https://GustinLau:${GITHUB_TOKEN}@github.com/GustinLau/gustinlau.github.io.git
fi

if [ -n "$GITEE_TOKEN" ]; then
  msg='来自github actions的自动部署'
  giteeUrl=https://gustinlau:${GITEE_TOKEN}@gitee.com/GustinLau/gustinlau.git
fi

git init
git add -A
git config --global user.name "GustinLau"
git config --global user.email "gustinlau@gmail.com"
git config --global http.postBuffer 524288000
git commit -m "${msg}"

if [ -n "$GITHUB_TOKEN" ]; then
  # 推送到github pages分支
  git push -f $githubUrl master:pages
fi

if [ -n "$GITEE_TOKEN" ]; then
   # 推送到github pages分支
   git push -f $giteeUrl master:pages
fi

cd -
rm -rf dist
