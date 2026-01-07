# 🐳 Docker Deployment Guide

This document explains how to build and deploy the portfolio using Docker.

## 📋 Prerequisites

- Docker Engine 20.10+
- Docker Compose 2.0+ (optional)

## 🏗️ Build Instructions

### Option 1: Docker Build

```bash
# Build the image
docker build -t portfolio:latest .

# Run the container
docker run -d \
  --name portfolio \
  -p 3000:80 \
  --restart unless-stopped \
  portfolio:latest
```

### Option 2: Docker Compose (Recommended)

```bash
# Build and start
docker-compose up -d

# View logs
docker-compose logs -f

# Stop
docker-compose down
```

## 🚀 Optimizations

### Multi-Stage Build

The Dockerfile uses a 3-stage build process:

1. **deps**: Install production dependencies only
2. **builder**: Build the Next.js application
3. **runner**: Serve with nginx (final image ~50MB)

### Benefits

- ✅ **Small Image Size**: Final image is only ~50MB (nginx:alpine + static files)
- ✅ **Fast Builds**: Dependency caching with separate deps stage
- ✅ **Security**: No Node.js runtime in production image
- ✅ **Performance**: Nginx serves static files efficiently

### Build Cache

To maximize build cache efficiency:

```bash
# Build with cache
docker build -t portfolio:latest .

# Force rebuild without cache
docker build --no-cache -t portfolio:latest .

# Build specific stage for debugging
docker build --target builder -t portfolio:debug .
```

## 🔧 Configuration

### Nginx Configuration

The `nginx.conf` includes:

- **Gzip compression** for faster loading
- **Security headers** (X-Frame-Options, X-Content-Type-Options, X-XSS-Protection)
- **Static asset caching** (1 year for immutable assets)
- **Next.js routing support** (SPA fallback)

### Environment Variables

Currently no environment variables are required. To add them:

```dockerfile
# In Dockerfile
ENV NEXT_PUBLIC_API_URL=https://api.example.com

# Or in docker-compose.yml
environment:
  - NEXT_PUBLIC_API_URL=https://api.example.com
```

## 📊 Image Size Comparison

| Stage   | Size      | Description                         |
| ------- | --------- | ----------------------------------- |
| deps    | ~200MB    | Node.js + production dependencies   |
| builder | ~500MB    | Node.js + all dependencies + source |
| runner  | **~50MB** | Nginx + static files only           |

## 🔍 Troubleshooting

### Build Fails

```bash
# Check Node version (should be 18)
docker run --rm node:18-alpine node --version

# Check build logs
docker build --progress=plain -t portfolio:latest .
```

### Container Won't Start

```bash
# Check container logs
docker logs portfolio

# Check nginx configuration
docker exec portfolio nginx -t
```

### Port Already in Use

```bash
# Use different port
docker run -d -p 8080:80 portfolio:latest

# Or in docker-compose.yml
ports:
  - "8080:80"
```

## 🌐 Production Deployment

### With Docker Swarm

```bash
docker stack deploy -c docker-compose.yml portfolio
```

### With Kubernetes

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: portfolio
spec:
  replicas: 3
  selector:
    matchLabels:
      app: portfolio
  template:
    metadata:
      labels:
        app: portfolio
    spec:
      containers:
        - name: portfolio
          image: portfolio:latest
          ports:
            - containerPort: 80
          resources:
            limits:
              memory: "128Mi"
              cpu: "100m"
---
apiVersion: v1
kind: Service
metadata:
  name: portfolio
spec:
  selector:
    app: portfolio
  ports:
    - port: 80
      targetPort: 80
  type: LoadBalancer
```

## 📈 Performance Tips

1. **Enable HTTP/2** in nginx for better performance
2. **Use CDN** for static assets
3. **Enable Brotli compression** alongside gzip
4. **Add cache headers** for optimal browser caching

## 🔒 Security Best Practices

- ✅ Run as non-root user (nginx:alpine already does this)
- ✅ No unnecessary packages in final image
- ✅ Security headers configured
- ✅ Health checks enabled
- ✅ Minimal attack surface (no Node.js in production)

## 📝 Notes

- The application is built as a **static export** (`output: 'export'` in next.config.mjs)
- All routes are pre-rendered at build time
- No server-side rendering or API routes
- Perfect for CDN deployment or static hosting
