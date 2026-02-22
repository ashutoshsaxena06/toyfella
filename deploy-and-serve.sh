#!/bin/bash
# ToyFella Easy Deployment and Serve Script
# Usage: ./deploy-and-serve.sh [port] [environment]

set -e

# Configuration
PORT=${1:-3000}
ENVIRONMENT=${2:-production}
BUILD_DIR="./dist"
PUBLIC_DIR="./public"

echo "🚀 Starting ToyFella deployment..."

# Check if node_modules exists, if not install dependencies
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf "$BUILD_DIR"

# Build the application
echo "🔨 Building the application..."
npm run build

# Update server.js to serve from dist directory for production
echo "⚙️ Configuring production server..."
cat > server-production.js << 'EOF'
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'dist' directory (production build)
app.use(express.static(path.join(__dirname, 'dist')));

// Route for the home page - serve the built index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Handle React Router - serve index.html for all non-static routes
app.use((req, res, next) => {
    // Skip if it's a file request (has extension)
    if (req.path.includes('.')) {
        return next();
    }
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 ToyFella is running in production mode on http://localhost:${PORT}`);
    console.log(`📁 Serving static files from: ${path.join(__dirname, 'dist')}`);
});
EOF

# Make the script executable
chmod +x deploy-and-serve.sh

# Success message
echo ""
echo "✅ Deployment completed successfully!"
echo ""
echo "🎯 Your application has been built and is ready to serve!"
echo ""
echo "📋 Available commands:"
echo "   Start production server: node server-production.js"
echo "   Start on custom port:   PORT=8080 node server-production.js"
echo "   Quick serve (npx):      npx serve dist -l $PORT"
echo ""
echo "🌐 To start the server now, run:"
echo "   node server-production.js"
echo ""
echo "📝 The server will serve your built React app from the 'dist' directory"
echo "   and handle all client-side routing automatically."
