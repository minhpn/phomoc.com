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
    'S06, Tòa GS5, The Miami, Vinhomes Smart City, Tây Mỗ, Nam Từ Liêm, Hà Nội',
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
// BẢNG THỰC ĐƠN ĐA NGÔN NGỮ (MENU BOARD) — bóc tách từ bảng menu giấy 2026
// Dùng cho màn hình "Xem thực đơn" (MenuBoard.jsx, y hệt bảng menu tại bàn).
// - Mọi text là object { vi, en, zh, ko } — zh = tiếng Trung, ko = tiếng Hàn.
// - Giá tính bằng nghìn đồng (55 = 55k). MENU ở trang chủ được DẪN XUẤT từ
//   MENU_BOARD ở dưới cùng file này nên chỉ cần sửa ở đây là đủ.
// ------------------------------------------------------------
const T = (vi, en, zh, ko) => ({ vi, en, zh, ko })

export const MENU_BOARD_LANGUAGES = [
  { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'ko', label: '한국어', flag: '🇰🇷' },
]

export const MENU_BOARD = {
  languages: MENU_BOARD_LANGUAGES,
  label: T('Thực đơn', 'Menu', '菜单', '메뉴'),
  title: 'PHỞ MỘC',
  slogan: T(
    'Tươi từ tâm — Xanh trong vị',
    'Fresh from the heart — Freshness in every taste',
    '鲜自心生 — 清新入味',
    '마음에서 온 신선함 — 맛 속의 푸르름'
  ),
  wifi: { ssid: 'Pho Moc', pass: 'Phomoc06' },
  wifiLabel: T('Wifi', 'Wifi', '无线网络', '와이파이'),
  passLabel: T('Mật khẩu', 'Password', '密码', '비밀번호'),
  phone: CONTACT.phone,
  phoneHref: CONTACT.phoneHref,
  phoneLabel: T('SĐT', 'Tel', '电话', '전화'),
  footer: T(
    'Kinh chúc Quý khách ngon miệng!',
    'We wish you a delicious meal!',
    '祝您用餐愉快！',
    '맛있게 즐기세요!'
  ),
  categories: [
    {
      id: 'nuoc',
      icon: '🥣',
      title: T(
        'Phở – Bún – Miến nước',
        'Noodle Soup',
        '汤粉类（河粉/米粉/粉丝）',
        '국물 국수 (퍼·쌀국수·당면)'
      ),
      items: [
        { name: T('Thịt lăn / Lươn / Phao câu', 'Marinated meat / Eel / Chicken gizzard', '腌肉 / 鳝鱼 / 鸡胗', '양념육 / 장어 / 닭모래주머니'), price: 55 },
        { name: T('Nhiều thịt', 'Extra meat', '多肉', '고기 많이'), price: 70 },
        { name: T('Thịt đùi', 'Chicken thigh', '鸡腿肉', '닭다리살'), price: 70 },
        { name: T('Thịt cánh', 'Chicken wing', '鸡翅肉', '닭날개살'), price: 70 },
        { name: T('Mề – Tràng – Trứng', 'Gizzard · Intestine · Egg', '鸡胗 · 鸡肠 · 蛋', '모래주머니 · 창자 · 달걀'), price: 55 },
        { name: T('Thịt đùi – Cánh', 'Thigh & Wing', '鸡腿 · 鸡翅', '닭다리 · 닭날개'), price: 100 },
        { name: T('Thịt bò tái', 'Rare beef', '生牛肉', '레어 소고기'), price: 55 },
        { name: T('Thịt xương nhừ', 'Stewed bone-in meat', '炖烂带骨肉', '푹 익힌 뼈고기'), price: 55 },
        { name: T('Mọc gà lăn', 'Marinated chicken meatballs', '腌鸡肉丸', '양념 닭고기 완자'), price: 55 },
        { name: T('Phở không', 'Plain phở (no toppings)', '净河粉', '퍼 (고기 없이)'), price: 20 },
        { name: T('Phở trẻ em', "Kids' phở", '儿童河粉', '어린이 퍼'), price: 25 },
      ],
    },
    {
      id: 'tron',
      icon: '🍜',
      title: T(
        'Phở – Bún – Miến trộn',
        'Mixed Noodles',
        '拌粉类（河粉/米粉/粉丝）',
        '비빔 국수 (퍼·쌀국수·당면)'
      ),
      items: [
        { name: T('Thịt lăn / Lươn / Phao câu', 'Marinated meat / Eel / Chicken gizzard', '腌肉 / 鳝鱼 / 鸡胗', '양념육 / 장어 / 닭모래주머니'), price: 60 },
        { name: T('Nhiều thịt', 'Extra meat', '多肉', '고기 많이'), price: 75 },
        { name: T('Thịt đùi', 'Chicken thigh', '鸡腿肉', '닭다리살'), price: 75 },
        { name: T('Thịt cánh', 'Chicken wing', '鸡翅肉', '닭날개살'), price: 75 },
        { name: T('Mề – Tràng – Trứng', 'Gizzard · Intestine · Egg', '鸡胗 · 鸡肠 · 蛋', '모래주머니 · 창자 · 달걀'), price: 60 },
        { name: T('Thịt đùi – Cánh', 'Thigh & Wing', '鸡腿 · 鸡翅', '닭다리 · 닭날개'), price: 105 },
        { name: T('Thịt bò', 'Beef', '牛肉', '소고기'), price: 60 },
      ],
    },
    {
      id: 'chao',
      icon: '🍚',
      title: T('Cháo', 'Congee', '粥', '죽'),
      items: [
        { name: T('Thịt lăn / Lươn / Phao câu', 'Marinated meat / Eel / Chicken gizzard', '腌肉 / 鳝鱼 / 鸡胗', '양념육 / 장어 / 닭모래주머니'), price: 55 },
        { name: T('Nhiều thịt', 'Extra meat', '多肉', '고기 많이'), price: 70 },
        { name: T('Thịt đùi', 'Chicken thigh', '鸡腿肉', '닭다리살'), price: 70 },
        { name: T('Thịt cánh', 'Chicken wing', '鸡翅肉', '닭날개살'), price: 70 },
        { name: T('Mề – Tràng – Trứng', 'Gizzard · Intestine · Egg', '鸡胗 · 鸡肠 · 蛋', '모래주머니 · 창자 · 달걀'), price: 55 },
        { name: T('Thịt đùi – Cánh', 'Thigh & Wing', '鸡腿 · 鸡翅', '닭다리 · 닭날개'), price: 100 },
        { name: T('Thịt bò', 'Beef', '牛肉', '소고기'), price: 55 },
        { name: T('Thịt xương nhừ', 'Stewed bone-in meat', '炖烂带骨肉', '푹 익힌 뼈고기'), price: 55 },
      ],
    },
    {
      id: 'com',
      icon: '🍛',
      title: T('Cơm', 'Rice', '米饭', '밥'),
      items: [
        { name: T('Thịt lăn / Lươn / Phao câu', 'Marinated meat / Eel / Chicken gizzard', '腌肉 / 鳝鱼 / 鸡胗', '양념육 / 장어 / 닭모래주머니'), price: 60 },
        { name: T('Nhiều thịt', 'Extra meat', '多肉', '고기 많이'), price: 80 },
        { name: T('Thịt đùi', 'Chicken thigh', '鸡腿肉', '닭다리살'), price: 75 },
        { name: T('Thịt cánh', 'Chicken wing', '鸡翅肉', '닭날개살'), price: 75 },
        { name: T('Thịt đùi – Cánh', 'Thigh & Wing', '鸡腿 · 鸡翅', '닭다리 · 닭날개'), price: 105 },
      ],
    },
    {
      id: 'xoi',
      icon: '🍙',
      title: T('Xôi gà xào nấm', 'Sticky Rice with Chicken', '鸡肉蘑菇糯米饭', '닭버섯 찹쌀밥'),
      items: [
        { name: T('Thịt lăn / Lươn / Phao câu', 'Marinated meat / Eel / Chicken gizzard', '腌肉 / 鳝鱼 / 鸡胗', '양념육 / 장어 / 닭모래주머니'), price: 60 },
        { name: T('Nhiều thịt', 'Extra meat', '多肉', '고기 많이'), price: 80 },
        { name: T('Thịt đùi', 'Chicken thigh', '鸡腿肉', '닭다리살'), price: 75 },
        { name: T('Thịt cánh', 'Chicken wing', '鸡翅肉', '닭날개살'), price: 75 },
        { name: T('Thịt đùi – Cánh', 'Thigh & Wing', '鸡腿 · 鸡翅', '닭다리 · 닭날개'), price: 105 },
      ],
    },
    {
      id: 'douong',
      icon: '🥤',
      title: T('Đồ uống', 'Drinks', '饮品', '음료'),
      freeNote: {
        text: T('Trà đá & rau sống free', 'Free iced tea & fresh greens', '免费冰茶与新鲜青菜', '얼음차 · 신선한 채소 무료'),
        sub: T('Nhân viên phục vụ quý khách tại bàn', 'Served at your table', '服务员为您上桌服务', '직원이 테이블에서 서비스해 드립니다'),
      },
      items: [
        { name: T('Nước lọc chai', 'Bottled water', '瓶装水', '생수'), price: 10 },
        { name: T('Nước đậu nành', 'Soy milk', '豆奶', '두유'), price: 10 },
        { name: T('Nước ngọt các loại', 'Soft drinks', '各类汽水', '탄산음료'), price: 15 },
        { name: T('Bia Heineken', 'Heineken beer', '喜力啤酒', '하이네켄 맥주'), price: 25 },
        { name: T('Bia Tiger', 'Tiger beer', '虎牌啤酒', '타이거 맥주'), price: 25 },
      ],
    },
    {
      id: 'dacbiet',
      icon: '⭐',
      title: T('Đặc biệt – Gọi thêm', 'Specials & Extras', '特色 · 加点', '특별 · 추가 메뉴'),
      columns: true,
      items: [
        { name: T('Trứng vịt lộn hầm ngải cứu', 'Balut egg with mugwort', '艾草焖鸭仔蛋', '쑥 곁들인 오리알 (발루트)'), price: 15, unit: T('/quả', '/egg', '/个', '/개') },
        { name: T('Quẩy giòn', 'Crispy fried dough sticks', '油条（脆）', '유자오 (바삭)'), price: 5, unit: T('/3 cái', '/3 pcs', '/3个', '/3개') },
        {
          name: T('Quẩy Mà Mây mềm/giòn', 'Mà Mây dough sticks (soft/crispy)', 'Mà Mây 油条（软/脆）', 'Mà Mây 유자오 (부드럽게/바삭하게)'),
          note: T('Chỉ có vào thứ 7 & CN', 'Weekends only', '仅周六、周日供应', '토·일에만 판매'),
          price: 10,
          unit: T('/3 cái', '/3 pcs', '/3个', '/3개'),
        },
        { name: T('Trứng chần', 'Poached egg', '水波蛋', '포치드 에그'), price: 10, unit: T('/quả', '/egg', '/个', '/개') },
        { name: T('Phao câu gà', 'Chicken gizzard', '鸡胗', '닭모래주머니'), price: 10 },
        { name: T('Chân gà luộc', 'Boiled chicken feet', '水煮鸡脚', '삶은 닭발'), price: 15, unit: T('/cái', '/pc', '/只', '/개') },
        { name: T('Mề – tràng – trứng chần', 'Gizzard · Intestine · Poached egg', '鸡胗 · 鸡肠 · 水波蛋', '모래주머니 · 창자 · 포치드 에그'), price: 100 },
        { name: T('Bò chần', 'Blanched beef', '涮牛肉', '데친 소고기'), price: 100 },
        { name: T('Xương sườn nhừ', 'Stewed soft ribs', '炖烂排骨', '푹 삶은 갈비'), price: 100 },
        { name: T('Cánh chặt', 'Chopped chicken wings', '切块鸡翅', '닭날개 토막'), price: 50, unit: T('/cái', '/pc', '/只', '/개') },
        { name: T('Gà chặt ½ con', '½ chicken, chopped', '半只鸡（切块）', '반 마리 닭 (토막)'), price: 300 },
        { name: T('Đùi gà gốc ta', 'Free-range chicken thigh', '土鸡腿', '토종닭 다리살'), price: 150 },
      ],
    },
  ],
  baby: {
    title: T('Cháo dinh dưỡng cho bé', 'Porridge for Babies', '宝宝营养粥', '아기 영양죽'),
    options: [
      { text: T('Cháo không gia vị', 'No seasoning', '不加调料', '양념 없음') },
      { text: T('Cháo để riêng nhân', 'Toppings on the side', '配料分开装', '고명은 따로') },
      { text: T('Cháo nấu luôn', 'Toppings mixed in', '配料一起煮', '고명 넣어 같이') },
      { text: T('Sốt nhân', 'Topping surcharge', '加料费', '토핑 추가 요금') },
      { text: T('Cháo không', 'Plain porridge', '白粥', '백죽') },
    ],
    notice: T(
      'Menu theo ngày — Ba Mẹ xem tại bảng',
      'Daily menu — parents, check the board',
      '菜单每日更新 — 请看店内白板',
      '메뉴는 매일 바뀌어요 — 게시판을 확인하세요'
    ),
  },
  notes: {
    title: T('Lưu ý', 'Notes', '温馨提示', '안내 사항'),
    items: [
      {
        icon: 'leaf',
        title: T('Nguyên liệu tươi mỗi ngày', 'Fresh ingredients every day', '每日新鲜食材', '매일 신선한 재료'),
        desc: T(
          'Cam kết nguyên liệu tươi sạch, an toàn.',
          'We commit to fresh, clean and safe ingredients.',
          '承诺食材新鲜、干净、安全。',
          '신선하고 깨끗하며 안전한 재료를 약속합니다.'
        ),
      },
      {
        icon: 'pot',
        title: T('Nấu từ tâm', 'Cooked from the heart', '用心熬制', '정성으로 끓입니다'),
        desc: T(
          'Nước dùng nấu từ xương gà, hầm kỹ trong nồi gia truyền giữ vị ngọt thanh tự nhiên.',
          'Broth simmered from chicken bones in our family pot — naturally sweet and light.',
          '汤底用鸡骨慢火细熬，保留自然清甜。',
          '닭뼈를 오래 우려낸 국물 — 자연 그대로의 담백한 단맛.'
        ),
      },
      {
        icon: 'heart',
        title: T('Phục vụ tận tình', 'Attentive service', '贴心服务', '정성껏 모십니다'),
        desc: T(
          'Cảm ơn Quý khách đã lựa chọn Phở Mộc!',
          'Thank you for choosing Phở Mộc!',
          '感谢您选择 Phở Mộc！',
          '퍼 목을 선택해 주셔서 감사합니다!'
        ),
      },
    ],
  },
}

// ------------------------------------------------------------
// THỰC ĐƠN TRANG CHỦ (tiếng Việt) — dẫn xuất từ MENU_BOARD để không lệch dữ liệu
// ------------------------------------------------------------
export const MENU = MENU_BOARD.categories.map((c) => ({
  id: c.id,
  label: c.title.vi,
  icon: c.icon,
  items: [
    ...(c.freeNote
      ? [{ name: c.freeNote.text.vi, note: c.freeNote.sub.vi, free: true }]
      : []),
    ...c.items.map((it) => ({
      name: it.name.vi,
      price: it.price,
      ...(it.unit ? { unit: it.unit.vi } : {}),
      ...(it.note ? { note: it.note.vi } : {}),
    })),
  ],
}))

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
