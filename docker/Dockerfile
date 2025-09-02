# Use Node 20
FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the default port for Next.js
EXPOSE 3000

# Start the Next.js server
CMD ["npm", "start"]
