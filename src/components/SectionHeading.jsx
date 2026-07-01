import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, body, align = 'split' }) {
  return (
    <motion.div
      className={`section-heading ${align}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <p className="eyebrow">{eyebrow}</p>
      <div className="section-heading-copy">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </motion.div>
  )
}
