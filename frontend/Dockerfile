# base image 
FROM node:20-alpine

# set environment variables
ENV VITE_PORT=5173
ENV VITE_API_URL=http://20.198.23.60:4000

# set working directory
WORKDIR /app

# copy package.json and package-lock.json
COPY package*.json ./

# install dependencies
RUN npm install

# copy app files
COPY . .

# expose port
EXPOSE 5173

# start app
CMD ["npm", "run", "dev"]



# #base image 
# FROM node:20-alpine

# #set working directory
# WORKDIR /app

# #copy package.json and package-lock.json
# COPY package*.json ./

# #install dependencies
# RUN npm install

# #copy app files
# COPY . .

# #expose port
# EXPOSE 3001

# #start app
# CMD ["npm", "run", "dev"]
