---
title: My CSS Art Made Some Foodie Friends 🍙🧋🥟🍲
published: false
tags: css, webdev, showdev, frontendchallenge
---

_This is a submission for [Frontend Challenge - Comfort Food Edition, CSS Art](https://dev.to/challenges/frontend-2026-07-29)._

## Inspiration

There was a food court kiosk at the back of the Asian grocery store near my first apartment — nothing fancy, just a laminated menu board and a touchscreen order station wedged between the fish counter and the register. I ate there more nights than I'll admit: onigiri wrapped in plastic by the register, boba from the machine that always over-filled the cup, gyoza fried on a flat-top you could hear sizzling from the parking lot, and hot pot on the one night a week they ran the burners. It wasn't glamorous. It was just there, every night, being exactly what I needed after a bad shift.

That kiosk is the whole reason this submission looks the way it does. Comfort food isn't just one dish, so instead of picking one I built the whole spread and gave it somewhere to live: a dark, neon-lit restaurant with a digital menu display. **Onigiri**, **Boba Tea**, **Gyoza**, and **Hot Pot** double as the menu items, each with a price tag, blinking and bouncing on a glowing CRT-style screen. Underneath, a touchscreen self-order kiosk — the kind you'd find at exactly that kind of counter — asks "Can I take your order?" and prints out a ticket with your order number, the same way that one always did.

## Demo

{% codepen CODEPEN_URL_GOES_HERE %}

Live demo: https://lanthanum89.github.io/dev.to-Frontend-Challenge-Comfort-Food-Edition/
Source: https://github.com/Lanthanum89/dev.to-Frontend-Challenge-Comfort-Food-Edition

Every character bounces on its own, blinking every few seconds — click one and it gets happy `^^` eyes plus a burst of sparkles, right there on the menu screen. Give the kiosk below a few seconds and watch it type out its prompt, pulse its order button, and print a receipt.

## Journey

Everything is `div`s built with `clip-path` / `border-radius` + gradients and CSS animations, with a single small vanilla-JS click handler for the food characters (the challenge allows "a sprinkle of JavaScript," so I kept it to exactly one interaction and pushed everything else — including the kiosk's whole sequence — into pure CSS):

- **Shared rig**: every character is a `.character` wrapper with the same `.face` / `.eye` / `.cheek` / `.mouth` parts, the same infinite `float` bounce, the same blink timing, and the same `squish` + sparkle-burst reaction on click. Building this as one reusable system — instead of one-off pieces — is what made it possible to add multiple characters without the CSS ballooning out of control. Each character only overrides shape, color, and face position.
- **Onigiri**: a `clip-path` rounded triangle with a `radial-gradient` dot texture for rice grains and a separate nori-band trapezoid.
- **Boba Tea**: a tapered cup (`clip-path` polygon) with a striped straw, a domed lid, and tapioca pearls scattered along the bottom via absolutely-positioned circles.
- **Gyoza**: a squashed dome shape, seared with layered `radial-gradient`s on the bottom half, and scalloped pleats along the top edge made from a repeating dot pattern.
- **Hot Pot**: a broth bowl split red/clear with a hard-edged `linear-gradient`, sitting in a separate metal "band" (with rivets) below it, ring handles on both sides, and a rising-steam animation.
- **The restaurant scene**: a flickering neon "COMFORT FOOD" sign (layered `text-shadow` glow + a subtle opacity `@keyframes flicker`), a screen bezel with a `repeating-linear-gradient` scanline overlay for that CRT feel, and a wood counter underneath.
- **The self-order kiosk**: entirely CSS-driven and timed with `animation-delay` so it plays out like a little sequence on page load — "Can I take your order?" types itself out letter by letter using the classic `width: 0 → Nch` + `steps(N, end)` typewriter trick (no JS, no per-letter markup), the "TAP TO ORDER" button pulses with an expanding-ring `box-shadow` plus a radial-gradient "ripple," and a receipt slides down and prints its order number one digit at a time, torn edge included via a repeating diagonal-gradient background.

The biggest lesson: getting the *shared* character mechanics right first (float, blink, squish, sparkle burst) meant each new food was mostly "draw a shape and drop it into the rig" — and having that solid meant I could spend the JS-light budget entirely on the kiosk's CSS choreography instead.

Next up: I'd like the kiosk's order number to actually reflect whichever dish you last tapped, and maybe have the characters glance toward the kiosk when its button pulses.

Thanks for reading — go tap the kiosk. 🍙
