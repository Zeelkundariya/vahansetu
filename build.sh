#!/usr/bin/env bash
# exit on error
set -o errexit

# Install Python dependencies from the subfolder
pip install -r requirements.txt

# Install and Build Frontend
cd vahansetu/client
npm install
npm run build
cd ../..
