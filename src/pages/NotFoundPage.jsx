import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="page not-found-page">
      <section className="page-hero page-hero-alt">
        <div className="container narrow-center" data-reveal>
          <p className="eyebrow">404 / route not found</p>
          <h1>
            This page wandered off.
            <span className="accent-serif"> The portfolio did not.</span>
          </h1>
          <p className="hero-body">
            Use the main routes below to get back into the site.
          </p>
          <div className="hero-actions center">
            <Link className="button primary" to="/">
              Home
            </Link>
            <Link className="button secondary" to="/projects">
              Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
