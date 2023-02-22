FROM node:latest
# RUN mkdir -p /usr/src
# WORKDIR /usr/src
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]