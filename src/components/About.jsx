import { BRAND, CONTACT, DELIVERY } from '../data/siteConfig.js'
import Reveal from './Reveal.jsx'

const REASONS = [
  {
    title: 'Chuẩn vị phở Bắc',
    desc: 'Bánh phở trắng mỏng, nước dùng trong, hành mùi tươi xanh — hương vị Hà Nội trọn vẹn từng thìa.',
  },
  {
    title: 'Thực đơn đa dạng',
    desc: 'Phở, bún, miến nước & trộn, cháo, cơm, xôi gà xào nấm — đủ món cho cả nhà mọi bữa.',
  },
  {
    title: 'Đúng giờ, đúng tâm',
    desc: 'Mở cửa sáng 7:15 và chiều tối từ 18:00, phục vụ nhanh chóng cả tại bàn lẫn đơn giao — không để bạn phải chờ đói.',
  },
]

export default function About() {
  return (
    <section className="about section" id="gioi-thieu">
      <div className="container about__inner">
        <Reveal className="about__media">
          <figure className="about__photo about__photo--main">
            <img src="/images/quan-02.jpg" alt="Không gian ấm cúng của quán Phở Mộc vào buổi tối" loading="lazy" />
          </figure>
          <figure className="about__photo about__photo--sub">
            <img src="/images/quan-01.jpg" alt="Mặt tiền quán Phở Mộc tại The Miami, Vinhomes Smart City" loading="lazy" />
          </figure>
          <div className="about__badge">
            <strong>{BRAND.name}</strong>
            <span>Phục vụ tận tâm mỗi ngày</span>
          </div>
        </Reveal>

        <div className="about__content">
          <Reveal>
            <p className="section__eyebrow">Câu chuyện Phở Mộc</p>
            <h2 className="section__title">
              Tươi từ tâm — <em>Xanh trong vị</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="about__lead">
              Giữa lòng Khu đô thị Vinhomes Smart City, <strong>Phở Mộc</strong> là nơi những
              nguyên liệu tươi sạch nhất được chọn lọc mỗi sáng, và nồi nước dùng được hầm kỹ
              nhiều giờ chỉ để giữ lại một điều: vị ngọt thanh tự nhiên của từng bát phở.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <ul className="about__reasons">
              {REASONS.map((r) => (
                <li key={r.title}>
                  <span className="about__check" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 12.5l5 5L20 6.5" />
                    </svg>
                  </span>
                  <div>
                    <strong>{r.title}</strong>
                    <p>{r.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="about__actions">
              <a href="#lien-he" className="btn btn--primary">
                <PinIcon /> Xem chỉ đường
              </a>
              <a href={CONTACT.phoneHref} className="btn btn--ghost">
                <PhoneIcon /> {CONTACT.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
    </svg>
  )
}
