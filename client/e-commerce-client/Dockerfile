FROM node:12-alpine as build-step
WORKDIR /app
COPY package.json /app
RUN npm install
RUN npm run build

CMD ["echo", "Preparing to run npm start on Angular"]

FROM nginx:alpine:1.17.1-alpine
COPY --from=node /app/dist/angular-app /usr/share/nginx/html

