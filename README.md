# Mario Kiro — Inquiry Form (React + Vite)

Minimal responsive photography inquiry form built with React + Vite. Submits form data directly to WhatsApp with `https://wa.me/` link.

## Quick Start

### Install & Run Locally

```bash
cd /Users/mina/Coding/MarioKiroForm
npm install
npm run dev
```

Open the dev URL shown by Vite (usually `http://localhost:5173`).

### Configuration

Edit `src/config.js` and set `whatsappNumber` to Mario's WhatsApp number:

```javascript
const config = {
  whatsappNumber: "201033770018"  // Country code + number, no + or 00
}
export default config;
```

---

## Deployment

### Vercel via GitHub Actions (Current Setup)

Every push to `main` automatically builds and deploys to Vercel using GitHub Actions and the Vercel CLI.

#### How it works

The workflow at `.github/workflows/deploy.yml` runs on every push to `main`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy to Vercel
        run: npx vercel --token=${{ secrets.VERCEL_TOKEN }} --prod --yes
        env:
          VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
          VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}
```

#### Required GitHub Secrets

Go to your repo → **Settings → Secrets and variables → Actions** and add:

| Secret | Where to find it |
|---|---|
| `VERCEL_TOKEN` | vercel.com/account/tokens → Create Token |
| `VERCEL_ORG_ID` | Vercel project → Settings → General |
| `VERCEL_PROJECT_ID` | Vercel project → Settings → General (starts with `prj_`) |

#### Vercel Alias

The project is aliased to `1oakstudio-inquiry.vercel.app` via `vercel.json` at the project root:

```json
{
  "alias": ["1oakstudio-inquiry.vercel.app"]
}
```

#### Custom Domain (Planned)

The planned production domain is `forms.1oakstudio.com` (domain not yet purchased).

Once the domain is acquired:
1. Go to Vercel project → **Settings → Domains** → Add `forms.1oakstudio.com`
2. Add a CNAME record at your domain registrar pointing to Vercel's provided value
3. DNS propagation takes up to 24–48 hours

#### Manual Deploy (if needed)

```bash
npm i -g vercel
vercel --prod
```

---

## File Structure

```
MarioKiroForm/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions → Vercel deployment
├── src/
│   ├── InquiryForm.jsx      # Main form component
│   ├── config.js            # WhatsApp number configuration
│   ├── main.jsx             # React entry point
│   └── styles.css           # Global styles (Tailwind CDN + custom)
├── index.html               # App host
├── vercel.json              # Vercel alias config
├── vite.config.js           # Vite configuration
├── package.json             # Dependencies & scripts
└── README.md
```

---

## Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ WhatsApp direct messaging on submit
- ✅ Clean, elegant UI with Tailwind CSS
- ✅ No backend required (client-side only)
- ✅ Auto-deploys to Vercel on every push to `main`
- ✅ Easy to customize colors, fields, and copy

---

## Customization

### Change Colors

Edit `src/InquiryForm.jsx` and look for inline styles:

```javascript
style={{
  backgroundColor: '#25D366',  // WhatsApp green
}}
```

### Add/Remove Form Fields

Edit the form JSX in `src/InquiryForm.jsx` and update the `formData` state accordingly.

### Change WhatsApp Message Format

Edit the `handleSubmit` function in `src/InquiryForm.jsx` to customize the message template.

---

## Next Steps (Optional)

- Add server-side logging (Firebase, Supabase, or Node.js backend)
- Add form validation & success UI
- Add email notifications
- Add payment integration if offering photography packages

---

## Links

- **Vercel project:** https://vercel.com/mina-nabils-projects/mariokiro-inquiry
- **Vercel alias:** https://1oakstudio-inquiry.vercel.app
- **Planned domain:** forms.1oakstudio.com (not yet purchased)
- **Vercel docs:** https://vercel.com/docs