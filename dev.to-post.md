---
title: My CSS Art Made Some Foodie Friends 🍙🧋🥟🍲🍡
published: false
tags: css, webdev, showdev, frontendchallenge
---

_This is a submission for [Frontend Challenge - Comfort Food Edition, CSS Art](https://dev.to/challenges/frontend-2026-07-29)._

## Inspiration

Comfort food isn't just one dish, so instead of picking one I built a whole squad: **Onigiri**, **Boba Tea**, **Gyoza**, **Hot Pot**, and **Mochi**. Five little mascots I'd want on my desk, each with its own personality, all reacting to you the same playful way.

## Demo

{% embed https://lanthanum89.github.io/dev.to-Frontend-Challenge-Comfort-Food-Edition/ %}

Live demo: https://lanthanum89.github.io/dev.to-Frontend-Challenge-Comfort-Food-Edition/
Source: https://github.com/Lanthanum89/dev.to-Frontend-Challenge-Comfort-Food-Edition

Every character bounces on its own, blinking every few seconds — click one and it gets happy `^^` eyes plus a burst of sparkles.

## Journey

Everything is `div`s built with `clip-path` / `border-radius` + gradients, sharing one small vanilla-JS click handler (the challenge allows "a sprinkle of JavaScript," so I kept it to exactly one interaction and let CSS carry the rest):

- **Shared rig**: every character is a `.character` wrapper with the same `.face` / `.eye` / `.cheek` / `.mouth` parts, the same infinite `float` bounce, the same blink timing, and the same `squish` + sparkle-burst reaction on click. Building this as one reusable system — instead of five one-off pieces — is what made it possible to add all five without the CSS ballooning out of control. Each character only overrides shape, color, and face position.
- **Onigiri**: a `clip-path` rounded triangle with a `radial-gradient` dot texture for rice grains and a separate nori-band trapezoid.
- **Boba Tea**: a tapered cup (`clip-path` polygon) with a striped straw, a domed lid, and tapioca pearls scattered along the bottom via absolutely-positioned circles.
- **Gyoza**: a squashed dome shape, seared with layered `radial-gradient`s on the bottom half, and scalloped pleats along the top edge made from a repeating dot pattern.
- **Hot Pot**: the trickiest one — a broth bowl split red/clear with a hard-edged `linear-gradient`, sitting in a separate metal "band" (with rivets) below it, ring handles on both sides, and a rising-steam animation reused from an earlier ramen-bowl experiment.
- **Mochi**: an organic blobby `border-radius` shape, dusted with a small dot pattern for rice-flour texture and a soft crease line for that squishy fold.

The biggest lesson: getting the *shared* mechanics right first (float, blink, squish, sparkle burst) meant each new character was mostly "draw a shape and drop it into the rig" rather than reinventing animation logic five times.

Next up: I'd like each character to react a little when a neighbor gets clicked (a ripple of surprise down the row), and maybe let you drag them around the page.

Thanks for reading — go click on a dumpling. 🥟
