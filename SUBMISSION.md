_This is a submission for [Frontend Challenge - Comfort Food Edition, CSS Art](https://dev.to/challenges/frontend-2026-07-29)._

## Inspiration

Onigiri — the rice ball my mom used to wrap in foil for school lunches. I wanted the art to feel less like a still-life and more like a plush mascot: huge, bouncy, and impossible not to smile at. So I leaned all the way into kawaii — bold sunburst background, chunky triangle body, blinking eyes, and a squishy click reaction.

## Demo

<!-- Replace with your GitHub Pages / CodePen link once published, e.g.: -->
<!-- https://<your-username>.github.io/dev.to-Frontend-Challenge-Comfort-Food-Edition/ -->
<!-- or: {% codepen https://codepen.io/your-handle/pen/your-pen-id %} -->

Open `index.html` in a browser to view it live, or link your GitHub Pages / CodePen URL here before publishing.

## Journey

Everything is `div`s shaped with `clip-path` and gradients, plus a small sprinkle of vanilla JS for the click interaction (per the challenge's "sprinkle of JavaScript is fine, CSS is still the star" rule):

- **The rice** is a single `clip-path: polygon(...)` rounded triangle, given texture with a repeating `radial-gradient` dot pattern layered on top via `::before`, and lifted off the background with a stacked `drop-shadow()` (one hard-edged "cartoon" shadow, one soft blurred one).
- **The nori band** is a second `clip-path` trapezoid sitting over the bottom third of the triangle, with an inset highlight streak for a plasticky sheen.
- **The face** blinks on its own timeline (`@keyframes blink` scaling the eyes down to almost nothing every ~4.5s) and swaps to `^^` happy-eyes via a `.happy` class toggle when you click.
- **The whole onigiri floats and tilts** with an infinite `@keyframes float`, and reacts to clicks with a squash-and-stretch `@keyframes squish` using a bouncy `cubic-bezier` — that one animation is what sells the "alive" feeling.
- **Idle sparkles** twinkle around it constantly (rotating/scaling star `clip-path`s), and **clicking spawns a burst** of 10 more sparkles flying outward at random angles — that part is the only JS: computing random angles/distances and setting them as CSS custom properties (`--tx`/`--ty`) that a `@keyframes burst-out` animation reads.
- **Background** is a big spinning `repeating-conic-gradient` sunburst behind a radial gradient wash, which is what gives it that "big and bold" poster-art energy instead of reading as a small icon.

The trickiest bit was getting the rounded-triangle silhouette to look soft instead of jagged with just `clip-path` (no native rounded corners on polygons) — solved by adding extra points near each corner instead of one sharp vertex.

Next up: I'd like to add a few onigiri "friends" (different fillings/expressions) that react to each other when you click one, and maybe a drag-to-bounce interaction.

<!-- Team Submissions: Please pick one member to publish the submission and credit teammates by listing their DEV usernames directly in the body of the post. -->

<!-- We encourage you to consider adding a license for your code. -->

<!-- Don't forget to add a cover image to your post (if you want). -->

<!-- Thanks for participating! -->
