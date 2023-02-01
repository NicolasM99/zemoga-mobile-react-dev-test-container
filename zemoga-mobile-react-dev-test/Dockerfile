FROM node:14-alpine

EXPOSE 19000 19001 19002 19006

RUN yarn global add expo-cli @expo/ngrok@^4.1.0 eslint

# set working directory
WORKDIR /app

# add app
COPY . /app

#install dependencies
RUN yarn install

# start app
CMD ["yarn", "run", "web"]