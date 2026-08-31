import Reveal from './Reveal.jsx'

export default function PromoBanner() {
  return (
    <section className="promo" aria-label="Ưu đãi Phở Mộc">
      <div className="promo__bg" role="img" aria-label="Ăn ngon hết ý — mời bạn ghé Phở Mộc" />
      <div className="promo__overlay" />
      <div className="container promo__inner">
        <Reveal>
          <p className="promo__eyebrow">Mời bạn ghé xem</p>
          <h2 className="promo__title">Ăn ngon hết ý — đủ món cả ngày</h2>
          <p className="promo__desc">
            Sáng phở nóng, trưa cơm đầy, tối quẩy cùng bè bạn. Phở Mộc mở cửa sáng
            7:15 – 14:30 và chiều tối 18:00 – 22:00 tại The Miami — Vinhomes Smart City.
          </p>
          <div className="promo__actions">
            <a href="#thuc-don" className="btn btn--cream btn--lg">Xem thực đơn</a>
            <a href="#lien-he" className="btn btn--outline-light btn--lg">Đến quán</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
