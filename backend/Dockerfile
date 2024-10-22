# base image 
FROM node:20-alpine

# set environment variables
ENV JWT_SECRET="random#secret"

# set working directory
WORKDIR /app

# copy package.json and package-lock.json
COPY package*.json ./

# install dependencies
RUN npm install

# copy app files
COPY . .

# Build the NestJS application
RUN npm run build

# expose port
EXPOSE 4000

# Define the default command to run your app in production mode
CMD ["npm", "start"]


