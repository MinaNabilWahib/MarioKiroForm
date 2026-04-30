# Deployment Guide: Mario Kiro Inquiry Form

This guide covers deploying the form to GitHub Pages (testing) and then to your custom domain `forms.mariokiro.com`.

---

## Part 1: Deploy to GitHub Pages (Testing)

### Prerequisites
- GitHub account (free at github.com)
- Git installed on your Mac
- Project ready to deploy

### Step 1: Initialize Git & Push to GitHub

```bash
cd /Users/mina/Coding/MarioKiroForm

# Initialize git repo (if not done)
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: Mario Kiro inquiry form"
```

### Step 2: Create GitHub Repo

1. Go to [github.com/new](https://github.com/new)
2. **Repository name:** `MarioKiroForm` (or any name you prefer)
3. **Description:** (optional) "Photography inquiry form for Mario Kiro"
4. Click "Create repository"

### Step 3: Connect Local Repo to GitHub

Copy the commands from GitHub's setup page (they'll look like this):

```bash
git remote add origin https://github.com/YOUR_USERNAME/MarioKiroForm.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username and run those commands.

### Step 4: Enable GitHub Pages

1. Go to your repo: `github.com/YOUR_USERNAME/MarioKiroForm`
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - **Source:** Select "Deploy from a branch"
   - **Branch:** Select `gh-pages` and `/root`
   - Click **Save**

The workflow file (`.github/workflows/deploy.yml`) will automatically build and deploy when you push to `main`.

### Step 5: Push to Deploy

```bash
# Make changes, then:
git add .
git commit -m "Update form"
git push origin main

# GitHub Actions will automatically build and deploy to gh-pages
# Check the Actions tab to see the build status
```

**Your test site will be live at:**
```
https://YOUR_USERNAME.github.io/MarioKiroForm
```

---

## Part 2: Deploy to Custom Domain (forms.mariokiro.com)

### Option A: Vercel (Recommended — Free, Easiest)

**Pros:** Free tier, automatic deploys, best performance, custom domain support built-in

#### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

#### Step 2: Deploy

```bash
cd /Users/mina/Coding/MarioKiroForm
vercel
```

Follow the prompts:
- "Set up and deploy?" → `y`
- "Which scope?" → Choose your account
- "Link to existing project?" → `n`
- "What's your project's name?" → `mario-kiro-inquiry` (or your name)
- "In which directory is your code?" → `./` (current directory)
- "Want to modify these settings?" → `n` (use defaults)

#### Step 3: Connect Custom Domain

1. After deployment, go to your Vercel project dashboard
2. **Settings** → **Domains**
3. Click "Add Domain"
4. Enter: `forms.mariokiro.com`
5. Vercel will show you nameserver instructions (2 options):
   - **Option 1 (Easier):** Update nameservers at your domain registrar
   - **Option 2:** Add CNAME record to your DNS

Follow Vercel's instructions for your domain registrar.

#### Step 4: Future Deployments

After changes, deploy again:

```bash
vercel --prod
```

Or use GitHub integration:
1. In Vercel dashboard: **Settings** → **Git**
2. Connect your GitHub repo
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Now every push to `main` auto-deploys!

---

### Option B: Netlify (Alternative — Free, Also Easy)

**Pros:** Free tier, great UI, automatic deploys, custom domain support

#### Step 1: Connect GitHub

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub"
4. Authorize Netlify to access your GitHub account
5. Select your `MarioKiroForm` repo

#### Step 2: Configure Build

1. **Build command:** `npm run build`
2. **Publish directory:** `dist`
3. Click "Deploy site"

#### Step 3: Connect Custom Domain

1. After deployment, go to your site settings
2. **Domain management** → **Add custom domain**
3. Enter: `forms.mariokiro.com`
4. Follow Netlify's DNS instructions for your registrar

#### Step 4: Future Deployments

Every push to `main` automatically deploys!

---

### Option C: Traditional Hosting (Shared Hosting, VPS)

If you have existing hosting with your domain registrar:

#### Step 1: Build

```bash
npm run build
```

#### Step 2: Upload to Server

Upload the entire `dist/` folder to your hosting via:
- **FTP** (if using shared hosting)
- **SFTP/SSH** (if using a VPS)
- **cPanel** file manager (if using cPanel hosting)

Most hosting providers provide upload instructions.

#### Step 3: Set Up DNS

Point your domain to your hosting's nameservers or IP address. Instructions depend on your registrar and hosting provider.

---

## Step-by-Step Summary

### Quick Checklist

- [ ] Code pushed to GitHub ✅
- [ ] GitHub Pages enabled (automatic with workflow)
- [ ] Test on GitHub Pages: `https://YOUR_USERNAME.github.io/MarioKiroForm`
- [ ] Choose deployment option (Vercel recommended)
- [ ] Deploy to custom domain
- [ ] Update domain DNS settings
- [ ] Test on `forms.mariokiro.com`
- [ ] Share the link with Mario!

---

## Testing Your Deployment

After deploying, test the form:

1. Open `forms.mariokiro.com` (or GitHub Pages URL)
2. Fill in test data:
   - Names: "Test Couple"
   - Instagram: "@testcouple"
   - Date: Any future date
   - Event Type: "Wedding"
   - Venue: "Test Venue"
   - Guests: "100"
   - Help: "Test message"
3. Click "Start your journey on WhatsApp"
4. Verify the message opens with all data filled in

---

## Troubleshooting

### "GitHub Pages site not found"
- Wait 2-3 minutes after enabling Pages (it takes time to build)
- Check the Actions tab for build errors
- Ensure branch is set to `gh-pages`

### "Custom domain shows error"
- DNS changes take 24-48 hours to propagate
- Check DNS settings are correct (Vercel/Netlify will show what to set)
- Clear your browser cache

### "Form data missing in WhatsApp message"
- Check `src/config.js` has the correct WhatsApp number
- Verify the form fields match the message template in `src/InquiryForm.jsx`

### "Build fails on GitHub Actions"
- Check Actions tab for error details
- Usually a missing dependency; run `npm install` locally and push again

---

## Next Steps (Optional Enhancements)

- Add form validation & success UI
- Add server-side submission logging (Firebase, Supabase)
- Add email notifications to Mario
- Track analytics (Google Analytics, Vercel Analytics)
- Add multiple language support
- Add payment booking integration

---

## Support Links

- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com
- **GitHub Pages Docs:** https://pages.github.com
- **Domain Registrars:** GoDaddy, Namecheap, Google Domains, etc.

---

**Questions?** Check the README.md or re-read the specific deployment section above!
