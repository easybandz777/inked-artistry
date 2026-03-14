import type { CurriculumModule } from '@/lib/types';

const mod07: CurriculumModule = {
    number: 7,
    slug: 'aftercare-touch-up',
    title: 'Aftercare & Touch-Up Process',
    description: 'Designing effective aftercare protocols, managing client healing expectations, and planning touch-up sessions.',
    topics: ['Dry vs. wet healing', 'Client aftercare kits', 'Touch-up timing', 'Complication management'],
    estimatedHours: 3,
    lessons: [
        {
            id: 'mod7-lesson1', slug: 'dry-vs-wet-healing-methods', title: 'Dry vs. Wet Healing Methods',
            type: 'reading', durationMinutes: 25, order: 1,
            keyPoints: [
                'Dry healing keeps the area untouched — no ointments, no water',
                'Wet healing uses thin layers of aftercare balm to keep the area moisturized',
                'Neither method is universally superior — skin type determines the best approach',
                'Consistency is more important than the method itself',
            ],
            content: `# Dry vs. Wet Healing Methods

There are two primary aftercare philosophies in PMU. Both have advocates and clinical reasoning behind them. Your job is to understand both, assess which suits each client's skin type, and provide clear aftercare instructions.

## Dry Healing

### The Method
- Keep the treated area completely dry for 7-10 days
- No ointments, creams, or balms applied
- Gently blot any lymph fluid in the first 24 hours with clean gauze
- Avoid water, steam, sweat on the area

### Pros
- Simplest instructions for clients
- Less risk of over-moisturizing (which can pull pigment out)
- The scab that forms creates a natural protective barrier

### Cons
- Scabbing can be heavier and more uncomfortable
- Risk of thick scabs pulling pigment out when they eventually shed
- Skin can feel tight and itchy during healing
- Not ideal for clients with very dry skin

### Best For
- Oily skin types
- Clients who tend to over-apply products
- Brow work (where heavier scabbing is tolerable)

## Wet Healing

### The Method
- Apply a very thin layer of approved aftercare balm 2-3 times daily
- "Thin" means barely visible — a grain-of-rice amount for both brows
- Clean hands only — wash before every application
- Continue for 7-10 days

### Pros
- Keeps the skin supple and comfortable
- Thinner scabs form — less risk of pigment being pulled away
- Typically faster visible healing
- More comfortable client experience

### Cons
- Over-application is the #1 client mistake (too much balm = suffocated skin = pigment loss)
- Requires more discipline and more detailed instructions
- Some clients apply non-approved products

### Best For
- Normal to dry skin types
- Lip blush procedures (lip skin dries out very quickly)
- Clients who can follow precise instructions

## Which to Recommend?

| Skin Type | Recommended Method | Reasoning |
|-----------|-------------------|-----------|
| Very oily | Dry | Sebum already provides natural moisture |
| Normal | Either — client preference | Both produce good results on balanced skin |
| Dry | Wet | Prevents excessive scabbing and tightness |
| Sensitive | Wet (with minimal product) | Prevents irritation from dryness |
| Lips | Wet (always) | Lip skin cracks and peels painfully without moisture |

## The Non-Negotiable Rules (Both Methods)

Regardless of method, these rules apply:
1. **No picking, scratching, or pulling at scabs** — ever
2. **No direct sun exposure** for 4 weeks minimum
3. **No swimming, saunas, or heavy sweating** for 10 days
4. **No makeup on the treated area** for 10 days
5. **No active skincare** (retinol, AHA, BHA) near the area for 4 weeks

> **The biggest aftercare failure is not the method — it's the client not following the instructions.** Your job is to make those instructions so clear and simple that compliance is easy.`,
        },
        {
            id: 'mod7-lesson2', slug: 'building-client-aftercare-kits', title: 'Building Client Aftercare Kits',
            type: 'reading', durationMinutes: 20, order: 2,
            keyPoints: [
                'Pre-assembled kits increase compliance and enhance perceived value',
                'Include printed instructions — digital-only gets ignored',
                'The aftercare kit is a marketing opportunity for your brand',
                'Keep product ingredients simple and hypoallergenic',
            ],
            content: `# Building Client Aftercare Kits

A professional aftercare kit elevates your client experience, ensures proper healing, and reinforces your brand. This lesson covers what to include, how to assemble, and how to present them.

## Kit Contents

### Essential Items
- **Aftercare balm** (if using wet healing) — 0.5oz portion is plenty
- **Printed aftercare instruction card** — laminated or card stock
- **Sterile gauze pads** — for blotting lymph in the first 24 hours
- **Mini SPF stick** — for UV protection once initial healing is complete (day 10+)

### Elevated Additions
- **Branded pouch or box** — creates a premium unboxing experience
- **Healing timeline visual** — a simple card showing what to expect each day
- **Your contact information** — for healing questions
- **Touch-up appointment reminder card** — with scheduling instructions

## Aftercare Balm Specifications

If you provide aftercare balm, ensure:
- **Fragrance-free** — fragrances irritate healing skin
- **Hypoallergenic** — minimal ingredient list
- **Non-comedogenic** — won't clog pores or trap bacteria
- **Approved ingredients:** Vitamin E, grape seed oil, shea butter (simple formulations preferred)
- **Avoid:** Petroleum-based products (controversial — may suffocate healing skin), products with artificial colors, anything with retinol or acids

## The Instruction Card

Your instruction card should include:

### Day-by-Day Guide
- **Days 1-2:** What's normal (swelling, darkness, lymph fluid)
- **Days 3-7:** Peeling phase expectations
- **Days 7-14:** Ghosting phase — "your color is still there"
- **Week 4+:** True color emergence
- **Week 6-8:** Touch-up window

### Clear Do's and Don'ts
Use two columns with checkmarks and X marks for instant readability.

### Emergency Contact
Your phone number or email for healing concerns. This builds trust and helps you catch complications early.

## Presentation

Hand the kit to the client at the end of the appointment:
- Walk through each item in the kit
- Read the instruction card with them out loud
- Ask: "Do you have any questions about your aftercare?"
- Emphasize the one thing that matters most: **don't pick at it**

> **The aftercare kit is a reflection of your professionalism.** A branded, thoughtful kit communicates that you care about results beyond the appointment. It's also one of the easiest ways to differentiate yourself from competitors who hand clients a verbal list and send them out the door.`,
        },
        {
            id: 'mod7-lesson3', slug: 'touch-up-timing-and-technique', title: 'Touch-Up Timing & Technique',
            type: 'reading', durationMinutes: 25, order: 3,
            keyPoints: [
                'Touch-ups should be scheduled at 6-8 weeks post-procedure minimum',
                'The touch-up is not a "fix" — it is an expected part of the two-session process',
                'Assess healed results objectively before touching up',
                'Some areas may not need touch-up at all — less is often more',
            ],
            content: `# Touch-Up Timing & Technique

The touch-up appointment is an integral part of the PMU process — not a sign that something went wrong. This lesson covers optimal timing, assessment techniques, and how to approach the second session strategically.

## Why Touch-Ups Are Necessary

First sessions are conservative by design:
- You're learning how the specific client's skin holds pigment
- It's impossible to predict exact retention on the first pass
- Conservative first sessions allow for refinement rather than correction
- The touch-up is where you perfect the work

## Optimal Timing

### Too Early (Before 6 Weeks)
- Skin hasn't fully healed — re-traumatizing healing tissue
- True color hasn't emerged — you're working blind
- Risk of scarring from over-working the skin

### Ideal Window (6-8 Weeks)
- Epidermis fully regenerated
- Pigment has settled to its final shade
- You can accurately assess retention and color
- Skin is ready to receive new pigment safely

### Too Late (Beyond 12 Weeks)
- Not dangerous, but pigment may have faded enough to complicate assessment
- If the client waits 6+ months, it may be treated as a new procedure

## Pre-Touch-Up Assessment

Before you begin, systematically evaluate:

1. **Color retention** — where did pigment hold vs. fade?
2. **Shape integrity** — are the mapped boundaries still defined?
3. **Symmetry** — have any shifts occurred during healing?
4. **Client satisfaction** — what do they love? What do they want adjusted?
5. **Skin condition** — any complications, scarring, or sensitivity?

## Touch-Up Strategy

### Where Pigment Faded
- Apply pigment to areas that didn't retain well
- Typically: brow tails, areas over scar tissue, oily zones
- May need slightly firmer pressure in known low-retention areas

### Where Pigment Held Well
- Do not re-work areas with good retention
- Adding more pigment to already-saturated areas = over-saturation and potential blowout
- These areas are done — leave them alone

### Color Adjustment
- If the first session healed slightly warm, cool the pigment mix
- If it healed cooler than expected, add warmth
- Use your documented mix sheet from session one as a baseline

### Shape Refinement
- Minor adjustments to symmetry
- Extending the tail if it faded
- Softening or defining the arch based on client feedback
- Adding density to sparse areas

## The "Less Is More" Principle

At the touch-up, resist the urge to re-do everything. Focus only on:
- Areas that genuinely need reinforcement
- Client-requested adjustments
- Color balancing based on how the first session healed

> **The best touch-ups are subtle.** If you're re-doing the entire brow, either the first session had issues or you're over-working. A well-done first session should need only 15-30 minutes of refinement.`,
        },
        {
            id: 'mod7-lesson4', slug: 'managing-healing-complications', title: 'Managing Healing Complications',
            type: 'reading', durationMinutes: 25, order: 4,
            keyPoints: [
                'Most complications are caused by aftercare non-compliance',
                'Infection is rare but requires immediate medical referral',
                'Allergic reactions usually present as persistent itching or swelling',
                'Document everything and communicate promptly with the client',
            ],
            content: `# Managing Healing Complications

While complications are uncommon with proper technique and aftercare, they do occur. Knowing how to identify, respond to, and document complications protects your client and your practice.

## Common Complications

### Excessive Scabbing
- **Cause:** Too deep, too many passes, dry healing on dehydrated skin
- **Signs:** Thick, dark scabs that take 10+ days to shed
- **Management:** Advise gentle cleansing and thin moisturizer application. Do not pick.
- **Impact on result:** May lose more pigment than normal in thick-scab areas

### Premature Fading
- **Cause:** Aftercare non-compliance, oily skin, sun exposure, active skincare
- **Signs:** Pigment almost completely gone at the 6-week mark
- **Management:** Discuss adherence to aftercare, adjust approach for touch-up
- **Impact:** May need a more aggressive second session

### Color Shift
- **Cause:** Pigment composition interaction with skin chemistry
- **Signs:** Warm shift (orange/salmon) or cool shift (gray/blue)
- **Management:** Document and plan color correction at touch-up using complementary modifiers
- **Impact:** Correctable but requires advanced pigment knowledge

### Contact Dermatitis
- **Cause:** Reaction to aftercare products, adhesive, or topical anesthetic
- **Signs:** Redness, itching, and irritation beyond the treated area
- **Management:** Discontinue suspect product immediately, cold compress, OTC antihistamine
- **When to refer:** If reaction spreads or intensifies after 48 hours

## Rare But Serious Complications

### Infection
- **Signs:** Increasing pain, warmth, swelling, yellow/green discharge, fever
- **Timeline:** Usually 2-5 days post-procedure
- **Action:** Refer to medical professional immediately. Do not attempt to treat.
- **Prevention:** Strict sanitation protocols, proper aftercare, clean environment

### Allergic Reaction to Pigment
- **Signs:** Persistent swelling, itching localized to pigmented areas, raised tissue
- **Timeline:** Can appear days to weeks after procedure
- **Action:** Document reaction, refer to dermatologist, note pigment lot numbers
- **Prevention:** Offer patch testing for clients with known sensitivity histories

### Keloid or Hypertrophic Scarring
- **Signs:** Raised, thickened tissue at the treatment site
- **Timeline:** Develops 1-3 months post-procedure
- **Action:** Refer to dermatologist. Do not perform touch-up.
- **Prevention:** Screen for keloidal history during intake

## Your Response Protocol

1. **Listen** — take the client's concern seriously, never dismiss
2. **Assess** — ask for photos if remote, or schedule an in-person check
3. **Document** — photograph the complication, note the timeline
4. **Advise** — provide guidance within your scope, or refer to medical professional
5. **Follow up** — check in within 48 hours to monitor progression
6. **Record** — add all details to the client file

> **Critical rule:** You are NOT a medical professional. If a complication involves signs of infection, severe allergic reaction, or any condition beyond normal healing variation, **refer the client to a doctor immediately.** Don't wait. Don't try to fix it yourself.`,
        },
    ],
};

export default mod07;
