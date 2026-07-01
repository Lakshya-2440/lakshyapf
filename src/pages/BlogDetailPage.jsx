import { motion } from 'framer-motion'
import { Link, useParams, Navigate } from 'react-router-dom'
import { blogPosts } from '../data/blogData'

const renderMarkdown = (text) => {
  if (!text) return null;
  const html = text
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>');
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
};

export default function BlogDetailPage() {
  const { blogSlug } = useParams()
  const post = blogPosts.find(p => p.slug === blogSlug)

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  return (
    <div className="page blog-detail-page">
      <section className="page-hero page-hero-alt" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            style={{ maxWidth: '1100px', margin: '0 auto' }}
          >
            <Link to="/blog" className="back-link" style={{ display: 'inline-block', marginBottom: '2rem', color: 'var(--ink-light)', textDecoration: 'none', fontWeight: 500 }}>
              ← Back to Blog
            </Link>
            <div className="blog-meta-row" style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <span className="blog-date" style={{ color: 'var(--ink-light)', fontWeight: 500 }}>{post.date}</span>
              <span style={{ color: 'var(--border)' }}>•</span>
              <span className="blog-read-time" style={{ color: 'var(--accent-orange)', fontWeight: 600 }}>{post.readTime}</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '2rem', lineHeight: 1.1 }}>{post.title}</h1>
            <div className="chip-row">
              {post.tags.map((tag) => (
                <span key={tag} className="chip">{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-block" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <motion.article
            className="blog-article"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            style={{ maxWidth: '1100px', margin: '0 auto' }}
          >
            <div className="blog-article-body">
              {post.sections.map((section) => (
                <div key={section.heading} className="blog-section">
                  <h3>{section.heading}</h3>
                  {section.body.split('\n\n').map((para, i) => (
                    <p key={i}>{renderMarkdown(para)}</p>
                  ))}
                </div>
              ))}

              {post.references && post.references.length > 0 && (
                <div className="blog-section blog-references">
                  <h3>References</h3>
                  <ol>
                    {post.references.map((ref, i) => (
                      <li key={i}>{renderMarkdown(ref)}</li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </motion.article>
        </div>
      </section>
    </div>
  )
}
