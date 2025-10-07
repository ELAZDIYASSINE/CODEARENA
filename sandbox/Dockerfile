# Minimal Node.js sandbox base image
# - Non-root user (built-in node user)
# - No network by default (apply with `docker run --network none`)
# - Resource limits are applied at runtime via docker run flags

FROM node:20-alpine

# Work directory for sandboxed code
WORKDIR /sandbox

# Drop privileges to the built-in non-root user
USER node

# Production env by default
ENV NODE_ENV=production

# Default command: print Node version
CMD ["node", "--version"]
