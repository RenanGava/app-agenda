FROM node:alpine


WORKDIR /app

COPY . .

COPY tsconfig.json .
COPY package.json .

EXPOSE 5000

RUN yarn install
RUN yarn prisma generate
RUN yarn prisma migrate dev
RUN yarn build
CMD [ "yarn", "start" ]