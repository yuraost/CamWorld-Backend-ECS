FROM node:14-alpine3.12

ENV NODE_ENV="production"
ENV PORT=4532
ENV POSTGRES_HOST="camworld.cwpcr2snhusy.us-east-1.rds.amazonaws.com"
ENV POSTGRES_USER="postgres"
ENV POSTGRES_DB="postgres"
ENV POSTGRESS_PASSWORD="123456qQ"
ENV POSTGRESS_PORT=5432
ENV PRIVATE_KEY=superhardKey132!@#

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "start"]
