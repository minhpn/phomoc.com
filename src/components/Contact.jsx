import { CONTACT, SOCIAL } from '../data/siteConfig.js'
import Reveal from './Reveal.jsx'

export default function Contact() {
  return (
    <section className="contact section" id="lien-he">
      <div className="container">
        <Reveal className="section__head">
          <p className="section__eyebrow">Ghé quán</p>
          <h2 className="section__title">
            Địa chỉ <em>dễ tìm</em>, gặp là mời ngay
          </h2>
          <p className="section__desc">
            Nằm ngay Phân khu The Miami, gần công viên cây xanh — thuận tiện cho cư dân
            Vinhomes Smart City.
          </p>
        </Reveal>

        <div className="contact__grid">
          <Reveal className="contact__map">
            <iframe
              src={CONTACT.mapEmbed}
              title="Bản đồ chỉ đường đến Phở Mộc"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </Reveal>

          <Reveal delay={0.1} className="contact__info">
            <div className="contact__card">
              <InfoRow icon={<PinIcon />} title="Địa chỉ">
                <p>{CONTACT.address}</p>
                <a href={CONTACT.mapsUrl} target="_blank" rel="noreferrer" className="contact__link">
                  Mở Google Maps →
                </a>
              </InfoRow>
              <InfoRow icon={<PhoneIcon />} title="Hotline đặt món">
                <p>
                  <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
                </p>
              </InfoRow>
              <InfoRow icon={<ClockIcon />} title="Giờ mở cửa">
                {CONTACT.hours.map((h) => (
                  <p key={h.days}>
                    <strong>{h.days}:</strong> {h.time}
                  </p>
                ))}
              </InfoRow>
              <InfoRow icon={<UsersIcon />} title="Mạng xã hội">
                <div className="contact__social">
                  {SOCIAL.map((s) => (
                    <a
                      key={s.id}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`contact__social-btn contact__social-btn--${s.id}`}
                    >
                      {s.id === 'facebook' ? <FacebookIcon /> : <TikTokIcon />}
                      {s.name}
                    </a>
                  ))}
                </div>
              </InfoRow>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function InfoRow({ icon, title, children }) {
  return (
    <div className="contact__row">
      <span className="contact__row-icon" aria-hidden="true">{icon}</span>
      <div>
        <h3>{title}</h3>
        {children}
      </div>
    </div>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  )
}

function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c.8-3.2 3.4-5 6.5-5s5.7 1.8 6.5 5" />
      <path d="M16 5a3.5 3.5 0 010 6M18.5 15.4c1.6.7 2.7 2 3 4.6" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14C17.17 2.1 16.03 2 14.83 2 12.21 2 10.5 3.66 10.5 6.7v2.8H7v4h3.5V22h3.5v-8.5z" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.82A4.28 4.28 0 0115.54 3h-3.09v12.4a2.59 2.59 0 11-2.59-2.59c.27 0 .53.04.77.12V9.77a5.76 5.76 0 00-.77-.05 5.66 5.66 0 105.66 5.66V9.01a7.35 7.35 0 004.3 1.38V7.3a4.28 4.28 0 01-3.22-1.48z" />
    </svg>
  )
}
