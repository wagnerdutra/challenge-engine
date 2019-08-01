FROM node:10-slim

WORKDIR /usr/src/app

COPY package.json ./

RUN yarn

COPY . .

EXPOSE 9444

CMD ["yarn","prod"]
