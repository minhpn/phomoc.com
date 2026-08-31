import { useState } from 'react'
import { GALLERY } from '../data/siteConfig.js'
import Lightbox from './Lightbox.jsx'
import Reveal from './Reveal.jsx'

export default function Gallery() {
  const [current, setCurrent] = useState(null)

  return (
    <section className="gallery section" id="hinh-anh">
      <div className="container">
        <Reveal className="section__head">
          <p className="section__eyebrow">Hình ảnh</p>
          <h2 className="section__title">
            <em>Góc quán</em> & từng món ra lò
          </h2>
          <p className="section__desc">Không gian xanh mát, món ăn nóng sốt — chạm để xem ảnh lớn.</p>
        </Reveal>

        <div className="gallery__grid">
          {GALLERY.map((img, i) => (
            <Reveal key={img.src} delay={(i % 4) * 0.06} className={`gallery__cell gallery__cell--${(i % 5) + 1}`}>
              <button className="gallery__item" onClick={() => setCurrent(img)}>
                <img src={img.src} alt={img.alt} loading="lazy" />
                <span className="gallery__zoom" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <circle cx="11" cy="11" r="7" />
                    <path d="M21 21l-4.35-4.35M8 11h6" />
                  </svg>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {current && <Lightbox src={current.src} alt={current.alt} onClose={() => setCurrent(null)} />}
    </section>
  )
}
