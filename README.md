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

### Vercel Git Deployments

Both Vercel projects are connected directly to this GitHub repository. Vercel automatically builds every push and creates a preview deployment. Set the production branch in each project under **Settings → Git**:

- `mariokiro-inquiry` → `1oak-studios`
- `mariokero-inquiry` → `mariokero`

After this one-time setting, pushing to either branch automatically updates its matching production URL. No GitHub Actions workflow or Vercel secrets are required.

### Branch Deployments

The repository has two production branches:

| Branch | Brand | Suggested Vercel URL |
|---|---|---|
| `1oak-studios` | 1 OAK STUDIOS | `https://1oakstudio-inquiry.vercel.app` |
| `mariokero` | Mario Kiro | `https://mariokero-inquiry.vercel.app` |

Create two Vercel projects from this GitHub repository:

1. Project `1oakstudio-inquiry`: set the production branch to `1oak-studios`.
2. Project `mariokero-inquiry`: set the production branch to `mariokero`.
3. Add the suggested domain to each project under **Settings → Domains**.
4. Enable automatic deployments from the connected GitHub repository.

Each branch contains its own `vercel.json` alias:

```json
{
  "alias": ["1oakstudio-inquiry.vercel.app"]
}
```

The `mariokero` branch uses `mariokero-inquiry.vercel.app` instead.

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

- **1OAK URL:** https://1oakstudio-inquiry.vercel.app
- **Mario Kiro URL:** https://mariokero-inquiry.vercel.app
- **Vercel docs:** https://vercel.com/docs