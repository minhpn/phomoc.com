import { BRAND, CONTACT, DELIVERY, STATS } from '../data/siteConfig.js'
import Reveal from './Reveal.jsx'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__deco hero__deco--leaf" aria-hidden="true">
        <LeafBlob />
      </div>
      <div className="container hero__inner">
        <div className="hero__content">
          <Reveal>
            <p className="hero__eyebrow">
              <LeafIcon /> {BRAND.tagline}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="hero__title">
              Bát phở <em>đậm hồn</em>
              <br />
              <span className="hero__script">Tươi từ tâm</span> — xanh trong vị
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="hero__desc">
              Nước dùng hầm từ xương gà nhiều giờ, rau thơm tươi xanh mỗi sáng — Phở Mộc mang
              hương vị chuẩn Bắc đến tận khu Vinhomes Smart City. Ghé quán hoặc đặt giao ngay!
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="hero__cta">
              <a href="#thuc-don" className="btn btn--primary btn--lg">
                Xem thực đơn
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </a>
              <div className="hero__delivery">
                <span className="hero__delivery-label">Đặt giao qua</span>
                <div className="hero__delivery-btns">
                  {DELIVERY.map((d) => (
                    <a
                      key={d.id}
                      href={d.url}
                      target="_blank"
                      rel="noreferrer"
                      className="hero__delivery-btn"
                      style={{ '--brand-color': d.color }}
                    >
                      {d.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <ul className="hero__stats">
              {STATS.map((s) => (
                <li key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="hero__media">
          <div className="hero__photo-wrap">
            <img
              src="/images/dishes/pho-ga-lan.jpg"
              alt="Tô phở gà lẫn nóng hổi tại Phở Mộc"
              className="hero__photo"
              fetchpriority="high"
            />
            <div className="hero__chip hero__chip--slogan">
              <img src={BRAND.logoSmall} alt="" aria-hidden="true" />
              <div>
                <strong>{BRAND.name}</strong>
                <span>{BRAND.slogan}</span>
              </div>
            </div>
            <a className="hero__chip hero__chip--phone" href={CONTACT.phoneHref}>
              <span className="hero__chip-icon">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
                </svg>
              </span>
              <div>
                <span>Hotline đặt món</span>
                <strong>{CONTACT.phone}</strong>
              </div>
            </a>
          </div>
        </Reveal>
      </div>

      <a href="#gioi-thieu" className="hero__scroll" aria-label="Cuộn xuống">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  )
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M17.6 3.2C11 3.2 5.7 8 5.1 15.3c-.1 1 0 2 .2 3C3.9 19.5 3 20.6 3 20.6s4.9 1.6 9.3.1c4.7-1.6 8-5.7 8-11 0-2.5-.6-4.8-1.3-6.2-.3-.2-.8-.3-1.4-.3zM12 18c2.9-2.2 5.3-5 6.9-8.2-1 3.9-3.4 7-6.9 8.9V18z" />
    </svg>
  )
}

function LeafBlob() {
  return (
    <svg viewBox="0 0 200 200" width="100%" height="100%" aria-hidden="true">
      <path
        fill="currentColor"
        d="M46.6,-71.3C60.1,-64.2,70.5,-50.6,76.4,-35.5C82.3,-20.4,83.7,-3.8,80.4,11.3C77.1,26.4,69.1,40,57.9,50.7C46.7,61.4,32.3,69.2,16.5,74C0.7,78.9,-16.5,80.8,-32.2,76.1C-47.9,71.4,-62.1,60.1,-71.4,45.3C-80.7,30.5,-85.1,12.2,-83.1,-5.3C-81.1,-22.8,-72.7,-39.5,-60.4,-47.4C-48.1,-55.3,-31.9,-54.4,-17.3,-58.9C-2.7,-63.4,10.3,-73.3,46.6,-71.3Z"
        transform="translate(100 100)"
      />
    </svg>
  )
}
