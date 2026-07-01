import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import { blogPosts } from '../data/blogData'

const renderMarkdown = (text) => {
  if (!text) return null;
  const html = text
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>');
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
};

export default function BlogPage() {
  return (
    <div className="page blog-page">
      <section className="page-hero page-hero-alt">
        <div className="container">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <p className="eyebrow">Blog / research notes / applied thinking</p>
            <h1>
              Writing that
              <span className="accent-serif"> connects</span> theory.
            </h1>
            <p className="hero-body">
              Long-form notes on the intersection of AI systems, spatial interfaces,
              and product-oriented engineering. Less trend commentary, more applied thinking.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          {blogPosts.map((post, index) => (
            <div key={post.title}>
              <motion.article
                className="blog-article"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <header className="blog-article-header">
                  <div className="blog-meta-row">
                    <span className="blog-date">{post.date}</span>
                    <span className="blog-read-time">{post.readTime}</span>
                  </div>
                  <h2 className="blog-article-title">{post.title}</h2>
                  <div className="chip-row">
                    {post.tags.map((tag) => (
                      <span key={tag} className="chip">{tag}</span>
                    ))}
                  </div>
                </header>

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
              {index < blogPosts.length - 1 && <hr className="blog-divider" style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '4rem 0' }} />}
            </div>
          ))}

          <motion.div
            className="blog-footer-cta"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              eyebrow="Applied work"
              title="See how this thinking shows up in builds."
              body="The projects section connects the ideas above to real shipped work."
              align="stacked"
            />
            <div className="hero-actions">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
                <Link className="button primary" to="/projects">
                  View projects
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
                <Link className="button secondary" to="/projects#project-categories">
                  Browse categories
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
