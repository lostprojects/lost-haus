import React, { useState } from 'react';
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

export type FaqItem = {
  question: string;
  answer: string;
  category: string;
  tags?: string[];
};

export const SimpleFaqCategories = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'All Questions', icon: '🏢' },
    { id: 'venue', label: 'Venue & Space', icon: '🏛️' },
    { id: 'location', label: 'Location & Logistics', icon: '📍' },
    { id: 'planning', label: 'Planning & Booking', icon: '📅' },
    { id: 'wedding', label: 'Weddings', icon: '💒' },
    { id: 'corporate', label: 'Corporate Events', icon: '🏢' },
    { id: 'meetings', label: 'Meetings', icon: '💼' },
    { id: 'dinners', label: 'Dinner Events', icon: '🍽️' },
    { id: 'happyhours', label: 'Happy Hours', icon: '🍸' },
    { id: 'specialevents', label: 'Special Events', icon: '🎉' },
    { id: 'showers', label: 'Showers', icon: '🎊' },
    { id: 'bar', label: 'Bar Service', icon: '🍷' },
    { id: 'press', label: 'Media & Press', icon: '📰' },
  ];

  const filteredItems = faqData.filter(item => {
    const matchesSearch = searchTerm === '' || 
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.tags && item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
    return matchesSearch;
  });

  const getItemsByCategory = (categoryId: string) => {
    if (categoryId === 'all') return filteredItems;
    return filteredItems.filter(item => item.category === categoryId);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Search */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Search questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-12 text-base"
          />
        </div>
      </div>

      {/* Categories */}
      <Tabs defaultValue="all" className="max-w-6xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mb-8 h-auto flex-wrap gap-2">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="text-xs md:text-sm flex-shrink-0">
              <span className="mr-1 md:mr-2">{category.icon}</span>
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
                        <span className="font-medium text-foreground pr-4">
                          {item.question}
                        </span>
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