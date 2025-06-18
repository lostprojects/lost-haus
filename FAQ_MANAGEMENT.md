# Centralized FAQ Management System

## Overview

This document describes the centralized FAQ management system implemented for the Somerhaus website. The system consolidates all FAQ content into a single source of truth, making it easy to maintain and update FAQ content across multiple pages.

## 🎯 Benefits

- **Single Source of Truth**: All FAQ content is managed in one place
- **Easy Updates**: Change FAQ content once, update everywhere
- **Consistency**: Ensures consistent messaging across all pages
- **Reduced Duplication**: Eliminates redundant FAQ definitions
- **Better Organization**: FAQs are categorized and tagged for easy filtering

## 📂 File Structure

```
src/
├── data/
│   └── faqData.json              # ✨ Centralized FAQ data
├── lib/
│   └── faqUtils.ts               # ✨ Utility functions for FAQ management
├── components/
│   ├── faq/
│   │   └── SimpleFaqCategories.tsx  # Main FAQ page component
│   └── shared/
│       └── FAQSection.tsx          # Reusable FAQ section component
└── pages/
    ├── FAQ.tsx                    # Main FAQ page
    ├── Meetings.tsx              # ✅ Updated to use centralized data
    ├── Dinners.tsx               # ✅ Updated to use centralized data
    ├── Press.tsx                 # ✅ Updated to use centralized data
    ├── SpecialEvents.tsx         # ✅ Updated to use centralized data
    ├── HappyHours.tsx            # ⚠️ Needs updating
    ├── Rehearsals.tsx            # ⚠️ Needs updating
    └── Corporate.tsx             # ⚠️ Needs updating
```

## 📊 Data Structure

### FAQ Item Format
```typescript
interface FAQItem {
  question: string;
  answer: string;
  category: string;
  tags?: string[];
}
```

### Categories
- `venue` - Venue and space information
- `location` - Location and logistics
- `planning` - Planning and booking
- `meetings` - Business meetings
- `corporate` - Corporate events
- `dinners` - Dinner events
- `happyhours` - Happy hour events
- `specialevents` - Special events
- `wedding` - Wedding celebrations
- `showers` - Shower celebrations
- `bar` - Bar service
- `press` - Media and press

### Example FAQ Entry
```json
{
  "question": "What makes Somerhaus ideal for business meetings?",
  "answer": "Our 3,080 sq ft space offers the perfect blend of professionalism and inspiration...",
  "category": "meetings",
  "tags": ["business", "corporate", "professional", "meetings"]
}
```

## 🛠️ Usage

### 1. Import the Utility Functions
```typescript
import { getFAQsForPage } from '@/lib/faqUtils';
```

### 2. Get FAQs for a Specific Page
```typescript
// Get up to 6 FAQs for the meetings page
const faqData = getFAQsForPage('meetings', 6);

// Get all FAQs for a category
const allMeetingFAQs = getFAQsForPage('meetings');
```

### 3. Use in Your Component
```typescript
<FAQSection
  title="Business Meetings FAQ"
  description="Everything you need to know about hosting your business meeting at Somerhaus"
  faqs={faqData}
/>
```

## 🔧 Available Utility Functions

### `getFAQsForPage(pageType, limit?)`
Gets FAQs relevant to a specific page type.
- **pageType**: `'meetings' | 'corporate' | 'dinners' | 'happyhours' | 'specialevents' | 'wedding' | 'showers' | 'bar' | 'press'`
- **limit**: Optional number of FAQs to return

### `getFAQsByCategory(category, limit?)`
Gets FAQs by a specific category.

### `getFAQsByCategories(categories[], limit?)`
Gets FAQs from multiple categories.

### `getFAQsByTag(tag, limit?)`
Gets FAQs that include a specific tag.

### `searchFAQs(keyword, limit?)`
Searches FAQs by keyword in questions, answers, or tags.

## 📝 How to Add New FAQs

1. **Open** `src/data/faqData.json`
2. **Add** your new FAQ entry:
   ```json
   {
     "question": "Your new question?",
     "answer": "Your detailed answer here.",
     "category": "appropriate-category",
     "tags": ["relevant", "tags"]
   }
   ```
3. **Choose** the appropriate category from the list above
4. **Add** relevant tags for search functionality

## 🔄 Migrating Existing Pages

### Before (Old Pattern)
```typescript
const faqData = [
  {
    question: "What makes Somerhaus ideal for business meetings?",
    answer: "Our 3,080 sq ft space offers the perfect blend..."
  },
  // ... more inline FAQ data
];
```

### After (New Pattern)
```typescript
import { getFAQsForPage } from '@/lib/faqUtils';

// Get FAQs from centralized data
const faqData = getFAQsForPage('meetings', 6);
```

### Migration Steps
1. **Add import**: `import { getFAQsForPage } from '@/lib/faqUtils';`
2. **Replace inline data**: `const faqData = getFAQsForPage('pageType', limit);`
3. **Choose pageType**: Select from available page types
4. **Set limit**: Optional number of FAQs to display
5. **Test**: Verify FAQs display correctly

## 🎨 Main FAQ Page Features

The main FAQ page (`/faq`) includes:
- **Search functionality**: Search across all FAQs
- **Category tabs**: Browse FAQs by category
- **Responsive design**: Works on all devices
- **SEO optimization**: Structured data for search engines

### Available Categories on Main Page
- All Questions
- Venue & Space
- Location & Logistics
- Planning & Booking
- Weddings
- Corporate Events
- Meetings
- Dinner Events
- Happy Hours
- Special Events
- Showers
- Bar Service
- Media & Press

## 📱 Responsive Design

The FAQ system is fully responsive:
- **Mobile**: Shows abbreviated category names
- **Tablet**: Shows full category names
- **Desktop**: Displays all categories in a grid layout

## 🔍 SEO Features

- **Structured Data**: Automatic FAQ schema generation
- **Search Optimization**: Tagged and categorized content
- **Fast Loading**: Efficient data filtering

## 🚀 Performance

- **Lazy Loading**: FAQs are filtered on-demand
- **Efficient Filtering**: Uses array methods for fast searching
- **Minimal Bundle Size**: Lightweight utility functions

## 🧪 Testing

After making changes to FAQ data:
1. **Test Main Page**: Visit `/faq` and verify all categories work
2. **Test Page-Specific FAQs**: Check individual pages use correct FAQs
3. **Test Search**: Verify search functionality works
4. **Test Responsive**: Check mobile and desktop layouts

## 🔧 Troubleshooting

### FAQ Not Showing
- Check category name matches exactly
- Verify FAQ is in `faqData.json`
- Ensure correct import in component

### Wrong FAQs Appearing
- Check `PAGE_FAQ_CATEGORIES` mapping in `faqUtils.ts`
- Verify category assignment in FAQ data
- Review filtering logic

### Search Not Working
- Check tags are properly assigned
- Verify search terms match content
- Review search function implementation

## 🎯 Best Practices

1. **Consistent Categories**: Use existing categories when possible
2. **Meaningful Tags**: Add relevant tags for better searchability
3. **Clear Questions**: Write questions as users would ask them
4. **Comprehensive Answers**: Provide complete, helpful answers
5. **Regular Updates**: Keep FAQ content current and accurate

## 📈 Future Enhancements

Potential improvements:
- **FAQ Analytics**: Track most viewed/searched FAQs
- **Dynamic Loading**: Load FAQ categories on demand
- **Multi-language Support**: Internationalization
- **FAQ Ratings**: User feedback on FAQ helpfulness
- **Related FAQs**: Show related questions
- **FAQ Suggestions**: Auto-suggest based on user behavior

## 🤝 Contributing

When adding new FAQ content:
1. Follow the established data structure
2. Use appropriate categories and tags
3. Write clear, concise questions and answers
4. Test on both main FAQ page and specific pages
5. Update this documentation if adding new categories 