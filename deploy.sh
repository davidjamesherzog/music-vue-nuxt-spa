#!/usr/bin/env sh

# abort on errors
# set -e

# build
npm run generate

# copy build output directory to /docs
rm -R docs
mkdir docs
cp -R dist/ docs/
mv docs/200.html docs/index.html

# git init
git add -A
git commit -m 'deploy built app with index.html'

# push to github
git push -u origin master
