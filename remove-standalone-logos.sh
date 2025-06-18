#!/bin/bash

echo "🧹 Removing standalone Logos3 components from pages..."

# Remove Logos3 component instances from pages
find src/pages -name "*.tsx" -type f -exec sed -i '' \
  -e '/^[[:space:]]*<Logos3.*\/>/d' \
  -e '/^[[:space:]]*<Logos3/,/^[[:space:]]*\/>/d' \
  {} \;

# Remove Logos3 import statements
find src/pages -name "*.tsx" -type f -exec sed -i '' \
  -e '/import.*Logos3.*from/d' \
  {} \;

# Remove clientLogos and pressLogos import statements
find src/pages -name "*.tsx" -type f -exec sed -i '' \
  -e '/import.*clientLogos.*from/d' \
  -e '/import.*pressLogos.*from/d' \
  -e '/import.*clientLogosGrayscale.*from/d' \
  {} \;

echo "✅ Standalone Logos3 components removed from all pages!"
echo "🎉 Logos are now centralized in the UniversalHero component!"

# Clean up the script file
rm remove-standalone-logos.sh 