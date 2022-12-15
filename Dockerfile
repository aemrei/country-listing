FROM node:current-alpine

ENV NODE_ENV=production

ENV PORT=3000

WORKDIR /usr/src/app

COPY package.json  yarn.lock ./

RUN yarn install

EXPOSE ${PORT}

CMD ["yarn", "dev"]
