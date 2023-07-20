FROM node:alpine

ENV PORT 3030

WORKDIR /usr/src/app/api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3030

RUN npm install -g @nestjs/cli
RUN npm run build

ENTRYPOINT ["npm", "run", "start:dev"]
