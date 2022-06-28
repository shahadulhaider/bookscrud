FROM node:fermium-alpine as dev

WORKDIR /usr/src/app/api

COPY package*.json ./

RUN npm install

RUN npm install -g rimraf

COPY . .

RUN npm run build

FROM node:fermium-alpine as prod

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app/api

COPY package*.json ./

RUN npm install --production

COPY . .

COPY --from=dev /usr/src/app/api/dist ./dist

CMD ["node", "dist/main"]
