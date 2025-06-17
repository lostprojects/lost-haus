# Build stage
FROM node:20-alpine as build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the application with verbose output
RUN echo "Starting build..." && \
    npm run build && \
    echo "Build complete. Contents of /app/dist:" && \
    ls -la /app/dist

# Production stage
FROM nginx:alpine

# Create directory if it doesn't exist
RUN mkdir -p /usr/share/nginx/html

# Copy built assets from build stage
COPY --from=build /app/dist /usr/share/nginx/html/

# Verify the copy
RUN echo "Contents of /usr/share/nginx/html:" && \
    ls -la /usr/share/nginx/html/

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
