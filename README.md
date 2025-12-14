# Cupertino Date Picker

A small experiment to recreate the familiar iOS date picker feel on the web.

This project is inspired by Apple’s wheel-style date picker (Cupertino UI).  
The goal wasn’t to build “another date picker”, but to focus on **motion, depth, blur, and touch feel** — the little details that make native interfaces feel right.

Built using **pure HTML, CSS, and JavaScript**.  
No frameworks. No shortcuts. Just careful UI polish.

---

## ✨ What this does

- iOS-style wheel-based date selection
- Momentum scrolling with smooth snap
- Progressive blur on non-active rows
- Clear center focus (like native pickers)
- Frosted-glass style highlight bar
- Works with mouse and touch
- Dark-mode friendly by default

---

## 🔗 Live Demo

Try it here:  
👉 https://gautamsharma.github.io/cupertino-date-picker/

_(Best experienced on mobile or with a trackpad)_

---

## 📁 Project Structure

cupertino-date-picker/
├── index.html
├── style.css
├── script.js
└── README.md

Simple and intentionally minimal.

---

## 🚀 Getting Started

### Clone the repo
git clone https://github.com/gautamsharma/cupertino-date-picker.git
Run locally
Just open index.html in your browser
(or use VS Code Live Server).

No build step required.

🧩 Basic Usage HTML structure

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
Output format

output.textContent = `${state.day} ${data.month[state.month]} ${state.year}`
Example:

14 Jun 2025
🎛 Customisation
Want to tweak it?

Change year range

year: Array.from({ length: 81 }, (_, i) => 1970 + i)
Adjust blur intensity

const blur = Math.min(6, distance * 1.5)


Adjust snap timing

setTimeout(() => {
  snapWheel(wheel)
}, 80)
The code is intentionally readable so you can experiment freely.

🧠 How it works (briefly)
This is not a true 3D cylinder.

Instead, it uses:

Vertical scroll snapping

Scale, opacity, and blur based on distance from center

A fixed highlight row

Momentum-based snapping after scroll end

This approach closely matches how native iOS pickers actually behave, while staying stable and performant on the web.

🌍 Browser Support
Chrome
Safari
Firefox
Edge

Mobile browsers supported

🛣 Roadmap / Ideas
Time picker (hour / minute)

Date + time combined picker

Haptic feedback on mobile

Localization support

React / Next.js version

npm package

🤝 Contributing
If you have ideas, improvements, or refinements — feel free to contribute.

Fork the repo

Create a new branch

Commit your changes

Open a pull request

📄 License
MIT License
Free to use for personal and commercial projects.

👤 Author
Gautam Sharma
Visual Designer & UI/UX Engineer

If this project helped or inspired you, a ⭐ on GitHub would mean a lot.
---

### Why this version feels more human
- Uses **intent** instead of buzzwords  
- Explains *why* the project exists  
- Admits tradeoffs honestly  
- Sounds like a real person experimenting with UI craft  

This is the kind of README that **designers, frontend devs, and recruiters actually read**.

If you want next, I can:
- Add a **short “Why I built this” section**
- Rewrite it to sound more **personal / indie**
- Add **screenshots + captions**
- Optimize it specifically for **portfolio reviewers**

Just tell me 👍







