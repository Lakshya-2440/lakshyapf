import { Link, useSearchParams } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import { domains, featuredProjects, projects } from '../data/siteData'

export default function ProjectsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const requestedDomain = searchParams.get('domain')

  const activeDomain = domains.some((domain) => domain.slug === requestedDomain)
    ? requestedDomain
    : 'all'

  const filteredProjects =
    activeDomain === 'all'
      ? projects
      : projects.filter((project) => project.domainSlug === activeDomain)

  const featuredInView =
    activeDomain === 'all'
      ? featuredProjects
      : featuredProjects.filter((project) => project.domainSlug === activeDomain)

  const setActiveDomain = (slug) => {
    const nextParams = new URLSearchParams(searchParams)

    if (slug === 'all') {
      nextParams.delete('domain')
    } else {
      nextParams.set('domain', slug)
    }

    setSearchParams(nextParams)
  }

  return (
    <div className="page projects-page">
      <section className="page-hero page-hero-alt">
        <div className="container page-hero-grid projects-hero-grid">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow">Projects hub / category filters / case-study archive</p>
            <h1>
              A project page with more
              <span className="accent-serif"> structure</span> than a grid dump.
            </h1>
            <p className="hero-body">
              Domains now live inside this page. Browse by project type, filter instantly,
              and open full case studies without jumping across separate sections of the site.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#featured">
                Jump to featured work
              </a>
              <a className="button secondary" href="#project-categories">
                Browse by category
              </a>
            </div>
          </div>

          <div className="overview-card" data-reveal>
            <p className="eyebrow">Project map</p>
            <div className="overview-stats">
              <div>
                <span>Featured</span>
                <strong>{featuredInView.length}</strong>
              </div>
              <div>
                <span>Total</span>
                <strong>{filteredProjects.length}</strong>
              </div>
              <div>
                <span>Categories</span>
                <strong>{domains.length}</strong>
              </div>
            </div>
            <p className="overview-note">
              {activeDomain === 'all'
                ? 'Showing all project types in one place.'
                : 'Filtered to one category. Switch tabs to compare different project types.'}
            </p>
          </div>
        </div>
      </section>

      <section id="project-categories" className="section-block">
        <div className="container">
          <SectionHeading
            eyebrow="Project categories"
            title="All project types, one clean mechanism."
            body="Use filters for quick switching, then scan category cards to understand where each type shines."
          />

          <div className="project-filter-row" data-reveal>
            <button
              type="button"
              className={`filter-chip ${activeDomain === 'all' ? 'is-active' : ''}`}
              onClick={() => setActiveDomain('all')}
            >
              All types ({projects.length})
            </button>

            {domains.map((domain) => {
              const count = projects.filter((project) => project.domainSlug === domain.slug).length

              return (
                <button
                  key={domain.slug}
                  type="button"
                  className={`filter-chip tone-${domain.accent} ${
                    activeDomain === domain.slug ? 'is-active' : ''
                  }`}
                  onClick={() => setActiveDomain(domain.slug)}
                >
                  {domain.title} ({count})
                </button>
              )
            })}
          </div>

          <div className="project-type-grid">
            {domains.map((domain) => {
              const domainProjects = projects.filter((project) => project.domainSlug === domain.slug)
              const featuredCount = featuredProjects.filter(
                (project) => project.domainSlug === domain.slug,
              ).length

              return (
                <article
                  key={domain.slug}
                  className={`project-type-card tone-${domain.accent} ${
                    activeDomain === domain.slug ? 'is-active' : ''
                  }`}
                  data-reveal
                >
                  <p className="eyebrow">{domain.strap}</p>
                  <h3>{domain.title}</h3>
                  <p>{domain.description}</p>

                  <div className="project-type-stats">
                    <span>{domainProjects.length} projects</span>
                    <span>{featuredCount} featured</span>
                  </div>

                  <ul className="domain-points">
                    {domain.capabilities.slice(0, 2).map((capability) => (
                      <li key={`${domain.slug}-${capability}`}>{capability}</li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className="button ghost"
                    onClick={() => setActiveDomain(domain.slug)}
                  >
                    Show this type
                  </button>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="featured" className="section-block">
        <div className="container">
          <SectionHeading
            eyebrow="Featured case studies"
            title={
              activeDomain === 'all'
                ? 'These should carry the first impression.'
                : 'Featured work in this selected category.'
            }
            body="Each one tells a different story, so the page does not feel repetitive."
          />

          <div className="project-grid feature-grid">
            {featuredInView.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          {featuredInView.length === 0 ? (
            <p className="project-empty" data-reveal>
              No featured cards in this category yet. The full list is still available below.
            </p>
          ) : null}
        </div>
      </section>

      <section id="all-projects" className="section-block">
        <div className="container">
          <SectionHeading
            eyebrow="All projects"
            title={
              activeDomain === 'all'
                ? 'Everything in one archive.'
                : 'Filtered archive for the selected type.'
            }
            body="Open a case study to dive deeper into challenge, build logic, and outcomes."
          />

          <div className="project-grid compact-grid">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} variant="compact" />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
