# Ayesha Zaka — Social Media Marketing Strategist Website

> A cinematic, dark-themed personal branding website for **Ayesha Zaka**, a Social Media Marketing Strategist from Sahiwal, Punjab, Pakistan. Built with plain HTML, CSS, and Vanilla JavaScript — no frameworks, no build tools.

---

## 🌐 Live Preview

> _Deploy link will go here after hosting_

---

## 📸 Screenshots

> _Add screenshots here after build is complete_

---

## ✨ Features

- **Cinematic dark theme** — deep navy `#060B14` with electric blue `#1A6BFF` accents
- **GSAP scroll animations** — parallax, staggered reveals, section entrances
- **Infinite skills ticker** — CSS-powered horizontal scrolling strip
- **Animated metric counters** — numbers count up when scrolled into view
- **Custom cursor** — dot + lagging ring, magnetic button effect
- **Scroll progress bar** — fixed top indicator
- **Mobile responsive** — fully adaptive across all screen sizes
- **Hamburger nav** — fullscreen overlay on mobile
- **Lead magnet section** — email capture for free Meta Ads Checklist
- **No dependencies** — only GSAP loaded via CDN

---

## 🗂️ Project Structure

```
ayesha-website/
├── index.html              # Main HTML file — all sections
├── css/
│   ├── style.css           # Design system, layout, components
│   └── animations.css      # Keyframes, transition utilities
├── js/
│   ├── main.js             # Cursor, ticker, counter, scroll bar, hamburger
│   └── gsap-init.js        # All GSAP + ScrollTrigger animations
└── images/
    ├── hero.png            # Ayesha's portrait (remove.bg recommended)
    ├── workspace.jpg       # Dark moody desk setup — About section
    ├── laptop.png          # Course section laptop mockup
    ├── phone1.png          # Case study 1 — E-commerce brand
    ├── phone2.png          # Case study 2 — Coaching brand
    ├── phone3.png          # Case study 3 — Personal brand
    ├── t1.jpg              # Testimonial avatar — Sarah Khan
    ├── t2.jpg              # Testimonial avatar — Usman Ali
    └── t3.jpg              # Testimonial avatar — Hira Malik
```

---

## 🎨 Design System

| Token | Value |
|---|---|
| Background | `#060B14` |
| Card Background | `#0D1526` |
| Accent Blue | `#1A6BFF` |
| Accent Blue Light | `#4D8EFF` |
| Text Primary | `#FFFFFF` |
| Text Secondary | `#8A9BB5` |
| Border | `rgba(26, 107, 255, 0.15)` |
| Glow | `rgba(26, 107, 255, 0.3)` |
| Heading Font | Plus Jakarta Sans |
| Body Font | Inter |

---

## 📄 Sections

| # | Section | Description |
|---|---|---|
| 1 | **Navbar** | Fixed, blur-on-scroll, mobile hamburger |
| 2 | **Hero** | Full-screen split layout with portrait + CTA |
| 3 | **Ticker** | Infinite scrolling skills strip |
| 4 | **About** | Bio + 3 pillars (Strategic, Creative, Results) |
| 5 | **Recent Work** | 3 case study cards with animated metrics |
| 6 | **Services** | 6-tile grid (Meta Ads, SMM, Content, AI, Branding, Google Ads) |
| 7 | **Course** | Social Media Marketing Mastery banner |
| 8 | **Testimonials** | 3 client review cards |
| 9 | **Lead Magnet** | Free Meta Ads Checklist email capture |
| 10 | **Footer** | Links, social icons, contact info |

---

## 🚀 Getting Started

No install needed. Just open in browser:

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/ayesha-website.git

# Open in browser
cd ayesha-website
# Double-click index.html OR use Live Server in VS Code
```

For best development experience, use **VS Code + Live Server extension** so you see changes in real time.

---

## 🖼️ Image Setup

Before launch, replace placeholder image paths in `index.html`:

| File | Recommended Source |
|---|---|
| `hero.png` | Ayesha's photo — run through [remove.bg](https://remove.bg) to remove background |
| `workspace.jpg` | Generate via **Gemini Imagen** — see prompt below |
| `laptop.png` | Generate via **Gemini Imagen** — see prompt below |
| `phone1-3.png` | Generate via **Gemini Imagen** — see prompts below |
| `t1-t3.jpg` | Generate via **Gemini Imagen** or use client-provided photos |

### Gemini Image Prompts

**Workspace:**
```
Dark moody desk setup with MacBook, black coffee mug, small green plant, warm pendant lamp casting single cone of light, deep dark navy blue background, cinematic film photography style, no people, no text, 4K, wide horizontal crop
```

**Laptop (Course section):**
```
Dark navy MacBook Pro mockup slightly angled, screen showing colorful social media analytics dashboard with graphs, floating in dark space, soft electric blue underglow, deep dark background, 4K, no readable text on screen
```

**Phone mockups (generate 3 separately):**
```
Floating black iPhone 15 Pro showing Instagram feed with fashion brand posts, dark background, soft blue light reflection below phone, no text visible, 4K, clean product shot style
```

---

## 📦 CDN Dependencies

```html
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">

<!-- GSAP -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
```

No npm, no node_modules, no package.json. Everything runs in the browser directly.

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| `> 1024px` | Full desktop — 2-column hero, 3-column cards, 3-column footer |
| `768px – 1024px` | Tablet — 2-column services, stacked hero |
| `< 768px` | Mobile — single column everything, hamburger nav |
| `< 480px` | Small mobile — 1-column footer, reduced font sizes |

---

## 🔧 Customization Guide

**Change accent color:**
```css
/* In style.css :root */
--accent-blue: #1A6BFF; /* swap to any color */
```

**Update contact info:**
```html
<!-- In index.html footer section -->
<p>aishazaka007@gmail.com</p>
<p>+92 314 6155627</p>
```

**Update case study metrics:**
```html
<!-- In index.html #work section -->
<span class="metric" data-target="167">0</span>%
```

**Change animation speed:**
```js
// In gsap-init.js — adjust duration values
gsap.from(".hero-title", { duration: 0.8, ... })
```

---

## 👩‍💼 About the Client

**Ayesha Zaka** is a Social Media Marketing Strategist specializing in Meta Ads, Google Ads, and AI-assisted campaign optimization. Based in Sahiwal, Punjab, Pakistan.

- 📧 aishazaka007@gmail.com
- 📞 +92 314 6155627
- 🔗 [LinkedIn](https://www.linkedin.com/in/ayeshazakasmmexpert/)

**Services offered:** Meta Ads Management, Google Ads, Social Media Management, Content Strategy, AI Content Creation, Personal Branding, Funnel Optimization, Ad Account Audit.

---

## 🏗️ Built By

Developed as a freelance project.

---

## 📝 License

This project is private and built exclusively for Ayesha Zaka. All content, copy, and branding belongs to the client.
