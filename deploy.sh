#!/usr/bin/env bash
# ============================================================
# Agent Nav — Frontend Deploy Script
# Usage: bash deploy.sh [production|preview]
# ============================================================
set -euo pipefail

MODE="${1:-preview}"

echo "🚀 Agent Nav Frontend Deploy ($MODE)"
echo ""

# 1. Install dependencies
echo "📦 Installing dependencies..."
npm install --registry=https://registry.npmmirror.com

# 2. Build
echo "🔨 Building..."
npm run build

# 3. Deploy to Vercel
if [ "$MODE" = "production" ]; then
  echo "🌐 Deploying to Vercel (production)..."
  npx vercel --prod --yes
else
  echo "🌐 Deploying to Vercel (preview)..."
  npx vercel --yes
fi

echo ""
echo "✅ Done!"
