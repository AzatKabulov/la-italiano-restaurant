# La Italiano

Restaurant website built as a personal project. No frameworks, no build tools — just HTML, CSS and JavaScript.

Live: **[la-italiano.netlify.app](https://la-italiano.netlify.app)**

---

## Overview

I wanted to challenge myself to build something feature-rich without reaching for React or any other framework. The goal was to keep the bundle zero and see how much you can do with the platform itself.

Ended up with a pretty complete restaurant experience: browsable menu with cart and checkout, a 3-step table reservation flow with a hand-drawn SVG floor plan, daily rotating dish, business lunch configurator, gift cards, catering enquiry, and full EN/RU i18n — all in three files.

---

## Features

- **Reservation wizard** — 3-step flow (date/time → floor plan table select → guest details), deposit logic, occasion tags
- **SVG floor plan** — fully interactive, tables rendered and managed in JS, zone labels, bar/kitchen/private dining areas
- **Cart & checkout** — add/remove/quantity, promo code (`PASTA20`), delivery vs pickup toggle, order confirmation
- **i18n** — EN and RU, full string dictionary, switches without page reload
- **Meal of the Day** — rotates through 7 dishes keyed to the day of the week
- **Business lunch builder** — 3-course configurator added as a single cart line item
- **Gift cards / Catering** — separate flows with their own modals and forms
- **Mobile** — bottom navigation bar, bottom-sheet modals, horizontal scroll filter tabs, 44px touch targets, iOS zoom prevention

---

## Stack

| | |
|---|---|
| Markup | HTML5, semantic, ARIA |
| Styles | CSS3, custom properties, Grid + Flexbox |
| Logic | Vanilla ES6+ |
| Fonts | Cormorant Garamond + Jost (Google Fonts) |
| Images | Unsplash |

---

## Getting started

```bash
git clone https://github.com/AzatKabulov/la-italiano-restaurant.git
cd la-italiano-restaurant
open index.html
```

No install step. No build step. Opens straight in the browser.

For live reload during development:

```bash
npx serve .
```

---

## Structure

```
index.html   — markup, ARIA, SEO meta
styles.css   — design tokens, layout, components, animations
main.js      — data, state, all interactivity
favicon.svg
```
