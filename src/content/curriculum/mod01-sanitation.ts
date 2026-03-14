import type { CurriculumModule } from '@/lib/types';

const mod01: CurriculumModule = {
    number: 1,
    slug: 'sanitation-workstation-setup',
    title: 'Sanitation & Workstation Setup',
    description: 'Bloodborne pathogen awareness, sterilization protocols, disposable tool management, and creating a compliant workspace that meets or exceeds health department standards.',
    topics: ['Sterilization methods', 'Cross-contamination prevention', 'Workspace organization', 'PPE requirements'],
    estimatedHours: 4,
    lessons: [
        {
            id: 'mod1-lesson1',
            slug: 'ppe-and-glove-protocol',
            title: 'PPE & Glove Protocol',
            type: 'reading',
            durationMinutes: 30,
            order: 1,
            keyPoints: [
                'Always double-glove during procedures — the outer pair is your contamination indicator',
                'Use nitrile gloves exclusively — latex allergies affect up to 17% of healthcare workers',
                'Change gloves any time you break the sterile field, no exceptions',
                'PPE failures are the #1 citation in health department inspections of PMU studios',
                'A proper PPE protocol protects you legally even if an exposure incident occurs',
            ],
            content: `# PPE & Glove Protocol

Personal Protective Equipment is not a suggestion — it is the legal and ethical foundation of your entire practice. Every single session you perform involves controlled skin penetration with needles. This puts both you and your client at risk for direct bloodborne pathogen transmission. Your PPE protocol is the barrier between a thriving career and a catastrophic incident.

## Why This Lesson Comes First

Before you learn a single stroke pattern, before you pick up a mapping caliper, before you mix a single pigment — you learn safety. In every other module, every technique instruction assumes you are already operating under full PPE protocol. If your safety foundation is compromised, nothing else matters.

## The Regulatory Landscape

PMU is regulated under OSHA's Bloodborne Pathogen Standard (29 CFR 1910.1030) in the United States. Most states classify PMU in the same risk category as body tattooing. This means:

- You are **legally required** to follow BBP-compliant PPE protocols
- Health department inspectors can visit your studio unannounced
- Documented PPE violations can result in immediate studio closure
- Liability insurance may not cover incidents where PPE was not properly used

## Glove Selection: The Science Behind Nitrile

**Never use latex gloves.** Latex allergies affect an estimated 8-17% of healthcare workers and 1-6% of the general population. A client who doesn't know they have a latex sensitivity can develop reactions ranging from contact dermatitis to anaphylaxis.

### Why Nitrile?

| Property | Nitrile | Latex | Vinyl |
|----------|---------|-------|-------|
| Puncture resistance | Excellent | Good | Poor |
| Chemical resistance | Excellent | Moderate | Poor |
| Allergy risk | Extremely low | High (8-17%) | Low |
| Tactile sensitivity | Good | Excellent | Poor |
| Cost | Moderate | Low | Low |
| Verdict | **Use these** | Do not use | Do not use |

Nitrile provides the best balance of puncture resistance (critical when working with needles), chemical resistance (protects against pigments and disinfectants), and near-zero allergy risk.

### Proper Sizing

Gloves should fit snugly without being tight. Loose gloves reduce tactile feedback and increase the risk of snagging. Too-tight gloves cause hand fatigue during long procedures and are more prone to tearing.

**Sizing tip:** Try on three sizes. The correct size feels secure at the base of the fingers without constricting blood flow during precision work. Order in bulk once you find your size — inconsistency between brands means you should stick with one manufacturer.

## The Double-Glove Protocol

Double-gloving is the standard in PMU, not an optional precaution.

### Why Two Layers?

1. **Breach detection** — if the outer glove tears, you're still protected by the inner layer
2. **Contamination cycling** — you can remove the outer pair and immediately continue working with clean inner gloves while regloving
3. **Reduced exposure risk** — studies in surgical settings show double-gloving reduces blood contact risk by approximately 87%

### Protocol: Step by Step

1. Wash hands with antimicrobial soap for minimum 20 seconds (CDC standard)
2. Dry thoroughly — moisture trapped under gloves breeds bacteria
3. Apply first (inner) pair of nitrile gloves
4. Apply second (outer) pair of nitrile gloves
5. Ensure both layers sit flat without bunching at the fingertips
6. Begin your procedure

### When to Change Gloves

Change your **outer pair** immediately when:
- You touch any surface outside your sterile field (phone, face, hair, door handle)
- You pick up items from the floor
- You handle consent forms, pens, or any paper documents
- You adjust room lighting, music, or temperature controls
- You sneeze, cough, or touch your mask
- A glove tears, punctures, or feels compromised
- You complete one phase and move to another (mapping → stroking)

Change **both pairs** between:
- Different clients (obviously)
- Major phase transitions if the inner glove contacted skin
- Any time you remove and re-don PPE entirely

## Beyond Gloves: Full PPE Set

### Disposable Mask
- Minimum: standard surgical mask
- Protects against droplet transmission and accidental splash
- Change between clients, or sooner if damp
- Do not touch the front of your mask during procedures — if you do, change gloves

### Eye Protection
- Safety glasses or face shield
- Protects against pigment splash and fluid spray
- Required during any procedure where splash risk exists
- Clean with disinfectant between clients — do not share

### Disposable Apron or Smock
- Catches pigment drips and fluid splash
- Protects your clothing from contamination
- Single-use disposable preferred; if reusable, launder with bleach between clients

### Hair Covering
- Prevents hair from contacting the sterile field or client
- Standard bouffant caps or tied-back hair under a headband
- Loose hair in the client's face is both unsanitary and unprofessional

## The 3-Second Rule Does Not Exist

In a sterile field, there is no "quick touch" that's safe. If your gloved hand contacts your phone, even for half a second, those gloves are contaminated. Period. No exceptions. No "I'll be careful." Change them.

This is the single most common failure point for new PMU artists: the impulse to check a text, adjust music, or take a quick photo without properly degloving. Build the habit now, on day one, of treating your sterile field as sacred.

> **Professional reality check:** Health department inspectors watch for exactly these moments. They observe procedures from the doorway. The artist who touches their phone with gloved hands and doesn't change gloves immediately will be cited — and they should be. Your clients trust you with their health. Honor that trust with discipline.`,
        },
        {
            id: 'mod1-lesson2',
            slug: 'sterilization-and-disinfection',
            title: 'Sterilization & Disinfection Methods',
            type: 'reading',
            durationMinutes: 35,
            order: 2,
            keyPoints: [
                'Cleaning → disinfection → sterilization is a mandatory hierarchy, never skip steps',
                'EPA-registered hospital-grade disinfectants must meet specific kill claims for your studio',
                'Single-use disposable tools eliminate sterilization variables entirely',
                'Autoclave spore testing must be performed monthly and logged — inspectors check these records',
                'Contact time is not optional — cutting disinfection time short makes it ineffective',
            ],
            content: `# Sterilization & Disinfection Methods

This lesson establishes the clinical-grade decontamination protocols that separate a professional PMU studio from an unsafe one. The concepts here aren't suggestions — they are the framework that health departments, insurance companies, and licensing boards hold you accountable to.

## The Decontamination Hierarchy

There are three levels of decontamination, and they must happen in order. You cannot skip to a higher level without completing the levels below it.

### Level 1: Cleaning (Physical Removal)

Cleaning is the physical removal of visible debris, blood, tissue, and organic matter from surfaces and instruments. **You cannot disinfect or sterilize a dirty surface.** Chemicals cannot penetrate through biological material.

**How to clean effectively:**
- Use soap, water, and mechanical friction (scrubbing)
- For instruments: enzymatic cleaners break down biological residue at the molecular level
- For surfaces: spray and wipe with soapy water before applying disinfectant
- Rinse thoroughly — soap residue can inactivate some disinfectants

### Level 2: Disinfection (Pathogen Kill)

Disinfection uses EPA-registered chemical agents to kill most pathogenic microorganisms on surfaces and non-critical items. It does NOT kill all bacterial spores — that's sterilization's job.

**Categories of disinfection:**

| Level | Kill Spectrum | Use In PMU | Example Products |
|-------|--------------|------------|-----------------|
| Low | Vegetative bacteria, some viruses | General housekeeping only | Quaternary ammonium |
| Intermediate | Bacteria, most viruses, mycobacteria | Workstation surfaces, equipment housings | Cavicide, Madacide, accelerated hydrogen peroxide |
| High | All organisms except high numbers of spores | Semi-critical items that contact mucous membranes | Glutaraldehyde (requires extended soak) |

**For PMU studios, intermediate-level disinfection is the minimum for all procedure-area surfaces.**

### Level 3: Sterilization (Total Kill)

Sterilization eliminates ALL forms of microbial life, including bacterial endospores. This is the highest level of decontamination.

**Methods:**

- **Autoclave (Steam Pressure Sterilization)** — 121°C (250°F) at 15 psi for 15-30 minutes. This is the gold standard. Used for reusable metal instruments.
- **Chemical sterilization** — Extended immersion (10+ hours) in approved sterilant solutions. Used for heat-sensitive items only.
- **Dry heat sterilization** — 170°C for 60 minutes. Less common in PMU.

## The Contact Time Rule

Every disinfectant product specifies a **contact time** on its label — this is the minimum amount of time the surface must remain visibly wet with the product for it to achieve its claimed kill rate.

- Cavicide: 2 minutes
- Madacide: 1-2 minutes (check specific formulation)
- Accelerated hydrogen peroxide (AHP): 1 minute

**If you spray and immediately wipe dry, you have NOT disinfected.** You've just cleaned. The contact time is a legal requirement, not a suggestion. Inspectors know this and will ask you about your product's contact time.

## The Single-Use Revolution

The modern PMU industry has largely moved to a 100% disposable tool model:

- **Disposable needle cartridges** — use once and discard into sharps container
- **Single-use pigment cups** — pour what you need, discard the rest
- **Disposable blade holders** — if using manual microblading tools
- **Individual pigment portions** — pipette pigment into a single-use cup; NEVER re-dip into the bottle
- **Disposable rings/wells** — for holding pigment near the work area

### Why This Matters

When you use 100% disposable tools for skin-contact items, you eliminate the sterilization variable entirely. You never have to worry whether the autoclave cycle was long enough, whether the sterilant concentration was correct, or whether an instrument was properly dried. The item is new, sterile from manufacturing, and destroyed after a single use.

**This is the standard at Inked Academy. We train exclusively with single-use disposable instruments.**

## Autoclave Management

If your studio uses any reusable instruments (practice tool handles, calipers, etc.), autoclave protocols apply:

### Spore Testing Protocol

Biological indicator (BI) testing verifies that your autoclave is actually achieving sterilization:

1. Run spore test strips through a standard cycle **monthly minimum** (weekly is best practice)
2. Send strips to a certified laboratory for incubation
3. Results are returned as PASS (no growth) or FAIL (growth detected)
4. **Log all results** in your sterilization records — date, cycle parameters, result
5. If a FAIL result occurs: remove autoclave from service immediately, recall any instruments processed since last passing test, contact service technician

### Autoclave Load Records

For every cycle, document:
- Date and time
- Items in the load
- Cycle time, temperature, and pressure
- Chemical indicator result (tape changed color? ✓ or ✗)
- Operator initials

> **The bottom line:** If it touches the client's skin and it isn't disposable, it must be sterile. If it can't be sterilized, it must be disposable. There is no third option. This documentation is your legal protection — if a complication ever occurs, your sterilization log proves you followed protocol.`,
        },
        {
            id: 'mod1-lesson3',
            slug: 'workstation-setup-and-barrier-methods',
            title: 'Workstation Setup & Barrier Methods',
            type: 'reading',
            durationMinutes: 30,
            order: 3,
            keyPoints: [
                'The two-zone principle (clean vs. working) prevents cross-contamination by design',
                'Every surface in the working zone must be barrier-wrapped before the client sits down',
                'Setup should be completed before the client enters the room — never while they watch',
                'A pre-procedure checklist eliminates human error in high-stakes environments',
                'Post-procedure breakdown follows a specific contamination-aware sequence',
            ],
            content: `# Workstation Setup & Barrier Methods

Your workstation is your operating environment. In a hospital, surgeons work in purpose-built sterile rooms. In PMU, you create that environment yourself — every single time, from scratch, for every client. This lesson teaches you to set up and break down a workspace that meets clinical-grade standards.

## The Two-Zone Principle

Your workspace is divided into two strictly separated zones. Material from one zone never crosses to the other.

### Clean Zone (Supply Side)
- Unopened, sealed supplies
- Clean towels and disposable items in their packaging
- Client paperwork (kept physically separate from the procedure area)
- Your reference photos and mapping tools (pre-cleaned)

### Working Zone (Procedure Side)
- Active procedure area where the client is positioned
- Opened, in-use supplies
- Sharps container (within arm's reach without stretching)
- Waste receptacle for non-sharps disposables

**The critical boundary:** There must be a clear physical separation between these zones. This can be a separate cart, a different section of your table, or physically separate surfaces. Items move from the clean zone TO the working zone — never back.

### The One-Way Flow

Think of supply movement like a one-way street:

1. Item sits sealed in the clean zone
2. You open it and bring it into the working zone
3. After use, it goes into the waste/sharps container
4. It NEVER returns to the clean zone

This sounds obvious, but in practice — especially when you're focused on a procedure — it's easy to set a used tool down in the wrong area. Discipline your spatial habits from day one.

## Barrier Application: The Protective Layer

Every surface in the working zone that you might contact during a procedure must be covered with a disposable barrier.

### What Gets Barrier-Wrapped

| Surface | Why | Barrier Type |
|---------|-----|-------------|
| Machine grip and cable | Direct hand contact during stroking | Machine sleeve + cable wrap |
| Spray bottle | You'll pick it up with contaminated gloves | Plastic barrier wrap |
| Lamp/magnifier handle | You'll adjust it during the procedure | Plastic wrap |
| Chair/bed controls | Adjustment during the procedure | Plastic barrier or dedicated foot pedal |
| Phone (if needed for reference) | Touching screen for mapping photos | Phone barrier sleeve |
| Tray/surface where tools rest | Direct contact with contaminated instruments | Disposable tray liner |
| Pigment storage area | Located in working zone | Barrier between pigment cups and surface |

### Barrier Materials

- **Plastic barrier film (adhesive roll)** — professional grade, self-sealing, easy to apply and remove. The gold standard.
- **Plastic cling wrap** — food-grade works in a pinch, but it's harder to apply neatly and may slip during procedures
- **Disposable machine sleeves** — purpose-built covers for specific tool models
- **Disposable tray covers** — pre-cut sheets for flat work surfaces

## The Pre-Procedure Setup: A Starting Ritual

**Complete this BEFORE the client enters the treatment space.** Setting up in front of the client makes you look unprepared and creates opportunities for contamination.

### Pre-Procedure Checklist

1. ☐ All surfaces cleaned with soap and water
2. ☐ All surfaces disinfected with intermediate-level disinfectant (full contact time observed)
3. ☐ Surfaces air-dried completely
4. ☐ Barriers applied to all working zone surfaces and equipment
5. ☐ Disposable supplies laid out (needles, cartridges, cups, applicators) — still sealed
6. ☐ Pigments portioned into single-use cups (using clean technique)
7. ☐ Sharps container positioned within arm's reach
8. ☐ Waste receptacle lined and accessible
9. ☐ Aftercare supplies set aside (to be given to client post-procedure)
10. ☐ Consent forms, intake paperwork, and client file ready (clean zone)
11. ☐ Hands washed, dried, and double-gloved
12. ☐ Final visual scan of workspace — everything barrier-wrapped and organized

**Print this checklist. Laminate it. Keep it visible at your station until it becomes second nature.**

## Post-Procedure Breakdown: Working in Reverse

Breakdown is just as important as setup, and it follows a specific contamination-aware sequence:

### Step 1: Secure Sharps
- Dispose of all needles and blade cartridges in the sharps container immediately
- Never leave sharps exposed while you clean the rest of the station

### Step 2: Remove Barriers
- Remove all barrier materials and place directly into waste bag
- Do NOT set barrier material down on un-barriered surfaces
- Work from the outermost contaminated surface inward

### Step 3: Dispose of All Single-Use Items
- Pigment cups, applicators, cotton rounds, gauze
- Into the lined waste receptacle — seal bag when full

### Step 4: Remove Gloves (Proper Technique)
- Pinch the outer glove at the wrist and peel away, turning it inside out
- Hold the removed glove in the still-gloved hand
- Slide fingers under the remaining glove and peel it over the first glove
- Both gloves are now inside-out and contained — discard

### Step 5: Wash Hands
- 20-second antimicrobial scrub after removing gloves

### Step 6: Clean and Disinfect
- Wash all exposed surfaces with soap and water
- Apply EPA-registered disinfectant
- Allow full contact time before wiping

### Step 7: Restock
- Replace used supplies from your clean storage
- Ensure your station is fully prepared for the next setup

> **The professional standard:** A properly broken-down and reset station takes 15-20 minutes between clients. If you're trying to turn clients faster than this, you're cutting safety corners. Build this time into your scheduling — your clients deserve it, and your license depends on it.`,
        },
        {
            id: 'mod1-lesson4',
            slug: 'bloodborne-pathogen-awareness',
            title: 'Bloodborne Pathogen Awareness',
            type: 'reading',
            durationMinutes: 40,
            order: 4,
            keyPoints: [
                'OSHA\'s Bloodborne Pathogen Standard (29 CFR 1910.1030) governs your practice',
                'Hepatitis B can survive on dry surfaces for up to 7 days — it is the most resilient threat',
                'The Hepatitis B vaccine series is non-negotiable for professional PMU artists',
                'A written Exposure Control Plan must be accessible in your studio at all times',
                'Proper exposure incident response within the first 2 hours is medically critical',
            ],
            content: `# Bloodborne Pathogen Awareness

This is the most important lesson in your entire training. Every other skill you develop — every beautiful brow, every perfect stroke — is meaningless if you fail to protect yourself and your clients from bloodborne pathogen exposure. This lesson is not theoretical. The pathogens discussed here are real, they are present in your community, and your daily practice creates direct exposure pathways.

## What Are Bloodborne Pathogens?

Bloodborne pathogens (BBPs) are infectious microorganisms carried in human blood and certain body fluids that can cause disease. In the context of PMU, the primary concerns are:

### Hepatitis B Virus (HBV) — The #1 Threat

HBV is the single greatest occupational hazard for PMU professionals. Here's why:

- **Extreme resilience:** HBV can survive on dry surfaces, tools, and environmental surfaces for **up to 7 days** in dried blood. A tiny droplet of blood on your workstation from Tuesday can still transmit infection on the following Monday.
- **High infectivity:** HBV is 50-100 times more infectious than HIV. A single needlestick exposure carries a 6-30% transmission risk.
- **Chronic carrier state:** Approximately 5% of adults who contract HBV become chronic carriers, capable of transmitting the virus for life.
- **Vaccine available:** The Hepatitis B vaccine is highly effective (95%+ protection) and readily available.

### Hepatitis C Virus (HCV)

- **No vaccine exists** — prevention relies entirely on your protocols
- Can survive on surfaces for **up to 3 weeks** under favorable conditions
- Primary transmission route: blood-to-blood contact
- Needlestick transmission risk: approximately 1.8% per exposure
- Many carriers are asymptomatic and unaware they are infected
- Modern antiviral treatments can cure most HCV infections, but treatment costs $80,000+

### Human Immunodeficiency Virus (HIV)

- Least resilient of the three — survives only briefly outside the body
- Needlestick transmission risk: approximately 0.3% per exposure
- Universal precautions designed for HBV automatically protect against HIV
- While treatment has advanced dramatically, there is still no cure

## The Universal Precautions Doctrine

The foundational principle of BBP safety is deceptively simple:

**Treat ALL blood and body fluids as if they are infectious. Always. Without exception.**

This means:
- You do not ask clients about their BBP status to determine your PPE level
- You do not relax protocols for "low-risk" clients
- You do not adjust your procedures based on assumptions about who might or might not carry a BBP
- Every client receives the same full protocol, every time

### Why Universal?

Because you cannot determine BBP status by appearance, lifestyle, or demographics. Many carriers are asymptomatic. Many have never been tested. The artist who decides a client "looks healthy" and cuts a corner is the one who gets exposed. Universal precautions remove judgment from the equation — you're always protected.

## Transmission Pathways in PMU

Understanding exactly HOW transmission can occur in your practice helps you prevent it:

### Direct Pathways
- **Needlestick injury** — accidentally puncturing your own skin with a contaminated needle
- **Mucosal splash** — contaminated fluid reaching your eyes, nose, or mouth
- **Non-intact skin contact** — blood contacting a cut, hangnail, or skin condition on your hands

### Indirect Pathways
- **Contaminated surface → client contact** — blood residue on a surface that wasn't properly disinfected between clients
- **Cross-contamination through shared supplies** — dipping back into a pigment bottle, reusing a cup, sharing supplies between clients
- **Contaminated instruments** — improperly sterilized or non-disposable tools

## The Exposure Control Plan (ECP)

OSHA requires every studio that performs skin-penetrating procedures to maintain a written Exposure Control Plan. This document must be:

- **Physically present** in your studio (not just on your computer)
- **Updated annually** or whenever procedures change
- **Accessible to all employees** and available for inspector review

### Your ECP Must Include:
1. Exposure determination — which job tasks create exposure risk
2. Methods of compliance — your specific PPE, engineering controls, and work practices
3. Hepatitis B vaccination policy and records
4. Post-exposure evaluation procedures
5. Hazard communication and training records
6. Sharps injury log (required if you have employees)
7. Recordkeeping procedures

## Exposure Incident Response

If a needlestick, splash, or other potential BBP exposure occurs, your response in the first two hours is medically critical.

### The Immediate Response Protocol

**Step 1: First Aid (Seconds 1-60)**
- Needlestick/cut: Wash immediately with soap and water — do NOT squeeze or "milk" the wound
- Eye splash: Flush with clean water or saline for 15 minutes
- Mouth splash: Rinse with water, spit, repeat

**Step 2: Report and Document (Minutes 1-15)**
- Note the exact time of exposure
- Identify the source (client information, if available)
- Record the type of exposure (needlestick, splash, etc.)
- Record the body fluid involved and entry point

**Step 3: Medical Evaluation (Within 2 Hours)**
- Go to an emergency room or occupational health clinic
- Post-exposure prophylaxis (PEP) for HIV must begin within 72 hours but is most effective within 2 hours
- HBV immune globulin may be recommended if you are unvaccinated
- Baseline blood testing will be performed

**Step 4: Follow-Up Testing**
- Follow the testing schedule prescribed by the treating physician
- Typical follow-up: 6 weeks, 3 months, 6 months post-exposure
- Maintain confidentiality — exposure incident records are private medical information

## Hepatitis B Vaccination: Your Professional Obligation

The Hepatitis B vaccine is a three-dose series that provides 95%+ protection for at least 20 years (likely lifetime).

**Dose schedule:**
- Dose 1: Day 0 (initial)
- Dose 2: 1 month after Dose 1
- Dose 3: 6 months after Dose 1

**After completion:** Request a titer test (anti-HBs) to confirm immunity. You are considered immune with an anti-HBs level ≥10 mIU/mL.

**Keep your vaccination records in your professional file.** Many jurisdictions require proof of HBV vaccination or declination for licensure. As an Inked Academy student, we strongly recommend completing your vaccine series before beginning any live model work.

> **This is not optional knowledge.** The information in this lesson protects your life, your clients' lives, and your career. Review it again. Know the exposure response protocol by heart. Keep your ECP accessible. Get vaccinated. These are the non-negotiable foundations of being a professional who deserves client trust.`,
        },
    ],
};

export default mod01;
