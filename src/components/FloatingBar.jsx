import { useEffect, useState } from 'react'
import { CONTACT, DELIVERY } from '../data/siteConfig.js'

/** Thanh hành động nhanh cố định dưới màn hình (chỉ mobile) + nút gọi nổi (desktop) */
export default function FloatingBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Nút gọi tròn nổi — hiện sau khi cuộn, mọi thiết bị */}
      <a
        href={CONTACT.phoneHref}
        className={`fab-call ${visible ? 'is-visible' : ''}`}
        aria-label={`Gọi hotline ${CONTACT.phone}`}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
        </svg>
      </a>

      {/* Thanh dưới cùng cho mobile */}
      <div className={`mobilebar ${visible ? 'is-visible' : ''}`}>
        <a href={CONTACT.phoneHref} className="mobilebar__btn">
          <PhoneGlyph />
          Gọi quán
        </a>
        {DELIVERY.map((d) => (
          <a
            key={d.id}
            href={d.url}
            target="_blank"
            rel="noreferrer"
            className="mobilebar__btn mobilebar__btn--brand"
            style={{ '--brand-color': d.color }}
          >
            <BagGlyph />
            {d.name}
          </a>
        ))}
      </div>
    </>
  )
}

function PhoneGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
    </svg>
  )
}

function BagGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
      <path d="M8 8V6.5C8 4 9.8 2 12 2s4 2 4 4.5V8h2.2c.5 0 .9.4 1 .9l1.6 10.5c.1.6-.4 1.1-1 1.1H4.2c-.6 0-1.1-.5-1-1.1L4.8 8.9c.1-.5.5-.9 1-.9H8zm2 0h4V6.5C14 5.1 13.1 4 12 4s-2 1.1-2 2.5V8z" />
    </svg>
  )
}
