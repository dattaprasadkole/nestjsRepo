FROM node:10-alpine
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build
#RUN ls -lht ./
EXPOSE 4000
CMD ["npm", "run", "start:prod"]
