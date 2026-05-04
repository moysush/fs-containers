FROM node:24
WORKDIR /usr/src/app
COPY . .
RUN npm i
CMD [ "npm", "run", "dev", "--", "--host" ]
