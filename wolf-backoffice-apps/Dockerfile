FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --prefer-offline

COPY . .

CMD ["node", "server.js"]
