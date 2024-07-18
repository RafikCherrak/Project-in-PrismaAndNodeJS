FROM node:21

WORKDIR /user/src

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 2500

RUN ls -al /user/src

RUN npx ts-node --version

CMD ["npx", "ts-node", "src/index.ts"]

