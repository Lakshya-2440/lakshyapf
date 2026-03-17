import { Link } from 'react-router-dom'
import DomainCard from '../components/DomainCard'
import SectionHeading from '../components/SectionHeading'
import { domains } from '../data/siteData'

export default function DomainsPage() {
  return (
    <div className="page domains-page">
      <section className="page-hero page-hero-alt">
        <div className="container page-hero-grid">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow">Domain map / practice areas / work categories</p>
            <h1>
              Four lanes,
              <span className="accent-serif"> one portfolio voice.</span>
            </h1>
            <p className="hero-body">
              The work is split into clear lanes so recruiters and collaborators can jump straight to the kind of work they care about.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#domain-grid">
                Browse domain pages
              </a>
              <Link className="button secondary" to="/projects">
                Return to projects
              </Link>
            </div>
          </div>

          <div className="quote-card" data-reveal>
            <p className="eyebrow">Why this page exists</p>
            <h2>
              Breadth is only useful
              <span className="accent-serif"> when it stays legible.</span>
            </h2>
            <p>
              Each lane below frames a different capability without making the whole site feel overloaded.
            </p>
          </div>
        </div>
      </section>

      <section id="domain-grid" className="section-block">
        <div className="container">
          <SectionHeading
            eyebrow="Practice areas"
            title="Each page sells a different capability."
            body="Pick the lane that matches the brief."
          />

          <div className="domain-grid">
            {domains.map((domain) => (
              <DomainCard key={domain.slug} domain={domain} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
