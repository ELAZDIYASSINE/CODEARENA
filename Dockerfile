# Base image
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Install dependencies first (cache layer)
COPY package*.json ./
RUN npm ci --omit=dev || npm install --omit=dev

# Copy source
COPY src ./src

# Expose port
EXPOSE 3000

# Default command (production mode)
CMD ["node", "src/index.js"]
