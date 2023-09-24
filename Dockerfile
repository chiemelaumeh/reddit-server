FROM node:14

WORKDIR /api

COPY package*.json  ./

RUN npm install

COPY . . 

EXPOSE 4000

CMD [ "node", "server.js" ]