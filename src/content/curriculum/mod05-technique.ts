import type { CurriculumModule } from '@/lib/types';

const mod05: CurriculumModule = {
    number: 5,
    slug: 'manual-technique-pressure',
    title: 'Manual Technique & Pressure Control',
    description: 'Developing hand stability, stroke consistency, proper needle depth, and controlled pressure for clean, precise work.',
    topics: ['Tool handling', 'Stroke patterns', 'Depth consistency', 'Practice drills'],
    estimatedHours: 5,
    lessons: [
        {
            id: 'mod5-lesson1', slug: 'tool-handling-and-hand-position', title: 'Tool Handling & Hand Position',
            type: 'reading', durationMinutes: 25, order: 1,
            keyPoints: [
                'Grip the tool like a pencil — relaxed, not rigid',
                'Anchor your hand on the client\'s face for stability',
                'Your pinky and ring finger should always rest on the skin',
                'Wrist movement, not arm movement, controls the stroke',
            ],
            content: `# Tool Handling & Hand Position

The way you hold your tool determines the quality of every stroke you make. A proper grip provides control, consistency, and reduces fatigue during long sessions.

## The Modified Pencil Grip

Hold the PMU tool (whether manual blade holder or machine pen) the same way you'd hold a pencil for precise drawing:

- **Thumb and index finger** control direction and angle
- **Middle finger** provides additional stability from below
- **Ring finger and pinky** anchor on the client's skin surface

### Common Grip Mistakes

| Mistake | Problem | Fix |
|---------|---------|-----|
| Gripping too tightly | Hand fatigue, shaky strokes, inconsistent depth | Relax — if your knuckles are white, lighten up |
| Floating hand (no anchor) | Uncontrolled movement, inconsistent pressure | Always rest pinky/ring finger on the skin |
| Using arm movement | Strokes too long, loss of fine control | Movement should come from the wrist and fingers |
| Tool angle too steep | Piercing too deep, trauma to skin | Maintain 15-30° angle from the skin surface |

## Tool Angle

The angle of the tool relative to the skin surface directly affects:
- **Depth of penetration** — steeper = deeper
- **Stroke quality** — shallower angles create crisper strokes
- **Pain level** — proper angle minimizes unnecessary trauma

### Recommended Angles
- **Microblading (manual):** 15-25° from skin surface
- **Machine work (nano strokes):** 75-90° (perpendicular for machine pens)
- **Shading/powder:** 90° with lighter pressure

## Anchoring Technique

Anchoring is the practice of resting part of your working hand on the client's face surface. This creates a stable, controlled platform for your strokes.

### How to Anchor
1. Rest your ring finger and pinky on the client's skin near the work area
2. These fingers should maintain constant contact during stroking
3. Your working fingers (thumb, index, middle) move independently above
4. As you move to a new area, reposition your anchor points

### Why Anchoring Matters
- Eliminates hand shake
- Maintains consistent pressure across strokes
- Allows you to feel the skin's resistance
- Prevents accidental depth changes

## Hand Stretching

Before each session:
1. Extend and spread all fingers for 5 seconds, release — repeat 5 times
2. Make a tight fist, hold 3 seconds, release — repeat 5 times
3. Circle wrists clockwise 10 times, then counterclockwise
4. Gently pull each finger straight back to stretch

> **Fatigue = mistakes.** If your hand cramps during a procedure, take a 2-minute break. A rested hand produces better work than a tired hand pushing through.`,
        },
        {
            id: 'mod5-lesson2', slug: 'fundamental-stroke-patterns', title: 'Fundamental Stroke Patterns',
            type: 'reading', durationMinutes: 30, order: 2,
            keyPoints: [
                'Master the basic J-stroke before attempting complex patterns',
                'Every stroke should follow the direction of natural hair growth',
                'Stroke spacing is just as important as stroke quality',
                'Practice each pattern 200+ times on latex before moving to skin',
            ],
            content: `# Fundamental Stroke Patterns

Every brow style is built from combinations of basic stroke patterns. Master these foundational strokes before attempting advanced techniques.

## The Core Strokes

### 1. The J-Stroke
- The most common stroke in microblading
- Mimics the natural curve of a brow hair
- Starts thin, applies pressure through the middle, lifts thin at the end
- Creates natural-looking "hairs." with tapered endpoints

### 2. The Straight Stroke
- Clean, linear marks
- Used in the body of the brow where hairs grow straighter
- Consistent pressure throughout
- Must follow natural hair direction precisely

### 3. The C-Stroke
- Curved stroke used near the brow head where hairs curve upward
- Mirror image pattern for left and right brows
- Requires wrist rotation during execution
- Creates the fan-like natural pattern at the front of the brow

### 4. The Omega Stroke
- Advanced stroke combining J and C elements
- Used for creating dimension and natural layering
- Requires confident, fluid hand movement
- Only attempt after mastering J and C strokes individually

## Stroke Direction by Zone

The brow is divided into three zones, each with distinct hair growth patterns:

### Head Zone (Inner Third)
- Hairs grow **upward and slightly outward**
- Use upward C-strokes
- Spacing is wider here — hairs are naturally more sparse
- Creating a soft, feathered start point

### Body Zone (Middle Third)
- Hairs grow at a **45° angle outward**
- Use J-strokes following this diagonal direction
- This is where you create the most density
- Maintain consistent spacing between strokes

### Tail Zone (Outer Third)
- Hairs follow the **downward angle of the brow arch**
- Use shorter, more tightly spaced strokes
- Tapering — gradually reduce number and density of strokes
- The tail should fade naturally, not end abruptly

## Stroke Spacing

- Space between strokes should be **approximately the width of one stroke**
- Too close = strokes blend together during healing (looks like a block of color)
- Too far apart = gaps visible, unnatural appearance
- Consistent spacing is more important than stroke perfection

> **The key insight:** Beautiful brows are not about having the most strokes — they're about having well-placed, well-spaced, consistent strokes that mimic nature.`,
        },
        {
            id: 'mod5-lesson3', slug: 'pressure-calibration-and-depth', title: 'Pressure Calibration & Depth Control',
            type: 'reading', durationMinutes: 30, order: 3,
            keyPoints: [
                'Correct depth is the upper dermis — 0.5-1mm',
                'Listen for the "scratch" sound — it indicates proper depth',
                'Consistent pressure is more important than perfect pressure',
                'Different skin areas require different pressure adjustments',
            ],
            content: `# Pressure Calibration & Depth Control

Pressure control is arguably the most critical technical skill in PMU. Too light and pigment won't retain. Too deep and you risk scarring, migration, and blowouts. This lesson teaches you to find and maintain the sweet spot.

## The Depth Target

Your target is the **papillary dermis** — the upper portion of the dermis, approximately 0.5-1mm below the skin surface.

### Depth Indicators

| Indicator | Too Shallow | Correct | Too Deep |
|-----------|------------|---------|----------|
| Sound | Silent or very faint | Light scratching/clicking | Crunching or popping |
| Resistance | Barely any | Slight, consistent resistance | Heavy resistance |
| Bleeding | None | Minimal pinpoint (after a few seconds) | Immediate, flowing blood |
| Client response | Barely feels it | Mild discomfort | Sharp pain |
| Pigment deposit | Sits on surface, wipes away | Clean line visible in the channel | Blurred, spreading marks |

## Pressure Calibration Exercise

### The Latex Test
1. Place a sheet of practice latex over a stack of paper towels
2. Using your tool at proper angle, make a series of strokes
3. **Level 1:** Barely touching — the tool should glide on the surface
4. **Level 5:** Full pressure — you're cutting through the latex
5. **Your working range is Level 2-3** — you feel resistance but aren't cutting deep

### The Sound Test
With practice, you'll develop an ear for correct depth:
- **Too shallow:** Nearly silent
- **Correct:** A consistent, light "scratch" — like drawing on paper
- **Too deep:** A louder, rougher sound — like scoring cardboard

## Skin Area Variations

Different facial areas have different skin thicknesses:

- **Brow head area:** Thicker skin — slightly more pressure needed
- **Arch area:** Medium thickness — moderate, consistent pressure
- **Tail area:** Often thinner — ease pressure slightly
- **Above the brow bone:** Thinnest area — lightest pressure here
- **Lip tissue:** Very different from brow skin — requires dedicated training

## Building Consistency

The biggest challenge isn't finding the right pressure — it's **maintaining it** across an entire procedure.

### Tips for Consistency
1. Check in with yourself every 5 strokes — are you maintaining the same depth?
2. Watch for fatigue-related pressure changes (hands tire → either too light or compensate by going deeper)
3. Practice in timed intervals — 10 minutes of consistent strokes, 2-minute break
4. Record practice sessions to observe your own patterns

> **Consistency beats perfection.** A set of uniformly moderate strokes will always look better than a mix of perfect and inconsistent ones.`,
        },
        {
            id: 'mod5-lesson4', slug: 'latex-and-synthetic-skin-practice', title: 'Latex & Synthetic Skin Practice',
            type: 'exercise', durationMinutes: 45, order: 4,
            keyPoints: [
                'Complete 200 strokes on latex before attempting synthetic skin',
                'Synthetic skin mimics real skin more closely than latex',
                'Track progress with photos and self-scoring',
                'Muscle memory begins to develop around 500 total strokes',
            ],
            content: `# Latex & Synthetic Skin Practice

Structured practice on synthetic materials is essential for building the muscle memory and confidence you need before working on live skin. This lesson provides drills for progressive skill development.

## Practice Materials

### Latex Sheets
- Flat, uniform surface
- Good for learning basic strokes and pressure
- Less forgiving — shows every inconsistency clearly
- Best for initial stroke pattern practice

### Synthetic Practice Skin (Silicone)
- Mimics the texture and resistance of real skin
- Has a "grain" that responds to strokes similarly to human skin
- Available in pads (flat) and 3D mannequin heads
- Best for realistic practice after mastering latex

### Practice Pigment
- Use actual PMU pigment for realistic feedback
- The way pigment sits in practice skin tells you about your depth
- Clean pigment from practice skins to reuse them

## Drill Set 1: Stroke Lines (Latex)

Complete each drill in a single sitting:

1. **50 parallel J-strokes** — focus on consistent spacing (1mm apart)
2. **50 parallel C-strokes** — practice wrist rotation
3. **50 alternating J and C strokes** — building pattern variety
4. **50 strokes at varying angles** — simulating brow zones

**Assessment criteria:**
- Are strokes the same length? (Target: 8-12mm)
- Is spacing consistent? (Target: ~1mm between)
- Do strokes have clean entry and exit points? (Tapered, not blunt)

## Drill Set 2: Full Brow on Latex

1. Draw a brow outline on latex using mapping pencil
2. Fill in using proper zone techniques (head → body → tail)
3. Photograph from directly above
4. Wipe with damp gauze and inspect stroke quality in the latex
5. Repeat 10 full brows per practice session

## Drill Set 3: Synthetic Skin Progression

1. **Brow outlines only** — map 5 brow pairs, focusing on symmetry
2. **Strokes within outlines** — complete full brow fills (5 pairs)
3. **Full process simulation** — map, stroke, apply pigment, wipe, assess (3 pairs)
4. **Timed sessions** — complete a full pair in 45 minutes, then 30, then 20

## Self-Assessment Rubric

Score each practice brow (1-5):

| Criteria | 1 (Needs Work) | 3 (Progressing) | 5 (Confident) |
|----------|----------------|-----------------|----------------|
| Stroke consistency | Varied lengths and pressures | Mostly uniform | All strokes match |
| Spacing | Inconsistent gaps | Generally even | Precise, uniform spacing |
| Direction | Random angles | Follows zones loosely | Matches natural growth perfectly |
| Symmetry | Noticeably different L vs R | Close but visible differences | Balanced and harmonious |
| Overall aesthetic | Clearly practice work | Approaching professional | Would be confident showing this |

> **Benchmark:** When you consistently score 4+ across all criteria on synthetic skin, you're ready for supervised live model work.`,
        },
        {
            id: 'mod5-lesson5', slug: 'building-speed-without-sacrificing-precision', title: 'Building Speed Without Sacrificing Precision',
            type: 'reading', durationMinutes: 25, order: 5,
            keyPoints: [
                'Speed is a byproduct of confident repetition, not rushing',
                'Time the entire workflow, not just the stroking phase',
                'Efficient setup and mapping save more time than faster strokes',
                'A 2-hour initial session is normal for beginners',
            ],
            content: `# Building Speed Without Sacrificing Precision

As a new PMU artist, your first procedures will take significantly longer than an experienced artist's. This is completely normal and expected. Speed develops naturally through repetition and confidence — never through rushing.

## Typical Process Times

### Beginner (First 20 clients)
- Full brow session: 2.5-3 hours
- Mapping alone: 30-45 minutes
- Stroking: 60-90 minutes
- Total with consultation and aftercare: 3-3.5 hours

### Intermediate (20-100 clients)
- Full brow session: 1.5-2 hours
- Mapping: 15-20 minutes
- Stroking: 45-60 minutes
- Total: 2-2.5 hours

### Experienced (100+ clients)
- Full brow session: 1-1.5 hours
- Mapping: 10-15 minutes
- Stroking: 30-45 minutes
- Total: 1.5-2 hours

## Where Speed Really Comes From

Most time savings come from **process efficiency**, not faster hands:

### 1. Preparation Speed
- Having a consistent, practiced setup routine
- Pre-portioning pigments and organizing supplies before the client arrives
- Having consent forms, intake, and aftercare printed and ready

### 2. Mapping Confidence
- Faster decision-making about shape and placement
- Fewer corrections and redrawing
- Experience reading faces quickly

### 3. Stroke Confidence
- Fewer hesitations between strokes
- Less time second-guessing angle and pressure
- Smooth, continuous workflow with natural hand repositioning

### 4. Communication Efficiency
- Covering consultation points completely but concisely
- Having practiced explanations for common client questions
- Building pre-written aftercare instruction cards

## Speed-Building Exercises

### The 10-Minute Drill
On synthetic skin, complete as many quality strokes as possible in 10 minutes. Track count and quality score weekly. Your count should increase while quality stays above 4/5.

### The Full-Process Timer
Simulate a complete session on a mannequin head (mapping through stroking). Time yourself weekly. Track where your time goes — you'll likely find that mapping and transitions eat more time than actual stroking.

### The Zone Blitz
Practice completing one brow zone (head, body, or tail) in 5 minutes. Move between zones cleanly, including repositioning your anchor and checking symmetry.

> **Remember:** Clients don't notice if you take an extra 15 minutes. They absolutely notice poor-quality work that they'll live with for years. Never trade quality for speed.`,
        },
    ],
};

export default mod05;
