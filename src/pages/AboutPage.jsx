import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import TextReveal from '../components/TextReveal'
import MagneticButton from '../components/MagneticButton'
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

function PremiumTiltCard({ children, className, style, whileHover, ...props }) {
  const cardRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 })

  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 }
  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)
  
  const rotateX = useTransform(ySpring, [-50, 50], [10, -10])
  const rotateY = useTransform(xSpring, [-50, 50], [-10, 10])

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    x.set(mouseX - centerX)
    y.set(mouseY - centerY)
    setGlarePos({ x: (mouseX / rect.width) * 100, y: (mouseY / rect.height) * 100 })
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setGlarePos({ x: 50, y: 50 })
  }

  return (
    <motion.div
      ref={cardRef}
      className={className}
      style={{
        ...style,
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1200,
        position: 'relative'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02, ...whileHover }}
      {...props}
    >
      <div 
        className="premium-glare-overlay" 
        style={{
          background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.35), transparent 60%)`
        }}
      />
      {children}
    </motion.div>
  )
}

function IsometricJourneyRoadmap() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const pathLength = useTransform(scrollYProgress, [0.15, 0.85], [0, 1])
  const roadY = useTransform(scrollYProgress, [0, 1], [0, -120])

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
          <div className="glass-deco-pill" style={{
            background: 'rgba(255,255,255,0.7)',
            backdropFilter: 'blur(12px)',
            border: '2px solid rgba(255, 75, 43, 0.4)',
            padding: '0.8rem 1.5rem',
            borderRadius: '999px',
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
              <PremiumTiltCard
                className="iso-card"
                initial={{ opacity: 0, x: isLeft ? -100 : 100, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ type: 'spring', stiffness: 250, damping: 25 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="iso-icon-stage">
                  {stageIcons[i] || "🎯"}
                </div>

                <div className="iso-signpost">
                  <span>📍</span> {item.year}
                </div>

                <h3 className="iso-title">{item.title}</h3>
                <p className="iso-desc">{item.description}</p>
              </PremiumTiltCard>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function PhilosophyNode({ node, idx, mouseX, mouseY }) {
  const depthX = ((node.x - 50) / 50) * 10
  const depthY = ((node.y - 50) / 50) * 10
  const nodeX = useTransform(mouseX, [-1, 1], [-depthX, depthX])
  const nodeY = useTransform(mouseY, [-1, 1], [-depthY, depthY])

  return (
    <motion.div
      className="philosophy-node"
      style={{ left: `${node.x}%`, top: `${node.y}%`, x: nodeX, y: nodeY }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 + idx * 0.1, type: 'spring', stiffness: 100 }}
      whileHover={{ scale: 1.15, zIndex: 10 }}
    >
      <div className="philosophy-node-pill">
        <span className="pulse-dot" aria-hidden="true" />
        <strong>{node.label}</strong>
      </div>
    </motion.div>
  )
}

function InteractivePhilosophyMap({ mapNodes, mapLinks, getNode }) {
  const frameRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleMouseMove = (e) => {
    if (!frameRef.current) return
    const rect = frameRef.current.getBoundingClientRect()
    // calculate mouse pos relative to center, normalized -1 to 1
    const mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1
    const mouseY = ((e.clientY - rect.top) / rect.height) * 2 - 1
    x.set(mouseX)
    y.set(mouseY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div 
      ref={frameRef}
      className="philosophy-map-frame" 
      role="img" 
      aria-label="Philosophy map"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
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

          if (!fromNode || !toNode) return null

          return (
            <g key={`${from}-${to}`}>
              {/* Background faint line */}
              <line
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                className="map-link-bg"
              />
              {/* Animated drawing line */}
              <motion.line
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                className="map-link-active"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: idx * 0.1, ease: 'easeInOut' }}
              />
            </g>
          )
        })}
      </svg>

      <div className="philosophy-map-nodes">
        {mapNodes.map((node, idx) => (
          <PhilosophyNode key={node.id} node={node} idx={idx} mouseX={x} mouseY={y} />
        ))}
      </div>
    </div>
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
              <TextReveal text="Multi-disciplinary by design," delay={0} el="div" />
              <span className="accent-serif">
                <TextReveal text="not by accident." delay={0.4} el="div" />
              </span>
            </h1>
            <p className="hero-body">
              Human-centered maker blending design sense with engineering rigor. I turn complex
              problems into simple, beautiful, and intuitive experiences from concept to
              production.
            </p>

            <div className="hero-actions">
              <MagneticButton>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
                  <Link className="button primary" to="/connect">
                    Start an email thread
                  </Link>
                </motion.div>
              </MagneticButton>
              <MagneticButton>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
                  <Link className="button secondary" to="/projects">
                    Review projects
                  </Link>
                </motion.div>
              </MagneticButton>
            </div>
          </motion.div>

          <PremiumTiltCard
            className="availability-card availability-card-compact"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay: 0.15 }}
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
          </PremiumTiltCard>
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
            <InteractivePhilosophyMap mapNodes={mapNodes} mapLinks={mapLinks} getNode={getNode} />
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
                <PremiumTiltCard
                  key={mode.title}
                  className="process-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.15, ease: [0.2, 0.8, 0.2, 1] }}
                >
                  <h3>{mode.title}</h3>
                  <p>{mode.body}</p>
                </PremiumTiltCard>
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
                  className="social-snappy-link"
                  whileHover="hover"
                  initial="initial"
                >
                  <strong>{item.label}</strong>
                  <div className="social-snappy-text">
                    <span>Open profile</span>
                    <motion.span 
                      className="snappy-arrow"
                      variants={{
                        initial: { x: -8, opacity: 0 },
                        hover: { x: 0, opacity: 1 }
                      }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    >
                      ↗
                    </motion.span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.aside>
        </div>
      </section>
    </div>
  )
}
