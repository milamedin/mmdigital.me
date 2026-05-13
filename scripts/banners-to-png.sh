#!/usr/bin/env bash
# Konvertuje banner-*.svg → PNG (Google Ads) i social-*.svg → JPG (Instagram/Facebook).
# Koristi headless Chrome na macOS. Pokreni: bash scripts/banners-to-png.sh

set -e
cd "$(dirname "$0")/.."

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
ADS_DIR="src/public/images/ads"

if [ ! -x "$CHROME" ]; then
  echo "Google Chrome nije pronađen na $CHROME"
  exit 1
fi

# Google Ads baneri → PNG
for svg in "$ADS_DIR"/banner-*.svg; do
  [ -e "$svg" ] || continue
  filename=$(basename "$svg" .svg)
  size="${filename#banner-}"
  w="${size%x*}"
  h="${size#*x}"
  png="$ADS_DIR/${filename}.png"

  "$CHROME" --headless --disable-gpu --hide-scrollbars \
    --default-background-color=00000000 \
    --window-size="${w},${h}" \
    --screenshot="$(pwd)/$png" \
    "file://$(pwd)/$svg" 2>/dev/null

  echo "✓ $png (${w}×${h})"
done

# Social baneri (story / feed) → JPG (Instagram/Facebook)
for svg in "$ADS_DIR"/social-*.svg; do
  [ -e "$svg" ] || continue
  filename=$(basename "$svg" .svg)
  size="${filename##*-}"
  w="${size%x*}"
  h="${size#*x}"
  tmp_png="$ADS_DIR/${filename}.png"
  jpg="$ADS_DIR/${filename}.jpg"

  "$CHROME" --headless --disable-gpu --hide-scrollbars \
    --window-size="${w},${h}" \
    --screenshot="$(pwd)/$tmp_png" \
    "file://$(pwd)/$svg" 2>/dev/null

  sips -s format jpeg -s formatOptions 92 "$tmp_png" --out "$jpg" >/dev/null
  rm "$tmp_png"

  echo "✓ $jpg (${w}×${h})"
done
