import { motion } from 'framer-motion'
import { socialLinks } from '../data/siteData'

export default function ConnectPage() {
  const primaryLinks = socialLinks.filter(l => ['LinkedIn', 'GitHub', 'Email'].includes(l.label))
  const secondaryLinks = socialLinks.filter(l => !['LinkedIn', 'GitHub', 'Email'].includes(l.label))

  return (
    <div className="page brutal-connect-page">
      <div className="brutal-layout">
        
        {/* Floating Card */}
        <motion.div 
          className="lakshya-card"
          initial={{ opacity: 0, y: 50, rotate: -3 }}
          animate={{ opacity: 1, y: 0, rotate: -1 }}
          transition={{ duration: 1, delay: 0.2, type: 'spring' }}
          whileHover={{ rotate: 1, scale: 1.02 }}
          drag
          dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        >
          <div className="card-stars">
            <svg className="black-star" viewBox="0 0 100 100">
              <path d="M50 0 L55 45 L100 50 L55 55 L50 100 L45 55 L0 50 L45 45 Z" fill="#000" />
            </svg>
            <div className="red-ellipse"></div>
            <svg className="red-star" viewBox="0 0 100 100">
              <polygon points="50,5 61,39 98,39 68,60 79,95 50,75 21,95 32,60 2,39 39,39" fill="#ff0033" />
            </svg>
            <div className="red-glow"></div>
          </div>
          <h2 className="card-name">LAKSHYA</h2>
          <div className="card-footer">
            <div className="card-line"></div>
            <span className="card-tagline">BUILDING COOL STUFF</span>
            <div className="card-line"></div>
          </div>
        </motion.div>

        <motion.h1 
          className="brutal-headline"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Get in touch
        </motion.h1>

        <div className="brutal-content">
          <div className="brutal-col label-col">
            <motion.span 
              className="brutal-label"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            >
              REPPED BY
            </motion.span>
            <motion.span 
              className="brutal-line"
              initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.5 }}
            ></motion.span>
          </div>

          <div className="brutal-col links-col">
            {primaryLinks.map((link, i) => (
              <motion.a 
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="brutal-primary-link"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
              >
                {link.label.toUpperCase()}
                <span className="link-underline"></span>
              </motion.a>
            ))}
          </div>

          <div className="brutal-col secondary-col">
            {secondaryLinks.map((link, i) => (
              <motion.a 
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="brutal-secondary-link"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}