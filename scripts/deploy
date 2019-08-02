#!/bin/sh

ssh khie@167.71.39.216 << EOF
  cd ~/sample-app
  git pull
  npm install
  pm2 restart all
  exit
EOF