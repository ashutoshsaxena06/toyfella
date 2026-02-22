#!/bin/bash
# Docker Deployment Script
# Usage: ./docker-deploy.sh [port] [image-name]

set -e

PORT=${1:-3000}
IMAGE_NAME=${2:-toyfella}

echo "🐳 Building and deploying ToyFella with Docker..."

# Build Docker image
echo "🔨 Building Docker image..."
docker build -t "$IMAGE_NAME" .

# Stop existing container if running
echo "🛑 Stopping existing container..."
docker stop toyfella-container 2>/dev/null || true
docker rm toyfella-container 2>/dev/null || true

# Run new container
echo "🚀 Starting new container..."
docker run -d \
  --name toyfella-container \
  -p "$PORT:3000" \
  --restart unless-stopped \
  "$IMAGE_NAME"

echo ""
echo "✅ Docker deployment complete!"
echo "🌐 Application running at: http://localhost:$PORT"
echo ""
echo "📋 Docker commands:"
echo "   View logs: docker logs toyfella-container"
echo "   Stop: docker stop toyfella-container"
echo "   Restart: docker restart toyfella-container"
echo "   Remove: docker rm toyfella-container"
