# client build- angular app 
FROM node:18-alpine AS client

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --prod

# server build- node server 
FROM node:18-alpine

WORKDIR /app

COPY --from=client /app/dist/angular-app/browser ./dist/angular-app/browser

COPY server.js .

COPY package*.json ./

RUN npm install

EXPOSE 8080

CMD ["npm", "run", "start"]
