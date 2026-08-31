# 🚀 Hướng dẫn deploy Phở Mộc lên Cloudflare Pages

> Domain `phomoc.com` đang trỏ DNS trên Cloudflare + code trên GitHub
> (`https://github.com/minhpn/phomoc.com`, branch `master`).
> Làm theo thứ tự bên dưới — tổng thời gian khoảng **15–20 phút**, không cần cấu hình server.

Cloudflare Pages **tự động là CI/CD sẵn**: mỗi lần push code (hoặc tạo PR) lên GitHub,
Cloudflare tự build và deploy — không cần thiết lập GitHub Actions riêng trừ khi bạn muốn
chạy thêm bước test (xem [Phụ lục B](#phụ-lục-b-tùy-chọn-cicd-bằng-github-actions--wrangler)).

---

## Bước 0 — Đưa code mới nhất lên GitHub (bỏ qua nếu đã push)

Thư mục dự án hiện tại chưa phải git repo, nên nếu chưa push lần nào:

```bash
cd /Volumes/CODE/workspace/phomoc

git init
git add .
git commit -m "feat: landing page Pho Moc"

# kết nối với repo trên GitHub (đổi URL nếu khác)
git remote add origin https://github.com/minhpn/phomoc.com.git
git branch -M master
git push -u origin master
```

> 💡 File `.gitignore` đã có sẵn trong dự án — `node_modules/` và `dist/` sẽ không bị đẩy lên.

---

## Bước 1 — Tạo project Cloudflare Pages và kết nối GitHub

1. Đăng nhập [dash.cloudflare.com](https://dash.cloudflare.com) → menu trái chọn **Workers & Pages**.
2. Bấm **Create** → chuyển sang tab **Pages** → **Connect to Git**.
3. Chọn **GitHub** → authorize Cloudflare (cho phép truy cập repo `minhpn/phomoc.com`;
   có thể giới hạn chỉ repo này ở màn hình cấp quyền của GitHub).
4. Trong danh sách repo, chọn **`phomoc.com`** → **Begin setup**.

## Bước 2 — Cấu hình build

Điền chính xác các trường sau:

| Trường | Giá trị điền |
|---|---|
| Project name | `phomoc` *(→ sẽ có domain tạm `phomoc.pages.dev`)* |
| Production branch | `master` |
| Framework preset | `Vite` (hoặc `None`) |
| Build command | `npm run build` |
| Build output directory | `dist` |

Mở **Environment variables (Advanced)** → thêm 1 biến:

| Variable name | Value |
|---|---|
| `NODE_VERSION` | `22` |

> `NODE_VERSION` giúp môi trường build của Cloudflare dùng đúng bản Node như máy bạn.

Bấm **Save and Deploy** → chờ ~1 phút build lần đầu. Sau khi xong bạn có site chạy tại:

```
https://phomoc.pages.dev
```

✅ **Kiểm tra:** mở link trên, xem hero + thực đơn + bản đồ hiển thị đủ.
Từ lúc này, **mỗi lần bạn `git push` lên `master`, Cloudflare TỰ ĐỘNG build & deploy lại**
— đây chính là CI/CD, không cần làm gì thêm.

---

## Bước 3 — Trỏ domain `phomoc.com` vào Pages

Vì domain đã nằm ngay tài khoản Cloudflare, mọi thứ gần như tự động:

1. Vào project **phomoc** → tab **Custom domains** → **Set up a custom domain**.
2. Nhập `phomoc.com` → **Continue**.
   - Cloudflare tự tạo record CNAME trỏ `phomoc.com → phomoc.pages.dev`
     (domain gốc/root được Cloudflare tự flatten, không cần cấu hình gì thêm).
   - SSL/HTTPS **tự động cấp** (Universal SSL), mất vài phút đến vài giờ để Active.
3. Lặp lại và thêm `www.phomoc.com` (nên có cả www để ai gõ www vẫn vào được).

### Chuyển hướng `www` về domain gốc (khuyến nghị)

Để `www.phomoc.com` tự nhảy về `phomoc.com` (tốt cho SEO):

1. Dashboard → domain **phomoc.com** → menu trái **Rules** → **Redirect Rules** → **Create rule**.
2. Cấu hình:
   - Rule name: `www to apex`
   - When: Field = `Hostname`, Operator = `equals`, Value = `www.phomoc.com`
   - Then: Type = `Dynamic`, Expression = `concat("https://phomoc.com", http.request.uri.path)`, Status code = `301`
3. **Deploy**.

✅ **Kiểm tra:** mở `https://phomoc.com` — site load với khóa 🔒; gõ `www.phomoc.com` → tự chuyển về domain gốc.

---

## Bước 4 — Vận hành CI/CD hằng ngày

Luồng làm việc chuẩn từ giờ chỉ là:

```bash
git add .
git commit -m "cập nhật thực đơn"
git push            # ← Cloudflare tự build + deploy production trong ~1 phút
```

| Hành động trên GitHub | Cloudflare tự làm gì |
|---|---|
| Push commit mới vào `master` | Build & deploy **production** → `phomoc.com` |
| Push nhánh khác (vd `feat/menu`) | Build **preview** → URL riêng dạng `<hash>.phomoc.pages.dev` |
| Tạo **Pull Request** vào `master` | Build preview + bot Cloudflare comment link preview ngay trên PR |
| Merge PR vào `master` | Tự deploy production |

**Bật/tắt preview deployment:** vào project → **Settings** → **Builds & deployments**
→ mục **Preview deployments** (mặc định đang bật).

**Xem lịch sử / rollback:** tab **Deployments** → mỗi bản build có log đầy đủ;
muốn quay lại bản cũ bấm **⋯ → Rollback to this deployment** (vài giây là xong, vô cùng tiện khi deploy nhầm).

---

## Xử lý sự cố thường gặp

| Triệu chứng | Nguyên nhân & cách xử lý |
|---|---|
| Build fail `Node ≥ 20 required`... | Thiếu biến môi trường `NODE_VERSION=22` (Bước 2) |
| Build fail ở `npm ci` | Đẩy đúng file `package-lock.json` lên repo |
| Domain Active mãi không xong | Check DNS: `phomoc.com` phải có CNAME trỏ `phomoc.pages.dev` (Cloudflare tự tạo; nếu bị xóa thì tạo lại, bật Proxy 🟠) |
| Vào trang con bị 404 (sau này nếu thêm route) | Đã có sẵn file `public/_redirects` trong repo xử lý — đừng xóa file này |
| Ảnh lâu mới cập nhật | Ảnh được cache 30 ngày (`public/_headers`); deploy mới rồi vẫn thấy ảnh cũ → bấm **Ctrl/Cmd+Shift+R** |

---

## Phụ lục A — Deploy thủ công bằng Wrangler (không qua Git)

Hữu ích khi cần deploy gấp từ máy local:

```bash
npm run build
npx wrangler login
npx wrangler pages deploy dist --project-name=phomoc
```

## Phụ lục B — Tùy chọn: CI/CD bằng GitHub Actions + Wrangler

Chỉ cần khi bạn muốn **chạy test trước khi deploy** hoặc kiểm soát pipeline chặt hơn.
(Luồng Git-integration ở Bước 1 đã là CI/CD đủ dùng cho landing page này.)

1. **Tạo API Token:** Cloudflare → góc phải avatar → **My Profile** → **API Tokens** →
   **Create Token** → template **"Edit Cloudflare Workers"** → chỉnh quyền thêm
   **Account / Cloudflare Pages / Edit** → tạo và copy token.
2. **Lấy Account ID:** Workers & Pages → nhìn cột phải màn hình chính (hoặc trong project).
3. Trên GitHub repo → **Settings → Secrets and variables → Actions** → thêm 2 secrets:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
4. Tạo file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [master]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      # - run: npm test          # thêm bước test (nếu có) tại đây
      - run: npm run build
      - uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          command: pages deploy dist --project-name=phomoc
```

5. Nếu dùng luồng Actions này thì vào project Pages → **Settings → Builds & deployments**
   → **ngắt kết nối Git** (tránh hai luồng deploy cùng lúc).

---

## Tóm tắt checklist

- [ ] Bước 0: Push code lên GitHub (branch `master`)
- [ ] Bước 1–2: Tạo Pages project, build command `npm run build`, output `dist`, biến `NODE_VERSION=22`
- [ ] Bước 3: Thêm custom domain `phomoc.com` + `www.phomoc.com`, tạo Redirect Rule www → gốc
- [ ] Bước 4: Push 1 commit thử → thấy Cloudflare tự deploy
