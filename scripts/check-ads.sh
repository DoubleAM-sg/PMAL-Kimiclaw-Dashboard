#!/bin/bash
# Daily Facebook Ad Library Screenshot + Analysis Script
# For PickMeALoan Competitor Intelligence

DASHBOARD_DIR="/root/.openclaw/workspace/pmal-dashboard"
DATE=$(date +%Y-%m-%d)
ADS_DIR="$DASHBOARD_DIR/ads/$DATE"
SCREENSHOTS_DIR="$DASHBOARD_DIR/screenshots/$DATE"

mkdir -p "$ADS_DIR" "$SCREENSHOTS_DIR"

# Facebook Ad Library URLs to monitor
COMPETITORS=(
  "lendela|https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=SG&q=lendela"
  "lendingbee|https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=SG&q=lending%20bee"
  "crawfort|https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=SG&q=crawfort"
  "credit21|https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=SG&q=credit%2021"
  "moneykinetics|https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=SG&q=money%20kinetics"
  "roshi|https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=SG&q=roshi"
  "lendingpot|https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=SG&q=lendingpot"
  "lendingcircle|https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=SG&q=lending%20circle"
)

echo "=== Facebook Ad Library Check: $DATE ===" > "$ADS_DIR/summary.txt"
echo "" >> "$ADS_DIR/summary.txt"

for competitor in "${COMPETITORS[@]}"; do
  IFS='|' read -r name url <<< "$competitor"
  
  echo "Checking $name..."
  echo "--- $name ---" >> "$ADS_DIR/summary.txt"
  echo "URL: $url" >> "$ADS_DIR/summary.txt"
  echo "Status: Pending screenshot" >> "$ADS_DIR/summary.txt"
  echo "" >> "$ADS_DIR/summary.txt"
  
  # Save URL for browser automation
  echo "$url" > "$ADS_DIR/${name}_url.txt"
done

echo "Ad URLs saved to: $ADS_DIR"
echo "Ready for browser screenshot automation"
