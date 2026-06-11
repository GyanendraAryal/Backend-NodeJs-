# Uses a lightweight, secure pre-built Node 20 environment
FROM node:20-slim

# Set the working directory inside the container
WORKDIR /app

# Copy package files first to leverage Docker layer caching
COPY package.json package-lock.json ./

# Install application dependencies
RUN npm install

# Copy your source code
COPY index.js ./

# Start the application
ENTRYPOINT [ "node", "index.js" ]
