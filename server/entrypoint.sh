#!/bin/sh
sleep 5

yarn install
yarn prisma generate
yarn prisma migrate deploy
yarn build
yarn start