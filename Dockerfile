# Use node:14-alpine as base image
FROM node:14-alpine

# Set /api as working directory
WORKDIR /api

# Copy package.json and package-lock.json files to /api
COPY package*.json /api/

# Install dependencies
RUN npm install

# Copy app source code to /api
COPY . /api/ 

# Expose port 4000
EXPOSE 4000

# Run server.js as entrypoint
CMD [ "node", "server.js" ]
