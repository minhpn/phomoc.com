import { useEffect, useRef, useState } from 'react'
import { MENU_BOARD } from '../data/siteConfig.js'

const STORAGE_KEY = 'phomoc-menu-lang'

function detectLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && MENU_BOARD.languages.some((l) => l.code === saved)) return saved
  } catch {
    /* localStorage không khả dụng — bỏ qua */
  }
  const nav = (navigator.language || 'vi').toLowerCase()
  if (nav.startsWith('vi')) return 'vi'
  if (nav.startsWith('zh')) return 'zh'
  if (nav.startsWith('ko')) return 'ko'
  if (nav.startsWith('en')) return 'en'
  return 'vi'
}

/** Màn hình xem thực đơn đa ngôn ngữ — dựng lại y hệt bảng menu giấy của quán */
export default function MenuBoard({ open, onClose }) {
  const [lang, setLang] = useState(detectLang)
  const closeRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* bỏ qua */
    }
  }, [lang])

  useEffect(() => {
    if (open && typeof window.gtag === 'function') {
      window.gtag('event', 'menu_board_open', { menu_language: lang })
    }
    // Chỉ đo lường lần mở, không đo lại khi đổi ngôn ngữ
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  if (!open) return null

  const t = (value) => {
    if (typeof value === 'string') return value
    return value?.[lang] ?? value?.vi ?? ''
  }

  return (
    <div
      className="menu-board"
      role="dialog"
      aria-modal="true"
      aria-label={t(MENU_BOARD.label)}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="menu-board__page">
        <div className="menu-board__toolbar">
          <div className="menu-board__langs" role="group" aria-label={t(MENU_BOARD.label)}>
            {MENU_BOARD.languages.map((l) => (
              <button
                key={l.code}
                className={`menu-board__lang ${lang === l.code ? 'is-active' : ''}`}
                aria-pressed={lang === l.code}
                onClick={() => setLang(l.code)}
              >
                <span aria-hidden="true">{l.flag}</span> {l.label}
              </button>
            ))}
          </div>
          <button ref={closeRef} className="menu-board__close" onClick={onClose} aria-label="Đóng thực đơn">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="menu-board__frame">
          <i className="menu-board__corner menu-board__corner--tl" aria-hidden="true" />
          <i className="menu-board__corner menu-board__corner--tr" aria-hidden="true" />
          <i className="menu-board__corner menu-board__corner--bl" aria-hidden="true" />
          <i className="menu-board__corner menu-board__corner--br" aria-hidden="true" />

          <header className="menu-board__head">
            <h2 className="menu-board__title">{MENU_BOARD.title}</h2>
            <p className="menu-board__slogan">
              <LeafGlyph />
              {t(MENU_BOARD.slogan)}
              <LeafGlyph />
            </p>
            <p className="menu-board__meta">
              <span>
                <WifiGlyph />
                {t(MENU_BOARD.wifiLabel)}: {MENU_BOARD.wifi.ssid} / {t(MENU_BOARD.passLabel)}: {MENU_BOARD.wifi.pass}
              </span>
              <a href={MENU_BOARD.phoneHref}>
                <PhoneGlyph />
                {t(MENU_BOARD.phoneLabel)}: {MENU_BOARD.phone}
              </a>
            </p>
          </header>

          <div className="menu-board__grid">
            {MENU_BOARD.categories.map((cat) => (
              <section
                key={cat.id}
                className={`menu-board__card ${cat.columns ? 'menu-board__card--wide' : ''}`}
              >
                <h3 className="menu-board__card-title">{t(cat.title)}</h3>
                {cat.freeNote && (
                  <p className="menu-board__free">
                    <strong>{t(cat.freeNote.text)}</strong>
                    {lang !== 'vi' && (
                      <span className="menu-board__item-vi" lang="vi">
                        {cat.freeNote.text.vi}
                      </span>
                    )}
                    <span>{t(cat.freeNote.sub)}</span>
                  </p>
                )}
                <ul className="menu-board__list">
                  {cat.items.map((item) => (
                    <li className="menu-board__item" key={item.name.vi}>
                      <span className="menu-board__item-text">
                        <span className="menu-board__item-name">
                          {t(item.name)}
                          {item.note && <em className="menu-board__item-note"> ({t(item.note)})</em>}
                        </span>
                        {lang !== 'vi' && t(item.name) !== item.name.vi && (
                          <span className="menu-board__item-vi" lang="vi">
                            {item.name.vi}
                          </span>
                        )}
                      </span>
                      <span className="menu-board__dots" aria-hidden="true" />
                      <span className="menu-board__item-price">
                        {item.price}k
                        {item.unit && <small>{t(item.unit)}</small>}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            <section className="menu-board__card menu-board__card--baby">
              <h3 className="menu-board__card-title">{t(MENU_BOARD.baby.title)}</h3>
              <p className="menu-board__baby-art" aria-hidden="true">
                👶🥣
              </p>
              <ul className="menu-board__baby-list">
                {MENU_BOARD.baby.options.map((o) => (
                  <li key={o.text.vi}>
                    <HeartGlyph />
                    <span className="menu-board__baby-text">
                      <span>{t(o.text)}</span>
                      {lang !== 'vi' && t(o.text) !== o.text.vi && (
                        <span className="menu-board__item-vi" lang="vi">
                          {o.text.vi}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="menu-board__baby-notice">{t(MENU_BOARD.baby.notice)}</p>
            </section>

            <section className="menu-board__card menu-board__card--notes">
              <h3 className="menu-board__card-title">{t(MENU_BOARD.notes.title)}</h3>
              <ul className="menu-board__notes">
                {MENU_BOARD.notes.items.map((n) => (
                  <li key={t(n.title)}>
                    <span className="menu-board__note-icon" aria-hidden="true">
                      {n.icon === 'leaf' && <LeafGlyph big />}
                      {n.icon === 'pot' && <PotGlyph />}
                      {n.icon === 'heart' && <HandHeartGlyph />}
                    </span>
                    <div>
                      <strong>{t(n.title)}</strong>
                      <p>{t(n.desc)}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <p className="menu-board__footer">
            <LeafGlyph />
            {t(MENU_BOARD.footer)}
            <LeafGlyph />
          </p>
        </div>
      </div>
    </div>
  )
}

function LeafGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="menu-board__leaf">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}

function WifiGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
      <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0" />
      <circle cx="12" cy="20" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function PhoneGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
    </svg>
  )
}

function HeartGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
      <path d="M12 21s-7.5-4.6-10-9.3C.6 8.6 2.4 5 6 5c2.2 0 3.7 1.2 4.5 2.5h3C14.3 6.2 15.8 5 18 5c3.6 0 5.4 3.6 4 6.7C19.5 16.4 12 21 12 21z" transform="scale(0.92) translate(1 1)" />
    </svg>
  )
}

function PotGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 11h16v3a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6v-3zM2.5 12.5h1.5M20 12.5h1.5" />
      <path d="M9 8c0-1.2 1-1.4 1-2.6M12.5 8c0-1.2 1-1.4 1-2.6M16 8c0-1.2 1-1.4 1-2.6" />
    </svg>
  )
}

function HandHeartGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 10.5s-3.4-2-4.5-4C6.6 4.7 7.5 3 9.2 3c1 0 1.7.55 2.1 1.15h1.4C13.1 3.55 13.8 3 14.8 3c1.7 0 2.6 1.7 1.7 3.5-1.1 2-4.5 4-4.5 4z" />
      <path d="M3 14h3l3 2.5h4.2c.9 0 .9 1.5 0 1.5H9M3 19.5c1.5-1 3-1 4.5 0h4.5c3.5 0 5.5-1 8-3.5" />
    </svg>
  )
}
