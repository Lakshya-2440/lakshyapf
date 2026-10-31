import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'
import { domains } from '../data/siteData'
import ProjectArtwork from './ProjectArtwork'

function getDomainTitle(domainSlug) {
  return domains.find((domain) => domain.slug === domainSlug)?.title ?? 'Selected Work'
}

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.2, 0.8, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -16,
    scale: 0.97,
    transition: { duration: 0.3, ease: 'easeIn' },
  },
}

export default function ProjectCard({ project, variant = 'feature' }) {
  const domainTitle = getDomainTitle(project.domainSlug)
  const isCompact = variant === 'compact'
  const visibleStack = project.stack.slice(0, isCompact ? 3 : 4)
  const metrics = project.metrics || []
  const cardRef = useRef(null)

  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 })
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 }
  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)
  
  const rotateX = useTransform(ySpring, [-50, 50], [8, -8])
  const rotateY = useTransform(xSpring, [-50, 50], [-8, 8])

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Set motion values for rotation
    x.set(mouseX - centerX)
    y.set(mouseY - centerY)

    // Calculate percentage for glare
    const percentX = (mouseX / rect.width) * 100
    const percentY = (mouseY / rect.height) * 100
    setGlarePos({ x: percentX, y: percentY })
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.article
      ref={cardRef}
      className={`project-card ${variant}`}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      layout
      style={{
        rotateX,
        rotateY,
        perspective: 1200
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.25, ease: [0.2, 0.8, 0.2, 1] },
      }}
    >
      <div 
        className="premium-glare-overlay" 
        style={{
          background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.4), transparent 50%)`
        }}
      />
      {project.images && project.images.length > 0 ? (
        <div className={`project-artwork tone-${project.accent} ${isCompact ? 'dense' : ''}`} style={{ padding: '2rem', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src={project.images[0]}
            alt={`${project.name} preview`}
            style={{ width: '100%', height: 'auto', maxHeight: '100%', objectFit: 'contain', borderRadius: '8px', boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
          />
        </div>
      ) : (
        <ProjectArtwork project={project} dense={isCompact} />
      )}

      <div className="project-card-copy">
        <div className="project-card-topline">
          <span className={`tone-pill tone-${project.accent}`}>{domainTitle}</span>
          <span className="project-year">{project.year}</span>
        </div>

        <div className="project-headline">
          <h3>{project.name}</h3>
          <p className="project-strap">{project.strap}</p>
        </div>

        {metrics.length > 0 && (
          <motion.div
            className="metric-badge-row"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            {metrics.map((metric) => (
              <span key={`${project.slug}-metric-${metric}`} className="metric-badge">
                {metric}
              </span>
            ))}
          </motion.div>
        )}

        <p className="project-description">{isCompact ? project.summary : project.description}</p>

        <div className="chip-row">
          {visibleStack.map((item) => (
            <span key={`${project.slug}-${item}`} className="chip">
              {item}
            </span>
          ))}
        </div>

        <div className="project-actions">
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
          <Link className="button primary" to={`/projects/${project.slug}`}>
            {isCompact ? 'Open case study' : 'Read case study'}
          </Link>
          {project.repo ? (
            <a className="button primary" href={project.repo} target="_blank" rel="noreferrer">
              Open repo
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  )
}
