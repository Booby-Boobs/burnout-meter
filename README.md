# Boobs Ticker

Your IRL Health Bar. Don't let it hit zero.

Boobs Ticker is a desktop application that sits at the bottom of your screen, looking exactly like a financial news ticker (Bloomberg style).
But instead of tracking stock prices, it tracks the real-time depreciation of your HP as you work.

Every keystroke costs you. Every mouse click drains you.
Welcome to the real economy.

## Features

### The HP Ticker

Real-time monitoring of your remaining HP.

* Working (Typing/Clicking): The chart goes RED. HP crashes.
* Slacking (Doing Nothing): The chart goes GREEN. HP recovers slowly.
* Marquee News: Scrolling satirical headlines that mock corporate life.

### Interactive Controls

* Endure +5%: Boost your HP artificially.
* Annoyed -5%: Drain HP manually.

### Burnout Warning

What happens when your HP hits 0%?

* A message appears: "You've been working too hard. Please visit here for your medical certificate."
* Links open in your browser to https://booby.dev/medical-certificate and https://booby.dev/about.

---

## Installation

### Prerequisites

You need Rust and Node.js installed on your machine.

* Install Rust
* Install Node.js

### Build from Source

```bash
# Clone the repository
git clone https://github.com/your-username/boobs-ticker.git
cd boobs-ticker

# Install dependencies
npm install

# Run in Development Mode (Hot Reload)
npm run tauri dev

# Build for Production (Generates .app / .dmg for macOS)
npm run tauri build

```

---

## ⚠️ IMPORTANT: Permissions Required (macOS Only)

**WARNING: Boobs Ticker requires special permissions to monitor your keystrokes and mouse activity. Without these, the app won't track your input properly.**

### Required Permissions:
- **Accessibility**: Allows the app to monitor mouse clicks and special keys (Tab, Enter, etc.).
- **Input Monitoring**: Allows the app to monitor alphabet keys (A-Z) and other standard keyboard input.

### How to Enable:
1. Open **System Settings** > **Privacy & Security**.
2. Scroll down and click **Accessibility** on the left.
3. Click the **+** button and add `boobs-ticker.app` (or your terminal app if running in dev mode).
4. Also enable **Input Monitoring** in the same section.

**If you skip this, the app will prompt you on first launch, but you can enable it manually here.**

---

## How to Use

1. Launch the App: It sticks to the bottom of your screen. Always on top.
2. Work: Watch your HP drop with each keystroke or click.
3. Recover: Stop interacting to let HP recover.
4. Interact: Use buttons to adjust HP manually.
5. Burnout: When HP reaches 0%, see the warning message and click links.

### Configuration (HP Economics)

You can tweak the depreciation rates in src-tauri/src/lib.rs if your energy is cheaper/expensive.

* Keystroke: -0.025% (per keypress, accumulated every 100ms)
* Mouse Click: -0.1% (per click, accumulated every 100ms)
* Mouse Move: -0.0004% (per pixel moved, accumulated every 100ms)
* Recovery: Stops when inactive.

---

## Disclaimer

THIS SOFTWARE IS A JOKE.
It's for entertainment only.

* Do not use it for serious productivity tracking.
* Do not submit any generated content to employers or for legal purposes.
* The author assumes no responsibility for any misuse.

---

## License

MIT License

Copyright (c) 2025 Booby Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

Built with satirical intent by the Booby Team.