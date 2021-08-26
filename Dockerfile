FROM node:16.7-alpine3.14
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install
COPY . .
EXPOSE 8080
CMD [ "npm", "start" ]