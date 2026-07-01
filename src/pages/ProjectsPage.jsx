import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { Link, useSearchParams } from 'react-router-dom'
import { useRef } from 'react'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import { domains, featuredProjects, projects } from '../data/siteData'

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const chipVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.04,
      duration: 0.35,
      ease: [0.2, 0.8, 0.2, 1],
    },
  }),
}

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

  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, 180])
  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, -60])
  const overviewCardY = useTransform(scrollYProgress, [0, 1], [0, -120])

  return (
    <div ref={containerRef} className="page projects-page" style={{ position: 'relative', overflow: 'hidden' }}>
      <motion.div className="parallax-bg-shape shape-1" style={{ y: bgY1 }} />
      <motion.div className="parallax-bg-shape shape-3" style={{ y: bgY2 }} />

      <section className="page-hero page-hero-alt">
        <div className="container page-hero-grid projects-hero-grid">
          <motion.div
            className="hero-copy"
            style={{ y: heroTextY }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          >
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
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
                <a className="button primary" href="#featured">
                  Jump to featured work
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
                <a className="button secondary" href="#project-categories">
                  Browse by category
                </a>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="overview-card"
            style={{ y: overviewCardY }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay: 0.15 }}
          >
            <p className="eyebrow">Project map</p>
            <div className="overview-stats">
              <div>
                <span>Featured</span>
                <motion.strong
                  key={`featured-${featuredInView.length}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {featuredInView.length}
                </motion.strong>
              </div>
              <div>
                <span>Total</span>
                <motion.strong
                  key={`total-${filteredProjects.length}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {filteredProjects.length}
                </motion.strong>
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
          </motion.div>
        </div>
      </section>

      <section id="project-categories" className="section-block">
        <div className="container">
          <SectionHeading
            eyebrow="Project categories"
            title="All project types, one clean mechanism."
            body="Use filters to quickly switch between domains and browse the archive."
          />

          <motion.div
            className="project-filter-row"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
          >
            <motion.button
              type="button"
              className={`filter-chip ${activeDomain === 'all' ? 'is-active' : ''}`}
              onClick={() => setActiveDomain('all')}
              variants={chipVariants}
              custom={0}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              All Projects ({projects.length})
            </motion.button>

            {domains.map((domain, i) => {
              const count = projects.filter((project) => project.domainSlug === domain.slug).length

              return (
                <motion.button
                  key={domain.slug}
                  type="button"
                  className={`filter-chip tone-${domain.accent} ${
                    activeDomain === domain.slug ? 'is-active' : ''
                  }`}
                  onClick={() => setActiveDomain(domain.slug)}
                  variants={chipVariants}
                  custom={i + 1}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {domain.title} ({count})
                </motion.button>
              )
            })}
          </motion.div>


        </div>
      </section>

      <section id="featured" className="section-block">
        <div className="container">


          <AnimatePresence mode="wait">
            <motion.div
              key={`featured-${activeDomain}`}
              className="project-grid feature-grid"
              variants={gridVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {featuredInView.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </motion.div>
          </AnimatePresence>

          {featuredInView.length === 0 ? (
            <motion.p
              className="project-empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              No featured cards in this category yet. The full list is still available below.
            </motion.p>
          ) : null}
        </div>
      </section>


    </div>
  )
}
