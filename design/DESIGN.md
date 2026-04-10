# Design System Document: Everyday Photography

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Gallery"**

This design system is built to transform a habit-tracking utility into a premium editorial experience. We are moving away from the "utility app" aesthetic and toward a "gallery-first" philosophy. The goal is to treat every user-generated photo as a masterpiece and every prompt as a poetic invitation.

To achieve this, the system breaks the "template" look by utilizing **intentional asymmetry** and **tonal depth**. Instead of rigid grids, we use expansive white space and overlapping elements to create a sense of breath. The interface should feel like a high-end photography monograph: quiet, confident, and sophisticated. We prioritize the image over the interface, ensuring that the UI "recedes" when a photo is present and "inspires" when it is not.

---

## 2. Colors & Surface Philosophy

The palette is rooted in natural, lithic tones that provide a warm, organic alternative to sterile digital whites.

### The "No-Line" Rule
**Explicit Instruction:** Sectioning via 1px solid borders is strictly prohibited. Boundaries must be defined solely through background color shifts. For example, a `surface-container-low` section sitting on a `surface` background provides all the separation required. If you feel the need for a line, use more whitespace instead.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine cotton paper.
*   **Base Layer:** `surface` (#fcf9f8)
*   **Recessed Content:** `surface-container-low` (#f6f3f2)
*   **Interactive Cards:** `surface-container-highest` (#e5e2e1)
*   **The "Paper" Effect:** Use `surface-container-lowest` (#ffffff) for primary content cards to create a subtle "lift" against the off-white background.

### The "Glass & Gradient" Rule
To add a "signature" feel, floating elements (like camera shutters or navigation bars) should utilize **Glassmorphism**. Apply a backdrop-blur (16px–24px) to a semi-transparent `surface` color. 
*   **Signature Texture:** Use a subtle linear gradient transitioning from `primary` (#ab3500) to `primary-container` (#ff6b35) for high-impact CTAs. This adds a "glow" that flat hex codes cannot replicate.

---

## 3. Typography: The Editorial Voice

We use a dual-sans-serif approach to balance modern utility with high-fashion editorial flair.

*   **Display & Headlines (Manrope):** This is our "Gallery Voice." Use `display-lg` and `headline-lg` with tight letter-spacing (-2%) to create an authoritative, sophisticated look. Manrope’s geometric yet warm nature makes prompts feel like headlines in a magazine.
*   **Body & Labels (Inter):** This is our "Utility Voice." Inter is chosen for its extreme legibility at small sizes. 
    *   **Body-lg:** Use for photo captions or daily reflections.
    *   **Label-md:** Use for metadata (shutter speed, ISO, or timestamps) to provide a professional, technical counterpoint to the organic Manrope headlines.

---

## 4. Elevation & Depth

### The Layering Principle
Depth is achieved through **Tonal Layering** rather than shadows. 
*   Place a `surface-container-lowest` card on a `surface-container-low` section to create a soft, natural lift.
*   Avoid the "card-on-background" cliché; instead, try overlapping a photo container (`xl` radius) across two different surface tones.

### Ambient Shadows
When a floating effect is required (e.g., a "Capture" button), use **Ambient Shadows**:
*   **Blur:** 32px–48px.
*   **Opacity:** 4%–8%.
*   **Color:** Use a tinted version of `on-surface` (#1c1b1b) rather than pure black to mimic natural light.

### The "Ghost Border" Fallback
If accessibility requires a border, use the **Ghost Border**: `outline-variant` (#e1bfb5) at **15% opacity**. This provides a hint of structure without interrupting the visual flow.

---

## 5. Components

### Buttons
*   **Primary:** Uses the Primary-to-Primary-Container gradient. Shape: `full` (pill). No shadow; the color carries the weight.
*   **Secondary:** `surface-container-highest` background with `on-surface` text. Shape: `md` (0.75rem).
*   **Ghost:** No background, `primary` text. Used for low-priority actions to keep the "Minimalist" aesthetic.

### Cards & Lists
*   **Strict Rule:** No divider lines. Use `1.5rem` (xl) vertical spacing or subtle shifts between `surface-container` tiers to separate list items.
*   **Image Containers:** Must use `xl` (1.5rem) or `lg` (1rem) corner radius. Use a 4:5 or 1:1 aspect ratio to mimic professional photography formats.

### Inputs & Fields
*   **Style:** Minimalist underline using the Ghost Border rule, or a soft-filled `surface-container-high` box. 
*   **Focus State:** The label should transition to `primary` (#ab3500) while the background remains neutral.

### Specialized Component: The "Streak Bloom"
For the habit-tracking "streak," do not use a simple number. Use a circular progress ring with a `tertiary` (#00677e) to `tertiary-container` (#00a7cb) gradient, creating a "lens flare" effect that feels native to the world of photography.

---

## 6. Do’s and Don'ts

### Do:
*   **Embrace Asymmetry:** Place headlines slightly off-center or allow images to bleed to one edge of the screen while keeping the other padded.
*   **Use Tonal Shifts:** Rely on the `surface-container` tokens to define the hierarchy of information.
*   **Prioritize the Image:** Ensure UI elements never overlap the "subject" of a user's photo.

### Don’t:
*   **Don't use 100% black:** Always use `on-surface` (#1c1b1b) for text to maintain a soft, natural contrast.
*   **Don't use default shadows:** Never use the standard CSS `0 2px 4px rgba(0,0,0,0.5)`. It feels cheap and "app-like."
*   **Don't crowd the edges:** Maintain a minimum of `1.5rem` (xl) padding from the screen edge for all primary content. Space is a luxury; use it.