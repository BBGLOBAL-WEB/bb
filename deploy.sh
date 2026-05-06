#!/bin/bash

# BB Global Website - VPS Deployment Script
# Usage: curl -fsSL https://raw.githubusercontent.com/YOUR_USERNAME/bb-global-website/main/deploy.sh | bash

set -e

echo "🚀 BB Global Website - VPS Deployment"
echo "======================================"

# Check if running as root
if [ "$EUID" -ne 0 ]; then 
  echo "❌ Please run as root (use sudo)"
  exit 1
fi

# Update system
echo "📦 Updating system packages..."
apt update && apt upgrade -y

# Install Docker
echo "🐳 Installing Docker..."
if ! command -v docker &> /dev/null; then
  curl -fsSL https://get.docker.com -o get-docker.sh
  sh get-docker.sh
  rm get-docker.sh
else
  echo "✅ Docker already installed"
fi

# Install Docker Compose
echo "📦 Installing Docker Compose..."
if ! command -v docker-compose &> /dev/null; then
  curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
  chmod +x /usr/local/bin/docker-compose
else
  echo "✅ Docker Compose already installed"
fi

# Create app directory
APP_DIR="/var/www/bb-global-website"
echo "📁 Setting up application directory: $APP_DIR"
mkdir -p $APP_DIR
cd $APP_DIR

# Clone or pull repository
if [ -d ".git" ]; then
  echo "📥 Pulling latest changes..."
  git pull origin main
else
  echo "📥 Cloning repository..."
  git clone https://github.com/YOUR_USERNAME/bb-global-website.git .
fi

# Build and start Docker containers
echo "🔨 Building Docker image..."
docker-compose build

echo "🚀 Starting application..."
docker-compose up -d

# Wait for app to start
echo "⏳ Waiting for application to start..."
sleep 10

# Check if app is running
if docker-compose ps | grep -q "Up"; then
  echo "✅ Application is running!"
  echo ""
  echo "📍 Access your site at: http://188.132.197.20:3000"
  echo ""
  echo "📋 Useful commands:"
  echo "   View logs: docker-compose logs -f"
  echo "   Stop app: docker-compose down"
  echo "   Restart app: docker-compose restart"
else
  echo "❌ Application failed to start"
  docker-compose logs
  exit 1
fi

echo ""
echo "✨ Deployment complete!"
