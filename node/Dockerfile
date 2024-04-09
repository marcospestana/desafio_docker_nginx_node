FROM node:15.14.0-alpine3.13

WORKDIR /usr/src/app

# Copiar o arquivo package.json e package-lock.json separadamente
COPY ./app/package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante dos arquivos da aplicação
COPY ./app .

EXPOSE 3000

CMD ["node", "index.js"]