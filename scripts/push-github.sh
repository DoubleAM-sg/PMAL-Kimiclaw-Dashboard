#!/bin/bash
# Push daily updates to GitHub
# Requires GITHUB_TOKEN environment variable

DASHBOARD_DIR="/root/.openclaw/workspace/pmal-dashboard"
DATE=$(date +%Y-%m-%d)
GITHUB_USER="DoubleAM-sg"
GITHUB_REPO="PMAL-Kimiclaw-Dashboard"

# Check for token
if [ -z "$GITHUB_TOKEN" ]; then
  echo "Error: GITHUB_TOKEN not set"
  exit 1
fi

cd "$DASHBOARD_DIR"

# Configure git
git config user.name "Kimi Claw"
git config user.email "kimi@pickmealoan.sg"

# Add all changes
git add .

# Commit with date
git commit -m "Daily intel update: $DATE" || echo "No changes to commit"

# Push to GitHub
git push origin main

echo "Dashboard pushed to: https://github.com/${GITHUB_USER}/${GITHUB_REPO}"
