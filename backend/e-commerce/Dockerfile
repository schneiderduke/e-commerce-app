FROM node:latest as node
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 3000
CMD ["echo", "Preparing to run npm start on Express"]
CMD ["node", "dist/main"]
