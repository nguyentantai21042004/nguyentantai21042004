#!/bin/bash

# Portfolio Next.js App - Build and Push Script
# Usage: ./build.sh [build-push|login|help]

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Configuration
REGISTRY="${REGISTRY:-registry.tantai.dev}"
PROJECT="pet-projects"
SERVICE="portfolio"
DOCKERFILE="Dockerfile"
PLATFORM="linux/amd64"

# Helper functions
info() { echo -e "${BLUE}[INFO]${NC} $1"; }
success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
warning() { echo -e "${YELLOW}[WARNING]${NC} $1"; }
error() { echo -e "${RED}[ERROR]${NC} $1"; }

# Generate image tag with timestamp
generate_tag() {
    date +"%y%m%d-%H%M%S"
}

# Get full image name
get_image_name() {
    local tag="${1:-$(generate_tag)}"
    echo "${REGISTRY}/${PROJECT}/${SERVICE}:${tag}"
}

# Login to registry
login() {
    info "Logging into Zot registry: $REGISTRY"
    
    # Use env vars if available
    if [ -n "$ZOT_USERNAME" ] && [ -n "$ZOT_PASSWORD" ]; then
        echo "$ZOT_PASSWORD" | docker login "$REGISTRY" -u "$ZOT_USERNAME" --password-stdin
    elif [ -n "$REGISTRY_USERNAME" ] && [ -n "$REGISTRY_PASSWORD" ]; then
        echo "$REGISTRY_PASSWORD" | docker login "$REGISTRY" -u "$REGISTRY_USERNAME" --password-stdin
    else
        # Prompt for credentials
        read -p "Username: " username
        read -sp "Password: " password
        echo ""
        echo "$password" | docker login "$REGISTRY" -u "$username" --password-stdin
    fi
    
    if [ $? -eq 0 ]; then
        success "Logged in successfully"
    else
        error "Login failed"
        exit 1
    fi
}

# Check prerequisites
check_prerequisites() {
    # Check Docker
    if ! command -v docker &> /dev/null; then
        error "Docker is not installed"
        exit 1
    fi
    
    # Check buildx
    if ! docker buildx version &> /dev/null; then
        error "Docker buildx is not available"
        exit 1
    fi
    
    # Check Dockerfile
    if [ ! -f "$DOCKERFILE" ]; then
        error "Dockerfile not found: $DOCKERFILE"
        exit 1
    fi
}

# Build and push image
build_and_push() {
    check_prerequisites
    
    # Check if logged in
    if ! docker info 2>/dev/null | grep -q "Username:"; then
        warning "Not logged in, attempting to login..."
        login
    fi
    
    local tag=$(generate_tag)
    local image_name=$(get_image_name "$tag")
    local latest_image=$(get_image_name latest)
    
    info "Registry: $REGISTRY"
    info "Building image: $image_name"
    info "Platform: $PLATFORM"
    info "Dockerfile: $DOCKERFILE"
    
    # BƯỚC 1: Build và Load vào Docker Local
    # Thay vì --push, ta dùng --load để đưa image vào 'docker images'
    # Cách này tránh lỗi OCI Index manifest với Zot registry
    info "Starting build process (Loading to local docker daemon)..."
    
    docker buildx build \
        --platform "$PLATFORM" \
        --provenance=false \
        --sbom=false \
        --tag "$image_name" \
        --tag "$latest_image" \
        --file "$DOCKERFILE" \
        --load \
        .
    
    if [ $? -eq 0 ]; then
        success "Build and load successful!"
    else
        error "Build failed"
        exit 1
    fi

    # BƯỚC 2: Push bằng docker client truyền thống
    # Cách này đảm bảo tính tương thích manifest tốt nhất với Zot
    # Docker client sẽ tạo Manifest V2 (Schema 2) chuẩn mực thay vì OCI Index
    info "Pushing images to registry..."
    
    info "Pushing specific tag: $image_name"
    if ! docker push "$image_name"; then
        error "Failed to push image: $image_name"
        exit 1
    fi
    
    info "Pushing latest tag: $latest_image"
    if ! docker push "$latest_image"; then
        error "Failed to push latest tag: $latest_image"
        exit 1
    fi

    success "Images pushed successfully to Zot registry!"
    info "Image: $image_name"
    info "Latest: $latest_image"
}

# Show help
show_help() {
    cat << EOF
${GREEN}Portfolio Next.js App - Build and Push Script${NC}

Usage: $0 [command]

Commands:
    build-push    Build and push Docker image (default)
    login          Login to Zot registry
    help           Show this help

Examples:
    $0                    # Build and push
    $0 build-push         # Build and push
    $0 login              # Login to registry

Configuration:
    Registry:   $REGISTRY
    Project:    $PROJECT
    Service:    $SERVICE
    Platform:   $PLATFORM
    Dockerfile: $DOCKERFILE

Image Format:
    ${REGISTRY}/${PROJECT}/${SERVICE}:TIMESTAMP
    ${REGISTRY}/${PROJECT}/${SERVICE}:latest

Environment Variables:
    REGISTRY          Zot registry URL (default: registry.tantai.dev)
    ZOT_USERNAME      Registry username (optional)
    ZOT_PASSWORD      Registry password (optional)
    REGISTRY_USERNAME Alternative registry username (optional)
    REGISTRY_PASSWORD Alternative registry password (optional)
    PLATFORM          Build platform (default: linux/amd64)

Note:
    This builds the Next.js portfolio application.
    The app is served via nginx on port 80.

EOF
}

# Main
case "${1:-build-push}" in
    build-push)
        build_and_push
        ;;
    login)
        login
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        error "Unknown command: $1"
        echo ""
        show_help
        exit 1
        ;;
esac