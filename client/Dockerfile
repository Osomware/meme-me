FROM node:alpine

ENV PORT 3000

WORKDIR /usr/src/app/client

COPY package.json /usr/src/app/client
COPY package-lock.json /usr/src/app/client

RUN npm install

COPY . /usr/src/app/client

EXPOSE 3000

ENTRYPOINT ["npm", "run", "dev"]
