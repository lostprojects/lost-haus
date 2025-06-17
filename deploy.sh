#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Configuration
SERVER_USER="administrator"
SERVER_HOST="v2202506279131350474"
PROJECT_PATH="/opt/somerhaus/lost-haus"

echo -e "${BLUE}🚀 Starting deployment process...${NC}"

# Step 1: Add, commit and push to GitHub
echo -e "${BLUE}📝 Step 1: Pushing changes to GitHub...${NC}"

# Check if there are any changes to commit
if [[ -n $(git status --porcelain) ]]; then
    echo "Changes detected, adding and committing..."
    git add -A
    
    # Get commit message from user or use default
    if [ "$1" ]; then
        COMMIT_MSG="$1"
    else
        echo "Enter commit message (or press Enter for default):"
        read -r COMMIT_MSG
        if [ -z "$COMMIT_MSG" ]; then
            COMMIT_MSG="Deploy: $(date '+%Y-%m-%d %H:%M:%S')"
        fi
    fi
    
    git commit -m "$COMMIT_MSG"
    git push origin main
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Successfully pushed to GitHub${NC}"
    else
        echo -e "${RED}❌ Failed to push to GitHub${NC}"
        exit 1
    fi
else
    echo "No local changes detected, pushing any unpushed commits..."
    git push origin main
    echo -e "${GREEN}✅ Repository up to date${NC}"
fi

# Step 2: SSH into server and deploy
echo -e "${BLUE}🔄 Step 2: Deploying to server...${NC}"

ssh ${SERVER_USER}@${SERVER_HOST} << 'EOF'
    set -e
    
    echo "📂 Navigating to project directory..."
    cd /opt/somerhaus/lost-haus
    
    echo "📥 Pulling latest changes from GitHub..."
    git pull origin main
    
    echo "📦 Installing/updating dependencies..."
    npm install
    
    echo "🔨 Building project..."
    npm run build
    
    echo "🔄 Checking if application is running..."
    if pgrep -f "npm.*preview" > /dev/null; then
        echo "Stopping existing application..."
        pkill -f "npm.*preview"
        sleep 2
    fi
    
    echo "🚀 Starting application..."
    nohup npm run preview > /dev/null 2>&1 &
    
    sleep 3
    
    if pgrep -f "npm.*preview" > /dev/null; then
        echo "✅ Application started successfully!"
        echo "🌐 Your site should be available at your server IP on port 4173"
    else
        echo "❌ Failed to start application"
        exit 1
    fi
EOF

if [ $? -eq 0 ]; then
    echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"
    echo -e "${BLUE}Your Lost Haus website is now live with the latest changes!${NC}"
else
    echo -e "${RED}❌ Deployment failed${NC}"
    exit 1
fi 