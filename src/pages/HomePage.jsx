import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'
import DomainCard from '../components/DomainCard'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import {
  domains,
  emailAddress,
  featuredProjects,
  operatingModes,
} from '../data/siteData'

function MagneticButton({ children }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = (e) => {
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const centerFixedX = left + width / 2
    const centerFixedY = top + height / 2
    x.set((e.clientX - centerFixedX) * 0.25)
    y.set((e.clientY - centerFixedY) * 0.25)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY, display: 'inline-block' }}
    >
      {children}
    </motion.div>
  )
}

// --- PREMIUM 3D TILT CARD WITH DYNAMIC MOUSE GLARE ---
function TiltCard({ children, className }) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rX = ((y - centerY) / centerY) * -12
    const rY = ((x - centerX) / centerX) * 12
    setRotateX(rX)
    setRotateY(rY)

    // Calculate percentage for glare
    const percentX = (x / rect.width) * 100
    const percentY = (y / rect.height) * 100
    setGlarePos({ x: percentX, y: percentY })
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.article
      className={className}
      style={{ perspective: 1200, transformStyle: 'preserve-3d', position: 'relative' }}
      animate={{ rotateX, rotateY }}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="premium-glare-overlay" 
        style={{
          background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.35), transparent 60%)`
        }}
      />
      {children}
    </motion.article>
  )
}

export default function HomePage({ signals }) {
  const leadDomains = domains.slice(0, 2)
  const focusPoints = operatingModes.slice(0, 2)

  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Safe background parallax (will never hide content on route change)
  const heroGridY = useTransform(scrollYProgress, [0, 1], [0, -350])
  const heroBgY1 = useTransform(scrollYProgress, [0, 1], [0, -280])
  const heroBgY2 = useTransform(scrollYProgress, [0, 1], [0, 220])

  const titleWords = [
    { text: "Creative", serif: false },
    { text: "systems", serif: false },
    { text: "for", serif: false },
    { text: "products", serif: false },
    { text: "that", serif: false },
    { text: "want", serif: false },
    { text: "to", serif: false },
    { text: "feel", serif: false },
    { text: "remembered.", serif: true },
  ]

  return (
    <div ref={containerRef} className="page home-page" style={{ position: 'relative' }}>
      {/* High-End Parallax Ambient Layers */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
        <motion.div className="hero-ambient-grid" style={{ y: heroGridY }} />
        <motion.div className="parallax-bg-shape shape-1" style={{ y: heroBgY1 }} />
        <motion.div className="parallax-bg-shape shape-2" style={{ y: heroBgY2 }} />
      </div>

      <section className="page-hero home-hero" style={{ position: 'relative', zIndex: 2 }}>
        <div className="container page-hero-grid">
          <div className="hero-copy">
            <motion.div 
              className="status-pill-wrapper"
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="status-indicator" />
              <span>Lakshya Gupta / creative technologist / 2026 system</span>
            </motion.div>
            
            <div className="word-reveal-container">
              {titleWords.map((word, i) => (
                <motion.span
                  key={word.text + i}
                  className={`word-reveal ${word.serif ? 'accent-serif' : ''}`}
                  initial={{ opacity: 0, filter: 'blur(16px)', y: 40, scale: 0.85 }}
                  animate={{ opacity: 1, filter: 'blur(0px)', y: 0, scale: 1 }}
                  transition={{
                    duration: 0.9,
                    delay: i * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {word.text}
                </motion.span>
              ))}
            </div>

            <motion.p
              className="hero-body"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              I design and build web experiences with a stronger pulse than standard
              portfolio work: realtime products, spatial interface experiments,
              AI-fluent tools, and campaign surfaces with actual visual direction.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              <MagneticButton>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
                  <Link className="button primary" to="/projects">
                    Explore projects
                  </Link>
                </motion.div>
              </MagneticButton>
              <MagneticButton>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
                  <a className="button secondary" href={`mailto:${emailAddress}`}>
                    Email Lakshya
                  </a>
                </motion.div>
              </MagneticButton>
            </motion.div>

            <motion.div 
              className="hero-scroll-anchor"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <span className="scroll-line"></span>
              <span>SCROLL TO EXPLORE ARCHIVE</span>
            </motion.div>
          </div>

          <motion.div
            className="signal-stage free-text-stage"
            initial={{ opacity: 0, x: 40, filter: 'blur(10px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          >
            <div className="free-text-group">
              <span className="clean-label">/ CURRENT FOCUS</span>
              <h2 className="clean-heading">Selected product work with a stronger creative edge.</h2>
              <p className="clean-body">
                Enough range to feel multidimensional. Enough restraint to stay clear.
              </p>

              <div className="clean-stat-row">
                <div className="clean-stat">
                  <strong>{signals.publicRepos}</strong>
                  <span>public repos</span>
                </div>
                <div className="clean-stat-divider">/</div>
                <div className="clean-stat">
                  <strong>{signals.activeProjects}</strong>
                  <span>original projects</span>
                </div>
                <div className="clean-stat-divider">/</div>
                <div className="clean-stat">
                  <strong>{signals.started}</strong>
                  <span>building since</span>
                </div>
              </div>
            </div>

            <div className="free-text-group border-offset">
              <span className="clean-label">/ BEST STARTING POINTS</span>
              <div className="clean-domain-list">
                {leadDomains.map((domain) => (
                  <motion.div key={domain.slug} className="clean-domain-item" whileHover={{ x: 8 }} transition={{ duration: 0.3 }}>
                    <Link to={`/projects?domain=${domain.slug}#project-categories`}>
                      <div className="clean-domain-title">{domain.title} ↗</div>
                      <p className="clean-domain-desc">{domain.description}</p>
                    </Link>
                  </motion.div>
                ))}
              </div>
              <p className="clean-signal-note">✦ {signals.followers} GitHub followers & growing public work.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-block" style={{ position: 'relative', zIndex: 3 }}>
        <div className="container">
          <motion.div 
            className="section-premium-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-line-indicator" />
            <SectionHeading
              eyebrow="Selected work"
              title="A smaller, stronger first look."
              body="The homepage only surfaces a few projects. The deeper archive lives one click away."
            />
          </motion.div>

          <div className="project-grid compact-grid">
            {featuredProjects.slice(0, 4).map((project, idx) => (
              <motion.div
                key={project.slug}
                className="minimal-grid-item"
                initial={{ opacity: 0, y: 60, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProjectCard project={project} variant="compact" />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="section-actions"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <MagneticButton>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
                <Link className="button primary" to="/projects">
                  See full project archive
                </Link>
              </motion.div>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      <section className="section-block" style={{ position: 'relative', zIndex: 3 }}>
        <div className="container">
          <motion.div 
            className="section-premium-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-line-indicator" />
            <SectionHeading
              eyebrow="Project categories"
              title="Different project types, one clear system."
              body="Each category maps to a specific capability, now organized inside a single Projects hub."
            />
          </motion.div>

          <div className="domain-grid">
            {domains.map((domain, idx) => (
              <motion.div
                key={domain.slug}
                className="minimal-grid-item"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <DomainCard domain={domain} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block" style={{ position: 'relative', zIndex: 3 }}>
        <motion.div
          className="container quiet-cta"
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="quiet-cta-copy">
            <p className="eyebrow">Approach</p>
            <h2>Clearer hierarchy. Better signal.</h2>
            <p>
              The work spans multiple domains, but the site should still feel calm at first glance.
            </p>
          </div>

          <div className="quiet-point-list">
            {focusPoints.map((mode, i) => (
              <motion.article
                key={mode.title}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3>{mode.title}</h3>
                <p>{mode.body}</p>
              </motion.article>
            ))}
            <div className="quiet-links">
              <motion.span whileHover={{ scale: 1.05 }} style={{ display: 'inline-block' }}>
                <Link to="/about">Read the profile</Link>
              </motion.span>
              <motion.span whileHover={{ scale: 1.05 }} style={{ display: 'inline-block' }}>
                <a href={`mailto:${emailAddress}`}>Open an email thread</a>
              </motion.span>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

