# DISTORT — Android App Package

## What's in this folder

| File | Purpose |
|------|---------|
| `index.html` | The full game (PWA-ready) |
| `manifest.json` | Web App Manifest — tells Android about the app |
| `sw.js` | Service Worker — enables offline play |
| `icons/` | App icons in all required sizes |
| `Psyop_Disinformation_Game.mp3` | ⚠️ Add this yourself (your audio file) |

---

## Step 1 — Host the files

You need the files on a **public HTTPS URL** before wrapping into an APK.

**Easiest free option: GitHub Pages**
1. Create a free GitHub account at github.com
2. Create a new repository (e.g. `distort-game`)
3. Upload ALL files from this folder (keep `icons/` folder intact)
4. Go to Settings → Pages → set source to `main` branch → Save
5. Your URL will be: `https://YOUR-USERNAME.github.io/distort-game/`

---

## Step 2 — Wrap into an APK

### Option A: PWABuilder (recommended, free)
1. Go to **https://www.pwabuilder.com**
2. Enter your GitHub Pages URL
3. Click **Package for Stores** → choose **Android**
4. Download the `.apk` or `.aab` file
5. Install on Android via: Settings → Install Unknown Apps

### Option B: WebIntoApp (simpler UI)
1. Go to **https://webintoapp.com**
2. Enter your URL, set app name to **DISTORT**, package name to `com.distort.game`
3. Upload `icons/icon-512.png` as the app icon
4. Download APK and sideload onto your device

---

## ⚠️ Audio file note

The game references `Psyop_Disinformation_Game.mp3`. Make sure this file is uploaded
to the same folder as `index.html` on your hosting, otherwise music won't play.

---

## Installing the APK on Android (sideloading)
1. Transfer the `.apk` to your Android device
2. Open the file in your file manager
3. If prompted, enable **Install from unknown sources** for your file manager
4. Tap Install
