import { AnimatePresence, motion } from 'framer-motion'
import { Link, NavLink, useLocation, useOutlet } from 'react-router-dom'
import { navigation, socialLinks } from '../data/siteData'
import { useSiteEffects } from '../hooks/useSiteEffects'
import { cloneElement } from 'react'

export default function SiteShell() {
  const location = useLocation()
  const outlet = useOutlet()
  const footerSocials = socialLinks

  useSiteEffects(location)

  return (
    <>
      <div className="progress-bar" aria-hidden="true" />

      <motion.header
        className="site-header"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <div className="container header-row">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link className="brand" to="/">
              <span className="brand-mark" aria-hidden="true">
                <img src="/logo-mark.png" alt="" />
              </span>
              <span className="brand-copy">
                <strong>Lakshya Gupta</strong>
                <span>Sophomore | Tech & Business @NST’29 | love building cool stuff</span>
              </span>
            </Link>
          </motion.div>

          <nav className="site-nav" aria-label="Primary">
            {navigation.map((item) => (
              <motion.span key={item.to} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => (isActive ? 'nav-link is-active' : 'nav-link')}
                  end={item.to === '/'}
                >
                  {item.label}
                </NavLink>
              </motion.span>
            ))}
          </nav>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link className="header-cta" to="/connect">
              Start a conversation
            </Link>
          </motion.div>
        </div>
      </motion.header>

      <main className="site-main">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {outlet ? cloneElement(outlet, { key: location.pathname }) : null}
          </motion.div>
        </AnimatePresence>
      </main>

      <motion.footer
        className="site-footer"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <div className="container footer-grid">
          <div className="footer-copy">
            <p className="eyebrow">Lakshya Gupta / creative technology portfolio</p>
            <h2>
              Built to feel more like a studio site than a resume dressed up as one.
            </h2>
          </div>

          <div className="footer-links">
            <div className="footer-socials">
              {footerSocials.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.footer>
    </>
  )
}
