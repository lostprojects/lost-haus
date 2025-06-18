#!/bin/bash

# Script to update all pages to use centralized SEO schemas
echo "Updating SEO schema imports across all pages..."

# List of pages that need businessSchema updates
pages=(
  "src/pages/About.tsx"
  "src/pages/BarPackages.tsx" 
  "src/pages/Blog.tsx"
  "src/pages/Contact.tsx"
  "src/pages/Corporate.tsx"
  "src/pages/Dinners.tsx"
  "src/pages/Elopements.tsx"
  "src/pages/EventInquiry.tsx"
  "src/pages/HappyHours.tsx"
  "src/pages/Meetings.tsx"
  "src/pages/MicroWeddings.tsx"
  "src/pages/Parties.tsx"
  "src/pages/PhotoShoots.tsx"
  "src/pages/Press.tsx"
  "src/pages/Rehearsals.tsx"
  "src/pages/Showers.tsx"
  "src/pages/SpecialEvents.tsx"
  "src/pages/Wedding.tsx"
  "src/pages/WeddingLGBTQ.tsx"
)

# Function to update imports and remove duplicate businessSchema
update_page() {
  local file="$1"
  echo "Processing: $file"
  
  # Check if file exists
  if [[ ! -f "$file" ]]; then
    echo "  File not found, skipping..."
    return
  fi
  
  # Update Seo import to include businessSchema
  sed -i '' 's/import Seo from '\''@\/components\/seo\/Seo'\'';/import Seo, { businessSchema } from '\''@\/components\/seo\/Seo'\'';/' "$file"
  
  # Remove duplicate businessSchema definitions (multi-line)
  # This removes from "const businessSchema = {" to the closing "};"
  sed -i '' '/^const businessSchema = {$/,/^};$/d' "$file"
  
  echo "  Updated successfully"
}

# Update each page
for page in "${pages[@]}"; do
  update_page "$page"
done

echo "Schema import updates complete!"
echo ""
echo "Note: Pages with custom FAQ schemas still need manual review:"
echo "- src/pages/Meetings.tsx"
echo "- src/pages/Dinners.tsx"  
echo "- src/pages/HappyHours.tsx"
echo "- src/pages/SpecialEvents.tsx"
echo "- src/pages/Rehearsals.tsx"
echo "- src/pages/Parties.tsx" 