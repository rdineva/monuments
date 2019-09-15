FROM tetrascience/ts-node:latest

RUN mkdir /app
WORKDIR /app

COPY package-lock.json package-lock.json 
COPY package.json package.json
COPY tsconfig.json tsconfig.json
COPY ormconfig.json ormconfig.json
RUN npm install

COPY . .

EXPOSE 3000:3000
CMD npm start