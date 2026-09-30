#!/usr/bin/env bash
# Pulls the latest site from GitHub and rebuilds it. nginx serves dist/ directly.
# Keeps the local rocobot changes (Dashboard button → dash.rocobot.xyz, canonical URLs).
set -e
cd "$(dirname "$0")"
git stash -q || true
git pull -q
git stash pop -q || true
npm ci --no-audit --no-fund
npm run build
echo "Site rebuilt — live at https://rocobot.xyz"
