# 🚀 Hướng dẫn deploy Phở Mộc lên Cloudflare (Workers Builds)

> Domain `phomoc.com` đang trỏ DNS trên Cloudflare + code trên GitHub
> (`https://github.com/minhpn/phomoc.com`, branch `master`).
>
> ⚠️ **Cập nhật:** Cloudflare đã gộp luồng "Pages" vào **Workers Builds** — giao diện tạo mới
> ngày nay là của Worker, domain tạm có dạng `*.workers.dev` thay vì `*.pages.dev`.
> Hướng dẫn này đã viết theo **UI mới (Workers Builds)** đúng như bạn đang thấy.

---

## ⚡ Đang bị "Hello world" / build sai? Sửa ngay 3 chỗ

Nếu bạn đã tạo project nhưng truy cập `phomoc.betapcode.workers.dev` chỉ thấy "Hello world",
kiểm tra **Settings → Build** và sửa:

| Trường | ❌ Sai | ✅ Đúng | Giải thích |
|---|---|---|---|
| **Root directory** | `/dist` | *(để trống)* | Đây là nơi **chạy lệnh build** — phải là gốc repo (có `package.json`). KHÔNG phải thư mục output! |
| **Build command** | `npm run build` | `npm run build` | ✅ Giữ nguyên |
| **Deploy command** | `npm run build` | `npx wrangler deploy` | Đây là lệnh **đưa kết quả build lên Worker**. Điền `npm run build` = build 2 lần, không bao giờ deploy → site đứng yên "Hello world" |

Thư mục output (`dist`) **không có ô cấu hình trong UI** — nó nằm trong file
**`wrangler.jsonc`** ở gốc repo (đã có sẵn trong dự án này, đừng xóa):

```jsonc
{
  "name": "phomoc",
  "compatibility_date": "2026-08-01",
  "assets": {
    "directory": "./dist",                            // ← thư mục output nằm ở đây
    "not_found_handling": "single-page-application"   // SPA fallback — thay cho _redirects của Pages
  }
}
```

> ⚠️ **Không tạo file `public/_redirects`** với luật `/* /index.html 200` — Workers Assets
> sẽ từ chối deploy vì "Infinite loop detected" (SPA fallback đã lo bởi cấu hình trên).

**Các bước sửa xong:**

1. Đảm bảo `wrangler.jsonc` đã có trong repo → `git push`.
2. Sửa Root directory (trống) + Deploy command (`npx wrangler deploy`) trong Settings → Build.
3. Bấm **Trigger build** (hoặc push 1 commit bất kỳ) → chờ ~1 phút → site thật hiện ra.

---

## Bước 0 — Đưa code lên GitHub (bỏ qua nếu đã push)

```bash
cd /Volumes/CODE/workspace/phomoc

git init
git add .
git commit -m "feat: landing page Pho Moc"
git remote add origin https://github.com/minhpn/phomoc.com.git
git branch -M master
git push -u origin master
```

> `.gitignore` đã lo trước `node_modules/`, `dist/`, `.wrangler/`, `prd/` — không bị đẩy lên.

## Bước 1 — Tạo Worker + kết nối GitHub (nếu chưa có)

1. [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Workers**.
2. Chọn starter "Hello world" (đặt tên `phomoc`) → **Deploy**.
3. Vào Worker vừa tạo → tab **Settings** → mục **Build** → **Connect** → chọn GitHub repo
   `minhpn/phomoc.com`, branch `master`, authorize Cloudflare.
4. Cấu hình build (xem bảng "⚡ Sửa ngay 3 chỗ" ở trên nếu cần):
   - **Build command:** `npm run build`
   - **Deploy command:** `npx wrangler deploy`
   - **Root directory:** để trống
   - **Production branch:** `master`

## Bước 2 — Biến môi trường Node

**Settings → Build → Variables and Secrets** → thêm:

| Variable name | Value |
|---|---|
| `NODE_VERSION` | `22` |

## Bước 3 — Trigger build đầu tiên

Push một commit (hoặc bấm **Trigger build** trong tab **Deployments/Builds**).
Xong xuôi sẽ có:

```
https://phomoc.betapcode.workers.dev   ← site thật thay cho "Hello world"
```

✅ **Từ đây CI/CD đã chạy:** mỗi `git push` vào `master` → Cloudflare tự build + deploy (~1 phút).

### Bật preview cho nhánh & Pull Request

Settings → **Builds** → tick **"Builds for non-production branches"**.
Từ đó: push nhánh phụ hoặc tạo PR vào `master` → Cloudflare build **preview** có URL riêng,
commit ngay trên PR để xem trước khi merge. Merge → tự deploy production.

---

## Bước 4 — Trỏ domain `phomoc.com` vào Worker

Domain đã nằm ngay tài khoản Cloudflare nên rất đơn giản:

1. Vào Worker **phomoc** → **Settings** → **Domains & Routes** → **Add** → **Custom domain**.
2. Nhập `phomoc.com` → Cloudflare **tự tạo DNS + tự cấp SSL** (chờ vài phút đến vài giờ để Active).
3. Lặp lại thêm `www.phomoc.com`.

### Chuyển hướng `www` về domain gốc (khuyến nghị, tốt cho SEO)

1. Dashboard → domain **phomoc.com** → **Rules** → **Redirect Rules** → **Create rule**.
2. Cấu hình:
   - When: Field `Hostname` equals `www.phomoc.com`
   - Then: `Dynamic` → `concat("https://phomoc.com", http.request.uri.path)`, Status `301`
3. **Deploy**.

✅ **Kiểm tra:** `https://phomoc.com` load site với 🔒; `www.phomoc.com` tự chuyển về domain gốc.

---

## Bước 5 — Vận hành hằng ngày

```bash
git add .
git commit -m "cập nhật thực đơn"
git push            # ← tự build + deploy production
```

- **Lịch sử / rollback:** tab **Deployments** → chọn bản cũ → **Rollback** (vài giây).
- **Xem log build:** tab **Deployments** → bấm vào bản build lỗi.

## Xử lý sự cố thường gặp

| Triệu chứng | Nguyên nhân & cách xử lý |
|---|---|
| Vẫn thấy "Hello world" | Deploy command chưa phải `npx wrangler deploy`, hoặc thiếu `wrangler.jsonc` trong repo, hoặc build chưa chạy lại |
| Build fail `Could not find package.json` | Root directory không được để `/dist` — phải để trống |
| Build fail `Node ≥ 20 required` | Thiếu biến `NODE_VERSION=22` |
| Deploy fail `Invalid _redirects configuration` | Có file `public/_redirects` trong repo (chuẩn Pages cũ) — Workers Assets không chấp nhận luật `/* /index.html 200`. Xóa file này; SPA fallback đã có trong `wrangler.jsonc` |
| Vào path lạ bị 404 | Kiểm tra `wrangler.jsonc` có `not_found_handling: "single-page-application"` |
| Domain không Active | Kiểm tra DNS có record `phomoc.com → phomoc.betapcode.workers.dev` (CNAME, bật Proxy 🟠) |
| Ảnh cũ sau khi deploy | Cache 30 ngày (`public/_headers`) → `Ctrl/Cmd+Shift+R` |

## Phụ lục — Deploy thủ công từ máy local

```bash
npm run build
npx wrangler login
npx wrangler deploy        # đọc wrangler.jsonc, đẩy thư mục dist/ lên Worker "phomoc"
```

## Phụ lục B — Tùy chọn: CI/CD bằng GitHub Actions

Luồng Git-integration phía trên đã là CI/CD đủ dùng. Chỉ cần Actions khi muốn chạy test
trước deploy: tạo API Token (My Profile → API Tokens → template "Edit Cloudflare Workers"),
thêm secrets `CLOUDFLARE_API_TOKEN` + `CLOUDFLARE_ACCOUNT_ID` vào repo, tạo file
`.github/workflows/deploy.yml`, và **ngắt Git build** trong Worker settings để tránh deploy trùng:

```yaml
name: Deploy to Cloudflare Workers

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
      # - run: npm test        # bước test (nếu có)
      - run: npm run build
      - uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          command: deploy
```

---

## Tóm tắt checklist

- [ ] `wrangler.jsonc` đã có trong repo (assets → `./dist`)
- [ ] Root directory: **trống** · Build: `npm run build` · Deploy: `npx wrangler deploy`
- [ ] Biến `NODE_VERSION=22`
- [ ] Bật "Builds for non-production branches" (preview cho PR)
- [ ] Custom domain `phomoc.com` + `www` (Domains & Routes) + Redirect Rule www → gốc
- [ ] Push 1 commit thử → Cloudflare tự deploy
