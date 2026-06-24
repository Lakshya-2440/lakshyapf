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
          <div className="hero-copy" data-reveal>
            <p className="eyebrow">Blog / research notes / applied thinking</p>
            <h1>
              Writing that
              <span className="accent-serif"> connects</span> theory.
            </h1>
            <p className="hero-body">
              Long-form notes on the intersection of AI systems, spatial interfaces,
              and product-oriented engineering. Less trend commentary, more applied thinking.
            </p>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          {blogPosts.map((post, index) => (
            <div key={post.title}>
              <article className="blog-article" data-reveal>
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
              </article>
              {index < blogPosts.length - 1 && <hr className="blog-divider" style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '4rem 0' }} />}
            </div>
          ))}

          <div className="blog-footer-cta" data-reveal>
            <SectionHeading
              eyebrow="Applied work"
              title="See how this thinking shows up in builds."
              body="The projects section connects the ideas above to real shipped work."
              align="stacked"
            />
            <div className="hero-actions">
              <Link className="button primary" to="/projects">
                View projects
              </Link>
              <Link className="button secondary" to="/projects#project-categories">
                Browse categories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
