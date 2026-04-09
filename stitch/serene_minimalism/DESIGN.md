```markdown
# Design System Strategy: The Ethereal Editor

This design system is a manifestation of "Soft Minimalism"—a movement away from the sterile, cold interfaces of the past toward a UI that feels organic, breathable, and intentionally curated. By combining the precision of high-end editorial layouts with a palette that feels like dawn light, we create an experience that is both authoritative and tranquil.

## 1. Creative North Star: The Digital Curator
The "Digital Curator" philosophy dictates that every pixel must earn its place. We move beyond the "template" look by rejecting rigid boxes in favor of **Tonal Composition**. 

**The Goal:** To create a UI that feels less like a software interface and more like a high-end digital gallery. We achieve this through:
*   **Intentional Asymmetry:** Breaking the expected grid to draw the eye to key editorial moments.
*   **Overlapping Elements:** Allowing components to gently "bleed" into one another, creating a sense of depth and physical presence.
*   **High-Contrast Scale:** Using dramatic shifts between massive `display` typography and tiny, precise `label` text to create a sophisticated hierarchy.

---

## 2. Color & Surface Philosophy
The palette is grounded in a warm, parchment-like foundation (`#F2EAE0`) accented by botanical purples and atmospheric teals.

### The "No-Line" Rule
**Explicit Instruction:** You are prohibited from using 1px solid borders for sectioning or containment. 
Boundaries must be defined solely through background color shifts. A `surface-container-low` section sitting on a `surface` background provides all the definition a sophisticated eye needs. If you feel the need for a line, use white space instead.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, semi-translucent sheets. 
*   **Base Layer:** `surface` (#FFF8F2)
*   **Secondary Sections:** `surface-container-low` (#FBF2E8)
*   **Primary Cards:** `surface-container` (#F5EDE3)
*   **Elevated Elements:** `surface-container-highest` (#E9E1D7)

### The "Glass & Gradient" Rule
To escape the "flat" look, use **Glassmorphism** for all floating elements (modals, dropdowns, navigation bars). 
*   **Recipe:** Apply `surface` at 70% opacity with a `20px` to `40px` backdrop-blur. 
*   **Signature Textures:** For main CTAs, do not use flat colors. Use a subtle linear gradient from `primary` (#62578C) to `primary-container` (#9B8EC7) at a 135-degree angle. This adds a "soul" to the action point.

---

## 3. Typography: The Inter Editorial
We use **Inter** not as a utility font, but as a design feature. The hierarchy is extreme by design to convey premium authority.

*   **Display (lg/md/sm):** Used for "Hero" moments. Tracking should be set to `-0.02em` to feel tighter and more "custom."
*   **Headline & Title:** Use these to anchor sections. Ensure ample leading (line-height) to maintain the "calming" promise of the palette.
*   **Body (lg/md/sm):** High-readability utility.
*   **Labels:** Always uppercase with `0.05em` letter spacing. These are your "captions" and should feel like fine print on a gallery wall.

**Hierarchy Note:** A `display-lg` headline should often be paired directly with a `body-md` or `label-md` subheader, skipping the middle sizes to create a "designer" contrast.

---

## 4. Elevation & Depth
Depth is achieved through **Tonal Layering**, mimicking how light interacts with matte surfaces.

*   **The Layering Principle:** Instead of shadows, place a `surface-container-lowest` card on a `surface-container-low` background. The subtle shift in hex code creates a "soft lift" that feels integrated, not "pasted on."
*   **Ambient Shadows:** If an element must float (e.g., a primary Modal), use a shadow with a `60px` blur and `4%` opacity. The shadow color must be a tinted version of `on-surface` (#1E1B15), never pure black.
*   **The Ghost Border Fallback:** If accessibility requires a border, use the `outline-variant` token at **15% opacity**. It should be felt, not seen.
*   **Glassmorphism:** Use `surface-tint` sparingly to give a hint of color to blurred backgrounds, making the UI feel like it's glowing from within.

---

## 5. Component Guidelines

### Buttons: The Tactile Action
*   **Primary:** A gradient of `primary` to `primary-container`. `lg` roundedness. No border. Text is `on-primary` (White).
*   **Secondary:** `secondary-container` background with `on-secondary-container` text. This provides a soft, tonal alternative to the primary action.
*   **Tertiary:** Purely typographic. Use `label-md` styling with a subtle `primary` underline on hover.

### Cards & Lists: The Spatial Arrangement
*   **No Dividers:** Forbid the use of horizontal rules. Use `24px` to `48px` of vertical white space to separate list items.
*   **Card Styling:** Use `surface-container-low` with a `xl` (1.5rem) corner radius. Elements inside the card should use `md` roundedness to create "Nested Radii" (where the inner radius is smaller than the outer).

### Input Fields: The Quiet Input
*   **Background:** `surface-container-highest` at 50% opacity.
*   **State:** On focus, do not change the border (there shouldn't be one). Instead, transition the background to `surface-container-lowest` and add a subtle `2px` glow using the `surface-tint`.

### Additional Component: The "Editorial Masthead"
Instead of a standard header, use an "Editorial Masthead"—a large, `surface-container-low` area at the top of pages that houses the `display-md` title and a `body-lg` breadcrumb, using asymmetric padding (e.g., `padding-left: 10%`, `padding-right: 20%`).

---

## 6. Do's and Don'ts

### Do
*   **Do** use "Optical Alignment." Sometimes a button needs to be moved 1px to look centered even if the math says it is.
*   **Do** embrace negative space. If a layout feels "empty," it's likely working.
*   **Do** use `surface-variant` for subtle backgrounds in hover states.

### Don't
*   **Don't** use pure black (#000000) for text. Use `on-surface` (#1E1B15) to maintain the soft, premium feel.
*   **Don't** use hard corners. Everything in this system should feel "honed" and "softened" like a river stone.
*   **Don't** use standard "Drop Shadows." If the shadow is easily visible, it is too heavy. Decrease opacity until it is just a whisper of depth.

---

## 7. Signature Interaction: The "Ethereal Fade"
All transitions between states (hover, active, page load) should use a `400ms` Bezier curve `(0.22, 1, 0.36, 1)`. Elements shouldn't "pop" into existence; they should gracefully resolve into view, reinforcing the calming nature of the system.```