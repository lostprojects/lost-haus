import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '@/data/blogData'
import PageLayout from '@/components/PageLayout'
import { CTA } from '@/components/CTASection'
import OptimizedImage from '@/components/ui/OptimizedImage'
import { createArticleSchema } from '@/components/seo/seo-schemas'

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug.replace('/blog/', ''),
  }))
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const postData = getPostBySlug(`/blog/${params.slug}`)
  
  if (!postData) {
    return {
      title: 'Post Not Found | Somerhaus Blog',
      description: 'The requested blog post could not be found.',
    }
  }

  return {
    title: `${postData.title} | Somerhaus Blog`,
    description: postData.description,
    openGraph: {
      title: postData.title,
      description: postData.description,
      type: 'article',
      publishedTime: postData.datePublished,
      images: [postData.image],
      siteName: 'Somerhaus',
    },
    twitter: {
      card: 'summary_large_image',
      title: postData.title,
      description: postData.description,
      images: [postData.image],
    },
  }
}

interface BlogPostPageProps {
  params: { slug: string }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params
  const postData = getPostBySlug(`/blog/${slug}`)
  
  if (!postData) {
    notFound()
  }

  const articleSchema = createArticleSchema(
    postData.title,
    postData.description,
    postData.datePublished,
    `https://somerhaus.com${postData.image}`
  )

  // Dynamically import the MDX file that matches the slug
  // Webpack will bundle all MDX files under content/blog so dynamic resolution works
  const MDXContent = (await import(`@/content/blog/${slug}.mdx`)).default

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema)
        }}
      />
      <PageLayout>
        <OptimizedImage
          src={postData.image}
          alt={postData.title}
          width={800}
          height={400}
          className="w-full h-auto mb-8"
        />
        <h1>{postData.title}</h1>
        <p>{postData.description}</p>
        <article className="prose prose-lg max-w-none font-body
                           prose-headings:font-header prose-headings:text-foreground">
          <MDXContent />
        </article>

        <div className="mt-12 pt-8 border-t border-border">
          <CTA />
        </div>
      </PageLayout>
    </>
  )
}
