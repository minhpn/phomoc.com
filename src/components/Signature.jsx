import { DELIVERY, SIGNATURES } from '../data/siteConfig.js'
import Reveal from './Reveal.jsx'

export default function Signature() {
  return (
    <section className="signature section" id="mon-ngon">
      <div className="container">
        <Reveal className="section__head">
          <p className="section__eyebrow">Món signature</p>
          <h2 className="section__title">
            Những bát <em>khách khen nhiều nhất</em>
          </h2>
          <p className="section__desc">
            Từng tô được múc từ nồi nước dùng đang sôi, rắc hành lá tươi vừa cắt — nóng hổi
            tới tay bạn.
          </p>
        </Reveal>

        <div className="signature__grid">
          {SIGNATURES.map((dish, i) => (
            <Reveal key={dish.name} delay={(i % 3) * 0.08} className="dish-card">
              <div className="dish-card__media">
                <img src={dish.image} alt={dish.name} loading="lazy" />
                {dish.tag && <span className="dish-card__tag">{dish.tag}</span>}
              </div>
              <div className="dish-card__body">
                <div className="dish-card__row">
                  <h3>{dish.name}</h3>
                  <span className="dish-card__price">
                    từ {dish.priceFrom}k{dish.priceUnit ? <small>{dish.priceUnit}</small> : null}
                  </span>
                </div>
                <p>{dish.desc}</p>
                <div className="dish-card__order">
                  {DELIVERY.map((d) => (
                    <a
                      key={d.id}
                      href={d.url}
                      target="_blank"
                      rel="noreferrer"
                      className="dish-card__order-btn"
                      style={{ '--brand-color': d.color }}
                      aria-label={`Đặt ${dish.name} qua ${d.name}`}
                    >
                      {d.id === 'shopeefood' ? <ShopeeIcon /> : <GrabIcon />}
                      {d.name}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ShopeeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
      <path d="M8 8V6.5C8 4 9.8 2 12 2s4 2 4 4.5V8h2.2c.5 0 .9.4 1 .9l1.6 10.5c.1.6-.4 1.1-1 1.1H4.2c-.6 0-1.1-.5-1-1.1L4.8 8.9c.1-.5.5-.9 1-.9H8zm2 0h4V6.5C14 5.1 13.1 4 12 4s-2 1.1-2 2.5V8z" />
    </svg>
  )
}

function GrabIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
      <path d="M4 4h7.5c4.7 0 8.5 3.6 8.5 8s-3.8 8-8.5 8H4v-4.5h7.5c2.3 0 4-1.6 4-3.5s-1.7-3.5-4-3.5H4V4zm0 10v-4h7v4H4z" />
    </svg>
  )
}
