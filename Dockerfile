FROM node:18.6.0-alpine AS build

# For handling Kernel signals properly
RUN apk add --no-cache git

# Set the default working directory for the app
WORKDIR /usr/src/app

# Copy package.json, package-lock.json
COPY package*.json ./

# Install dependencies.
RUN npm ci

# Necessary to run before adding application code to leverage Docker cache
RUN npm cache clean --force

# Add src project
ADD . .

# Build project
RUN npm run build

# expose port 80
EXPOSE 3000

# Run nginx
CMD ["node", ".output/server/index.mjs"]
