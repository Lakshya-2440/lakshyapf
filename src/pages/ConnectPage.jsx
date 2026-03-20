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
        <div className="container narrow-center" data-reveal>
          <p className="eyebrow">Conversation / contact / social channels</p>
          <h1>
            Start a conversation
            <span className="accent-serif"> anywhere you prefer.</span>
          </h1>
          <p className="hero-body">
            Pick the channel that is easiest for you. Every profile below is active and checked.
          </p>
        </div>
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
            <div className="connect-orbit-panel" data-reveal>
              <div className="connect-orbit">
                <svg className="connect-network-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  {channels.map((item) => (
                    <line key={`link-${item.label}`} x1="50" y1="50" x2={item.x} y2={item.y} />
                  ))}
                </svg>

                <div className="connect-orbit-core">
                  <FaComments className="connect-icon" aria-hidden="true" />
                  <span className="eyebrow">Live</span>
                  <strong>Connect</strong>
                </div>

                {channels.map((item, index) => (
                  <a
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
                  >
                    <item.Icon className="connect-icon" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            <div className="connect-grid">
              {channels.map((item) => (
                <a
                  key={item.label}
                  className="connect-card"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="connect-logo" style={{ '--brand': item.brand }} aria-hidden="true">
                    <item.Icon className="connect-icon" aria-hidden="true" />
                  </span>
                  <span className="eyebrow">{item.label}</span>
                  <strong>{item.label}</strong>
                  <p>Open profile</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}