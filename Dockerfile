# Use an official Node.js image
FROM node:trixie-slim

# Create app directory
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

# Expose the application port
EXPOSE 5500

# Start the application
CMD ["node", "server.js"]