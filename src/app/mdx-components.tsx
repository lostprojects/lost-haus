/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import OptimizedImage from '@/components/ui/OptimizedImage';
import Link from 'next/link';

export type MDXComponents = {
  [key: string]: React.ComponentType<any>;
};

// Provide custom components to MDX files
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    img: (props: any) => <OptimizedImage {...props} />,
    a: (props: any) => <Link {...props} />,
    ...components,
  };
} 