import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import {
  FaAward,
  FaComments,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLink,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa'
import { socialLinks } from '../data/siteData'

export default function ConnectPage() {
  const socialVisuals = {
    GitHub: { Icon: FaGithub, brand: '#161b22' },
    LinkedIn: { Icon: FaLinkedinIn, brand: '#0a66c2' },
    Instagram: { Icon: FaInstagram, brand: '#e1306c' },
    Holopin: { Icon: FaAward, brand: '#f59e0b' },
    YouTube: { Icon: FaYoutube, brand: '#ff0033' },
    Email: { Icon: FaEnvelope, brand: '#10b981' },
  }

  const nodeLayout = {
    GitHub: { x: 14, y: 30 },
    LinkedIn: { x: 31, y: 18 },
    Instagram: { x: 69, y: 18 },
    Holopin: { x: 86, y: 33 },
    YouTube: { x: 70, y: 76 },
    Email: { x: 30, y: 76 },
  }

  const channels = socialLinks.map((item) => {
    const visual = socialVisuals[item.label] ?? { Icon: FaLink, brand: '#6b7280' }
    const layout = nodeLayout[item.label] ?? { x: 50, y: 50 }

    return {
      ...item,
      ...visual,
      ...layout,
    }
  })

  return (
    <div className="page connect-page">
      <section className="page-hero page-hero-alt">
        <motion.div
          className="container narrow-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <h1>
            Start a conversation
            <span className="accent-serif"> anywhere you prefer.</span>
          </h1>
        </motion.div>
      </section>

      <section className="section-block">
        <div className="container">
          <SectionHeading
            eyebrow="All social links"
            title="One place for all contact paths."
            body="Follow the orbit or choose from the cards below. Every link opens the right profile."
            align="stacked"
          />

          <div className="connect-layout">
            <motion.div
              className="connect-orbit-panel"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <div className="connect-orbit">
                <svg className="connect-network-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  {channels.map((item) => (
                    <motion.line
                      key={`link-${item.label}`}
                      x1="50"
                      y1="50"
                      x2={item.x}
                      y2={item.y}
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, ease: 'easeInOut' }}
                    />
                  ))}
                </svg>

                <div className="connect-orbit-core">
                  <FaComments className="connect-icon" aria-hidden="true" />
                  <span className="eyebrow">Live</span>
                  <strong>Connect</strong>
                </div>

                {channels.map((item, index) => (
                  <motion.a
                    key={item.label}
                    className="connect-orbit-node"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      '--node-order': index,
                      '--node-x': `${item.x}%`,
                      '--node-y': `${item.y}%`,
                      '--brand': item.brand,
                    }}
                    aria-label={`Open ${item.label}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1, type: 'spring', stiffness: 120 }}
                    whileHover={{ scale: 1.25, zIndex: 10 }}
                  >
                    <item.Icon className="connect-icon" aria-hidden="true" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <div className="connect-grid">
              {channels.map((item, index) => (
                <motion.a
                  key={item.label}
                  className="connect-card"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                >
                  <span className="connect-logo" style={{ '--brand': item.brand }} aria-hidden="true">
                    <item.Icon className="connect-icon" aria-hidden="true" />
                  </span>
                  <span className="eyebrow">{item.label}</span>
                  <strong>{item.label}</strong>
                  <p>Open profile</p>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}