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

### Option 1: GitHub Pages (Free Testing)

Best for quick testing before custom domain.

**Step 1: Initialize Git repo (if not already done)**

```bash
cd /Users/mina/Coding/MarioKiroForm
git init
git add .
git commit -m "Initial commit: Mario Kiro inquiry form"
```

**Step 2: Push to GitHub**

Create a new repo on GitHub named `MarioKiroForm`, then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/MarioKiroForm.git
git branch -M main
git push -u origin main
```

**Step 3: Enable GitHub Pages**

1. Go to your repo: `github.com/YOUR_USERNAME/MarioKiroForm`
2. Settings → Pages
3. Under "Build and deployment":
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `root`
   - Click "Save"

**Step 4: Deploy**

```bash
npm run build
git add dist -f
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix dist origin gh-pages
```

Your site will be live at: `https://YOUR_USERNAME.github.io/MarioKiroForm`

**To automate this in future, use:**
```bash
npm run deploy:gh-pages
```

---

### Option 2: Custom Domain (forms.mariokiro.com)

For production, deploy to a custom domain using Vercel or Netlify (recommended, both free tiers available).

#### Deploy to Vercel (Recommended — easiest)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   cd /Users/mina/Coding/MarioKiroForm
   vercel
   ```

3. **Connect custom domain:**
   - Vercel project settings → Domains → Add `forms.mariokiro.com`
   - Update your domain registrar's DNS to point to Vercel (Vercel provides CNAME records)

#### Deploy to Netlify

1. **Connect GitHub repo:**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repo
   - Build command: `npm run build`
   - Publish directory: `dist`

2. **Connect custom domain:**
   - Site settings → Domain management → Add custom domain
   - Update your domain registrar's DNS

#### Deploy to Custom Hosting (Shared Hosting, VPS, etc.)

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload `dist/` folder** to your hosting provider via FTP/SSH.

3. **Point your domain** (`forms.mariokiro.com`) to your hosting via DNS settings.

---

## File Structure

```
MarioKiroForm/
├── src/
│   ├── InquiryForm.jsx      # Main form component
│   ├── config.js            # WhatsApp number configuration
│   ├── main.jsx             # React entry point
│   └── styles.css           # Global styles (Tailwind CDN + custom)
├── index.html               # App host
├── vite.config.js           # Vite configuration
├── package.json             # Dependencies & scripts
├── CNAME                    # Custom domain config (for GitHub Pages + custom domain)
└── README.md
```

---

## Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ WhatsApp direct messaging on submit
- ✅ Clean, elegant UI with Tailwind CSS
- ✅ No backend required (client-side only)
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

## Questions?

For Vercel: https://vercel.com/docs
For Netlify: https://docs.netlify.com/
For GitHub Pages: https://pages.github.com/

