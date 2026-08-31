import { useEffect, useState } from 'react'
import { BRAND, CONTACT } from '../data/siteConfig.js'

const NAV = [
  { href: '#gioi-thieu', label: 'Giới thiệu' },
  { href: '#mon-ngon', label: 'Món ngon' },
  { href: '#thuc-don', label: 'Thực đơn' },
  { href: '#hinh-anh', label: 'Hình ảnh' },
  { href: '#cam-nhan', label: 'Cảm nhận' },
  { href: '#lien-he', label: 'Liên hệ' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [open])

  return (
    <header className={`header ${scrolled || open ? 'header--solid' : ''}`}>
      <div className="container header__inner">
        <a href="#top" className="header__brand" onClick={() => setOpen(false)}>
          <img src={BRAND.logoSmall} alt={`Logo ${BRAND.name}`} className="header__logo" />
          <span className="header__name">{BRAND.name}</span>
        </a>

        <nav className={`header__nav ${open ? 'is-open' : ''}`} aria-label="Điều hướng chính">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="header__link" onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href={CONTACT.phoneHref} className="btn btn--primary header__cta-mobile" onClick={() => setOpen(false)}>
            <PhoneIcon /> {CONTACT.phone}
          </a>
        </nav>

        <div className="header__actions">
          <a href={CONTACT.phoneHref} className="header__phone">
            <PhoneIcon />
            <span>{CONTACT.phone}</span>
          </a>
          <a href="#thuc-don" className="btn btn--primary header__cta">
            Đặt món ngay
          </a>
          <button
            className={`header__burger ${open ? 'is-active' : ''}`}
            aria-label={open ? 'Đóng menu' : 'Mở menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
    </svg>
  )
}
