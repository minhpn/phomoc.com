import { useEffect, useRef, useState } from 'react'

/**
 * Bọc nội dung để tạo hiệu ứng trượt mờ khi cuộn tới (IntersectionObserver).
 * <Reveal delay={0.1}><div/></Reveal>
 */
export default function Reveal({ children, delay = 0, className = '', style, as: Tag = 'div' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'reveal--in' : ''} ${className}`}
      style={{ ...(delay ? { transitionDelay: `${delay}s` } : {}), ...style }}
    >
      {children}
    </Tag>
  )
}
