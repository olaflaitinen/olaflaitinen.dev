# olaflaitinen.dev

Personal website for **Olaf Laitinen** — AI Leader, Researcher & Engineer.

Built with **Next.js 14 (App Router)**, **React 18**, and **Tailwind CSS**. Deployed as a static export to **Azure Static Web Apps** at [olaflaitinen.dev](https://olaflaitinen.dev).

---

## Design

Premium dark-theme single-page site with:
- Deep charcoal / navy palette (`#07090f` background)
- Inter font via `next/font/google`
- Tailwind CSS with custom dark-theme color tokens
- Subtle grid textures, radial glows, and staggered entry animations
- Responsive across mobile, tablet, and desktop

---

## Site structure

Single-page architecture with anchor navigation:

| Section | Anchor |
|---|---|
| Hero | `#` |
| About | `#about` |
| Focus Areas | `#focus` |
| Experience | `#experience` |
| Publications | `#research` |
| Skills | `#skills` |
| Leadership & Impact | `#leadership` |
| Education | `#education` |
| Contact | `#contact` |

---

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router, `output: 'export'`) |
| UI | React 18 + Tailwind CSS 3 |
| Font | Inter via `next/font/google` |
| Deployment | Azure Static Web Apps |
| CI/CD | GitHub Actions |

---

## Project structure

```
olaflaitinen.dev/
├── app/
│   ├── layout.tsx          # Root layout — metadata, JSON-LD, Inter font
│   ├── page.tsx            # Single-page composition
│   ├── globals.css         # Dark-theme global styles + animation utilities
│   ├── sitemap.ts          # Auto-generated sitemap.xml
│   └── robots.ts           # Auto-generated robots.txt
├── components/
│   ├── Navigation.tsx      # Sticky nav with scroll state + mobile menu
│   ├── Hero.tsx            # Hero — headline, CTAs, keyword strip
│   ├── About.tsx           # About / positioning section
│   ├── FocusAreas.tsx      # 8-tile focus area grid
│   ├── Experience.tsx      # Filtered timeline with category tabs
│   ├── Publications.tsx    # Tagged, searchable publications grid
│   ├── Skills.tsx          # Grouped skills + tech stack strip
│   ├── Leadership.tsx      # Impact pillars + metrics
│   ├── Education.tsx       # Education timeline
│   ├── Contact.tsx         # Contact / collaboration CTA
│   └── Footer.tsx          # Site footer
├── data/
│   ├── experience.ts       # Typed experience records
│   ├── publications.ts     # Typed publication records
│   ├── education.ts        # Typed education records
│   └── skills.ts           # Typed skill group records
├── public/
│   ├── og-image.svg        # Open Graph social preview (1200×630)
│   └── site.webmanifest    # PWA manifest
├── staticwebapp.config.json  # Azure SWA routing + security headers
├── .github/workflows/
│   └── azure-static-web-apps.yml  # CI/CD deploy pipeline
├── next.config.js          # Static export config
├── tailwind.config.js      # Dark-theme color tokens
├── tsconfig.json
└── package.json
```

---

## Local development

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # Static export → /out directory
npx serve out     # Preview production build locally
```

> **Note:** On Windows, the build may occasionally fail with a transient `ENOENT` error during trace collection. Re-running `npm run build` immediately resolves it. This is a known race condition in Next.js 14 on Windows and does not affect the output.

---

## Azure deployment

### Option A — Azure Static Web Apps (recommended)

1. **Create a Static Web App** in [Azure Portal](https://portal.azure.com):
   - Search "Static Web Apps" → Create
   - Connect to your GitHub repository
   - Build details: App location `/`, Output location `out`, API location *(empty)*

2. **Add deployment secret** to GitHub:
   - Azure Portal → your Static Web App → Manage deployment token → copy
   - GitHub → Settings → Secrets → Actions → New secret: `AZURE_STATIC_WEB_APPS_API_TOKEN`

3. **Configure custom domain**:
   - Azure Portal → Static Web App → Custom domains → Add
   - Enter `olaflaitinen.dev` and `www.olaflaitinen.dev`
   - Follow the DNS validation steps

4. **Push to `main`** — GitHub Actions builds and deploys automatically.

### DNS configuration

```
Type    Name    Value
CNAME   www     <your-app>.azurestaticapps.net
ALIAS   @       <your-app>.azurestaticapps.net
```

For root/apex domains use ALIAS or ANAME. If your registrar does not support ALIAS, use Azure DNS.

### Option B — Azure Blob Storage + CDN

1. `npm run build` → creates `/out` directory
2. Create Azure Storage Account with static website hosting enabled
3. Upload `/out` contents to the `$web` container
4. Configure Azure CDN pointing to `olaflaitinen.dev`
5. Enable HTTPS via Azure CDN managed certificate

---

## Content updates

All content lives in typed data files in `/data` — edit and rebuild, no CMS required:

| File | Content |
|---|---|
| `data/experience.ts` | Work history records |
| `data/publications.ts` | Research publications |
| `data/education.ts` | Education history |
| `data/skills.ts` | Skill groups and items |

---

## SEO & metadata

- Open Graph + Twitter Card metadata in `app/layout.tsx`
- JSON-LD `Person` structured data
- Sitemap at `/sitemap.xml`
- robots.txt at `/robots.txt`
- Replace `public/og-image.svg` with a 1200×630 PNG for broadest social preview compatibility

---

## Security headers

Configured in `staticwebapp.config.json` for Azure SWA:

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` restricting camera, microphone, geolocation

---

## License

Private. All content © Olaf Laitinen.
