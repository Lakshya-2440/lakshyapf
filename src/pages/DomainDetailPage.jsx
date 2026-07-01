import { motion } from 'framer-motion'
import { Link, Navigate, useParams } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import { getDomainBySlug, getProjectsByDomain } from '../data/siteData'

export default function DomainDetailPage() {
  const { domainSlug } = useParams()
  const domain = getDomainBySlug(domainSlug)

  if (!domain) {
    return <Navigate to="/domains" replace />
  }

  const domainProjects = getProjectsByDomain(domain.slug)

  return (
    <div className="page domain-detail-page">
      <section className="page-hero page-hero-alt">
        <div className="container page-hero-grid">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <p className="eyebrow">Domain page / {domain.title}</p>
            <h1>
              {domain.title}
              <span className="accent-serif"> in focus.</span>
            </h1>
            <p className="hero-body">{domain.description}</p>

            <div className="hero-actions">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
                <Link className="button primary" to="/projects">
                  Open all projects
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
                <Link className="button secondary" to="/domains">
                  Back to domains
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className={`domain-profile tone-${domain.accent}`}
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay: 0.15 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div>
              <p className="eyebrow">What this lane is good for</p>
              <div className="domain-list emphasis">
                {domain.capabilities.map((item) => (
                  <span key={`${domain.slug}-capability-${item}`}>{item}</span>
                ))}
              </div>
            </div>

            <div>
              <p className="eyebrow">Ideal briefs</p>
              <div className="domain-list">
                {domain.idealBriefs.map((item) => (
                  <span key={`${domain.slug}-brief-${item}`}>{item}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <SectionHeading
            eyebrow="Projects in this domain"
            title={`Work that builds the ${domain.title.toLowerCase()} story.`}
            body="These projects reinforce the same capability cluster from different angles, which makes the portfolio read as a practice rather than a set of unrelated repos."
          />

          <div className="project-grid compact-grid">
            {domainProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} variant="compact" />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
