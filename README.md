# For You ♡ — A Personal Love Letter Website

A beautiful, handcrafted romantic website built as a personal apology and love letter. This is a digital love letter mixed with a scrapbook, photo journal, and heartfelt message.

## ✨ Features

- **Beautiful Opening Experience** — Elegant first screen with animated glow and personal greeting
- **Heartfelt Letter** — Styled like a handwritten letter on warm paper
- **Photo Gallery** — 40+ real photos in a masonry layout with Polaroid styling, category filters, and a lightbox viewer
- **Love Notes** — Six beautiful cards celebrating what makes your person special
- **Surprise Envelope** — An interactive animated envelope hiding a secret note
- **Reassurance Section** — Sincere, non-manipulative promises displayed beautifully
- **Future Intentions** — Thoughtful cards about growing together
- **Emotional Finale** — A warm closing message tying everything together
- **Floating Hearts** — Subtle CSS-animated decorative hearts
- **Reading Progress** — Thin progress bar showing scroll position
- **Optional Music** — Play/pause toggle (off by default, never autoplays)
- **Fully Responsive** — Optimized for phones, tablets, and desktops
- **Accessible** — Keyboard navigation, focus indicators, reduced-motion support, semantic HTML

## 🛠 Tech Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) — Fast dev server and optimized builds
- [Tailwind CSS v4](https://tailwindcss.com/) — Utility-first styling
- [Framer Motion](https://www.framer.com/motion/) — Smooth animations
- [Lucide React](https://lucide.dev/) — Beautiful icons
- [Google Fonts](https://fonts.google.com/) — Cormorant Garamond, Inter, Caveat

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (comes with Node.js)

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

This opens the website at `http://localhost:5173` (or the next available port).

### Build for Production

```bash
npm run build
```

Output is in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## ✏️ Personalizing the Website

All content is in a single file:

### **`src/content/siteContent.ts`**

Edit this file to change:

| What to edit | Where in the file |
|---|---|
| Her name / nickname | `recipient.displayName` |
| Your name / sign-off | `sender.displayName` |
| Page title | `meta.pageTitle` |
| The apology letter | `letter.body` |
| Photo captions | `memories.photos` array |
| Things you love about her | `loveNotes.notes` array |
| Reassurance messages | `reassurance.items` array |
| Future intentions | `future.cards` array |
| Final message | `finale.body` |
| Surprise envelope note | `envelope.message` |
| Dedication date | `dedication.date` |
| Background music file | `audio.filename` |

You don't need to understand React — just change the text values in this file.

## 📷 Adding / Replacing Photos

Photos go in:

```
public/images/memories/
```

1. Add your photos (`.jpg`, `.jpeg`, `.png`, `.webp`)
2. Open `src/content/siteContent.ts`
3. Add entries to the `memories.photos` array:

```typescript
{
  src: '/images/memories/your-photo.jpg',
  caption: 'Your caption here',
  category: 'cute',        // early | cute | dates | travel | kodaikanal | recent
  featured: false,          // true = larger in gallery
  alt: 'Description for accessibility',
}
```

## 🎵 Adding Background Music

1. Place an audio file (e.g., `song.mp3`) in the `public/` folder
2. Edit `src/content/siteContent.ts`:

```typescript
audio: {
  filename: 'song.mp3',
},
```

Music is **never** autoplay. Visitors must click the play button.

## 🚀 Deployment

### Option A: Vercel (Recommended)

1. Push to GitHub (see below)
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **"Add New Project"**
4. Import your repository
5. Vercel auto-detects Vite — just click **Deploy**
6. Your site is live at `https://your-project.vercel.app`

### Option B: Netlify

1. Push to GitHub
2. Go to [netlify.com](https://www.netlify.com) and sign in with GitHub
3. Click **"Add new site" → "Import an existing project"**
4. Select your repository
5. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **Deploy**

### Redeploying After Changes

Just push to GitHub — both Vercel and Netlify auto-redeploy on push.

## 📤 Pushing to GitHub

If the repository is not yet initialized:

```bash
cd love-letter
git init
git add .
git commit -m "Build personalized romantic website"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your actual repository URL (e.g., `https://github.com/yourusername/love-letter.git`).

For subsequent changes:

```bash
git add .
git commit -m "Update content"
git push
```

## ⚠️ Privacy Notice

- Anyone with the public URL can view the website and its photos
- The site is **not** password-protected by default
- Do not include sensitive personal information
- Your photos are only stored in the repository and the hosting provider

## 📁 Project Structure

```
love-letter/
├── public/
│   └── images/
│       └── memories/          ← Your photos go here
│           ├── memory-01.jpg
│           ├── memory-02.jpg
│           └── ...
├── src/
│   ├── content/
│   │   └── siteContent.ts    ← ✏️ Edit this to personalize
│   ├── components/
│   │   ├── FloatingHearts.tsx
│   │   ├── Navigation.tsx
│   │   ├── ScrollControls.tsx
│   │   ├── MusicToggle.tsx
│   │   ├── OpeningSection.tsx
│   │   ├── LetterSection.tsx
│   │   ├── MemoriesSection.tsx
│   │   ├── LoveNotesSection.tsx
│   │   ├── SurpriseEnvelope.tsx
│   │   ├── ReassuranceSection.tsx
│   │   ├── FutureSection.tsx
│   │   └── FinaleSection.tsx
│   ├── hooks/
│   │   └── useScroll.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

Made with love ♡
