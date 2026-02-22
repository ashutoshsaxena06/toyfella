#!/bin/bash
# Quick Deploy - Build and Start ToyFella in Production
# Usage: ./quick-deploy.sh [port]

set -e

PORT=${1:-3000}

echo "⚡ Quick Deploying ToyFella..."

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the app
echo "🔨 Building..."
npm run build

# Create production server on the fly
cat > server-production.js << 'EOF'
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist')));

app.use((req, res, next) => {
    if (req.path.includes('.')) {
        return next();
    }
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 ToyFella is running on http://localhost:${PORT}`);
});
EOF

# Start production server directly
echo "🚀 Starting production server on port $PORT..."
PORT=$PORT node server-production.js
