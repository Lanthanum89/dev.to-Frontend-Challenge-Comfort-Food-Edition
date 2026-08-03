_This is a submission for [Frontend Challenge - Comfort Food Edition, CSS Art](https://dev.to/challenges/frontend-2026-07-29)._

## Inspiration

A steaming bowl of ramen — the dish I reach for on a cold, tired night. I wanted to capture that first moment when the bowl lands on the table: broth still rippling, steam curling up, and all the little toppings (soft-boiled egg, nori, scallions, naruto, corn, chopsticks resting on the rim) crowded together.

## Demo

<!-- Replace with your CodePen/live link once published, e.g.: -->
<!-- {% codepen https://codepen.io/your-handle/pen/your-pen-id %} -->

Open `index.html` in a browser to view it live, or embed a CodePen link here before publishing.

## Journey

Everything here is built from plain `div`/`span` elements shaped and colored with pure CSS — no images, no SVG:

- **The bowl** is two nested rounded shapes (`.bowl` + `.broth`), each with an asymmetric `border-radius` to get that wide, shallow bowl silhouette, plus `inset box-shadow`s to fake depth and a glossy broth surface.
- **The rim** is a separate ellipse (`.bowl-rim`) sitting on top — the trickiest part was realizing it was being clipped by the bowl's `overflow: hidden`. Moving the clipping down to the `.broth` layer (so only the noodles/toppings are contained) and leaving the outer `.bowl` un-clipped let the rim render as a full ellipse instead of getting flattened.
- **Noodles** are just rotated, curved bars (`border-radius` + slight `rotate()` per strand) layered at different angles so they read as a tangled pile instead of stripes.
- **Steam** is three blurred, gradient-filled blobs animating up and out with a `@keyframes` loop (rise, drift, fade), staggered with `animation-delay` so they don't move in lockstep.
- **Toppings** (egg + yolk, naruto swirl via layered `radial-gradient`s, nori sheet, scallion slivers, corn kernels) are all small absolutely-positioned shapes tucked into the broth layer.

What I'm proud of: the naruto (fish cake) swirl is done entirely with two radial gradients and no extra markup, and the rim/broth clipping fix made the whole bowl silhouette read correctly instead of looking chopped off.

Next, I'd like to add a subtle broth ripple/shimmer animation and maybe a second bowl variant (miso vs. shoyu color palette) as a toggle.

<!-- Team Submissions: Please pick one member to publish the submission and credit teammates by listing their DEV usernames directly in the body of the post. -->

<!-- We encourage you to consider adding a license for your code. -->

<!-- Don't forget to add a cover image to your post (if you want). -->

<!-- Thanks for participating! -->
