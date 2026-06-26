import { motion } from 'framer-motion'
import { Link, Navigate, useParams } from 'react-router-dom'
import ProjectArtwork from '../components/ProjectArtwork'
import SectionHeading from '../components/SectionHeading'
import { getDomainBySlug, getProjectBySlug, projects } from '../data/siteData'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.55,
      ease: [0.2, 0.8, 0.2, 1],
    },
  }),
}

const storyCardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.1 + i * 0.1,
      duration: 0.5,
      ease: [0.2, 0.8, 0.2, 1],
    },
  }),
}

export default function ProjectDetailPage() {
  const { projectSlug } = useParams()
  const project = getProjectBySlug(projectSlug)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const domain = getDomainBySlug(project.domainSlug)
  const metrics = project.metrics || []
  const relatedProjects = projects
    .filter((item) => item.domainSlug === project.domainSlug && item.slug !== project.slug)
    .slice(0, 2)

  return (
    <div className="page detail-page">
      <section className="page-hero page-hero-alt detail-hero">
        <div className="container detail-hero-grid">
          <motion.div
            className="hero-copy"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <p className="eyebrow">
              {project.year} / {domain?.title ?? 'Project'} / case study route
            </p>
            <h1>
              {project.name}
              <span className="accent-serif"> case study.</span>
            </h1>
            <p className="hero-body">{project.summary}</p>

            {metrics.length > 0 && (
              <motion.div
                className="detail-metrics"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.45 }}
              >
                {metrics.map((metric, i) => (
                  <motion.div
                    key={`detail-metric-${metric}`}
                    className="detail-metric"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.35 + i * 0.08, duration: 0.35 }}
                  >
                    <span>Metric</span>
                    <strong>{metric}</strong>
                  </motion.div>
                ))}
              </motion.div>
            )}

            <div className="hero-actions">
              {project.liveUrl ? (
                <a
                  className="button live-demo"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live demo
                </a>
              ) : null}
              <a className="button primary" href={project.repo} target="_blank" rel="noreferrer">
                Open repository
              </a>
              <Link className="button secondary" to={`/projects?domain=${project.domainSlug}#project-categories`}>
                Explore this category
              </Link>
              <Link className="button ghost" to="/projects">
                Back to projects
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="detail-art-panel"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: [0.2, 0.8, 0.2, 1], delay: 0.12 }}
          >
            {project.images && project.images.length > 0 ? (
              <img
                src={project.images[0]}
                alt={`${project.name} preview`}
                className="detail-hero-image"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '400px',
                  objectFit: 'contain',
                  borderRadius: '12px',
                  border: '1px solid var(--border)',
                  backgroundColor: 'var(--surface)'
                }}
              />
            ) : (
              <ProjectArtwork project={project} />
            )}
          </motion.div>
        </div>
      </section>

      <section className="section-block">
        <div className="container detail-layout">
          <div className="detail-main">
            <SectionHeading
              eyebrow="Why this project matters"
              title={project.strap}
              body={project.description}
              align="stacked"
            />

            <div className="simple-text-stack">
              {[
                { label: 'Challenge', content: project.challenge },
                { label: 'Build logic', content: project.buildNarrative },
              ].map((section, i) => (
                <motion.div
                  key={section.label}
                  className="simple-text-section"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  custom={i}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  style={{ marginBottom: '3rem' }}
                >
                  <p className="eyebrow" style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>{section.label}</p>
                  <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'var(--text)' }}>
                    {section.content}
                  </p>
                </motion.div>
              ))}
            </div>

            {project.images && project.images.length > 1 && (
              <div className="detail-body-images" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginTop: '2rem', marginBottom: '3rem' }}>
                {project.images.slice(1).map((imgSrc, idx) => (
                  <motion.div
                    key={imgSrc}
                    className="detail-body-image"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <img 
                      src={imgSrc} 
                      alt={`${project.name} detailed view ${idx + 1}`} 
                      style={{ 
                        width: '100%', 
                        maxWidth: '640px',
                        maxHeight: '420px',
                        objectFit: 'contain',
                        margin: '0 auto',
                        display: 'block',
                        borderRadius: '12px', 
                        border: '1px solid var(--border)',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' 
                      }} 
                    />
                  </motion.div>
                ))}
              </div>
            )}

            {project.customSections && project.customSections.map((section, idx) => (
              <motion.div
                key={`custom-section-${idx}`}
                className="simple-text-section custom-detail-section"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                style={{ marginBottom: '4rem' }}
              >
                {section.title && (
                  <p className="eyebrow" style={{ marginBottom: '1.25rem', color: 'var(--text-secondary)', fontSize: '1.125rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {section.title}
                  </p>
                )}
                {section.subtitle && (
                  <h3 style={{ marginBottom: '1rem', color: 'var(--text)', fontSize: '1.5rem', fontWeight: '700' }}>
                    {section.subtitle}
                  </h3>
                )}
                {section.content && (
                  <p style={{ fontSize: '1.1875rem', lineHeight: '1.7', color: 'var(--text)', whiteSpace: 'pre-line', marginBottom: '1.5rem' }}>
                    {section.content}
                  </p>
                )}
                {section.code && (
                  <pre style={{ backgroundColor: 'var(--surface)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border)', overflowX: 'auto', fontSize: '0.875rem', lineHeight: '1.4', color: 'var(--text)', marginBottom: '1.5rem', fontFamily: 'monospace' }}>
                    {section.code}
                  </pre>
                )}
                {section.table && (
                  <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '1rem', border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden' }}>
                      <thead>
                        <tr style={{ backgroundColor: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
                          {section.table.headers.map((h, i) => (
                            <th key={i} style={{ padding: '1rem', fontWeight: '600', color: 'var(--text-secondary)' }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} style={{ borderBottom: '1px solid var(--border)' }}>
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} style={{ padding: '1rem', color: 'var(--text)' }}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {section.list && (
                  <ul style={{ marginTop: '0.5rem', marginBottom: '1.5rem', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {section.list.map((item, lIdx) => (
                      <li key={lIdx} style={{ fontSize: '1.125rem', lineHeight: '1.6', color: 'var(--text)' }}>
                        {item.label && <strong style={{ color: 'var(--accent)' }}>{item.label}: </strong>}
                        {item.text}
                      </li>
                    ))}
                  </ul>
                )}
                {section.subsections && section.subsections.map((sub, sIdx) => (
                  <div key={sIdx} style={{ marginTop: '2.5rem', marginBottom: '1.5rem' }}>
                    {sub.title && <h4 style={{ fontSize: '1.35rem', fontWeight: '700', color: 'var(--text)', marginBottom: '0.75rem' }}>{sub.title}</h4>}
                    {sub.content && <p style={{ fontSize: '1.125rem', lineHeight: '1.65', color: 'var(--text)', whiteSpace: 'pre-line', marginBottom: '1rem' }}>{sub.content}</p>}
                    {sub.list && (
                      <ul style={{ marginTop: '0.5rem', marginBottom: '1rem', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {sub.list.map((item, slIdx) => (
                          <li key={slIdx} style={{ fontSize: '1.125rem', lineHeight: '1.6', color: 'var(--text)' }}>
                            {item.label && <strong style={{ color: 'var(--accent)' }}>{item.label}: </strong>}
                            {item.text}
                          </li>
                        ))}
                      </ul>
                    )}
                    {sub.table && (
                      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '1rem', border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden' }}>
                          <thead>
                            <tr style={{ backgroundColor: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
                              {sub.table.headers.map((h, i) => (
                                <th key={i} style={{ padding: '1rem', fontWeight: '600', color: 'var(--text-secondary)' }}>{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {sub.table.rows.map((row, rIdx) => (
                              <tr key={rIdx} style={{ borderBottom: '1px solid var(--border)' }}>
                                {row.map((cell, cIdx) => (
                                  <td key={cIdx} style={{ padding: '1rem', color: 'var(--text)' }}>{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            ))}

            <div className="simple-text-stack">
              <motion.div
                className="simple-text-section"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                style={{ marginBottom: '3rem' }}
              >
                <p className="eyebrow" style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>What it proves</p>
                <ul className="project-kpis rich" style={{ marginTop: '0' }}>
                  {project.outcomes.map((item) => (
                    <li key={`${project.slug}-${item}`} style={{ fontSize: '1.125rem', lineHeight: '1.6', color: 'var(--text)' }}>{item}</li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="simple-text-section"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{ marginBottom: '3rem' }}
              >
                <p className="eyebrow" style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>Ideal next step</p>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'var(--text)' }}>
                  {project.idealNextStep}
                </p>
              </motion.div>
            </div>
          </div>

          <aside className="detail-rail">
            <motion.article
              className="fact-sheet"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1], delay: 0.25 }}
            >
              <p className="eyebrow">Project facts</p>
              <div className="fact-list">
                <div>
                  <span>Year</span>
                  <strong>{project.year}</strong>
                </div>
                <div>
                  <span>Role</span>
                  <strong>{project.role}</strong>
                </div>
                <div>
                  <span>Domain</span>
                  <strong>{domain?.title ?? 'Portfolio'}</strong>
                </div>
              </div>

              <div className="chip-row">
                {project.stack.map((item) => (
                  <span key={`${project.slug}-rail-${item}`} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>

            {relatedProjects.length > 0 ? (
              <motion.article
                className="fact-sheet"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1], delay: 0.35 }}
              >
                <p className="eyebrow">Related in this category</p>
                <div className="related-links">
                  {relatedProjects.map((item) => (
                    <Link key={item.slug} to={`/projects/${item.slug}`}>
                      <strong>{item.name}</strong>
                      <span>{item.strap}</span>
                    </Link>
                  ))}
                </div>
              </motion.article>
            ) : null}
          </aside>
        </div>
      </section>
    </div>
  )
}
