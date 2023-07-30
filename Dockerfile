FROM node:14-alpine as base

WORKDIR /app
COPY package*.json /app/
RUN npm ci --only=production && npm cache clean --force

COPY . /app/
CMD node index.js
