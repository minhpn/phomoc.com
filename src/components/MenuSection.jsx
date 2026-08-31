import { useState } from 'react'
import { DELIVERY, MENU, MENU_IMAGE } from '../data/siteConfig.js'
import Lightbox from './Lightbox.jsx'
import Reveal from './Reveal.jsx'

export default function MenuSection() {
  const [active, setActive] = useState(MENU[0].id)
  const [showMenuImage, setShowMenuImage] = useState(false)
  const category = MENU.find((c) => c.id === active)

  return (
    <section className="menu section" id="thuc-don">
      <div className="container">
        <Reveal className="section__head">
          <p className="section__eyebrow">Thực đơn</p>
          <h2 className="section__title">
            Chọn món <em>chuẩn vị</em> cho bữa của bạn
          </h2>
          <p className="section__desc">
            Giá tính theo phần (nghìn đồng). Khám phá đầy đủ thực đơn nước, trộn, cháo, cơm,
            xôi và đồ uống ngay bên dưới.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="menu__tabs" role="tablist" aria-label="Nhóm món">
            {MENU.map((c) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={active === c.id}
                className={`menu__tab ${active === c.id ? 'is-active' : ''}`}
                onClick={() => setActive(c.id)}
              >
                <span aria-hidden="true">{c.icon}</span> {c.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="menu__panel" role="tabpanel">
            <ul className="menu__list">
              {category.items.map((item) => (
                <li key={item.name} className="menu__item">
                  <span className="menu__item-name">{item.name}</span>
                  <span className="menu__dots" aria-hidden="true" />
                  <span className="menu__item-price">
                    {item.price}k
                    {item.unit && <small>{item.unit}</small>}
                  </span>
                </li>
              ))}
            </ul>
            <aside className="menu__aside">
              <button className="menu__image-btn" onClick={() => setShowMenuImage(true)}>
                <img src={MENU_IMAGE} alt="Thực đơn Phở Mộc" loading="lazy" />
                <span className="menu__image-overlay">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <circle cx="11" cy="11" r="7" />
                    <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
                  </svg>
                  Xem thực đơn gốc
                </span>
              </button>
              <div className="menu__order">
                <p>Đang đói? Đặt giao ngay về nhà:</p>
                <div className="menu__order-btns">
                  {DELIVERY.map((d) => (
                    <a
                      key={d.id}
                      href={d.url}
                      target="_blank"
                      rel="noreferrer"
                      className="menu__order-btn"
                      style={{ '--brand-color': d.color }}
                    >
                      {d.id === 'shopeefood' ? 'ShopeeFood' : 'GrabFood'}
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </Reveal>
      </div>

      {showMenuImage && (
        <Lightbox src={MENU_IMAGE} alt="Thực đơn đầy đủ của Phở Mộc" onClose={() => setShowMenuImage(false)} />
      )}
    </section>
  )
}
