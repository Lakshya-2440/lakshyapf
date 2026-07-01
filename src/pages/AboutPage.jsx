import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import { operatingModes, socialLinks, timeline } from '../data/siteData'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: [0.2, 0.8, 0.2, 1],
    },
  }),
}

function IsometricJourneyRoadmap() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const pathLength = useTransform(scrollYProgress, [0.15, 0.85], [0, 1])
  const roadY = useTransform(scrollYProgress, [0, 1], [0, -120])

  const [rotates, setRotates] = useState(timeline.map(() => ({ x: 0, y: 0 })))

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rX = ((y - centerY) / centerY) * -15
    const rY = ((x - centerX) / centerX) * 15
    setRotates(prev => prev.map((r, i) => i === index ? { x: rX, y: rY } : r))
  }

  const handleMouseLeave = (index) => {
    setRotates(prev => prev.map((r, i) => i === index ? { x: 0, y: 0 } : r))
  }

  const stageIcons = [
    "💻", // Coding
    "🚀", // Founder
    "⚡", // Big Code / Open Source
    "🌐", // HPAIR / AI Systems
  ]

  const decos = [
    { left: '10%', top: '15%', label: '📦 OOP Base', delay: 0 },
    { right: '12%', top: '35%', label: '🏗️ Sparker Kit', delay: 0.2 },
    { left: '15%', top: '60%', label: '⚡ Big Code', delay: 0.4 },
    { right: '15%', top: '82%', label: '🤖 AI RAG Engines', delay: 0.6 },
  ]

  return (
    <section ref={containerRef} className="iso-roadmap-container">
      <div className="parallax-bg-shape shape-1" />
      <div className="parallax-bg-shape shape-2" />
      <div className="parallax-bg-shape shape-3" />

      <motion.div className="iso-roadmap-svg-container" style={{ y: roadY }}>
        <svg className="iso-roadmap-svg" viewBox="0 0 1200 1600" preserveAspectRatio="xMidYMin slice">
          <defs>
            <linearGradient id="roadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ff4b2b" />
              <stop offset="50%" stopColor="#ff416c" />
              <stop offset="100%" stopColor="#d61a23" />
            </linearGradient>
          </defs>
          
          <path
            className="iso-road-path-bg"
            d="M 600,0 C 200,300 1000,500 600,800 C 200,1100 1000,1300 600,1600"
          />
          
          <motion.path
            className="iso-road-path"
            d="M 600,0 C 200,300 1000,500 600,800 C 200,1100 1000,1300 600,1600"
            style={{ pathLength }}
          />

          <motion.path
            className="iso-road-dash"
            d="M 600,0 C 200,300 1000,500 600,800 C 200,1100 1000,1300 600,1600"
            style={{ pathLength }}
          />
        </svg>
      </motion.div>

      {decos.map((deco) => (
        <motion.div
          key={deco.label}
          className="iso-node-decorative"
          style={{
            left: deco.left,
            right: deco.right,
            top: deco.top,
          }}
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: deco.delay, ease: 'easeInOut' }}
        >
          <div style={{
            background: 'rgba(255,255,255,0.9)',
            border: '2px solid var(--accent-orange)',
            padding: '0.8rem 1.5rem',
            borderRadius: '16px',
            boxShadow: '0 15px 30px rgba(0,0,0,0.12)',
            fontWeight: 'bold',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.9rem',
            transform: 'perspective(1000px) rotateX(15deg) rotateY(-15deg)',
          }}>
            {deco.label}
          </div>
        </motion.div>
      ))}

      <div className="iso-grid">
        {timeline.map((item, i) => {
          const isLeft = i % 2 === 0
          return (
            <div key={item.year} className={`iso-milestone ${isLeft ? 'left' : 'right'}`}>
              <motion.div
                className="iso-card"
                style={{
                  perspective: 1000,
                  transformStyle: 'preserve-3d',
                }}
                initial={{ opacity: 0, x: isLeft ? -100 : 100, y: 50, rotateX: 15, rotateY: isLeft ? 15 : -15 }}
                whileInView={{ opacity: 1, x: 0, y: 0, rotateX: rotates[i]?.x || 0, rotateY: rotates[i]?.y || 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ type: 'spring', stiffness: 250, damping: 25 }}
                onMouseMove={(e) => handleMouseMove(e, i)}
                onMouseLeave={() => handleMouseLeave(i)}
              >
                <div className="iso-icon-stage">
                  {stageIcons[i] || "🎯"}
                </div>

                <div className="iso-signpost">
                  <span>📍</span> {item.year}
                </div>

                <h3 className="iso-title">{item.title}</h3>
                <p className="iso-desc">{item.description}</p>
              </motion.div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default function AboutPage({ signals }) {
  const primaryLinks = socialLinks.filter((item) =>
    ['GitHub', 'LinkedIn', 'Email'].includes(item.label),
  )

  const mapNodes = [
    { id: 'simplicity', label: 'Simplicity', x: 19, y: 27 },
    { id: 'craft', label: 'Craft', x: 56, y: 17 },
    { id: 'performance', label: 'Performance', x: 87, y: 32 },
    { id: 'empathy', label: 'Empathy', x: 33, y: 61 },
    { id: 'systems', label: 'Systems', x: 66, y: 56 },
    { id: 'curiosity', label: 'Curiosity', x: 52, y: 84 },
  ]

  const mapLinks = [
    ['simplicity', 'craft'],
    ['craft', 'performance'],
    ['simplicity', 'empathy'],
    ['empathy', 'systems'],
    ['systems', 'craft'],
    ['systems', 'performance'],
    ['empathy', 'curiosity'],
    ['curiosity', 'systems'],
  ]

  const getNode = (id) => mapNodes.find((node) => node.id === id)

  return (
    <div className="page about-page">
      <section className="page-hero page-hero-alt">
        <div className="container page-hero-grid">
          <motion.div
            className="hero-copy"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <p className="eyebrow">About / studio profile / working style</p>
            <h1>
              Multi-disciplinary by design,
              <span className="accent-serif"> not by accident.</span>
            </h1>
            <p className="hero-body">
              Human-centered maker blending design sense with engineering rigor. I turn complex
              problems into simple, beautiful, and intuitive experiences from concept to
              production.
            </p>

            <div className="hero-actions">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
                <Link className="button primary" to="/connect">
                  Start an email thread
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
                <Link className="button secondary" to="/projects">
                  Review projects
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="availability-card availability-card-compact"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay: 0.15 }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
          >
            <p className="eyebrow">Live profile snapshot</p>
            <div className="fact-list">
              <div>
                <span>Public repos</span>
                <strong>{signals.publicRepos}</strong>
              </div>
              <div>
                <span>Followers</span>
                <strong>{signals.followers}</strong>
              </div>
              <div>
                <span>Building since</span>
                <strong>{signals.started}</strong>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-block philosophy-map-block">
        <div className="container">
          <motion.div
            className="philosophy-map-surface"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className="philosophy-map-frame" role="img" aria-label="Philosophy map">
              <p className="eyebrow">Philosophy map</p>
              <svg
                className="philosophy-map-svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {mapLinks.map(([from, to], idx) => {
                  const fromNode = getNode(from)
                  const toNode = getNode(to)

                  if (!fromNode || !toNode) {
                    return null
                  }

                  return (
                    <motion.line
                      key={`${from}-${to}`}
                      x1={fromNode.x}
                      y1={fromNode.y}
                      x2={toNode.x}
                      y2={toNode.y}
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.1, ease: 'easeInOut' }}
                    />
                  )
                })}
              </svg>

              <div className="philosophy-map-nodes">
                {mapNodes.map((node, idx) => (
                  <motion.div
                    key={node.id}
                    className="philosophy-node"
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.1, type: 'spring', stiffness: 100 }}
                    whileHover={{ scale: 1.15, zIndex: 10 }}
                  >
                    <span aria-hidden="true" />
                    <strong>{node.label}</strong>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <SectionHeading
            eyebrow="Timeline & Journey"
            title="Public work, sharper signal."
            body="A comprehensive isometric winding path through how the work evolved."
            align="center"
          />

          <IsometricJourneyRoadmap />
        </div>
      </section>

      <section className="section-block">
        <div className="container split-layout">
          <div>
            <SectionHeading
              eyebrow="Working principles"
              title="A few principles carry across the work."
              body="Short enough to scan, strong enough to be useful."
              align="stacked"
            />

            <div className="process-grid">
              {operatingModes.slice(0, 3).map((mode, i) => (
                <motion.article
                  key={mode.title}
                  className="process-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.15, ease: [0.2, 0.8, 0.2, 1] }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                >
                  <h3>{mode.title}</h3>
                  <p>{mode.body}</p>
                </motion.article>
              ))}
            </div>
          </div>

          <motion.aside
            className="social-panel"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <p className="eyebrow">Elsewhere</p>
            <div className="related-links">
              {primaryLinks.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ x: 4 }}
                >
                  <strong>{item.label}</strong>
                  <span>Open profile</span>
                </motion.a>
              ))}
            </div>
          </motion.aside>
        </div>
      </section>
    </div>
  )
}
