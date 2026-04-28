
# 📋 Attendance Tracker

> A simple, lightweight web app to track and manage your class attendance — built for university, school, or any institution.

🔗 **Live App:** [guvn0rr.github.io/AttendanceTracker](https://guvn0rr.github.io/AttendanceTracker)

---

## What Is It?

Attendance Tracker is a **Progressive Web App (PWA)** that runs entirely in your browser. You set up your semester details and subjects, then mark attendance day by day. The app keeps a running record so you always know where you stand — no backend, no account, no app store needed.

**Features:**
- Add subjects with codes, names, credit hours, and class days
- Set your semester start date and duration
- Mark attendance per class per day
- Works **offline** once installed (service worker enabled)
- Dark mode support
- All data stored **locally** on your device — nothing leaves your phone

---

## 📱 Install on Mobile (Android – Chrome)

Since this is a PWA, you can install it like a real app — no app store needed. There are two ways:

### Option A — Install Banner (Easiest)

When you open the app in Chrome, an install banner appears automatically at the top of the page.

1. Open [guvn0rr.github.io/AttendanceTracker](https://guvn0rr.github.io/AttendanceTracker) in Chrome on your Android phone.
2. A banner saying **"Install Lecture Tracker"** will appear at the top.
3. Tap **Install** — done!

<p align="center">
  <img src="img2.jpg" width="250" alt="Install banner appearing at the top of Chrome"/>
  <img width="572" height="1214" alt="photo_2026-04-28_17-55-18" src="https://github.com/user-attachments/assets/dc67e364-97f8-43f0-b3ed-aaaf7c70c95f" />
  <br/>
  <em>The install banner appears automatically at the top of Chrome</em>
</p>

---

### Option B — Install from the Menu

If the banner doesn't appear, you can install it manually through Chrome's menu.

1. Open the app link in Chrome.
2. Tap the **⋮ three-dot menu** in the top-right corner *(circled in red below)*.
3. Scroll down and tap **"Add to Home screen"**.
4. Confirm — the app icon will appear on your home screen.

<p align="center">
  <img src="img1.jpg" width="250" alt="Three-dot menu highlighted in Chrome"/>
  <br/>
  <em>Tap the ⋮ three-dot menu in the top-right corner of Chrome</em>
</p>

<p align="center">
  <img src="img3.jpg" width="250" alt="Add to Home screen option in Chrome menu"/>
  <br/>
  <em>Select "Add to Home screen" from the Chrome menu</em>
</p>

> 💡 The app will appear on your home screen just like any other app, and works offline after the first load.

---

## 💻 Install on Desktop (Chrome / Edge)

1. Visit [guvn0rr.github.io/AttendanceTracker](https://guvn0rr.github.io/AttendanceTracker) in Chrome or Edge.
2. Look for the **install icon (⊕)** on the right side of the address bar.
3. Click it and select **"Install"**.
4. The app will open as a standalone window, just like a desktop application.

> 💡 If you don't see the install icon, go to **Menu (⋮) → Cast, Save, and Share → Install page as app**.

---

## 🛠️ Run Locally (For Developers)

No build tools or dependencies needed — it's plain HTML + JavaScript.

```bash
git clone https://github.com/Guvn0rr/AttendanceTracker.git
cd AttendanceTracker

# Open index.html directly in your browser, or use a static file server:
npx serve .
```

Then open `http://localhost:3000` in your browser.

---

*GitHub: [github.com/Guvn0rr/AttendanceTracker](https://github.com/Guvn0rr/AttendanceTracker)*
