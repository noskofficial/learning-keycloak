FROM node:18
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . .
EXPOSE 5000
CMD ["npm", "run", "start"]