# La Italiano — Ristorante Italiano

A portfolio-grade, fully responsive restaurant website for **La Italiano**, an authentic Italian restaurant in Kuala Lumpur. Built with pure HTML, CSS, and vanilla JavaScript — no frameworks, no build tools.

**[Live Demo](https://laitaliano.com.my)** · Kuala Lumpur, Malaysia

---

## Overview

La Italiano is a single-page restaurant website featuring an interactive menu, table reservation with an animated SVG floor plan, a business lunch configurator, gift card purchasing, catering enquiry, and a full cart-to-checkout flow — all in under 1,000 lines of JavaScript.

---

## Features

- **Bilingual (EN / RU)** — full UI translation with a single `setLang()` call; all strings stored in a `T` dictionary
- **Interactive SVG floor plan** — clickable table selection with real-time capacity validation and deposit logic
- **Shopping cart** — add, remove, quantity control, promo code (`PASTA20`), delivery/pickup toggle
- **Meal of the Day** — automatically rotates through 7 dishes based on the current day of the week
- **Business Lunch configurator** — 3-step selector (main + drink + dessert) added as a single cart item
- **Gift card flow** — denomination picker, recipient details, purchase confirmation
- **Catering enquiry** — package selection + contact form
- **Drink showcase** — tabbed feature section with fade transitions
- **Review carousel** — auto-scrolling with manual arrow/dot navigation
- **Animated stat counters** — triggered on scroll via IntersectionObserver
- **3D card micro-tilt** — mouse-tracked perspective tilt on menu and offer cards (desktop)
- **Focus trap & Escape key** — all modals trap keyboard focus and close on Escape (WCAG 2.1 AA)
- **Parallax hero** — scroll-driven background offset, badge drift, and fade-out indicator
- **Scroll reveal** — IntersectionObserver-driven fade-in animations

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5, semantic elements, ARIA roles |
| Styling | CSS3, Custom Properties (design tokens), CSS Grid & Flexbox |
| Scripting | Vanilla JavaScript ES6+ (no framework) |
| Fonts | Google Fonts — Cormorant Garamond + Jost |
| Images | Unsplash (CDN) |
| Maps | Google Maps Embed API |

---

## Setup

No build step. No dependencies. Just open the file.

```bash
git clone https://github.com/your-username/la-italiano.git
cd la-italiano
# Open index.html in your browser
open index.html
```

For live-reload during development, use any static server:

```bash
npx serve .
# or
python -m http.server 8000
```

---

## Project Structure

```
la-italiano/
├── index.html       # HTML — all markup, ARIA, SEO meta
├── styles.css       # CSS — design tokens, layout, components, animations
├── main.js          # JS — data, state, all interactivity
├── favicon.svg      # SVG favicon (brand gold "L" on dark background)
├── robots.txt       # Crawler rules + sitemap pointer
├── sitemap.xml      # XML sitemap for search engines
└── README.md        # This file
```

---

## License

MIT — free to use, adapt, and build upon.
