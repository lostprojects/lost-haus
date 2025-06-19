import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import PageLayout from '@/components/PageLayout';
import { CTA } from '@/components/CTASection';
import Seo from '@/components/seo/Seo';
import { createArticleSchema } from '@/components/seo/seo-schemas';
import { getPostBySlug } from '@/data/blogData';
import { Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  const postData = getPostBySlug(`/blog/${slug}`);
  
  useEffect(() => {
    const loadContent = async () => {
      if (!slug || !postData) {
        setError(true);
        setLoading(false);
        return;
      }
      
      try {
        // Import the markdown file
        const markdownModule = await import(`../content/blog/${slug}.md?raw`);
        setContent(markdownModule.default);
      } catch (err) {
        console.error('Error loading markdown content:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    
    loadContent();
  }, [slug, postData]);
  
  if (loading) {
    return (
      <PageLayout footerLogoType="clients">
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading article...</p>
          </div>
        </main>
      </PageLayout>
    );
  }
  
  if (error || !postData || !content) {
    return <Navigate to="/blog" replace />;
  }
  
  const articleSchema = createArticleSchema(
    postData.title,
    postData.description,
    postData.datePublished,
    `https://somerhaus.com${postData.image}`
  );
  
    const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <PageLayout 
      footerLogoType="clients" 
      blogHero={
        <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url(${postData.image})` }}
          />
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <h1 className="font-header mb-4 text-white">{postData.title}</h1>
            <p className="text-xl text-gray-200 font-body">{postData.excerpt}</p>
          </div>
        </section>
      }
    >
      <Seo
        title={postData.title}
        description={postData.description}
        schema={articleSchema}
      />
      
      <main className="flex-grow py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Article Metadata */}
          <div className="mb-8 pb-8 border-b border-border">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <Link 
                to="/blog" 
                className="inline-flex items-center text-primary hover:underline"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back to Blog
              </Link>
              <span className="inline-flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {postData.readTime}
              </span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs uppercase tracking-wide">
                {postData.category}
              </span>
              <span>
                Published {formatDate(postData.datePublished)}
              </span>
            </div>
          </div>
          
          {/* Article Content */}
          <div className="prose prose-lg prose-gray max-w-none font-body
                         prose-headings:font-header prose-headings:text-foreground
                         prose-h1:text-3xl prose-h1:mb-6
                         prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                         prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                         prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
                         prose-li:text-muted-foreground prose-li:mb-1
                         prose-strong:text-foreground prose-strong:font-semibold
                         prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                         prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:p-4
                         prose-table:text-sm prose-th:bg-muted prose-th:text-foreground
                         prose-td:text-muted-foreground prose-td:border-border
                         prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                         prose-pre:bg-muted prose-pre:border">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                // Custom link component to handle internal links
                a: ({ href, children, ...props }) => {
                  if (href?.startsWith('/')) {
                    return (
                      <Link to={href} {...props}>
                        {children}
                      </Link>
                    );
                  }
                  return (
                    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
                      {children}
                    </a>
                  );
                },
                // Enhanced table styling
                table: ({ children, ...props }) => (
                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full border-collapse border border-border" {...props}>
                      {children}
                    </table>
                  </div>
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
          
          {/* Keywords/Tags */}
          {postData.keywords && postData.keywords.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="font-semibold text-foreground mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {postData.keywords.map((keyword, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <CTA />
    </PageLayout>
  );
};

export default BlogPost; 