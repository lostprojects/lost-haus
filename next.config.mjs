import mdx from '@next/mdx';
import remarkGfm from 'remark-gfm';

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
  },
});

/** @type {import('next').NextConfig} */
const baseConfig = {
  output: 'export', // Enable static site generation
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'dist', // Match your current build output directory
  images: {
    unoptimized: true, // Since you're using pre-optimized WebP images
    formats: ['image/webp'],
  },
  experimental: {
    optimizePackageImports: [
      '@radix-ui/react-accordion',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-avatar',
      '@radix-ui/react-tabs',
      '@radix-ui/react-select',
      '@radix-ui/react-popover',
      '@radix-ui/react-label',
      '@radix-ui/react-slot',
      '@radix-ui/react-separator',
      'lucide-react',
      'embla-carousel-react',
      'embla-carousel-autoplay'
    ],
  },
  webpack: (config, { isServer }) => {
    // Preserve your existing chunk splitting strategy for performance
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          // Core React
          vendor: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'vendor',
            chunks: 'all',
          },
          // All Radix UI components in one chunk
          ui: {
            test: /[\\/]node_modules[\\/]@radix-ui[\\/]/,
            name: 'ui',
            chunks: 'all',
          },
          // Form handling
          forms: {
            test: /[\\/]node_modules[\\/](react-hook-form)[\\/]/,
            name: 'forms',
            chunks: 'all',
          },
          // Icons
          icons: {
            test: /[\\/]node_modules[\\/](lucide-react)[\\/]/,
            name: 'icons',
            chunks: 'all',
          },
          // Markdown processing
          markdown: {
            test: /[\\/]node_modules[\\/](react-markdown|remark-gfm)[\\/]/,
            name: 'markdown',
            chunks: 'all',
          },
          // Carousel functionality
          carousel: {
            test: /[\\/]node_modules[\\/](embla-carousel)[\\/]/,
            name: 'carousel',
            chunks: 'all',
          },
          // Utilities
          utils: {
            test: /[\\/]node_modules[\\/](clsx|tailwind-merge|class-variance-authority)[\\/]/,
            name: 'utils',
            chunks: 'all',
          }
        },
      };
    }
    return config;
  },
};

export default withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  ...baseConfig,
});