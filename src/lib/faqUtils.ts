import faqData from '@/data/faqData.json';

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
  tags?: string[];
}

/**
 * Get FAQs by category
 * @param category - The category to filter by
 * @param limit - Optional limit on number of FAQs to return
 * @returns Array of FAQ items for the specified category
 */
export const getFAQsByCategory = (category: string, limit?: number): FAQItem[] => {
  const filtered = faqData.filter(faq => faq.category === category);
  return limit ? filtered.slice(0, limit) : filtered;
};

/**
 * Get FAQs by multiple categories
 * @param categories - Array of categories to include
 * @param limit - Optional limit on number of FAQs to return
 * @returns Array of FAQ items for the specified categories
 */
export const getFAQsByCategories = (categories: string[], limit?: number): FAQItem[] => {
  const filtered = faqData.filter(faq => categories.includes(faq.category));
  return limit ? filtered.slice(0, limit) : filtered;
};

/**
 * Get FAQs by tag
 * @param tag - The tag to filter by
 * @param limit - Optional limit on number of FAQs to return
 * @returns Array of FAQ items that include the specified tag
 */
export const getFAQsByTag = (tag: string, limit?: number): FAQItem[] => {
  const filtered = faqData.filter(faq => faq.tags?.includes(tag));
  return limit ? filtered.slice(0, limit) : filtered;
};

/**
 * Search FAQs by keyword
 * @param keyword - The keyword to search for in questions and answers
 * @param limit - Optional limit on number of FAQs to return
 * @returns Array of FAQ items that match the search keyword
 */
export const searchFAQs = (keyword: string, limit?: number): FAQItem[] => {
  const searchTerm = keyword.toLowerCase();
  const filtered = faqData.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm) ||
    faq.answer.toLowerCase().includes(searchTerm) ||
    faq.tags?.some(tag => tag.toLowerCase().includes(searchTerm))
  );
  return limit ? filtered.slice(0, limit) : filtered;
};

/**
 * Get all available categories
 * @returns Array of unique category names
 */
export const getAllCategories = (): string[] => {
  return Array.from(new Set(faqData.map(faq => faq.category)));
};

/**
 * Get all available tags
 * @returns Array of unique tag names
 */
export const getAllTags = (): string[] => {
  const allTags = faqData.flatMap(faq => faq.tags || []);
  return Array.from(new Set(allTags));
};

// Pre-defined category mappings for common page types
export const PAGE_FAQ_CATEGORIES = {
  meetings: ['meetings', 'venue', 'planning'],
  corporate: ['corporate', 'meetings', 'venue', 'planning'],
  dinners: ['dinners', 'venue', 'planning'],
  happyhours: ['happyhours', 'venue', 'planning'],
  specialevents: ['specialevents', 'venue', 'planning'],
  wedding: ['wedding', 'venue', 'planning'],
  showers: ['showers', 'venue', 'planning'],
  bar: ['bar'],
  press: ['press'],
} as const;

/**
 * Get FAQs for a specific page type
 * @param pageType - The page type (meetings, corporate, etc.)
 * @param limit - Optional limit on number of FAQs to return
 * @returns Array of FAQ items relevant to the page type
 */
export const getFAQsForPage = (pageType: keyof typeof PAGE_FAQ_CATEGORIES, limit?: number): FAQItem[] => {
  const categories = PAGE_FAQ_CATEGORIES[pageType];
  if (!categories) {
    console.warn(`No FAQ categories defined for page type: ${pageType}`);
    return [];
  }
  
  // Get FAQs from the primary category first, then supplement with others
  const primaryCategory = categories[0];
  const primaryFAQs = getFAQsByCategory(primaryCategory);
  
  if (primaryFAQs.length >= (limit || 6)) {
    return limit ? primaryFAQs.slice(0, limit) : primaryFAQs;
  }
  
  // If we need more FAQs, get from other categories
  const supplementaryCategories = categories.slice(1);
  const supplementaryFAQs = getFAQsByCategories(supplementaryCategories);
  
  // Combine and deduplicate
  const combined = [...primaryFAQs];
  supplementaryFAQs.forEach(faq => {
    if (!combined.find(existing => existing.question === faq.question)) {
      combined.push(faq);
    }
  });
  
  return limit ? combined.slice(0, limit) : combined;
}; 