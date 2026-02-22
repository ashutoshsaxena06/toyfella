#!/bin/bash
# Script to start Vite dev server on a dedicated port

PORT=${1:-5173}

export PORT
npm run dev -- --port $PORT
