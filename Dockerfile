FROM node:22

RUN npm install -g serve

WORKDIR /tmp

COPY . ./
RUN npm install && npm run build

WORKDIR /app

RUN cp -r /tmp/dist/* ./
RUN rm -rf /tmp/*

EXPOSE 80

CMD ["serve", "-s", "-l", "80"]