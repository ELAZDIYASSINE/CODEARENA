# Use a Node version compatible with Vite 7 requirements
FROM node:22-alpine

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci || npm install

# Copy the rest of the source
COPY . .

# Expose Vite dev/preview port
EXPOSE 5173

# Default command: preview production build
# Build first, then serve. For development you can override the command.
RUN npm run build
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "5173"]
