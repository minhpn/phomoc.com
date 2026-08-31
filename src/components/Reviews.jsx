import { REVIEWS } from '../data/siteConfig.js'
import Reveal from './Reveal.jsx'

export default function Reviews() {
  return (
    <section className="reviews section" id="cam-nhan">
      <div className="container">
        <Reveal className="section__head">
          <p className="section__eyebrow">Cảm nhận khách hàng</p>
          <h2 className="section__title">
            Khách nói gì về <em>Phở Mộc</em>
          </h2>
          <p className="section__desc">
            Đánh giá từ Google Maps, ShopeeFood và GrabFood — cảm ơn Quý khách đã tin yêu!
          </p>
        </Reveal>

        <div className="reviews__grid">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={(i % 3) * 0.08} className="review-card">
              <div className="review-card__top">
                <span className="review-card__avatar" aria-hidden="true">
                  {r.name.charAt(0)}
                </span>
                <div className="review-card__who">
                  <strong>{r.name}</strong>
                  <span>{r.source}</span>
                </div>
                <span className="review-card__stars" aria-label={`${r.rating} trên 5 sao`}>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} filled={s < r.rating} />
                  ))}
                </span>
              </div>
              <blockquote>“{r.text}”</blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Star({ filled }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="15"
      height="15"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 1.8}
      aria-hidden="true"
    >
      <path d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4l-5.8 3.1 1.1-6.5L2.6 9.4l6.5-.9L12 2.6z" strokeLinejoin="round" />
    </svg>
  )
}
