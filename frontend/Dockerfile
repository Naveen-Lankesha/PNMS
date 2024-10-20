# base image 
FROM node:20-alpine

# set environment variables
#ENV VITE_PORT=3001
#ENV VITE_HOST_API_KEY=http://20.198.23.60:5001
#ENV VITE_NODE_ENV=production

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
