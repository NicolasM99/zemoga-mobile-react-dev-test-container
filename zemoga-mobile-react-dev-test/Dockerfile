FROM node:14-alpine

ARG PORT=19000
ENV PORT $PORT
EXPOSE $PORT 19001 19002

RUN apk --no-cache update \
    && apk --no-cache add g++ make bash zlib-dev libpng-dev \
    && rm -fr /var/cache/apk/*

RUN yarn global add expo-cli

# set working directory
WORKDIR /usr/src/app

# add app
COPY . /usr/src/app

# add to `/usr/src/app/node_modules/.bin` $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

#install dependencies
RUN yarn install

# fancy prompt
RUN echo 'export PS1="\[\e]0;\u@\h: \w\a\]${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ "' >> /root/.bashrc

# start app
CMD ["yarn", "run", "start"]