import { Link } from 'react-router-dom'
import DomainCard from '../components/DomainCard'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import {
  domains,
  emailAddress,
  featuredProjects,
  operatingModes,
} from '../data/siteData'

export default function HomePage({ signals }) {
  const leadDomains = domains.slice(0, 2)
  const focusPoints = operatingModes.slice(0, 2)

  return (
    <div className="page home-page">
      <section className="page-hero home-hero">
        <div className="container page-hero-grid">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow">Lakshya Gupta / creative technologist / 2026 portfolio system</p>
            <h1>
              Creative systems for products that want to feel
              <span className="accent-serif"> remembered.</span>
            </h1>
            <p className="hero-body">
              I design and build web experiences with a stronger pulse than standard
              portfolio work: realtime products, spatial interface experiments,
              AI-fluent tools, and campaign surfaces with actual visual direction.
            </p>

            <div className="hero-actions">
              <Link className="button primary" to="/projects">
                Explore projects
              </Link>
              <a className="button secondary" href={`mailto:${emailAddress}`}>
                Email Lakshya
              </a>
            </div>
          </div>

          <div className="signal-stage" data-reveal>
            <article className="signal-card signal-card-hero">
              <span className="card-label">Current focus</span>
              <h2>Selected product work with a stronger creative edge.</h2>
              <p>
                Enough range to feel multidimensional. Enough restraint to stay clear.
              </p>

              <div className="hero-stat-row">
                <span>{signals.publicRepos} public repos</span>
                <span>{signals.activeProjects} original projects</span>
                <span>building since {signals.started}</span>
              </div>
            </article>

            <article className="signal-card signal-card-floating tone-cyan">
              <span className="card-label">Best starting points</span>
              <div className="domain-mini-grid compact">
                {leadDomains.map((domain) => (
                  <Link key={domain.slug} to={`/domains/${domain.slug}`}>
                    <strong>{domain.title}</strong>
                    <span>{domain.description}</span>
                  </Link>
                ))}
              </div>
              <p className="signal-note">{signals.followers} GitHub followers and growing public work.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <SectionHeading
            eyebrow="Selected work"
            title="A smaller, stronger first look."
            body="The homepage only surfaces a few projects. The deeper archive lives one click away."
          />

          <div className="project-grid compact-grid">
            {featuredProjects.slice(0, 2).map((project) => (
              <ProjectCard key={project.slug} project={project} variant="compact" />
            ))}
          </div>

          <div className="section-actions" data-reveal>
            <Link className="button primary" to="/projects">
              See full project archive
            </Link>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <SectionHeading
            eyebrow="Domain pages"
            title="The rest of the work is organized by domain."
            body="Each lane has its own page so the homepage stays focused and the broader range still remains easy to browse."
          />

          <div className="domain-grid">
            {domains.map((domain) => (
              <DomainCard key={domain.slug} domain={domain} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container quiet-cta" data-reveal>
          <div className="quiet-cta-copy">
            <p className="eyebrow">Approach</p>
            <h2>Clearer hierarchy. Better signal.</h2>
            <p>
              The work spans multiple domains, but the site should still feel calm at first glance.
            </p>
          </div>

          <div className="quiet-point-list">
            {focusPoints.map((mode) => (
              <article key={mode.title}>
                <h3>{mode.title}</h3>
                <p>{mode.body}</p>
              </article>
            ))}
            <div className="quiet-links">
              <Link to="/about">Read the profile</Link>
              <a href={`mailto:${emailAddress}`}>Open an email thread</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
