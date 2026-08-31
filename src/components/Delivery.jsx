import { DELIVERY } from '../data/siteConfig.js'
import Reveal from './Reveal.jsx'

export default function Delivery() {
  return (
    <section className="delivery section" id="dat-mon">
      <div className="container">
        <Reveal className="section__head">
          <p className="section__eyebrow">Đặt giao tận nơi</p>
          <h2 className="section__title">
            Có mặt trên <em>ShopeeFood & GrabFood</em>
          </h2>
          <p className="section__desc">
            Ở nhà vẫn ăn chuẩn vị quán — đặt vài phút, món nóng hổi đến cửa.
          </p>
        </Reveal>

        <div className="delivery__grid">
          {DELIVERY.map((d, i) => (
            <Reveal key={d.id} delay={i * 0.1} className="delivery-card" style={{ '--brand-color': d.color }}>
              <div className="delivery-card__icon" aria-hidden="true">
                {d.id === 'shopeefood' ? <ShopeeGlyph /> : <GrabGlyph />}
              </div>
              <h3>{d.name}</h3>
              <p>{d.desc}</p>
              <a href={d.url} target="_blank" rel="noreferrer" className="btn btn--brand">
                Đặt món trên {d.name}
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ShopeeGlyph() {
  return (
    <svg viewBox="0 0 48 48" width="44" height="44" fill="currentColor" aria-hidden="true">
      <path d="M17 14v-2.5C17 7.4 20.1 4 24 4s7 3.4 7 7.5V14h4.5c1.1 0 2 .8 2.1 1.9l2.9 21.9c.2 1.2-.8 2.2-2 2.2H9.5c-1.2 0-2.2-1-2-2.2l2.9-21.9c.1-1.1 1-1.9 2.1-1.9H17zm3.5 0h7v-2.5c0-2.1-1.6-3.8-3.5-3.8s-3.5 1.7-3.5 3.8V14zM24 18.5c-4.4 0-8 1.4-8 3.2s3.6 3.2 8 3.2 8-1.4 8-3.2-3.6-3.2-8-3.2z" />
    </svg>
  )
}

function GrabGlyph() {
  return (
    <svg viewBox="0 0 48 48" width="44" height="44" fill="currentColor" aria-hidden="true">
      <path d="M8 8h16c9.4 0 17 7.2 17 16s-7.6 16-17 16H8v-9h16c4.4 0 8-3.1 8-7s-3.6-7-8-7H8V8zm0 20v-8h14v8H8z" />
    </svg>
  )
}
