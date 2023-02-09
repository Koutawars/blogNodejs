FROM node:14.19.0-alpine3.14

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build
RUN npm run generate

CMD ["npm", "start"]