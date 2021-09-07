FROM node:14 AS ts-build

WORKDIR /app
COPY . .

RUN yarn
RUN yarn build


FROM node:14

WORKDIR /app
COPY --from=ts-build /app .

RUN yarn --production

ENV NODE_ENV=production

EXPOSE ${PORT}

CMD [ "yarn", "start" ]