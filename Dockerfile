FROM node:22

RUN npm install -g serve

WORKDIR /app

COPY ./dist .

EXPOSE 80

CMD ["serve", "-s", "-l", "80"]