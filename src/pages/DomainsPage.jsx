import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import DomainCard from '../components/DomainCard'
import SectionHeading from '../components/SectionHeading'
import { domains } from '../data/siteData'

export default function DomainsPage() {
  return (
    <div className="page domains-page">
      <section className="page-hero page-hero-alt">
        <div className="container page-hero-grid">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <p className="eyebrow">Domain map / practice areas / work categories</p>
            <h1>
              Four lanes,
              <span className="accent-serif"> one portfolio voice.</span>
            </h1>
            <p className="hero-body">
              The work is split into clear lanes so recruiters and collaborators can jump straight to the kind of work they care about.
            </p>

            <div className="hero-actions">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
                <a className="button primary" href="#domain-grid">
                  Browse domain pages
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
                <Link className="button secondary" to="/projects">
                  Return to projects
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="quote-card"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay: 0.15 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <p className="eyebrow">Why this page exists</p>
            <h2>
              Breadth is only useful
              <span className="accent-serif"> when it stays legible.</span>
            </h2>
            <p>
              Each lane below frames a different capability without making the whole site feel overloaded.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="domain-grid" className="section-block">
        <div className="container">
          <SectionHeading
            eyebrow="Practice areas"
            title="Each page sells a different capability."
            body="Pick the lane that matches the brief."
          />

          <div className="domain-grid">
            {domains.map((domain) => (
              <DomainCard key={domain.slug} domain={domain} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
