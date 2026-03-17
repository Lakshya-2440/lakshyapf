import { useEffect, useEffectEvent } from 'react'

export function useSiteEffects(location) {
  const syncPointerGlow = useEffectEvent((event) => {
    document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`)
    document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`)
  })

  useEffect(() => {
    window.addEventListener('pointermove', syncPointerGlow, { passive: true })

    return () => {
      window.removeEventListener('pointermove', syncPointerGlow)
    }
  }, [])

  useEffect(() => {
    const syncScrollProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0
      document.documentElement.style.setProperty('--scroll-progress', progress.toString())
    }

    syncScrollProgress()
    window.addEventListener('scroll', syncScrollProgress, { passive: true })
    window.addEventListener('resize', syncScrollProgress)

    return () => {
      window.removeEventListener('scroll', syncScrollProgress)
      window.removeEventListener('resize', syncScrollProgress)
    }
  }, [])

  useEffect(() => {
    const page = location.pathname.split('/')[1] || 'home'
    document.body.dataset.page = page

    return () => {
      delete document.body.dataset.page
    }
  }, [location.pathname])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const syncPosition = () => {
      if (location.hash) {
        const target = document.querySelector(location.hash)

        if (target) {
          target.scrollIntoView({
            behavior: prefersReducedMotion ? 'auto' : 'smooth',
            block: 'start',
          })
        }

        return
      }

      window.scrollTo(0, 0)
    }

    requestAnimationFrame(syncPosition)
  }, [location.pathname, location.hash])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.14, rootMargin: '0px 0px -32px 0px' },
    )

    const frame = requestAnimationFrame(() => {
      const revealedElements = document.querySelectorAll('[data-reveal]')
      revealedElements.forEach((element) => observer.observe(element))
    })

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
    }
  }, [location.pathname])
}
