import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import { domains, featuredProjects, getProjectsByDomain, projects } from '../data/siteData'

export default function ProjectsPage() {
  return (
    <div className="page projects-page">
      <section className="page-hero page-hero-alt">
        <div className="container page-hero-grid projects-hero-grid">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow">Projects archive / case-study routes / portfolio composition</p>
            <h1>
              A project page with more
              <span className="accent-serif"> architecture</span>
              than a grid dump.
            </h1>
            <p className="hero-body">
              Start with the lead case studies. Use the archive below to scan the wider body of work by domain.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#featured">
                Jump to featured work
              </a>
              <Link className="button secondary" to="/domains">
                View domain pages
              </Link>
            </div>
          </div>

          <div className="overview-card" data-reveal>
            <p className="eyebrow">Project map</p>
            <div className="overview-stats">
              <div>
                <span>Featured</span>
                <strong>{featuredProjects.length}</strong>
              </div>
              <div>
                <span>Total</span>
                <strong>{projects.length}</strong>
              </div>
              <div>
                <span>Domains</span>
                <strong>{domains.length}</strong>
              </div>
            </div>
            <p className="overview-note">Built to scan quickly, then open into detail only where needed.</p>
          </div>
        </div>
      </section>

      <section id="featured" className="section-block">
        <div className="container">
          <SectionHeading
            eyebrow="Featured case studies"
            title="These should carry the first impression."
            body="Each one tells a different story, so the page does not feel repetitive."
          />

          <div className="project-grid feature-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="archive" className="section-block">
        <div className="container">
          <SectionHeading
            eyebrow="Archive by domain"
            title="The wider archive stays simple."
            body="Grouped by domain, stripped back to the essentials."
          />

          <div className="archive-grid">
            {domains.map((domain) => {
              const domainProjects = getProjectsByDomain(domain.slug)

              return (
                <article key={domain.slug} className={`archive-column tone-${domain.accent}`} data-reveal>
                  <div className="archive-column-header">
                    <div>
                      <p className="eyebrow">{domain.strap}</p>
                      <h3>{domain.title}</h3>
                    </div>
                    <Link to={`/domains/${domain.slug}`}>Open domain page</Link>
                  </div>

                  <div className="archive-list">
                    {domainProjects.map((project) => (
                      <Link
                        key={project.slug}
                        className="archive-item"
                        to={`/projects/${project.slug}`}
                      >
                        <strong>{project.name}</strong>
                        <span>{project.year}</span>
                      </Link>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
