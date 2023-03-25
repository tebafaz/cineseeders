FROM node:latest

WORKDIR /usr/src/app

COPY package-lock.json package.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]