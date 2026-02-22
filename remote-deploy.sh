#!/bin/bash
# Remote Deployment Script for ToyFella
# Usage: ./remote-deploy.sh [user@server] [remote-path] [port]

set -e

REMOTE_USER_SERVER=${1:-user@your-server.com}
REMOTE_PATH=${2:-/var/www/toyfella}
PORT=${3:-3000}

echo "🚀 Deploying ToyFella to remote server..."

# Build locally
echo "🔨 Building application..."
npm run build

# Create temporary deployment package
echo "📦 Creating deployment package..."
TEMP_DIR="/tmp/toyfella-deploy-$(date +%s)"
mkdir -p "$TEMP_DIR"

# Copy build files and production server
cp -r dist/* "$TEMP_DIR/"
cat > "$TEMP_DIR/server.js" << 'EOF'
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.use((req, res, next) => {
    if (req.path.includes('.')) {
        return next();
    }
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 ToyFella running on http://localhost:${PORT}`);
});
EOF

# Create package.json for remote
cat > "$TEMP_DIR/package.json" << EOF
{
  "name": "toyfella-production",
  "version": "1.0.0",
  "type": "module",
  "dependencies": {
    "express": "^5.1.0"
  },
  "scripts": {
    "start": "node server.js"
  }
}
EOF

# Upload to remote server
echo "📤 Uploading to remote server..."
scp -r "$TEMP_DIR"/* "$REMOTE_USER_SERVER:$REMOTE_PATH/"

# Install dependencies and start on remote
echo "⚙️ Setting up remote server..."
ssh "$REMOTE_USER_SERVER" << EOF
    cd "$REMOTE_PATH"
    npm install
    # Start server in background
    nohup npm start > app.log 2>&1 &
    echo "🚀 Server started in background"
    echo "📋 Check logs with: tail -f $REMOTE_PATH/app.log"
    echo "🛑 Stop server with: pkill -f 'node server.js'"
EOF

# Clean up
rm -rf "$TEMP_DIR"

echo ""
echo "✅ Deployment complete!"
echo "🌐 Your app is running at: http://$(echo $REMOTE_USER_SERVER | cut -d'@' -f2):$PORT"
echo "📋 Remote commands:"
echo "   View logs: ssh $REMOTE_USER_SERVER 'tail -f $REMOTE_PATH/app.log'"
echo "   Stop server: ssh $REMOTE_USER_SERVER 'pkill -f node server.js'"
echo "   Restart: ssh $REMOTE_USER_SERVER 'cd $REMOTE_PATH && npm start'"
