import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import { blogPosts } from '../data/blogData'

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
          <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '2.5rem', marginBottom: '6rem' }}>
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
                style={{ height: '100%' }}
              >
                <Link to={`/blog/${post.slug}`} className="blog-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '2.5rem', background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.3))', border: '1px solid rgba(18, 19, 25, 0.12)', borderRadius: '2rem', textDecoration: 'none', color: 'var(--ink)', transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
                  <div className="blog-meta-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', fontSize: '0.85rem' }}>
                    <span style={{ color: 'var(--ink-light)', fontWeight: 500 }}>{post.date}</span>
                    <span style={{ color: 'var(--accent-orange)', fontWeight: 600 }}>{post.readTime}</span>
                  </div>
                  
                  <h2 style={{ fontSize: '1.4rem', lineHeight: 1.3, marginBottom: '1rem', fontWeight: 600 }}>{post.title}</h2>
                  
                  <p style={{ color: 'var(--ink-light)', lineHeight: 1.6, fontSize: '1rem', marginBottom: '2rem', flexGrow: 1 }}>
                    {post.summary}
                  </p>
                  
                  <div className="chip-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="chip" style={{ margin: 0 }}>{tag}</span>
                    ))}
                    {post.tags.length > 3 && <span className="chip" style={{ margin: 0 }}>+{post.tags.length - 3}</span>}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

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
