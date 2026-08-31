// ============================================================
// CẤU HÌNH NỘI DUNG WEBSITE PHỞ MỘC
// Toàn bộ thông tin của quán nằm ở đây — sửa tại đây là web thay đổi theo.
// ============================================================

export const BRAND = {
  name: 'Phở Mộc',
  slogan: 'Tươi từ tâm — Xanh trong vị',
  tagline: 'Phở · Bún · Miến · Cơm · Xôi · Cháo',
  logo: '/images/logo-slogan.png',
  logoSmall: '/images/logo.png',
}

export const CONTACT = {
  phone: '0988 242 369',
  phoneHref: 'tel:+84988242369',
  address:
    'S06 Phân khu The Miami, Vinhomes Smart City, 01 GS5, Tây Mỗ, Hà Nội 10000',
  hours: [
    { days: 'Sáng', time: '07:15 – 14:30' },
    { days: 'Chiều tối', time: '18:00 – 22:00' },
  ],
  // Link chỉ đường Google Maps
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F+M%E1%BB%8Dc+The+Miami+Vinhomes+Smart+City+T%C3%A2y+M%E1%BB%97+H%C3%A0+N%E1%BB%99i',
  // Embed bản đồ (iframe) cung cấp bởi Google Maps
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4476.430584143982!2d105.73332437588732!3d21.004633888605596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313453bcddb7c013%3A0xb5ff3847ee3bd5a7!2zUGjhu58gTeG7mWM!5e1!3m2!1svi!2s!4v1788107883486!5m2!1svi!2s',
}

// ------------------------------------------------------------
// MẠNG XÃ HỘI
// ------------------------------------------------------------
export const SOCIAL = [
  {
    id: 'facebook',
    name: 'Facebook',
    url: 'https://www.facebook.com/phomocbb',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    url: 'https://www.tiktok.com/@ph.mc42',
  },
]

export const DELIVERY = [
  {
    id: 'shopeefood',
    name: 'ShopeeFood',
    desc: 'Giao hàng nhanh, ưu đãi mỗi ngày trên ShopeeFood.',
    url: 'https://shopeefood.shopee.vn/u/4H6JVTF',
    color: '#EE4D2D',
  },
  {
    id: 'grabfood',
    name: 'GrabFood',
    desc: 'Đặt món dễ dàng, theo dõi shipper từng phút trên GrabFood.',
    url: 'https://r.grab.com/g/6-20260825_103634_55265D83FDB04422BB583A31E6820EF3_MEXMPS-5-C8DTFAWDAFX1DA',
    color: '#00B14F',
  },
]

// ------------------------------------------------------------
// MÓN ĐẶC TRƯNG (hiển thị kèm ảnh ở section "Món signature")
// ------------------------------------------------------------
export const SIGNATURES = [
  {
    name: 'Phở bò',
    image: '/images/dishes/pho-bo.jpg',
    desc: 'Nước dùng trong veo, ngọt thanh từ xương hầm nhiều giờ, thịt bò thái mỏng tươi ngon.',
    priceFrom: 55,
    tag: 'Best seller',
  },
  {
    name: 'Phở gà',
    image: '/images/dishes/pho-ga.jpg',
    desc: 'Gà ta da vàng ươm, thịt ngọt đậm đà, ăn kèm trứng non và phao câu béo ngậy.',
    priceFrom: 55,
    tag: 'Đặc trưng',
  },
  {
    name: 'Phở gà lẫn',
    image: '/images/dishes/pho-ga-lan.jpg',
    desc: 'Thịt gà lẫn săn nhẹ giữ trọn vị ngọt, rau thơm tươi xanh đúng chuẩn quán Bắc.',
    priceFrom: 60,
    tag: 'Được yêu thích',
  },
  {
    name: 'Cơm gà lẫn',
    image: '/images/dishes/com-ga-lan-01.jpg',
    desc: 'Cơm dẻo thơm, gà lẫn vàng đều, trứng non ốp la và nước sốt gừng đậm đà.',
    priceFrom: 60,
    tag: 'Món nước 2',
  },
  {
    name: 'Gà chặt nguyên phần',
    image: '/images/dishes/ga-chat.jpg',
    desc: 'Gà ta chặt miếng vừa ăn, da giòn thịt ngọt, chấm muối chanh ớt cay nồng.',
    priceFrom: 300,
    tag: 'Cho nhóm bạn',
    priceUnit: '/½ con',
  },
  {
    name: 'Phở trộn thịt đùi',
    image: '/images/dishes/pho-tron.jpg',
    desc: 'Phở trộn trộn đều sốt đậm đà, thịt đùi dày dặn, trứng non béo mềm — một phần no căng.',
    priceFrom: 75,
    tag: 'Món khô',
  },
]

// ------------------------------------------------------------
// THỰC ĐƠN — bóc tách từ ảnh thực đơn phomoc-menu.jpg
// Giá: đơn vị nghìn đồng (k)
// ------------------------------------------------------------
export const MENU = [
  {
    id: 'nuoc',
    label: 'Phở – Bún – Miến nước',
    icon: '🥣',
    items: [
      { name: 'Thịt lẫn / Lươn / Phao câu', price: 55 },
      { name: 'Nhiều thịt', price: 70 },
      { name: 'Thịt đùi', price: 70 },
      { name: 'Thịt cánh', price: 70 },
      { name: 'Mề – tràng – trứng', price: 55 },
      { name: 'Thịt đùi – cánh', price: 100 },
      { name: 'Thịt bò', price: 55 },
      { name: 'Thịt xương nhừ', price: 55 },
      { name: 'Phở không', price: 20 },
    ],
  },
  {
    id: 'tron',
    label: 'Phở – Bún – Miến trộn',
    icon: '🍜',
    items: [
      { name: 'Thịt lẫn / Lươn / Phao câu', price: 60 },
      { name: 'Nhiều thịt', price: 75 },
      { name: 'Thịt đùi', price: 75 },
      { name: 'Thịt cánh', price: 75 },
      { name: 'Mề – tràng – trứng', price: 60 },
      { name: 'Thịt đùi – cánh', price: 105 },
      { name: 'Thịt bò', price: 60 },
      { name: 'Thịt xương nhừ', price: 55 },
    ],
  },
  {
    id: 'chao',
    label: 'Cháo',
    icon: '🍚',
    items: [
      { name: 'Thịt lẫn / Lươn / Phao câu', price: 55 },
      { name: 'Nhiều thịt', price: 70 },
      { name: 'Thịt đùi', price: 70 },
      { name: 'Thịt cánh', price: 70 },
      { name: 'Mề – tràng – trứng', price: 55 },
      { name: 'Thịt đùi – cánh', price: 100 },
      { name: 'Thịt bò', price: 55 },
      { name: 'Thịt xương nhừ', price: 55 },
    ],
  },
  {
    id: 'com',
    label: 'Cơm',
    icon: '🍛',
    items: [
      { name: 'Thịt lẫn / Lươn / Phao câu', price: 60 },
      { name: 'Nhiều thịt', price: 80 },
      { name: 'Thịt đùi', price: 75 },
      { name: 'Thịt cánh', price: 75 },
      { name: 'Thịt đùi – cánh', price: 105 },
      { name: 'Sườn rim nước dừa', price: 60 },
      { name: 'Tôm rim thịt vai giòn', price: 60 },
    ],
  },
  {
    id: 'xoi',
    label: 'Xôi gà xào nấm',
    icon: '🍙',
    items: [
      { name: 'Thịt lẫn / Lươn / Phao câu', price: 60 },
      { name: 'Nhiều thịt', price: 80 },
      { name: 'Thịt đùi', price: 75 },
      { name: 'Thịt cánh', price: 75 },
      { name: 'Thịt đùi – cánh', price: 105 },
    ],
  },
  {
    id: 'douong',
    label: 'Đồ uống',
    icon: '🥤',
    items: [
      { name: 'Trà đá', price: 5 },
      { name: 'Sâm dừa', price: 5 },
      { name: 'Sữa đậu', price: 10 },
      { name: 'Nước chanh tươi', price: 10 },
      { name: 'Nước ép dưa hấu', price: 20 },
      { name: 'Nước lọc', price: 10 },
      { name: 'Nước ngọt các loại', price: 15 },
      { name: 'Bia Heineken', price: 25 },
      { name: 'Bia Tiger', price: 25 },
    ],
  },
  {
    id: 'dacbiet',
    label: 'Đặc biệt – Gọi thêm',
    icon: '⭐',
    items: [
      { name: 'Quẩy giòn / mềm (3 cái)', price: 5 },
      { name: 'Phao câu gà', price: 10 },
      { name: 'Chân gà luộc', price: 15, unit: 'k/cái' },
      { name: 'Mề – tràng – trứng chan', price: 100 },
      { name: 'Bỏ chán', price: 100 },
      { name: 'Xương sườn nhừ', price: 100 },
      { name: 'Đùi gà gốc ta', price: 150 },
      { name: 'Gà chặt ½ con', price: 300 },
    ],
  },
]

// Ảnh thực đơn gốc để xem toàn bộ
export const MENU_IMAGE = '/images/menu-full.jpg'

// ------------------------------------------------------------
// ƯU ĐIỂM (lấy tinh thần từ mục "Lưu ý" trên thực đơn)
// ------------------------------------------------------------
export const HIGHLIGHTS = [
  {
    icon: '🌿',
    title: 'Nguyên liệu tươi mỗi ngày',
    desc: 'Cam kết nguyên liệu tươi sạch, an toàn — chọn lọc kỹ mỗi sáng.',
  },
  {
    icon: '🔥',
    title: 'Nước dùng hầm nhiều giờ',
    desc: 'Nấu từ xương gà, hầm kỹ trong nhiều giờ để giữ vị ngọt thanh tự nhiên.',
  },
  {
    icon: '💚',
    title: 'Phục vụ tận tâm',
    desc: 'Nấu từ tâm — từng bát phở đều được chăm chút như nấu cho người thân.',
  },
]

// ------------------------------------------------------------
// THƯ VIỆN ẢNH (quán + món ăn)
// ------------------------------------------------------------
export const GALLERY = [
  { src: '/images/dishes/pho-bo.jpg', alt: 'Tô phở bò nóng hổi tại Phở Mộc' },
  { src: '/images/quan-02.jpg', alt: 'Không gian quán Phở Mộc về đêm' },
  { src: '/images/dishes/pho-tron.jpg', alt: 'Phở trộn thịt đùi trứng non' },
  { src: '/images/dishes/com-ga-lan-02.jpg', alt: 'Cơm gà lẫn trứng non' },
  { src: '/images/quan-01.jpg', alt: 'Mặt tiền quán Phở Mộc ban ngày' },
  { src: '/images/dishes/pho-ga.jpg', alt: 'Phở gà ta hành lá tươi' },
  { src: '/images/dishes/ga-chat.jpg', alt: 'Gà ta chặt nguyên phần' },
  { src: '/images/dishes/pho-ga-lan.jpg', alt: 'Phở gà lẫn' },
  { src: '/images/dishes/com-ga-lan-01.jpg', alt: 'Cơm gà lẫn đủ vị' },
]

// ------------------------------------------------------------
// CẢM NHẬN KHÁCH HÀNG
// TODO: thay bằng đánh giá thật của khách (Google Maps / ShopeeFood / GrabFood)
// ------------------------------------------------------------
export const REVIEWS = [
  {
    name: 'Minh Anh',
    source: 'Google Maps',
    rating: 5,
    text: 'Nước dùng ngọt thanh, trong veo đúng vị phở Bắc. Quán sạch sẽ, khu Vinhomes rộng nên dễ tìm. Sẽ quay lại nhiều lần!',
  },
  {
    name: 'Quang Huy',
    source: 'ShopeeFood',
    rating: 5,
    text: 'Đặt giao qua app, phở tới vẫn nóng, gói gia vị đầy đủ. Phần thịt đùi dày, ăn mãi không ngán.',
  },
  {
    name: 'Thu Hằng',
    source: 'GrabFood',
    rating: 5,
    text: 'Cơm gà lẫn đỉnh thật sự, gà săn ngon, trứng non béo mềm. Giá cả hợp lý so với khu Smart City.',
  },
  {
    name: 'Đức Long',
    source: 'Google Maps',
    rating: 4,
    text: 'Phở trộn đậm đà, quẩy giòn tan đúng vị. Quán mới mở nên giờ đông hơi phải chờ một chút, nhưng món ngon đáng công đợi. Sẽ ghé lại ủng hộ!',
  },
  {
    name: 'Ngọc Mai',
    source: 'ShopeeFood',
    rating: 5,
    text: 'Cháo thịt xương nhừ nấu mềm nhừ, đút cho bé ăn rất hợp. Nhà mình thì mê tô phở gà da vàng, thịt ngọt. Sáng nào cũng đặt!',
  },
  {
    name: 'Thanh Tùng',
    source: 'GrabFood',
    rating: 5,
    text: 'Gà chặt nguyên phần dùng cho họp nhóm văn phòng, ai cũng khen. Nước chấm chuẩn vị, sẽ đặt tiếp.',
  },
]

// ------------------------------------------------------------
// ĐIỂM ĐẾN NHANH (thanh số liệu ở hero)
// ------------------------------------------------------------
export const STATS = [
  { value: '50+', label: 'Món đa dạng trong thực đơn' },
  { value: '8h', label: 'Hầm nước dùng mỗi ngày' },
  { value: '4.9★', label: 'Điểm hài lòng khách hàng' },
]
