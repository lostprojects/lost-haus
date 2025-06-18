#!/bin/bash

# Script to update FAQ schemas to use centralized data
# This script helps maintain consistency across the site

echo "🔄 Updating FAQ schemas to use centralized data..."

# List of pages that should use centralized FAQ data
PAGES=(
    "src/pages/HappyHours.tsx"
    "src/pages/Rehearsals.tsx"
    "src/pages/Corporate.tsx"
)

echo "📋 Pages to check and potentially update:"
for page in "${PAGES[@]}"; do
    if [ -f "$page" ]; then
        echo "  ✅ Found: $page"
        # Check if page contains inline FAQ data
        if grep -q "const faqData = \[" "$page"; then
            echo "    ⚠️  Contains inline FAQ data - consider updating to use getFAQsForPage()"
        fi
    else
        echo "  ❌ Not found: $page"
    fi
done

echo ""
echo "🎯 Usage Instructions:"
echo "1. Replace inline faqData arrays with: const faqData = getFAQsForPage('pageType', limit);"
echo "2. Add import: import { getFAQsForPage } from '@/lib/faqUtils';"
echo "3. Choose appropriate pageType from: meetings, corporate, dinners, happyhours, specialevents, wedding, showers, bar, press"
echo "4. Set limit (optional) for number of FAQs to display"
echo ""
echo "🔧 Available categories in centralized data:"
echo "  - venue, location, planning (core categories)"
echo "  - meetings, corporate, dinners, happyhours, specialevents"
echo "  - wedding, showers, bar, press"
echo ""
echo "✨ Benefits of centralized FAQ management:"
echo "  - Single source of truth for all FAQ content"
echo "  - Easy to update FAQs across multiple pages"
echo "  - Consistent messaging and accuracy"
echo "  - Reduced code duplication"
echo ""
echo "📝 Remember to test FAQ display after updating!" 