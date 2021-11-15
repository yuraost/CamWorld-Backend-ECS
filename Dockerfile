FROM node:14-alpine3.12

COPY env_vars.sh /usr/src/app/env_vars.sh
RUN chmod +x /usr/src/app/env_vars.sh
ENTRYPOINT ["env_vars.sh"]

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "start"]