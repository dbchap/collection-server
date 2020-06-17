FROM node:10-alpine
ADD . .
COPY package*.json ./
RUN npm install
EXPOSE 4000
EXPOSE 27017
CMD ["npm", "run", "dev"]
