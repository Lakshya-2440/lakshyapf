import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { emailAddress, navigation, socialLinks } from '../data/siteData'
import { useSiteEffects } from '../hooks/useSiteEffects'

export default function SiteShell() {
  const location = useLocation()
  const footerSocials = socialLinks.filter((item) =>
    ['GitHub', 'LinkedIn', 'Email'].includes(item.label),
  )

  useSiteEffects(location)

  return (
    <>
      <div className="progress-bar" aria-hidden="true" />

      <header className="site-header">
        <div className="container header-row">
          <Link className="brand" to="/">
            <span className="brand-mark">LG</span>
            <span className="brand-copy">
              <strong>Lakshya Gupta</strong>
              <span>Creative technologist / portfolio studio</span>
            </span>
          </Link>

          <nav className="site-nav" aria-label="Primary">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => (isActive ? 'nav-link is-active' : 'nav-link')}
                end={item.to === '/'}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <a className="header-cta" href={`mailto:${emailAddress}`}>
            Start a conversation
          </a>
        </div>
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-copy">
            <p className="eyebrow">Lakshya Gupta / creative technology portfolio</p>
            <h2>
              Built to feel more like a studio site than a resume dressed up as one.
            </h2>
          </div>

          <div className="footer-links">
            <div className="footer-nav">
              {navigation.map((item) => (
                <Link key={`footer-${item.to}`} to={item.to}>
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="footer-socials">
              {footerSocials.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
