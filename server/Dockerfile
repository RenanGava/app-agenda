FROM node:alpine


WORKDIR /app

COPY . .

COPY tsconfig.json .
COPY package.json .

EXPOSE 8080
ENV DATABASE_URL="postgres://postgres:admin@postgres:8081/appagenda?schema=public"

RUN yarn install
RUN yarn prisma generate
RUN yarn prisma migrate dev
RUN yarn build

CMD [ "yarn", "start" ]