import { BRAND, CONTACT, DELIVERY, SOCIAL } from '../data/siteConfig.js'

const NAV = [
  { href: '#gioi-thieu', label: 'Giới thiệu' },
  { href: '#mon-ngon', label: 'Món ngon' },
  { href: '#thuc-don', label: 'Thực đơn' },
  { href: '#hinh-anh', label: 'Hình ảnh' },
  { href: '#cam-nhan', label: 'Cảm nhận' },
  { href: '#lien-he', label: 'Liên hệ' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <img src={BRAND.logoSmall} alt={`Logo ${BRAND.name}`} />
          </div>
          <p className="footer__slogan">{BRAND.slogan}</p>
          <p className="footer__tagline">{BRAND.tagline}</p>
          <div className="footer__social">
            {SOCIAL.map((s) => (
              <a
                key={s.id}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`${BRAND.name} trên ${s.name}`}
                className={`footer__social-btn footer__social-btn--${s.id}`}
              >
                {s.id === 'facebook' ? <FacebookIcon /> : <TikTokIcon />}
              </a>
            ))}
          </div>
        </div>

        <nav className="footer__nav" aria-label="Liên kết cuối trang">
          <h3>Khám phá</h3>
          <ul>
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__contact">
          <h3>Liên hệ</h3>
          <ul>
            <li>
              <PinIcon /> {CONTACT.address}
            </li>
            <li>
              <PhoneIcon />
              <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
            </li>
            {CONTACT.hours.map((h) => (
              <li key={h.days}>
                <ClockIcon /> {h.days}: {h.time}
              </li>
            ))}
          </ul>
          <div className="footer__delivery">
            {DELIVERY.map((d) => (
              <a
                key={d.id}
                href={d.url}
                target="_blank"
                rel="noreferrer"
                className="footer__delivery-btn"
                style={{ '--brand-color': d.color }}
              >
                {d.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>
            © {new Date().getFullYear()} {BRAND.name} — Tươi từ tâm, xanh trong vị. Made with 💚 in Hà Nội.
          </p>
        </div>
      </div>
    </footer>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
      <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14C17.17 2.1 16.03 2 14.83 2 12.21 2 10.5 3.66 10.5 6.7v2.8H7v4h3.5V22h3.5v-8.5z" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.82A4.28 4.28 0 0115.54 3h-3.09v12.4a2.59 2.59 0 11-2.59-2.59c.27 0 .53.04.77.12V9.77a5.76 5.76 0 00-.77-.05 5.66 5.66 0 105.66 5.66V9.01a7.35 7.35 0 004.3 1.38V7.3a4.28 4.28 0 01-3.22-1.48z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  )
}
