import { motion } from 'framer-motion'

export default function TextReveal({ 
  text, 
  className = "", 
  el = "p",
  delay = 0 
}) {
  const Tag = el
  const words = text.split(" ")
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        mass: 0.8
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
    },
  }

  return (
    <Tag style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25em' }} className={className}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25em' }}
      >
        {words.map((word, index) => (
          <span style={{ overflow: 'hidden', display: 'inline-block' }} key={index}>
            <motion.span variants={child} style={{ display: 'inline-block' }}>
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  )
}
