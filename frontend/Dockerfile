FROM node:18.16.1
RUN mkdir -p /server && chown -R node:node /server
WORKDIR /server
COPY ./package.json .
USER node
RUN npm install
COPY . .
EXPOSE 3001
CMD npm start