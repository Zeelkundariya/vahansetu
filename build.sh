#!/usr/bin/env bash
# exit on error
set -o errexit

# Install Python dependencies from the subfolder
pip install -r vahansetu/requirements.txt

# Install and Build Frontend if npm is available
if command -v npm &> /dev/null; then
  cd vahansetu/client
  npm install
  npm run build
  cd ../..
fi
