FROM node:18-alpine

# Create app directory
RUN mkdir /redbicicletas-bicicletas
WORKDIR /redbicicletas-bicicletas

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json /redbicicletas-bicicletas/

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
# Bundle app source
COPY . /redbicicletas-bicicletas

ARG REDBICICLETAS_ARQUILER_PORT
ARG REDBICICLETA_BICICLETAS_PORT
ARG SECRET

ENV REDBICICLETAS_ARQUILER_PORT=$REDBICICLETAS_ARQUILER_PORT
ENV REDBICICLETA_BICICLETAS_PORT=$REDBICICLETA_BICICLETAS_PORT
ENV SECRET=$SECRET

EXPOSE 8050
CMD [ "npm", "start" ]
