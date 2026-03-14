'use client';

import { useState } from 'react';
import PortalShell from '@/components/portal/PortalShell';
import { BookMarked, ClipboardList, Image, FileText, ChevronDown, ChevronUp } from 'lucide-react';

const RESOURCES = [
    {
        category: 'Reference Guides',
        icon: BookMarked,
        items: [
            {
                title: 'Sanitation & Sterilization Quick Reference',
                desc: 'Workstation setup protocols, surface disinfection, instrument handling',
                content: `## Workstation Setup Checklist (Before Every Client)

1. **Wash hands** — 20 seconds minimum, antibacterial soap, up to wrists
2. **Disinfect surfaces** — EPA-registered hospital-grade disinfectant on all hard surfaces (chair, tray, lamp arms, counter)
3. **Allow wet contact time** — minimum 2 minutes for most disinfectants (check product label)
4. **Apply barrier film** — cover machine, cord, lamp handle, spray bottles, clip cord if applicable
5. **Set up sterile field** — lay disposable drape on tray, place supplies with gloved hands only
6. **Arrange supplies** — pigment cups, needles/cartridges (unopened), marker, ruler, cotton rounds, aftercare packets
7. **Double-glove** — first pair before setup, second pair before touching client

## Surface Disinfection Protocol

| Surface | Product | Contact Time | Frequency |
|---------|---------|-------------|-----------|
| Treatment chair | Cavicide / Barbicide Plus | 2 min | Between every client |
| Tray / cart | Cavicide | 2 min | Between every client |
| Lamp arm & handle | Cavicide wipe | 2 min | Between every client |
| Door handles | Disinfectant wipe | 1 min | Every 2 hours |
| Floors (splash zone) | 10% bleach or hospital mop solution | 10 min | End of day & after spills |

## Sharps Disposal

- All used needles/cartridges go directly into a puncture-resistant sharps container
- Never recap needles
- Sharps containers must be sealed and replaced when ¾ full
- Dispose through a licensed medical waste hauler (check your county requirements)
- Keep a disposal log with dates and hauler receipts

## Spore Testing (Autoclave Users)

- Run biological indicator (BI) spore test strips weekly
- Mail to monitoring service or use in-office incubator
- Log every test: date, cycle number, pass/fail
- A failed test requires immediate removal of autoclave from service until repaired and re-tested`,
            },
            {
                title: 'Pigment Color Theory Reference',
                desc: 'Undertone matching, Fitzpatrick-based selection, fade prediction',
                content: `## The Color Wheel for PMU

Understanding how colors interact is essential for choosing the right pigment and predicting how it will heal and fade.

**Primary Colors:** Red, Yellow, Blue
**Secondary Colors:** Orange, Green, Purple (each made by mixing two primaries)

### Why This Matters for PMU

Every pigment contains a blend of color molecules. Over time, smaller molecules break down faster, leaving the dominant undertone visible:
- **Iron oxide browns** tend to fade warm → salmon, orange, or reddish
- **Carbon-based browns** tend to fade cool → gray, blue-gray, or ashy

## Fitzpatrick-Based Pigment Selection

| Skin Type | Undertone | Recommended Pigment Direction | Avoid |
|-----------|-----------|------------------------------|-------|
| I-II (Very Fair) | Cool/Neutral | Taupe-based, ash-blonde, light brown | Warm reds — they'll appear too orange |
| III (Medium) | Neutral/Warm | Medium brown with balanced undertone | Pure ash — will look gray after healing |
| IV (Olive) | Warm | Warm brown with slight cool modifier | Going too warm — olive skin amplifies warmth |
| V (Dark Brown) | Warm | Rich brown with cool modifier | Cool-heavy pigments — will look ashy |
| VI (Very Dark) | Warm | Darkest brown, high opacity required | Any pigment without strong opacity |

## Custom Mixing Ratios (Starting Points)

These are baseline ratios — always adjust based on patch test and experience:
- **Fair cool skin:** 70% taupe + 30% warm brown
- **Medium neutral:** 60% medium brown + 25% dark brown + 15% warm modifier
- **Olive skin:** 50% warm brown + 35% medium brown + 15% olive modifier
- **Dark skin:** 70% dark brown + 20% warm modifier + 10% black-brown for depth

## Fade Prediction Timeline

| Pigment Base | 3 Month Color | 12 Month Color | 24 Month Color |
|-------------|---------------|----------------|-----------------|
| Iron oxide brown | Softened warm brown | Rose-brown | Salmon/peach |
| Carbon brown | Slightly cooler brown | Gray-brown | Gray/blue-gray |
| Organic hybrid | True-to-tone softening | Slight warmth | Natural fade-out |

> **Pro tip:** Always select a pigment that is 10-15% cooler than your target healed color. Skin acts as a warm filter — the healed result will shift warmer than the pigment cup.`,
            },
            {
                title: 'Skin Science Quick Reference',
                desc: 'Fitzpatrick scale, skin layers, depth guide, healing stages',
                content: `## Needle Depth Target Zone

**Target: Papillary Dermis (Upper Dermis) — 0.5 to 1.0mm**

| Depth | Layer | Result |
|-------|-------|--------|
| 0 - 0.1mm | Epidermis (surface) | Pigment sheds within days — too shallow |
| **0.5 - 1.0mm** | **Papillary Dermis** | **Correct depth — pigment retained, crisp strokes** |
| 1.0 - 2.0mm | Reticular Dermis | Pigment migrates and blurs — too deep, scarring risk |
| 2.0mm+ | Hypodermis | Serious technique error — never reach this depth |

## How to Read Depth During Procedure

| Signal | Too Shallow | Correct | Too Deep |
|--------|-----------|---------|----------|
| Sound | Silent | Light scratching | Crunching |
| Bleeding | None | Light pinpoint (delayed 5-10s) | Immediate, steady |
| Client reaction | Barely felt | Mild scratching sensation | Sharp/stinging pain |
| Pigment | Wipes off easily | Clean, defined line in channel | Blurred, spreading |

## Healing Timeline Summary

| Phase | Days | What Happens | Client Sees |
|-------|------|-------------|-------------|
| Hemostasis | 0-3 | Blood clotting, inflammation, swelling | Dark, bold, defined — 30-50% darker than final |
| Proliferation | 3-10 | Scab formation, peeling, new skin growth | Flaking, patchy, progressively lighter |
| Ghosting | 7-14 | New epidermis covers pigment, color "disappears" | Very light, almost invisible — DON'T PANIC |
| Remodeling | 14-42 | Epidermis matures, true color emerges | Color returns gradually, final result by week 6 |

## Proactive Client Messages

Send BEFORE each phase to prevent panicked calls:
- **Day 1:** "Your brows look amazing! They'll soften significantly over the next few weeks."
- **Day 3:** "Flaking may start today — totally normal! Don't pick at them."
- **Day 7:** "If they look very light, don't worry — this is the ghosting phase. Color will return."
- **Day 14:** "You should see color coming back. It'll keep settling for 2-4 more weeks."
- **Day 28:** "Results are nearly final! We'll assess everything at your touch-up."`,
            },
        ],
    },
    {
        category: 'Business Templates',
        icon: ClipboardList,
        items: [
            {
                title: 'Client Intake Form Template',
                desc: 'Complete medical history questionnaire with specific PMU questions',
                content: `## CLIENT INTAKE FORM — Permanent Makeup Procedure

### Section 1: Personal Information
- Full legal name: _______________
- Date of birth: _______________
- Phone: _______________
- Email: _______________
- Emergency contact name & phone: _______________

### Section 2: Medical History

**Please answer YES or NO to each question:**

**Skin Conditions:**
- ☐ History of keloid or hypertrophic scarring
- ☐ Active eczema, psoriasis, or dermatitis in treatment area
- ☐ History of cold sores / oral herpes (HSV-1)
- ☐ Cosmetic treatments in the area in the past 6 months (Botox, fillers, peels, laser)
- ☐ Current use of retinol, tretinoin, or prescription acne medication

**Medications:**
- ☐ Blood thinners (Aspirin, Warfarin, Eliquis, Xarelto)
- ☐ Accutane/isotretinoin (current or within past 12 months)
- ☐ Immunosuppressive medication
- ☐ Antidepressants or anti-anxiety medication
- List all current medications: _______________

**Health:**
- ☐ Diabetes (Type: ___ | A1C level: ___)
- ☐ Autoimmune condition (specify: _____________)
- ☐ Bleeding disorder
- ☐ Heart condition or pacemaker
- ☐ Epilepsy or seizure disorder
- ☐ Currently pregnant or breastfeeding
- ☐ Currently undergoing chemotherapy or radiation

**Allergies:**
- ☐ Topical anesthetics (lidocaine, prilocaine, tetracaine)
- ☐ Pigments, dyes, or metals
- ☐ Latex
- List all allergies: _______________

**Lifestyle:**
- ☐ Heavy alcohol use
- ☐ Frequent tanning or tanning bed use

### Section 3: Previous PMU History
- Have you had permanent makeup before? ☐ Yes ☐ No
- If yes — procedure type, when, satisfaction level, any complications: _______________

### Section 4: Client Acknowledgment
"I certify that the information provided above is true and complete to the best of my knowledge. I understand that withholding medical information could result in complications."

Signature: _______________ Date: _______________`,
            },
            {
                title: 'Service Agreement & Consent Form',
                desc: 'Liability waiver, cancellation policy, healing expectations',
                content: `## PMU SERVICE AGREEMENT & INFORMED CONSENT

### Procedure Description
I understand that I am receiving a semi-permanent cosmetic procedure involving the implantation of pigment into the dermal layer of skin using [microblading / machine / both]. The procedure will be performed on: [brows / lips / eyeliner / other].

### Risk Disclosure
I acknowledge that the following risks have been explained to me:
- ☐ Infection (rare with proper aftercare and sterile technique)
- ☐ Allergic reaction to pigments or topical anesthetic
- ☐ Asymmetry or unsatisfactory aesthetic results
- ☐ Color change, fading, or migration over time
- ☐ Scarring (rare, primarily in predisposed individuals)
- ☐ Need for touch-up or additional correction sessions
- ☐ Results are semi-permanent and may require professional removal if unwanted

### Healing & Results Acknowledgment
I understand that:
- ☐ Healed results will be 30-40% lighter and softer than immediately post-procedure
- ☐ The healing process includes darkening, peeling, and a "ghosting" phase where color appears to fade significantly before returning
- ☐ A touch-up appointment (6-8 weeks after initial session) is part of the standard process, not a correction for poor work
- ☐ Individual results vary based on skin type, health, lifestyle, and aftercare compliance
- ☐ I have been shown examples of both fresh AND healed work

### Financial Terms
- Total fee: $_______________
- Touch-up included: ☐ Yes ☐ No (additional fee: $_____)
- Cancellation with less than 48 hours notice: $_____ fee
- No-show fee: $_____
- Refund policy: _______________

### Photography Consent (Optional)
- ☐ I consent to before/during/after photographs for my file
- ☐ I consent to use of my photos for marketing (identity may be anonymized)
- ☐ I do NOT consent to use of photos for marketing

### Signatures
Client printed name: _______________
Client signature: _______________ Date: _______________
Artist signature: _______________ Date: _______________`,
            },
            {
                title: 'Pricing Strategy Worksheet',
                desc: 'Calculate overhead, set profitable prices, compare market rates',
                content: `## Pricing Your PMU Services

### Step 1: Calculate Your Monthly Overhead

| Expense | Monthly Cost |
|---------|-------------|
| Studio rent / booth rent | $_____ |
| Insurance (liability + property) | $_____ |
| Supplies (needles, pigment, gloves, barriers) | $_____ |
| Marketing / advertising | $_____ |
| Software (booking, CRM, accounting) | $_____ |
| Continuing education | $_____ |
| Phone / internet | $_____ |
| Professional memberships | $_____ |
| **Total Monthly Overhead** | **$_____** |

### Step 2: Determine Your Time Value

- How many clients can you realistically book per week? _____
- Average procedure time (including consultation, mapping, procedure, cleanup): _____ hours
- Available working hours per week: _____

**Your hourly overhead cost:** Total Monthly Overhead ÷ (Available hours × 4.3 weeks) = $_____ /hr

### Step 3: Set Your Target Income

- Desired annual income (pre-tax): $_____
- Desired monthly income: $_____ ÷ 12 = $_____
- Per-hour income needed: Monthly income ÷ (Available hours × 4.3) = $_____ /hr

### Step 4: Calculate Your Minimum Price

**Minimum per-service price = (Hourly overhead + Hourly income target) × Average procedure hours**

Example: ($25/hr overhead + $75/hr income) × 3 hours = $300 minimum per procedure

### Step 5: Market Rate Comparison

| Service | Beginner Range | Experienced Range | Premium Range |
|---------|---------------|-------------------|---------------|
| Microblading | $250-400 | $400-600 | $600-1000+ |
| Powder Brows | $300-450 | $450-650 | $650-1000+ |
| Combo Brows | $350-500 | $500-700 | $700-1200+ |
| Lip Blush | $300-450 | $450-650 | $650-900+ |
| Eyeliner | $250-400 | $400-550 | $550-800+ |

> **Pro tip:** Don't compete on price. Compete on quality, experience, and professionalism. Underpricing devalues your work and attracts clients who will always complain about cost.`,
            },
        ],
    },
    {
        category: 'Photography & Portfolio',
        icon: Image,
        items: [
            {
                title: 'Before/After Photography Guide',
                desc: 'Lighting setup, camera angles, consistency tips for portfolio-quality photos',
                content: `## The 5 Rules of PMU Photography

### Rule 1: Consistency Is Everything
Every before/after pair must be taken with identical:
- Distance from the camera
- Angle (straight-on for brows, slight angle for lips)
- Lighting position
- Background
- Client facial expression (neutral, relaxed)

### Rule 2: Lighting Setup

**Recommended: Ring light + natural window light**

| Setup | Position | Purpose |
|-------|----------|---------|
| Ring light | Directly in front of client, behind your phone | Even, shadow-free illumination |
| Window light | To the side, diffused with sheer curtain | Natural, warm fill light |
| Overhead fluorescent | TURN OFF | Creates green cast and harsh shadows |

**Avoid:**
- Direct overhead lighting (creates dark eye sockets)
- Sunlight hitting one side of the face (creates uneven shadows)
- Flash (flattens skin texture, blows out detail)

### Rule 3: Camera Settings

**Smartphone tips (you don't need a DSLR):**
- Use portrait mode for slight background blur
- Tap on the brow area to set focus and exposure
- Turn off HDR (it over-processes skin texture)
- Use the rear camera, not the selfie camera
- Clean your lens before every shoot (serious — fingerprints destroy sharpness)

### Rule 4: Angles for Each Service

| Service | Primary Angle | Secondary Angle |
|---------|--------------|-----------------|
| Brows | Straight-on, eyes open | Looking down (eyes closed, showing full brow shape) |
| Lip blush | Straight-on, lips relaxed | Slight smile (showing color on relaxed lip shape) |
| Eyeliner | Eyes closed, face tilted slightly up | Eyes open, straight-on |

### Rule 5: Before vs After Timing

| Photo | When | Why |
|-------|------|-----|
| Before | After consultation, before mapping | Shows the true "starting point" |
| Immediately After | Right after cleanup, before client leaves | Shows fresh work (will be darker than healed) |
| Healed | At touch-up appointment (6-8 weeks) | Shows true result — THIS is your best portfolio image |

> **The portfolio mistake:** Most new artists only post fresh (day-of) photos because they look the most dramatic. But clients hire you based on HEALED results. Build your portfolio with healed photos — they prove your work holds up.`,
            },
            {
                title: 'Social Media Content Calendar (30 Days)',
                desc: '30 days of post ideas, captions, and hashtag strategy',
                content: `## 30-Day PMU Social Media Calendar

### Week 1: Educate & Establish Authority

| Day | Post Type | Content |
|-----|-----------|---------|
| 1 | Carousel | "5 Things to Know Before Your First PMU Appointment" |
| 2 | Story | Behind-the-scenes workstation setup |
| 3 | Reel | Quick brow mapping timelapse (15 seconds) |
| 4 | Photo | Healed before/after with detailed caption about the client's journey |
| 5 | Story | "Ask Me Anything" Q&A about PMU |
| 6 | Carousel | "Fresh vs. Healed: What to Expect" comparison photos |
| 7 | Rest day | (Engage with comments and DMs instead) |

### Week 2: Showcase Your Work

| Day | Post Type | Content |
|-----|-----------|---------|
| 8 | Reel | Full procedure timelapse (30 seconds) with music |
| 9 | Photo | Close-up healed brows with lighting details |
| 10 | Story | Share a positive client review / testimonial |
| 11 | Carousel | "Brow Shapes for Your Face Type" educational post |
| 12 | Reel | Pigment mixing process footage |
| 13 | Photo | Your workspace / studio tour highlight |
| 14 | Rest day | Plan next week, batch-create content |

### Week 3: Build Trust & Connection

| Day | Post Type | Content |
|-----|-----------|---------|
| 15 | Reel | "Day in the Life of a PMU Artist" |
| 16 | Photo | Share your training/certification journey |
| 17 | Story | Poll: "Which brow style do you prefer?" (soft powder vs hair stroke) |
| 18 | Carousel | "PMU Myths vs Facts" (debunk 5 common myths) |
| 19 | Photo | Client reaction video or testimonial (with permission) |
| 20 | Story | Share a tip about aftercare |
| 21 | Rest day | Engage, respond to DMs, research trends |

### Week 4: Convert & Call to Action

| Day | Post Type | Content |
|-----|-----------|---------|
| 22 | Reel | Your best healed result with transformation music |
| 23 | Photo | "Limited openings for [month]" — booking CTA |
| 24 | Carousel | "What's Included in Your Appointment" (breakdown of the experience) |
| 25 | Story | Share your favorite PMU tool or product and why |
| 26 | Reel | Side-by-side: symmetry check with mapping string |
| 27 | Photo | Gratitude post — thank your clients and community |
| 28-30 | Mixed | Repurpose your best-performing content from this month |

### Hashtag Strategy
Use 15-20 hashtags per post, mixing sizes:
- **Large (1M+ posts):** #microblading #permanentmakeup #browgoals #pmuartist
- **Medium (100K-1M):** #microbladingbrows #powderbrows #browmapping #pmulove
- **Local:** #[yourcity]microblading #[yourcity]pmu #[yourcity]brows #[yourcity]beauty`,
            },
        ],
    },
    {
        category: 'Aftercare & Client Communication',
        icon: FileText,
        items: [
            {
                title: 'Aftercare Instructions — Brows',
                desc: 'Print-ready aftercare card content for microblading, powder brows, and combo brows',
                content: `## BROW AFTERCARE INSTRUCTIONS

**Give this to every brow client. Review it with them before they leave.**

### First 24 Hours
- Gently blot with a clean tissue every 30-60 minutes to remove lymph fluid
- Do NOT get the area wet
- Do NOT touch with unwashed hands
- Sleep on your back if possible — avoid pressing brows into pillow

### Days 1-7 (Critical Healing Window)
- Apply a THIN layer of provided aftercare balm 2-3 times daily (rice grain amount)
- Do NOT over-moisturize — too much product suffocates the skin and traps bacteria
- Avoid water directly hitting the brow area (brief, careful showers are fine — no steaming)
- No makeup on or near the brow area
- No gym, sauna, pool, hot tub, or heavy sweating
- No picking, scratching, or peeling flakes — LET THEM FALL NATURALLY

### Days 7-14 (Peeling & Ghosting Phase)
- Flaking is normal — the surface scabs contain pigment and will naturally shed
- Color will appear very light or "disappeared" after flakes fall off — this is temporary
- Continue thin aftercare balm application
- Resume gentle face washing, avoiding direct scrubbing on brows

### Days 14-42 (Color Return)
- Color gradually returns as healed skin becomes more transparent
- Resume normal skincare EXCEPT: no retinol, glycolic acid, or chemical exfoliants on the brow area until after your touch-up
- Sunscreen on healed brows when outdoors (UV fades pigment faster than anything)

### Ongoing Care (After Touch-Up Heals)
- Apply SPF 30+ to brows daily for long-term color preservation
- Avoid retinol and chemical peels directly on the brow area
- Expect touch-up every 12-24 months depending on skin type and lifestyle

### ⚠️ Contact Us Immediately If You Experience:
- Signs of infection (increasing redness, warmth, pus, fever)
- Severe or spreading swelling after day 3
- Allergic reaction (hives, rash beyond the treated area, difficulty breathing)`,
            },
            {
                title: 'Touch-Up Timing & Communication Guide',
                desc: 'When to schedule, how to communicate, what to assess',
                content: `## Touch-Up Appointment Guide

### When to Schedule
- **Standard:** 6-8 weeks after initial procedure
- **Why 6 weeks minimum:** Skin needs full healing cycle to reveal true color and retention
- **Maximum window:** 12 weeks — beyond this, a full session fee may apply

### What to Assess at Touch-Up
1. **Color retention** — where has pigment held well? Where did it fade?
2. **Stroke/pattern clarity** — are hair strokes still crisp or have they spread?
3. **Symmetry** — now that everything is healed, do both sides match?
4. **Client satisfaction** — what does the client want adjusted? Darker? More defined? Shape changes?
5. **Skin response** — any scarring, texture changes, or unusual healing patterns?

### Communication Templates

**Scheduling Message (Send at Week 4):**
"Hi [Name]! Your brows should be looking beautiful by now 🌟 It's almost time for your perfecting touch-up. This appointment lets me add density, refine the shape, and address any areas that healed lighter. Would you like to book for [suggest 2-3 dates]?"

**Pre-Touch-Up Reminder (Send 3 Days Before):**
"Hi [Name], just a reminder about your touch-up appointment on [date] at [time]. Same pre-care applies: no alcohol 24hrs before, no aspirin/NSAIDs 72hrs before, and arrive with clean skin (no brow makeup). See you soon!"

**Post-Touch-Up Follow-Up (Send Day 1):**
"Hi [Name]! Your brows are looking gorgeous. Remember, the same healing process applies — flaking around day 3-5, ghosting around day 7-10, and your final result emerging by week 4. Same aftercare routine as last time. Reach out if you have any questions!"

### Pricing Strategy for Touch-Ups
- First touch-up (6-8 weeks): Included in initial price
- Annual refresh (12-18 months): 40-50% of full price
- Color boost (18-24 months): 50-60% of full price
- Full redo (24+ months or new client): Full price`,
            },
        ],
    },
];

function GuideCard({ item }: { item: { title: string; desc: string; content: string } }) {
    const [open, setOpen] = useState(false);
    return (
        <div className={`portal-resource-card ${open ? 'portal-resource-card-open' : ''}`}>
            <button className="portal-resource-card-toggle" onClick={() => setOpen((o) => !o)}>
                <div className="portal-resource-card-body">
                    <p className="portal-resource-title">{item.title}</p>
                    <p className="portal-resource-desc">{item.desc}</p>
                </div>
                <div className="portal-resource-chevron">
                    {open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </div>
            </button>
            {open && (
                <div className="portal-resource-content">
                    <div className="portal-resource-markdown" dangerouslySetInnerHTML={{
                        __html: item.content
                            .replace(/^### (.*$)/gm, '<h3>$1</h3>')
                            .replace(/^## (.*$)/gm, '<h2>$1</h2>')
                            .replace(/^> \*\*(.*?)\*\*(.*$)/gm, '<blockquote><strong>$1</strong>$2</blockquote>')
                            .replace(/^> (.*$)/gm, '<blockquote>$1</blockquote>')
                            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                            .replace(/^\| (.+)/gm, (match) => {
                                const cells = match.split('|').filter(c => c.trim()).map(c => c.trim());
                                return '<tr>' + cells.map(c => `<td>${c}</td>`).join('') + '</tr>';
                            })
                            .replace(/^- ☐ (.*$)/gm, '<div class="resource-checkbox">☐ $1</div>')
                            .replace(/^- (.*$)/gm, '<li>$1</li>')
                            .replace(/(<li>.*<\/li>\n?)+/g, (m) => `<ul>${m}</ul>`)
                            .replace(/(<tr>.*<\/tr>\n?)+/g, (m) => `<table>${m}</table>`)
                            .replace(/\n{2,}/g, '<br/><br/>')
                            .replace(/\n/g, '\n')
                    }} />
                </div>
            )}
        </div>
    );
}

export default function PortalResourcesPage() {
    return (
        <PortalShell>
            <div className="portal-header">
                <div>
                    <h1 className="portal-welcome">Resources & Guides</h1>
                    <p className="portal-cohort">Reference materials, templates, and tools for your PMU practice</p>
                </div>
            </div>

            <div className="portal-resources-sections">
                {RESOURCES.map((section) => (
                    <div key={section.category} className="portal-resource-section">
                        <div className="portal-resource-section-header">
                            <section.icon className="h-5 w-5 text-rose-gold" />
                            <h2 className="portal-resource-category">{section.category}</h2>
                        </div>
                        <div className="portal-resource-grid">
                            {section.items.map((item) => (
                                <GuideCard key={item.title} item={item} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </PortalShell>
    );
}
