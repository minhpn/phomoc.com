# Phở Mộc — Landing Page

Landing page giới thiệu thương hiệu **Phở Mộc** (Tươi từ tâm — Xanh trong vị), xây dựng bằng **React + Vite**, client-side rendering.

## Chạy dự án

```bash
npm install     # cài dependencies (lần đầu)
npm run dev     # chạy dev server → http://localhost:5173
npm run build   # build production vào thư mục dist/
npm run preview # xem thử bản build production
```

## Sửa nội dung ở đâu?

Toàn bộ nội dung website nằm trong **một file duy nhất**: `src/data/siteConfig.js`

- `BRAND` — tên quán, slogan, logo
- `CONTACT` — hotline, địa chỉ, giờ mở cửa, link Google Maps
- `DELIVERY` — link ShopeeFood & GrabFood
- `SIGNATURES` — món đặc trưng kèm ảnh & giá
- `MENU` — thực đơn đầy đủ theo từng nhóm (giá tính bằng nghìn đồng)
- `HIGHLIGHTS` — 3 điểm nổi bật của quán
- `GALLERY` — thư viện ảnh quán & món ăn
- `REVIEWS` — cảm nhận khách hàng ⚠️ *(hiện là review mẫu — hãy thay bằng đánh giá thật từ Google Maps / ShopeeFood / GrabFood)*
- `STATS` — số liệu trên hero

Ảnh nằm trong `public/images/` (đã tối ưu từ thư mục `prd/`).

## Cấu trúc

```
├── index.html              # SEO, fonts, JSON-LD schema
├── public/images/          # ảnh đã tối ưu cho web
├── src/
│   ├── data/siteConfig.js  # ⭐ toàn bộ nội dung — sửa tại đây
│   ├── components/         # Header, Hero, About, Signature,
│   │                       # MenuSection, PromoBanner, Gallery,
│   │                       # Reviews, Delivery, Contact, Footer…
│   └── styles/global.css   # design system (tông xanh lá – nâu – kem theo logo)
└── prd/                    # assets gốc (không dùng trực tiếp)
```

## Ghi chú

- Giờ mở cửa: sáng `07:15 – 14:30`, chiều tối `17:00 – 22:00` — chỉnh trong `CONTACT.hours` nếu thay đổi.
- Tên món được chuẩn hóa chính tả so với ảnh menu ("Thịt lăn", "Đùi gà gốc ta") — đối chiếu lại với quán nếu cần.
