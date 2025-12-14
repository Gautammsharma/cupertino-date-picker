# 🍎 Cupertino Date Picker

> An Apple-style date picker for the web with momentum scrolling, blur effects, and native-like interactions.

**Cupertino Date Picker** is a lightweight, pure HTML/CSS/JavaScript date picker inspired by the iOS (Cupertino) wheel-style picker.  
It focuses on **smooth scrolling**, **progressive blur**, and **pixel-accurate UI behavior**, closely mimicking the native Apple experience on the web.

---

## ✨ Features

- 🍏 Apple (iOS) style wheel-based UI
- 🧲 iOS-like momentum scrolling & snap
- 🌫 Progressive blur on non-active rows
- 🎯 Center-focused active selection
- 🧊 Frosted-glass highlight bar
- ⚡ Built with pure HTML, CSS & JavaScript
- 📱 Touch & mouse friendly
- 🌙 Dark-mode ready by default

---

## 🎥 Demo

🔗 **Live Demo:**  
[https://gautamsharma.github.io/cupertino-date-picker/](https://gautammsharma.github.io/cupertino-date-picker/)

> _(Tip: Add a GIF or screen recording here for even better presentation)_

---

## 📂 Project Structure

cupertino-date-picker/
├── index.html
├── style.css
├── script.js
└── README.md

yaml
Copy code

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/gautamsharma/cupertino-date-picker.git
2️⃣ Open locally
Simply open index.html in your browser
(or use VS Code Live Server).

🧩 Usage
HTML
html
Copy code
<div class="picker">
  <div class="wheels">
    <div class="wheel" data-type="day"></div>
    <div class="wheel" data-type="month"></div>
    <div class="wheel" data-type="year"></div>

    <div class="highlight"></div>
  </div>

  <div class="date-output">
    <span id="output"></span>
  </div>
</div>
JavaScript Output Format
js
Copy code
output.textContent = `${state.day} ${data.month[state.month]} ${state.year}`
Example output:

yaml
Copy code
14 Jun 2025
🎛 Customization
Change Year Range
js
Copy code
year: Array.from({ length: 81 }, (_, i) => 1970 + i)
Adjust Blur Strength
js
Copy code
const blur = Math.min(6, distance * 1.5)
Adjust Scroll Snap Feel
js
Copy code
setTimeout(() => {
  snapWheel(wheel)
}, 80)
🧠 How It Works
Instead of using a true 3D cylinder (which is unstable on the web), this picker uses:

Vertical scroll snapping

Scale, opacity, and blur interpolation

A fixed center highlight

Momentum-based snapping

This approach closely matches how native iOS pickers actually behave, ensuring smooth performance and visual accuracy across browsers.

🌍 Browser Support
✅ Chrome

✅ Safari

✅ Firefox

✅ Edge

📱 Mobile browsers supported

🛠 Roadmap
⏱ Time picker (Hour / Minute)

📅 Date + Time combined picker

📱 Haptic feedback on snap (mobile)

🌍 Localization & i18n support

⚛️ React / Next.js component

📦 npm package release

🤝 Contributing
Contributions are welcome!

Fork the repository

Create a new branch

Commit your changes

Open a pull request

📄 License
MIT License
Free to use for personal and commercial projects.

👤 Author
Gautam Sharma
Visual Designer & UI/UX Engineer

If you find this project useful, consider giving it a ⭐ on GitHub.

yaml
Copy code

---

## ✅ What to do next (important)

1. Open your repo on GitHub  
2. Click **README.md → Edit ✏️**  
3. Paste this content  
4. **Commit changes**

Your repo will now look **clean, professional, and portfolio-ready**.

---

If you want next, I can:
- 🎥 Help you create a **demo GIF**
- ✨ Improve README visuals (badges, preview image)
- 📌 Optimize this for **portfolio & resume**
- 📦 Help publish it as an **npm package**

Just tell me 👍
