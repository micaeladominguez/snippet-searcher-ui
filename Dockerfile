# Use the official Node.js LTS (Long Term Support) image as the base
FROM node:lts-alpine as builder

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the project dependencies
RUN npm ci

# Copy the application source code to the container
COPY . .

# Build the Next.js application
RUN npm run build

EXPOSE 3000
