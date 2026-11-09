# 🟨 Backrooms Text Converter

> *// you were not supposed to find this place //*

A browser-based text converter that transforms normal text into eerie, glitched, "Backrooms-style" text. Built with vanilla HTML, CSS, and JavaScript — no dependencies, no build step.

![Status](https://img.shields.io/badge/status-active-d4d47a?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-3a3a28?style=flat-square)
![No dependencies](https://img.shields.io/badge/dependencies-0-2e2e1a?style=flat-square)

---

## ✨ Features

- **5 distortion modes** — Glitch, Zalgo, Noise, Distort, Shadow
- **6 UI languages** — Russian, English, Spanish, German, French, Japanese
- **Auto script detection** — picks the right character set for Latin, Cyrillic, CJK, Arabic, Hebrew, and Greek input
- **Backrooms aesthetic** — CRT scanlines, flickering overlay, glitch animation on the title
- **Distortion stats** — shows character count and distortion ratio
- **One-click copy** — copies the result to clipboard
- **Remembers your language** — saved in `localStorage`
- **Zero dependencies** — pure vanilla JS, works offline

---

## 🎮 Modes

| Mode | Icon | What it does |
|------|------|--------------|
| **Glitch** | `#@$%` | Replaces letters with random symbols and occasional strikethroughs |
| **Zalgo** | `ẗ̷ẖ̸ệ̵` | Stacks combining diacritics above and below each glyph |
| **Noise** | `░▒▓█` | Substitutes block characters for letters |
| **Distort** | `ǝɐʇ` | Swaps letters for "broken" and flipped glyphs |
| **Shadow** | `S̶t̶r̶i̶k̶e̶` | Rhythmic strikethrough pattern |

Each mode adapts its character set to the detected script — Cyrillic input gets Cyrillic-style corruption, Japanese input gets CJK-style corruption, and so on.

---

## 🌍 Supported Languages

| Code | Language | UI | Text distortion |
|------|----------|----|-----------------|
| `ru` | Русский | ✅ | ✅ Cyrillic |
| `en` | English | ✅ | ✅ Latin |
| `es` | Español | ✅ | ✅ Latin |
| `de` | Deutsch | ✅ | ✅ Latin |
| `fr` | Français | ✅ | ✅ Latin |
| `ja` | 日本語 | ✅ | ✅ CJK |

Text detection also supports **Arabic**, **Hebrew**, and **Greek** input for the distortion engine (UI is not translated for these yet).

---

## 🚀 Usage

### Online

Open the live version:

👉 **https://pallpik.github.io/backrooms-converter/**

### Locally

Clone the repo and open `index.html` directly:

```bash
git clone https://github.com/snitchwasta/backrooms-converter.git
cd backrooms-converter
