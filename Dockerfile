FROM node:19-alpine3.16
WORKDIR /ReactApp
COPY package.json .
RUN npm install
COPY . .
EXPOSE 9000
CMD ["npm", "run", "start"]