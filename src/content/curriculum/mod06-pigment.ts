import type { CurriculumModule } from '@/lib/types';

const mod06: CurriculumModule = {
    number: 6,
    slug: 'pigment-fundamentals',
    title: 'Pigment Fundamentals',
    description: 'Color theory, pigment selection for different skin tones, understanding undertones, and predicting color evolution over time.',
    topics: ['Color wheel theory', 'Skin tone matching', 'Pigment mixing', 'Fading predictions'],
    estimatedHours: 4,
    lessons: [
        {
            id: 'mod6-lesson1', slug: 'color-wheel-theory-for-pmu', title: 'Color Wheel Theory for PMU',
            type: 'reading', durationMinutes: 30, order: 1,
            keyPoints: [
                'Warm and cool pigments behave differently in the skin over time',
                'Complementary colors neutralize each other — this is how you correct unwanted tones',
                'PMU pigments are not the same as painting or tattoo pigments',
                'Understanding color interactions prevents unexpected healing results',
            ],
            content: `# Color Wheel Theory for PMU

Color theory is one of the most intellectually demanding aspects of PMU. Unlike painting where color sits on a surface, PMU pigment interacts dynamically with the skin — a living, changing medium that modifies color in ways that aren't always intuitive.

## The Color Wheel Basics

### Primary Colors
- **Red, Yellow, Blue** — cannot be created by mixing
- In PMU, these are the building blocks of every pigment shade

### Secondary Colors
- **Orange** (red + yellow), **Green** (yellow + blue), **Purple** (red + blue)
- These colors often emerge during the fading process as certain pigment components break down

### Complementary Colors
Colors opposite each other on the wheel **neutralize** each other:
- **Red ↔ Green** — green cancels unwanted red/pink tones
- **Orange ↔ Blue** — blue-based modifiers cool down orange fading
- **Yellow ↔ Purple** — purple-based pigments counteract yellow/warm fading

This principle is the foundation of **color correction** in PMU.

## PMU Pigment Composition

PMU pigments are not single colors — they are **blends** of multiple color components:

### Iron Oxide Based
- Most common in professional PMU pigments
- Warm-toned base (contains red, yellow, brown components)
- Fade pathway: brown → warm brown → reddish/salmon → eventual fade
- Generally considered safer for most skin types

### Carbon-Based (Organic)
- Cooler tones, can achieve ashy browns and grays
- Fade pathway: gray → blue/gray → eventual fade
- Higher risk of blue or gray shift in the skin
- Often blended with iron oxides for balance

### Inorganic Mineral
- Titanium dioxide (white), chromium oxide (green)
- Used as modifiers to lighten or adjust base colors
- Very stable — don't break down as quickly

## The Skin as a Filter

Here's what makes PMU color theory complex: **the skin adds its own color layer.**

- Light skin (Type I-II) = minimal filter → pigment appears close to its true color
- Medium skin (Type III-IV) = warm filter → pigment appears warmer than expected
- Dark skin (Type V-VI) = strong filter → pigment must be significantly adjusted

> **Think of it like tinted glass:** if you look through yellow-tinted glass at a blue painting, you see green. The skin works the same way — your pigment choice must account for the client's natural skin color, undertone, and thickness.

## Common Beginner Mistakes

- Choosing pigment based on how it looks in the bottle (irrelevant — it changes in skin)
- Using the same pigment for all skin types
- Not accounting for the warm shift that happens during healing
- Over-correcting with cool modifiers (creating ashy results)`,
        },
        {
            id: 'mod6-lesson2', slug: 'pigment-selection-by-skin-tone', title: 'Pigment Selection by Skin Tone',
            type: 'reading', durationMinutes: 30, order: 2,
            keyPoints: [
                'Always assess skin undertone separately from surface shade',
                'Warm undertones benefit from slightly cooler pigments to prevent orange fading',
                'Cool undertones need warm pigments to prevent ashy or gray healing',
                'Darker skin tones require pigments with higher opacity and warm modifications',
            ],
            content: `# Pigment Selection by Skin Tone

Choosing the right pigment for each client is one of the most nuanced skills in PMU. This lesson provides a systematic approach to matching pigment to skin tone for predictable, beautiful results.

## The Assessment Protocol

### Step 1: Determine Fitzpatrick Type
Use the scale from Module 3 to classify the client's skin type (I-VI).

### Step 2: Identify Undertone
Check at multiple locations (inner wrist, jawline, behind the ear):
- **Warm:** Veins appear greenish, skin has golden/peachy cast
- **Cool:** Veins appear blue/purple, skin has pink/rosy cast
- **Neutral:** Mix of green and blue veins, no strong cast either way

### Step 3: Assess Surface Conditions
- Oiliness level (affects pigment retention)
- Redness or inflammation (affects color perception)
- Sun damage or hyperpigmentation (affects healing)
- Existing brow hair color (pigment should harmonize)

## Selection Guide by Skin Type

### Fitzpatrick I-II (Fair)
- **Undertone warm:** Soft taupe with warm modifier
- **Undertone cool:** Light ash brown — avoid going too warm
- **Key risk:** Going too dark — always err lighter than you think
- **Healing shift:** May appear slightly warmer once healed

### Fitzpatrick III (Medium)
- **Undertone warm:** Medium brown with subtle cool modifier
- **Undertone cool:** Neutral brown, avoid excessive warmth
- **Key risk:** Orange fading over time — add minimal cool modifier
- **Healing shift:** Usually heals close to expected color

### Fitzpatrick IV (Olive/Moderate Brown)
- **Undertone warm:** Warm dark brown — use sparingly for cool modifiers
- **Undertone cool:** Chocolate brown with warm modifier to prevent ashiness
- **Key risk:** Ashy or gray result — especially with carbon-based pigments
- **Healing shift:** Often heals cooler than expected

### Fitzpatrick V-VI (Dark Brown/Black)
- **Undertone warm:** Rich espresso with warm base
- **Undertone cool:** Deep brown with careful warm modification
- **Key risk:** Low contrast visibility — pigment must be opaque and strong
- **Healing shift:** Color may appear muted — often requires multiple sessions
- **Special note:** Always do a test patch on these skin types

## The Mix Sheet

For every client, document:
- Base pigment brand and shade name
- Any modifiers added and ratios
- Final color swatch (dot on paper or tape for the file)
- Expected healed result vs. actual healed result

Keep these records — over time, they become your most valuable reference tool.

> **Golden rule:** When in doubt, go one shade lighter than you think. It's always easier to add density at a touch-up than to lighten an overly dark result.`,
        },
        {
            id: 'mod6-lesson3', slug: 'mixing-and-custom-blending', title: 'Mixing & Custom Blending',
            type: 'reading', durationMinutes: 25, order: 3,
            keyPoints: [
                'Always mix on a clean, white surface for accurate color reading',
                'Add modifiers one drop at a time — small amounts create big shifts',
                'Document every custom blend recipe precisely',
                'Test your blend on synthetic skin before applying to the client',
            ],
            content: `# Mixing & Custom Blending

Off-the-shelf pigments are starting points, not final formulations. Most experienced artists customize their pigments for each client using modifiers and mixing techniques.

## Why Custom Blending?

- No two clients have the same skin
- Pre-made pigments are designed for "average" skin tones
- Modifiers allow you to fine-tune warmth, coolness, and depth
- Custom blends demonstrate professional expertise

## Modifier Types

### Warm Modifiers
- Add warmth (golden, red, orange tones)
- Use when: pigment risks healing ashy or gray
- Common for: cool-toned skin, dark skin types
- **Start small:** 1 drop modifier per 3 drops base

### Cool Modifiers
- Reduce warmth (add blue, green, or gray tones)
- Use when: pigment risks healing orange or salmon
- Common for: warm-toned skin, clients who've had orange fading before
- **Caution:** Over-cooling creates gray, lifeless results

### Lightening Agents
- Reduce pigment intensity without changing the tone
- Use when: client wants a softer, more subtle result
- Often titanium dioxide based
- **Note:** Diluting with too much lightener can reduce retention

## The Blending Process

### Equipment
- Clean glass mixing plate (white background)
- Disposable mixing spatula or toothpick
- Pigment drop bottles
- Good lighting (daylight spectrum preferred)

### Steps
1. Place 3-5 drops of base pigment on the mixing plate
2. Add modifier one drop at a time
3. Mix thoroughly with clean spatula
4. Compare the blend against the client's skin (hold the plate next to their face)
5. Adjust as needed — always document the ratio

### Recording Your Recipe

Use a consistent format:
- **Base:** [Brand] [Shade Name] — X drops
- **Modifier:** [Brand] [Shade Name] — X drops
- **Ratio:** Base:Modifier (e.g., 4:1)
- **Visual:** Place a dot of the final blend on white tape, attach to client file

## Common Recipes (Starting Points)

| Client Profile | Base | Modifier | Ratio |
|---------------|------|----------|-------|
| Fair, warm undertone | Light taupe | Cool brown | 5:1 |
| Medium, warm undertone | Medium brown | Orange corrector | 4:0.5 |
| Medium, cool undertone | Neutral brown | Warm modifier | 4:1 |
| Dark, warm undertone | Espresso | Warm boost | 3:1 |

> **Remember:** These are starting points. Every brand formulates differently, and the same recipe may need adjustment between brands. Always test your blend visually before committing.`,
        },
        {
            id: 'mod6-lesson4', slug: 'predicting-color-evolution', title: 'Predicting Color Evolution & Fading',
            type: 'reading', durationMinutes: 25, order: 4,
            keyPoints: [
                'All PMU pigments change color as they fade — this is normal',
                'Iron oxide pigments tend to warm up (shift toward red/salmon)',
                'Carbon-based pigments tend to cool down (shift toward blue/gray)',
                'Sun exposure is the #1 accelerator of premature color change',
            ],
            content: `# Predicting Color Evolution & Fading

PMU is semi-permanent by design. Understanding how pigments change over time allows you to choose colors that will still look natural as they age, and to set accurate client expectations.

## How Pigments Break Down

When exposed to UV light, immune system activity, and the skin's natural regeneration cycle, pigments break down at different rates by component:

### Iron Oxide (Warm) Pigments
- Yellow and red components are most stable
- Brown/dark components break down first
- **Result:** Warm brown → reddish brown → salmon/pink
- **Timeline:** 12-24 months to noticeable shift

### Carbon (Cool) Pigments
- Black/gray components are very stable
- Warmer blending elements break down first
- **Result:** Dark brown → cool gray → blue-gray
- **Timeline:** 18-36 months to noticeable shift

### Blended Pigments
- The different components fade at different rates
- This is why blended pigments often shift to unexpected colors
- Well-formulated professional pigments are designed to minimize this

## Factors That Accelerate Fading

| Factor | Impact | How to Advise Clients |
|--------|--------|----------------------|
| Sun exposure | #1 accelerator — UV breaks down pigments rapidly | SPF 30+ daily on the brow area |
| Retinol / acids | Accelerates skin turnover, pushing pigment out faster | Avoid applying directly on PMU area |
| Oily skin | Sebum production pushes pigment out | May need more frequent touch-ups |
| Exercise/swimming | Chlorine and heavy sweating affect longevity | No swimming 14 days post-procedure |
| Age | Slower healing but generally good retention | May retain longer but need color refreshing |

## Setting Expectations

During consultation, explain:
1. **Fresh work looks 30-50% darker** than the final result
2. **Weeks 2-3** will look lighter than the healed result (ghosting)
3. **Final color** is visible at 6-8 weeks
4. **Over 1-3 years**, color will gradually soften and may shift slightly
5. **Annual color boosts** keep results looking fresh and prevent dramatic fading

## Planning for the Future

When selecting pigment, think ahead:
- What color will the client be left with in 18 months?
- If the warm component fades first, will the remaining tone look natural?
- Would a slightly cooler initial choice age more gracefully?

This forward-thinking approach separates amateur work from professional artistry.

> **The mark of a great PMU artist:** Not just how the work looks when it's fresh — but how it looks at 6 months, 12 months, and 2 years.`,
        },
    ],
};

export default mod06;
