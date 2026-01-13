# --- Stage 1: Builder ---
# It's better to pin a specific version instead of just using 18-alpine
FROM node:18.19-alpine AS builder

WORKDIR /app

# 1. Install dependencies
# Only copy package files to utilize Docker Layer Caching
COPY package.json package-lock.json ./
# Use npm ci to ensure installing exact versions from the lockfile
RUN npm ci --legacy-peer-deps

# 2. Build app
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# --- Stage 2: Production ---
FROM nginx:1.25-alpine AS runner

# Install curl (or use wget which is already available) for healthcheck if needed
# (Alpine includes wget by default, curl is more powerful but to optimize image size we keep wget)

# 1. Security: Run Nginx as 'nginx' user (already present in alpine image)
# Change write permissions for nginx cache/log directories
RUN sed -i 's/user  nginx;/user  nginx;/' /etc/nginx/nginx.conf && \
    chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    chown -R nginx:nginx /etc/nginx/conf.d && \
    touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/run/nginx.pid

# 2. Copy config & static files
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/out /usr/share/nginx/html

# Make sure nginx user has read permissions on static files
RUN chown -R nginx:nginx /usr/share/nginx/html

# 3. OCI Image Labels for Zot Registry metadata
LABEL org.opencontainers.image.title="Portfolio Next.js App"
LABEL org.opencontainers.image.description="Personal portfolio website built with Next.js, React, and Tailwind CSS"
LABEL org.opencontainers.image.authors="Nguyen Tan Tai"
LABEL org.opencontainers.image.vendor="Tan Tai Dev"
LABEL org.opencontainers.image.licenses="ISC"
LABEL org.opencontainers.image.version="1.0.0"
LABEL org.opencontainers.image.source="https://github.com/nguyentantai21042004/nguyentantai21042004"

# 4. Switch to non-root user
USER nginx

# 5. Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]