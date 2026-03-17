export default function SectionHeading({ eyebrow, title, body, align = 'split' }) {
  return (
    <div className={`section-heading ${align}`} data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <div className="section-heading-copy">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  )
}
