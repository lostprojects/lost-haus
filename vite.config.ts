import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { compression } from 'vite-plugin-compression2';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Gzip compression
    compression({
      algorithm: 'gzip',
      exclude: [/\.(br)$/, /\.(gz)$/],
    }),
    // Brotli compression for better compression ratio
    compression({
      algorithm: 'brotliCompress',
      exclude: [/\.(br)$/, /\.(gz)$/],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React
          vendor: ['react', 'react-dom'],
          // Routing
          router: ['react-router-dom'],
          // All Radix UI components in one chunk
          ui: [
            '@radix-ui/react-accordion', 
            '@radix-ui/react-dialog', 
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-avatar',
            '@radix-ui/react-tabs',
            '@radix-ui/react-select',
            '@radix-ui/react-popover',
            '@radix-ui/react-label',
            '@radix-ui/react-slot',
            '@radix-ui/react-separator'
          ],
          // Form handling
          forms: ['react-hook-form'],
          // Icons
          icons: ['lucide-react'],
          // Markdown processing (likely contributing to blog chunk size)
          markdown: ['react-markdown', 'remark-gfm'],
          // Carousel functionality
          carousel: ['embla-carousel-react', 'embla-carousel-autoplay'],
          // SEO & meta
          seo: ['react-helmet-async'],
          // Utilities
          utils: ['clsx', 'tailwind-merge', 'class-variance-authority']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    // Use esbuild for faster builds and smaller bundles
    minify: 'esbuild',
    // Optimize CSS
    cssMinify: true,
    // Enable source maps for debugging in production (optional)
    sourcemap: false,
  },
}));
