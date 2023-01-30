FROM node:16-alpine

EXPOSE 19000 19001 19002 19006

RUN yarn global add expo-cli @expo/ngrok@^4.1.0 eslint

# set working directory
WORKDIR /usr/src/app

# add app
COPY . /usr/src/app

# add to `/usr/src/app/node_modules/.bin` $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

#install dependencies
RUN yarn install

# start app
CMD ["yarn", "run", "start"]