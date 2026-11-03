#!/usr/bin/env bash
# Build the site and upload it to Bluehost over SSH.
#
#   npm run deploy            -> dry run: shows what would be uploaded
#   npm run deploy -- --live  -> actually uploads
#
# Needs SSH enabled in Bluehost (cPanel → Security → SSH Access) and these
# values in a local .env.deploy file (git-ignored):
#   DEPLOY_USER=your-cpanel-username
#   DEPLOY_HOST=your-domain.com        (or the server hostname Bluehost gives you)
#   DEPLOY_PATH=public_html            (folder the domain points to)
set -euo pipefail
cd "$(dirname "$0")/.."

[ -f .env.deploy ] || { echo "Missing .env.deploy (see scripts/deploy.sh for the format)"; exit 1; }
source .env.deploy
: "${DEPLOY_USER:?}" "${DEPLOY_HOST:?}" "${DEPLOY_PATH:=public_html}"

npm run build

FLAGS=(-avz --human-readable)
if [ "${1:-}" != "--live" ]; then
  FLAGS+=(--dry-run)
  echo "── DRY RUN ── nothing will be uploaded. Re-run with: npm run deploy -- --live"
fi

# No --delete: other things may live in public_html (SSL challenges, cgi-bin, other sites).
rsync "${FLAGS[@]}" dist/ "${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}/"
