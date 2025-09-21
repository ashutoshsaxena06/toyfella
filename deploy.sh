#!/bin/bash
# ToyFella Deployment Script
# Usage: ./deploy.sh <target-directory>

set -e

TARGET_DIR=${1:-/var/www/toyfella}

# Build the project
npm install
npm run build

# Create target directory if it doesn't exist
mkdir -p "$TARGET_DIR"

# Copy build files to target directory
cp -r dist/* "$TARGET_DIR/"

# Print success message
cat <<EOF
Deployment complete!

Static files are now in: $TARGET_DIR

To serve the site, use any static file server (e.g. nginx, Apache, serve).
Example (using 'serve' npm package):
  npx serve $TARGET_DIR
EOF
