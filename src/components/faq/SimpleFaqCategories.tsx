import React, { useState, useMemo, useCallback } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import faqData from '@/data/faqData.json';
import { STANDARD_CONTAINER_CLASSES } from '@/components/PageLayout';

export type FaqItem = {
  question: string;
  answer: string;
  category: string;
  tags?: string[];
};

export const SimpleFaqCategories = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = useMemo(() => [
    { id: 'all', label: 'All' },
    { id: 'venue', label: 'Venue & Space' },
    { id: 'planning', label: 'Planning' },
    { id: 'wedding', label: 'Weddings' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'bar', label: 'Bar' },
  ], []);

  const filteredItems = useMemo(() => {
    const search = searchTerm.toLowerCase();
    return faqData.filter(item =>
      searchTerm === '' ||
      item.question.toLowerCase().includes(search) ||
      item.answer.toLowerCase().includes(search) ||
      (item.tags && item.tags.some(tag => tag.toLowerCase().includes(search)))
    );
  }, [searchTerm]);

  const getItemsByCategory = useCallback(
    (categoryId: string) => {
      if (categoryId === 'all') return filteredItems;
      
      // Map consolidated categories
      const categoryMappings: { [key: string]: string[] } = {
        'venue': ['venue', 'location'],
        'planning': ['planning'],
        'wedding': ['wedding'],
        'corporate': ['corporate', 'meetings', 'dinners', 'happyhours', 'specialevents', 'showers'],
        'bar': ['bar'],
      };
      
      const mappedCategories = categoryMappings[categoryId] || [categoryId];
      return filteredItems.filter(item => mappedCategories.includes(item.category));
    },
    [filteredItems]
  );

  return (
    <div className={`${STANDARD_CONTAINER_CLASSES} pt-8 pb-16`}>
      {/* Search */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Search questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-12 text-base bg-white"
          />
        </div>
      </div>

      {/* Categories */}
      <Tabs defaultValue="all" className="max-w-3xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8 bg-transparent">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="text-sm data-[state=active]:bg-white data-[state=active]:text-orange-500">
              <span className="hidden sm:inline">{category.label}</span>
              <span className="sm:hidden">{category.label.split(' ')[0]}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <div className="space-y-4">
              {getItemsByCategory(category.id).length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">
                    {searchTerm ? 'No questions match your search.' : 'No questions in this category.'}
                  </p>
                </div>
              ) : (
                <Accordion type="single" collapsible className="space-y-4">
                  {getItemsByCategory(category.id).map((item, index) => (
                    <AccordionItem
                      key={`${category.id}-${index}`}
                      value={`${category.id}-${index}`}
                      className="border rounded-lg px-6 py-2 bg-card"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        <h5 className="font-medium pr-4">
                          {item.question}
                        </h5>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}; 