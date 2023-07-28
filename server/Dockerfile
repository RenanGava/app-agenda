FROM node:alpine


WORKDIR /app

COPY . .

COPY tsconfig.json .
COPY package.json .

EXPOSE 8080

# ENV DATABASE_URL: "postgressql://postgres:admin@server-postgressql:5432/appagenda?schema=public"

# RUN yarn install
# RUN yarn prisma generate
# RUN yarn prisma migrate dev
# RUN yarn build
ENTRYPOINT [ "entrypoint.sh" ]
# CMD [ "yarn", "start" ]