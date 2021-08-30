FROM node:14

LABEL version="1.0"
LABEL description="This is the base docker image for the creatiflow backend API."
LABEL maintainer = ["abiglari@edgeho.me", "biglariamirhossein@gmail.com"]

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]
RUN ls
RUN npm install --production
RUN npm install -g nodemon
COPY . .

EXPOSE 5000

CMD ["nodemon", "index.js"]