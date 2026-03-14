import type { CurriculumModule } from '@/lib/types';

const mod03: CurriculumModule = {
    number: 3,
    slug: 'skin-science-healing',
    title: 'Skin Science & Healing',
    description: 'Understanding skin anatomy, types, and physiology as they directly relate to pigment retention, healing predictability, and long-term results in permanent makeup artistry.',
    topics: ['Skin layers & anatomy', 'Fitzpatrick scale', 'Healing stages', 'Scar tissue considerations'],
    estimatedHours: 4,
    lessons: [
        {
            id: 'mod3-lesson1',
            slug: 'skin-anatomy-for-pmu-artists',
            title: 'Skin Anatomy for PMU Artists',
            type: 'reading',
            durationMinutes: 35,
            order: 1,
            keyPoints: [
                'PMU pigment must be deposited in the upper dermis (papillary dermis) — 0.5-1mm depth',
                'Too shallow (epidermis only) = pigment sheds with normal skin turnover in days',
                'Too deep (reticular dermis) = pigment migrates, blurs, and may scar',
                'The dermal-epidermal junction (DEJ) is your anatomical target zone',
                'Skin thickness varies dramatically across facial regions',
            ],
            content: `# Skin Anatomy for PMU Artists

You are not painting on a canvas. You are implanting pigment into a living, dynamic organ — the largest organ in the human body. Understanding its structure at a granular level is what allows you to place pigment at the exact depth that produces beautiful, lasting results without causing damage. This is the science behind every stroke you make.

## Why Anatomy Matters for Your Work

Many PMU training programs gloss over skin anatomy, treating it as academic trivia. This is a mistake. Every technical decision you make during a procedure — tool angle, pressure, speed, number of passes — is ultimately a decision about how your instrument interacts with skin structure. An artist who understands anatomy makes better decisions under pressure.

## The Three Layers of Skin

### 1. Epidermis — The Surface Layer (0.05-0.1mm)

The epidermis is the outermost layer of skin. It is thin, avascular (no blood vessels), and constantly regenerating.

**Structure:**
- Composed of 5 sublayers (strata), from deepest to most superficial:
  - Stratum basale (basal layer) — where new skin cells are born
  - Stratum spinosum — cells begin to differentiate
  - Stratum granulosum — cells begin to die and flatten
  - Stratum lucidum — transitional layer (thick skin only, like palms)
  - Stratum corneum — dead, flat cells that form the barrier surface

**Regeneration cycle:** The epidermis completely replaces itself every 28-40 days. A cell born in the stratum basale migrates upward and is shed from the stratum corneum roughly 4-6 weeks later.

**Why this matters for PMU:**
- Pigment placed ONLY in the epidermis will be pushed out during normal cell turnover
- This is why surface-level work (too shallow) fades within days to weeks
- The epidermis is the reason healed work appears lighter — a thin layer of new, unpigmented cells sits on top of the deposited pigment

### 2. Dermis — The Target Layer (1-4mm thick)

The dermis is the structural layer beneath the epidermis. It contains blood vessels, nerve endings, and the collagen/elastin matrix that gives skin its strength and elasticity.

**Two sublayers:**

**Papillary Dermis (Upper Dermis) — YOUR TARGET ZONE**
- Thin, loose connective tissue directly below the epidermis
- Contains the capillary loops that supply the epidermis
- Rich in nerve endings (which is why the procedure is felt)
- **This is where PMU pigment must be deposited: approximately 0.5-1mm below the surface**
- Pigment placed here is trapped in the dermal tissue matrix and cannot migrate upward through the basement membrane

**Reticular Dermis (Lower Dermis) — TOO DEEP**
- Dense, thick connective tissue
- Contains larger blood vessels, hair follicles, sweat glands
- Pigment placed here is exposed to more vascular activity and immune response
- **Result of going too deep:** pigment migration (blurring), excessive bleeding, bruising, potential scarring, color change over time

### 3. Hypodermis (Subcutaneous Layer) — Never Reach This

- Composed primarily of fat and connective tissue
- Serves as insulation and cushioning
- PMU instruments should never approach this depth
- Reaching the hypodermis would indicate a serious technique error

## The Dermal-Epidermal Junction (DEJ)

The DEJ is the boundary between the epidermis and dermis. It's a wavy, undulating structure (called rete ridges) that interlocks the two layers.

**For PMU purposes, the DEJ is your landmark.** You want your pigment to pass through the DEJ and rest in the papillary dermis just below it.

### How You Know You're at the Right Depth

| Sign | Too Shallow (Epidermis) | Correct (Papillary Dermis) | Too Deep (Reticular Dermis) |
|------|------------------------|---------------------------|---------------------------|
| Sound | Silent | Light scratching | Crunching/heavy resistance |
| Bleeding | None | Minimal pinpoint after 5-10 seconds | Immediate, steady bleeding |
| Client reaction | Barely notices | Mild scratching sensation | Sharp, stinging pain |
| Pigment appearance | Sits on surface, wipes away easily | Clean, defined line visible in channel | Blurred, spreading pigment |
| Healed result | Fades completely in 1-2 weeks | Retains well, crisp strokes | Blurred, migrated, possible scar |

## Regional Thickness Variations

The face is not uniform. Different areas have dramatically different skin thickness, which means your pressure must adjust constantly:

| Region | Skin Thickness | Implication |
|--------|---------------|-------------|
| Forehead (above brows) | Thinnest facial skin (~0.5mm epidermis) | Lightest pressure — easy to go too deep |
| Brow body | Moderate (~0.8mm epidermis) | Your baseline pressure |
| Between brows (glabella) | Thick, often furrowed | More pressure needed but beware of deep wrinkles |
| Upper lip (lip blush) | Very thin, highly vascular | Extremely delicate technique — bleeds readily |
| Lower lip | Thinner than upper lip in some regions | Even more delicate |
| Eyelid (for eyeliner) | Thinnest skin on the body (~0.3mm total) | Specialized advanced technique — not covered in foundations |

> **The core principle:** There is no single correct pressure for PMU. Your pressure is a continuous adjustment based on the specific anatomical region, the individual client's skin thickness, and the real-time feedback you receive from the skin during the procedure. This is why anatomy knowledge isn't academic — it's the operating manual for your hands.`,
        },
        {
            id: 'mod3-lesson2',
            slug: 'skin-types-and-fitzpatrick-scale',
            title: 'Skin Types & the Fitzpatrick Scale',
            type: 'reading',
            durationMinutes: 30,
            order: 2,
            keyPoints: [
                'The Fitzpatrick scale classifies skin by its response to UV radiation, not just color',
                'Higher Fitzpatrick types carry greater risk of post-inflammatory hyperpigmentation (PIH)',
                'Oily skin (any Fitzpatrick type) is the #1 predictor of reduced stroke definition',
                'Combination approaches may be needed across different skin types',
                'Always assess skin type in person — photos and self-reporting are unreliable',
            ],
            content: `# Skin Types & the Fitzpatrick Scale

Skin type classification is one of the most practical tools in your clinical assessment arsenal. It directly influences your pigment choices, technique approach, healing predictions, and the specific risks you must communicate to each client. This is not a box-checking exercise — it's the foundation of personalized treatment planning.

## The Fitzpatrick Phototype Scale

Developed by Dr. Thomas B. Fitzpatrick in 1975, this scale classifies skin based on its response to ultraviolet radiation — specifically, its tendency to burn versus tan.

| Type | Skin Characteristics | UV Response | PMU Considerations |
|------|---------------------|-------------|-------------------|
| I | Very fair, freckles, red/blonde hair | Always burns, never tans | Pigment appears very vivid; err lighter. May show redness longer during healing. Low PIH risk. |
| II | Fair, light hair | Usually burns, tans minimally | Pigment appears close to true color. Good retention typical. Low PIH risk. |
| III | Medium, any hair color | Sometimes burns, gradually tans | Moderate warm filter on pigment. Good candidate for most techniques. Low-moderate PIH risk. |
| IV | Olive/moderate brown | Burns minimally, tans well | Significant warm filter — pigment appears warmer than expected. Cool modifiers often needed. Moderate PIH risk. |
| V | Dark brown | Rarely burns, tans darkly | Strong warm filter — substantial color adjustment needed. High PIH risk. Pigment must be opaque. |
| VI | Very dark brown/black | Never burns | Maximum warm filter. Highest PIH risk. Requires experienced technique and conservative approach. |

### How Fitzpatrick Type Affects Your Practice

**Pigment Selection:** Each skin type acts as a colored filter over your pigment. Type I-II is like clear glass — what you see in the cup is close to the healed result. Type V-VI is like looking through tinted glass — the skin's melanin dramatically alters the final appearance.

**Healing Predictions:** Lighter skin types typically show redness and swelling more visibly but resolve faster. Darker skin types may exhibit post-inflammatory hyperpigmentation (PIH) — darkened patches around the treated area that can take months to resolve.

**Technique Adjustments:** Darker skin types often benefit from powder/ombré techniques over hair strokes, as the strokes may blur or spread more during healing due to higher melanin activity and different dermal structure.

## Beyond Fitzpatrick: Functional Skin Typing

Fitzpatrick addresses UV response, but you also need to assess functional skin characteristics that directly affect pigment retention:

### Oily Skin
- **Identification:** Visible shine, enlarged pores, makeup slides off during the day
- **Impact on PMU:** Sebum production pushes pigment out; strokes may spread during healing
- **Adjustment:** Slightly shallower, crisper strokes. Powder/ombré may outperform hair strokes. Set expectations for potentially shorter retention.
- **Touch-up frequency:** May need touch-ups every 12-18 months vs. 18-24 for normal skin

### Dry Skin
- **Identification:** Flaking, tightness, visible fine lines, makeup tends to cling
- **Impact on PMU:** Generally excellent pigment retention; healing scabs may be thicker
- **Adjustment:** Standard technique works well. Recommend wet healing method to prevent excessive scabbing.
- **Touch-up frequency:** Typically longer retention — 18-30 months between touch-ups

### Mature / Thin Skin
- **Identification:** Visible veins, crepey texture, reduced elasticity, thin epidermis
- **Impact on PMU:** Very easy to go too deep; skin is less forgiving of pressure mistakes
- **Adjustment:** Lightest possible pressure. Fewer passes. Powder technique often preferred.
- **Special consideration:** Elderly clients may be on blood thinners — cross-reference with intake form

### Sensitive / Reactive Skin
- **Identification:** Redness, visible capillaries, history of reactions to products
- **Impact on PMU:** More swelling, more redness during healing, potential for prolonged recovery
- **Adjustment:** Perform a patch test if client reports product sensitivities. Use minimal topical anesthetic. More conservative approach.

## The In-Person Assessment

Never classify skin type from photos or client self-report alone. Phone cameras, lighting conditions, and filters make accurate assessment impossible remotely.

### The Assessment Protocol
1. **Examine in daylight or daylight-balanced lighting** — fluorescent light distorts skin color
2. **Check multiple locations:** inner wrist (least sun-exposed), jawline, behind the ear, and the treatment area itself
3. **Feel the skin:** gently touch the treatment area — is it oily, dry, rough, smooth, thin, thick?
4. **Ask targeted questions:** "Does your skin typically burn or tan in the sun?" "Do you consider your skin oily, dry, or normal?" "Do you have a history of reactions to skincare products?"
5. **Document your assessment** on the client file — Fitzpatrick type, functional type, any notable findings

> **The personalized approach:** An elite PMU artist doesn't use the same technique on every client. They assess each client's skin as a unique medium and customize their approach accordingly — adjusting pigment, pressure, technique, and aftercare. The Fitzpatrick scale and functional typing are the tools that make this personalization systematic rather than guesswork.`,
        },
        {
            id: 'mod3-lesson3',
            slug: 'healing-stages-and-timeline',
            title: 'Healing Stages & Timeline',
            type: 'reading',
            durationMinutes: 30,
            order: 3,
            keyPoints: [
                'The complete healing cycle takes 6-8 weeks — clients must be told this upfront',
                'The "ghosting phase" (days 7-14) causes the most client anxiety',
                'Proactive communication during healing reduces panicked calls by 80%',
                'Each healing stage has specific biological mechanisms that explain the visible changes',
                'Healing quality is the largest single factor in final result quality',
            ],
            content: `# Healing Stages & Timeline

Understanding the healing process at a biological level serves two critical purposes: it allows you to predict and evaluate results accurately, and it allows you to prepare your clients so they don't panic during the inevitable phases where their investment appears to be "disappearing." Client anxiety during healing is the #1 source of post-procedure calls and complaints — and it's almost entirely preventable with proper education.

## The Biology of Wound Healing in PMU

PMU creates thousands of controlled micro-wounds in the skin. Each needle penetration triggers the body's wound healing cascade — the same biological response that closes any skin injury. Understanding this cascade explains every visual change your client will see.

## Stage 1: Hemostasis & Inflammation (Days 0-3)

### What's Happening Biologically
- Blood clotting factors activate at each needle wound site
- Platelets aggregate to stop bleeding
- Inflammatory mediators (histamine, prostaglandins) are released
- Blood flow to the area increases (vasodilation)
- White blood cells begin migrating to the wound sites

### What the Client Sees
- **Day 0 (fresh):** Brows appear dark, bold, and sharply defined. Color is 30-50% darker than final result. Some swelling, especially near the tail.
- **Day 1:** Swelling peaks, especially upon waking (fluid pools overnight). Color still very bold. Slight weeping of lymph fluid is normal.
- **Day 2-3:** Swelling subsides. Color begins to look slightly less intense. Tightness in the skin. Some tenderness to touch.

### What You Should Tell the Client
"For the first 2-3 days, your brows will look noticeably darker and more defined than the final result. This is completely normal. Think of it like a fresh haircut — it always looks most dramatic on day one. You may also see some swelling, especially the morning after your appointment. This is your body's natural healing response."

## Stage 2: Proliferation & Scabbing (Days 3-10)

### What's Happening Biologically
- Epithelial cells begin migrating across wound surfaces (re-epithelialization)
- Fibroblasts produce new collagen to fill the wound bed
- New blood vessels form (angiogenesis) to supply the healing tissue
- The outer layer of deposited pigment, trapped in the scab/crust, begins to lift
- A thin layer of new, unpigmented epidermal cells forms over the pigment deposit

### What the Client Sees
- **Days 3-5:** Surface skin begins to feel dry and tight. Flaking starts — sometimes in small patches, sometimes as thin sheets. Color appears patchy as some areas flake before others.
- **Days 5-7:** Peak flaking/peeling. This is when clients panic. Large flakes may lift, revealing very light-colored skin underneath. The brows can look dramatically lighter or "spotty."
- **Days 7-10:** Most surface flaking is complete. Brows appear significantly lighter than fresh — sometimes almost invisible. This is the ghosting phase.

### What You Should Tell the Client
"Around day 3-5, your brows will start to flake and peel. This is your skin healing — like a sunburn peeling. The flakes will contain surface pigment, so it looks like the color is coming off. DO NOT pick at the flakes. Let them fall off naturally. Underneath, the skin will look very light — this is temporary. The color is still in your skin, it's just hidden beneath the new healing skin layer."

## Stage 3: Remodeling & Color Return (Days 10-42)

### What's Happening Biologically
- The new epidermis matures and becomes more transparent
- The collagen matrix around the pigment particles reorganizes
- Initial inflammatory redness fades as blood flow normalizes
- Pigment particles settle into their permanent position in the dermis
- The immune system encapsulates pigment particles in fibroblast cells
- The "true" healed color gradually becomes visible through the maturing epidermis

### What the Client Sees
- **Days 10-14:** Color begins to reappear from beneath the healed surface. Each day looks slightly more defined. The client starts to see the actual results emerging.
- **Days 14-28:** Color continues to deepen and definition sharpens. By day 21, the client has a good preview of their final color (though it will continue to settle slightly).
- **Days 28-42:** Final color is revealed. Strokes or shading reach their definitive appearance. This is when you can accurately assess the results and plan the touch-up.

### What You Should Tell the Client
"Around week 2, the color will start coming back. Each day will look a little better than the last. By week 4, you'll have a clear picture of your final results. The touch-up appointment at week 6-8 is where we perfect anything that needs adjustment."

## The Proactive Communication Strategy

The most effective way to prevent panicked client calls is to message them BEFORE each phase hits:

| Timing | Proactive Message |
|--------|------------------|
| Day 1 | "Your brows look amazing! Remember they'll soften significantly over the next few weeks." |
| Day 3 | "You may notice flaking starting today — totally normal! Whatever you do, don't pick." |
| Day 7 | "If your brows look very light right now, don't worry. This is the ghosting phase. The color will return over the next 2-3 weeks." |
| Day 14 | "You should start seeing your color come back now! It will continue settling for another 2-4 weeks." |
| Day 28 | "Your results should be nearly finalized! We'll assess everything at your touch-up in 2-4 weeks." |

> **The elite standard:** Proactive communication transforms the healing experience from anxiety-inducing to confidence-building. The artist who reaches out before the client panics is the artist who gets five-star reviews and referrals. Build these touchpoints into your workflow — automated texts, scheduled emails, or personal messages. The 5 minutes you invest prevents the 30-minute panicked phone call.`,
        },
        {
            id: 'mod3-lesson4',
            slug: 'working-with-scar-tissue',
            title: 'Working with Scar Tissue & Previous Work',
            type: 'reading',
            durationMinutes: 30,
            order: 4,
            keyPoints: [
                'Scar tissue has altered collagen structure — it holds pigment unpredictably',
                'Previous PMU work must be fully assessed before attempting a new procedure',
                'Color correction is an advanced skill — do not attempt it in your first year',
                'Sometimes the most professional recommendation is "don\'t do this"',
                'Multiple light sessions on scar tissue outperform one aggressive session',
            ],
            content: `# Working with Scar Tissue & Previous Work

Not every canvas is blank. Many clients will present with existing scar tissue in the treatment area, previous PMU work that has faded or shifted, or both. Working with altered skin requires different techniques, different expectations, and a higher level of clinical judgment. This lesson equips you to assess these situations, make sound decisions, and communicate honestly with clients about what is realistic.

## Understanding Scar Tissue

Scars form when the dermis is damaged beyond its capacity for normal regeneration. Instead of replaying the original skin architecture, the body lays down dense, disorganized collagen to close the wound quickly. This fundamentally changes the skin's properties.

### How Scar Tissue Differs from Normal Skin

| Property | Normal Skin | Scar Tissue |
|----------|------------|-------------|
| Collagen arrangement | Organized, basket-weave pattern | Dense, parallel, disorganized fibers |
| Blood supply | Rich capillary network | Reduced vascularity |
| Nerve endings | Full sensation | Often reduced or absent |
| Elasticity | Normal stretch and recoil | Rigid, limited flexibility |
| Pigment response | Predictable retention | Unpredictable — may hold too much or too little |
| Texture | Smooth, consistent | May be raised, indented, rough, or shiny |
| Skin thickness | Consistent for the region | May be thicker (hypertrophic) or thinner (atrophic) |

### Types of Scars You'll Encounter

**Atrophic Scars (Indented)**
- Common from acne, chicken pox, or surgical excision
- Skin is thinner than surrounding tissue
- Pigment may deposit unevenly — more in the base, less on steep walls
- Risk of going too deep due to thin tissue

**Hypertrophic Scars (Raised)**
- Restricted to the original wound boundaries
- Dense collagen makes needle penetration more difficult
- May require firmer pressure, but this increases bleeding risk
- Color retention is often poor — immune system actively works to remove foreign material from scar tissue

**Keloid Scars (Growing Beyond Boundaries)**
- Extend beyond the original wound area
- PMU involves creating new wounds → **risk of triggering further keloid growth**
- Generally considered a contraindication for PMU in the treatment area
- Require physician clearance and careful risk-benefit discussion

**Surgical Scars (Linear)**
- From brow lifts, face lifts, or trauma repair
- May have areas of numbness (reduced pain feedback)
- Skin may be taut or tethered to underlying tissue
- Can often be worked with successfully using modified technique

## Technique Modifications for Scar Tissue

### General Principles
1. **Go slower** — scar tissue gives different tactile feedback than normal skin
2. **Use lighter pressure initially** — you can always add in subsequent sessions; you can't undo too-deep work
3. **Expect uneven results** on the first pass — scarred areas may absorb pigment differently
4. **Plan for additional sessions** — explain to the client that scar tissue often requires 2-3 sessions rather than the standard 1+touch-up
5. **Use a conservative pigment load** — scar tissue may scatter pigment unpredictably

### Specific Approaches

**For atrophic scars:** Approach the indentation at a perpendicular angle. Apply pigment in thin layers. Multiple light passes are safer than one heavy pass.

**For hypertrophic scars:** Expect more resistance. Use your established pressure baseline but be prepared for the needle to "skip" as it transitions between normal and scar tissue. Work slowly across the boundary.

**For old PMU scar tissue:** Previous PMU work may have left fibrotic tissue beneath the surface even if the pigment is gone. This tissue behaves like scar tissue. Assess by feeling the area — fibrous texture under the surface indicates scarring.

## Assessing Previous PMU Work

### The Assessment Process
1. **Examine in natural light** — artificial lighting can mask residual pigment
2. **Identify remaining pigment** — what color has it faded to? Red? Gray? Blue? Salmon?
3. **Assess coverage** — is the old work evenly faded or patchy?
4. **Feel the tissue** — is there scarring? Texture changes? Fibrosis?
5. **Ask the client about their history** — how many sessions? How long ago? Any complications? What brand/type of pigment was used?

### Common Scenarios

**Faded-to-Red/Salmon (Iron Oxide Based)**
- Very common with older brown pigments
- Can be color-corrected with green-based or olive modifiers
- Requires advanced pigment knowledge — mistakes compound the problem

**Faded-to-Gray/Blue (Carbon Based)**
- Common with older gray-brown or "ashy" pigments
- More difficult to correct — orange/warm modifiers can help but it's tricky
- May require laser lightening before re-tattooing
- Often the most appropriate recommendation for clients in this situation

**Saturated Old Work**
- Dense, dark, heavily saturated previous PMU that hasn't faded enough
- Tatttooing over saturated work creates muddy, unpredictable results
- Must be lightened with saline removal or laser before new work
- This is a "decline and refer" situation for most foundation-level artists

## The Honest Conversation

### When to Proceed
- Previous work has faded significantly (80%+ gone)
- Remaining color is neutral or warm (not blue/gray)
- No significant scarring in the treatment area
- Client understands multiple sessions may be needed
- Results will be incremental, not dramatic-overnight

### When to Decline
- Significant residual pigment in a color you can't correct
- Keloidal scarring history in the treatment area
- Client expects a single session to completely transform heavily saturated old work
- The honest assessment is that the result will be mediocre at best
- You lack the advanced skills required for this specific case

### How to Decline Gracefully
"Based on my assessment, I don't think I can give you the result you're looking for with a standard procedure. What I'd recommend is [saline removal / laser lightening / referral to a color correction specialist]. I want to make sure you get the best possible outcome, and being honest about what I can achieve is part of that."

> **The mark of a true professional:** Knowing what you CAN'T do is just as important as knowing what you can. Declining a case that exceeds your skill level or that you know will produce a disappointing result is not weakness — it's integrity. The artist who takes every case regardless of difficulty or likely outcome is the artist who produces inconsistent work and builds a mediocre reputation. Be selectively excellent rather than broadly mediocre.`,
        },
    ],
};

export default mod03;
