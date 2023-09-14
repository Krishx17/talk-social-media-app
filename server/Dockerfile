FROM node:alpine
WORKDIR /app
COPY package.json .
RUN yarn
COPY . .
CMD [ "node", "index.js"]
