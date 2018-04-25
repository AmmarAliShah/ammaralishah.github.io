#!/bin/bash
chmod +x Publish.sh

c=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)
d=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)

cd Ammar-Says
git add --all
git commit -m "$c"
git push -u origin master
jekyll build --destination ../ammaralishah.github.io
cd ..
cd ammaralishah.github.io
git add --all
git commit -m "$d"
git push -u origin master
