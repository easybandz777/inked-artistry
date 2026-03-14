import type { CurriculumModule } from '@/lib/types';

const mod02: CurriculumModule = {
    number: 2,
    slug: 'client-consultation-contraindications',
    title: 'Client Consultation & Contraindications',
    description: 'Conducting thorough intake assessments, identifying absolute and relative contraindications, managing client expectations with empathy, and building legally protective documentation practices.',
    topics: ['Medical history review', 'Skin assessment', 'Expectation setting', 'Consent documentation'],
    estimatedHours: 4,
    lessons: [
        {
            id: 'mod2-lesson1',
            slug: 'the-intake-process',
            title: 'The Intake Process',
            type: 'reading',
            durationMinutes: 35,
            order: 1,
            keyPoints: [
                'The intake form is a legal document — it must be thorough, signed, and stored securely',
                'Medical history questions must be specific, not vague — "any health conditions?" is not sufficient',
                'The consultation sets the entire tone of the client relationship',
                'Active listening during intake reveals information that forms alone miss',
                'A rushed consultation leads to misaligned expectations and client dissatisfaction',
            ],
            content: `# The Intake Process

The consultation is not a formality — it is the most strategically important interaction you will have with every client. It is where you gather the medical information that determines whether you can safely proceed. It is where you set expectations that prevent disappointment. It is where you build the trust that transforms a one-time appointment into a long-term client relationship. And it is where you create the legal documentation that protects you if anything goes wrong.

## Why The Consultation Comes Before Everything

Many new artists think of the consultation as a speed bump before the "real work" begins. This mindset is dangerous. The consultation IS the real work. A flawless microblading technique means nothing if:
- You perform it on a client who is on blood thinners (excessive bleeding, poor retention)
- The client expected defined Instagram brows but your style is natural and soft
- The client has a history of keloid scarring that you didn't ask about
- Six months later, a dissatisfied client claims they weren't told what to expect — and you have no signed documentation

## The Professional Intake Form

Your intake form is a medical and legal document. It should be comprehensive, clearly written, and designed so that clients take it seriously.

### Demographic Information
- Full legal name
- Date of birth
- Phone number and email
- Emergency contact (yes, this is appropriate — you're performing a medical-adjacent procedure)

### Medical History: The Critical Questions

These are the specific questions you must ask. Generic questions like "do you have any medical conditions?" invite generic answers like "no." Be specific:

**Skin-Related:**
- Do you have a history of keloid or hypertrophic scarring?
- Have you ever had a cold sore or oral herpes outbreak?
- Do you have active eczema, psoriasis, or dermatitis in the treatment area?
- Have you had any cosmetic treatments in the area in the past 6 months? (Botox, fillers, chemical peels, laser treatments)
- Do you use retinol, tretinoin, or prescription acne medications?

**Systemic:**
- Are you currently taking any blood-thinning medications? (Aspirin, Warfarin, Eliquis, fish oil supplements, Vitamin E)
- Do you have diabetes? If so, is it well-controlled?
- Are you currently pregnant or breastfeeding?
- Do you have any autoimmune conditions? (Lupus, rheumatoid arthritis, Hashimoto's)
- Have you had an organ transplant or are you on immunosuppressive medication?
- Do you have a bleeding disorder?

**Allergies:**
- Are you allergic to any topical anesthetics (lidocaine, prilocaine, tetracaine)?
- Do you have any known allergies to pigments, dyes, or metals?
- Are you allergic to latex? (You use nitrile, but you need to know)

**Lifestyle:**
- Do you drink alcohol heavily? (Affects bleeding and healing)
- Do you tan frequently or use tanning beds? (Affects pigment retention)
- Are you currently undergoing chemotherapy or radiation? (Absolute contraindication)

### Why Specificity Matters

Compare these two approaches:

**Weak:** "Do you have any health conditions?"
**Client thinks:** "Nothing major" → Doesn't mention the Accutane they stopped 3 months ago → poor healing, scarring risk

**Strong:** "Are you currently using or have you used in the past 12 months any retinol, tretinoin, Accutane, or prescription acne medication?"
**Client thinks:** "Oh yes, I was on Accutane until November" → You now have critical information

Specific questions get specific answers. Vague questions get "no."

## The In-Person Assessment

After reviewing the written intake, conduct a face-to-face conversation:

### What to Look For
- Does the client seem nervous? Address their concerns directly.
- Are they showing you reference photos? Discuss realistic expectations vs. the photos.
- Is there existing PMU work? Ask about their experience — satisfaction, healing issues, what they'd change.
- Skin condition in the treatment area: redness, dryness, active breakouts, visible scarring.

### What to Listen For
- Unrealistic expectations ("I want it to look exactly like this Instagram photo")
- Pressure from someone else ("My boyfriend thinks I should get this done")
- Decision uncertainty ("I'm not sure if I really want this")
- History of frequent cosmetic procedures (may indicate body dysmorphia — proceed with sensitivity)

### Red Flags That Require a Pause
- Client cannot articulate what they want
- Client is visibly intoxicated or impaired
- Client is under 18 without parental consent (check your state laws)
- Client is hostile or aggressive toward staff
- Client's expectations cannot be reasonably met

> **The hardest skill in consultation is saying "not today."** If something doesn't feel right — the client's health history, their expectations, their emotional state — it is always better to reschedule than to proceed and regret it. Your professional judgment is your most valuable tool.`,
        },
        {
            id: 'mod2-lesson2',
            slug: 'identifying-contraindications',
            title: 'Identifying Contraindications',
            type: 'reading',
            durationMinutes: 35,
            order: 2,
            keyPoints: [
                'Absolute contraindications mean DO NOT PROCEED under any circumstances',
                'Relative contraindications require physician clearance or modified approach',
                'Medications are the most commonly overlooked contraindication category',
                'When in doubt, require a signed physician clearance letter',
                'Proceeding despite a known contraindication creates catastrophic legal liability',
            ],
            content: `# Identifying Contraindications

A contraindication is any condition, medication, or circumstance that makes a PMU procedure inadvisable or dangerous. Your ability to identify contraindications accurately is what separates a safe practitioner from a dangerous one. This is not about being overly cautious — it's about making informed clinical decisions that protect your client and your practice.

## Absolute Contraindications — Do Not Proceed

These conditions are non-negotiable. If any of these are present, you do not perform the procedure. Period. No exceptions, no physician clearance overrides.

### Active Conditions
- **Active skin infection in the treatment area** — bacterial, viral, or fungal
- **Active cold sore or herpes outbreak** (HSV-1) — proceeding can spread the virus across the entire treatment area, causing a massive outbreak
- **Active chemotherapy or radiation therapy** — severely compromised immune system and wound healing
- **Current pregnancy** — no conclusive safety data exists; the precautionary principle applies
- **Intoxication** — cannot provide informed consent; skin physiology is altered

### Systemic Conditions
- **Hemophilia or severe bleeding disorders** — uncontrollable bleeding makes the procedure dangerous and ineffective
- **Active organ rejection or transplant immunosuppression** — extreme infection risk
- **Uncontrolled diabetes** (A1C > 9%) — severely impaired wound healing, extreme infection risk

### Skin Conditions
- **Active keloid formation in the treatment area** — PMU will likely trigger additional keloid growth
- **Sunburn in the treatment area** — damaged, inflamed skin cannot hold pigment properly

## Relative Contraindications — Proceed with Caution & Clearance

These conditions don't automatically prevent the procedure but require additional assessment, physician clearance, or protocol modifications.

### Medications

| Medication | Concern | Required Action |
|-----------|---------|-----------------|
| Accutane (isotretinoin) | Severely thins the skin for 12+ months after discontinuation | Must be off Accutane for minimum 12 months before PMU |
| Blood thinners (Warfarin, Eliquis, Xarelto) | Excessive bleeding, poor pigment retention | Physician clearance required; do NOT advise stopping medication |
| Aspirin / NSAIDs (daily use) | Increased bleeding | Advise stopping 72 hours prior (if physician approves) |
| Retinol / Tretinoin (topical) | Thinned, sensitized skin in application area | Discontinue in treatment area 30 days before procedure |
| Immunosuppressants | Increased infection risk, impaired healing | Physician clearance required |
| Antidepressants (certain SSRIs) | Some affect bleeding time and skin sensitivity | Note and monitor; typically okay to proceed |

**Critical rule:** NEVER tell a client to stop a prescribed medication without their physician's approval. You may request that they discuss timing with their doctor, but you do not prescribe or deprescribe.

### Health Conditions

- **Controlled diabetes** (A1C < 7-8%) — can proceed with physician clearance and modified aftercare
- **Autoimmune conditions** (lupus, RA, Hashimoto's) — healing may be unpredictable; physician clearance recommended
- **History of cold sores** (HSV-1) — for lip procedures, antiviral prophylaxis (Valacyclovir) must be prescribed by their physician, started 2 days before and continued 5 days after the procedure
- **Epilepsy** — can proceed if well-controlled; ensure you know their seizure response plan
- **Heart conditions / pacemaker** — generally okay for manual tools; some concerns with certain electronic devices
- **Breastfeeding** — controversial; many artists proceed, others defer. There is no conclusive research. Discuss with the client and document their informed decision.

### Cosmetic History
- **Botox in the treatment area** — wait minimum 2 weeks after injection (forehead Botox affects brow position)
- **Dermal fillers in the treatment area** — wait minimum 4 weeks
- **Chemical peels** — wait minimum 4 weeks for superficial peels, 8+ weeks for medium/deep
- **Laser treatments** — wait minimum 6-8 weeks depending on treatment intensity
- **Previous PMU work** — assess old pigment color and saturation before planning approach

## The Gray Areas

Some situations fall between clear categories. In these cases:

### When You're Unsure
1. Document the condition on the intake form
2. Explain to the client that you want to verify safety with their physician
3. Provide a physician clearance letter template (keep these pre-printed)
4. Reschedule the appointment for after clearance is obtained
5. File the clearance letter in the client's permanent record

### The Physician Clearance Letter

Your clearance letter should:
- Briefly describe the procedure (skin penetration with pigment deposit, needle depth, healing time)
- State the specific condition you're concerned about
- Ask the physician to confirm whether the client is cleared for the procedure
- Include your contact information for physician questions
- Require the physician's signature, date, and practice stamp

> **The legal protection:** If you proceed with a known contraindication and a complication occurs, you bear enormous liability. If you obtained a signed physician clearance and followed modified protocols, you have documentation that you exercised professional due diligence. This documentation can be the difference between a defensible position and a devastating lawsuit.`,
        },
        {
            id: 'mod2-lesson3',
            slug: 'managing-client-expectations',
            title: 'Managing Client Expectations',
            type: 'reading',
            durationMinutes: 30,
            order: 3,
            keyPoints: [
                'The #1 cause of client dissatisfaction is misaligned expectations, not poor technique',
                'Clients base their expectations on heavily filtered, professionally lit Instagram photos',
                'Show your own healed work, not fresh work — fresh results mislead',
                'Explain the full timeline: fresh → peeling → ghosting → healed → touch-up',
                'Document that expectations were discussed — verbal agreements are legally worthless',
            ],
            content: `# Managing Client Expectations

The vast majority of PMU client dissatisfaction comes not from a poorly executed procedure, but from a gap between what the client expected and what they received. This gap is almost always the artist's responsibility to prevent. Expectation management is a skill — one that requires deliberate communication, visual aids, and documentation.

## The Expectation Gap: Where It Comes From

### Social Media Distortion
Your clients arrive with expectations shaped by:
- **Heavily filtered before/after photos** — smooth skin, perfect lighting, color enhancement
- **Fresh procedure photos only** — immediately post-procedure, brows are dark and defined
- **One specific artist's style** — the client may want something you don't specialize in
- **Celebrity endorsements** — public figures who have access to the world's top artists and lighting teams

### The Reality
- Healed results are typically **30-40% lighter and softer** than fresh work
- Every person's skin retains pigment differently
- The first session is conservative — the touch-up perfects it
- No two faces are identical, so identical results from different clients aren't possible

## The Expectation Conversation: What to Cover

### 1. The Healing Timeline

Walk the client through every phase with honest language:

**Day 0-2 (Fresh):**
"Your brows will look darker and more defined than the final result. This is completely normal. You may experience mild swelling, especially the morning after."

**Days 3-7 (Peeling):**
"The surface will begin to flake and peel. The color underneath will look very light — sometimes almost invisible. Do not panic. This is the ghosting phase, and the color will return."

**Days 7-14 (Ghosting):**
"Your brows may appear significantly lighter than you expected. This is temporary. The pigment is still in your skin — it's just settling below the healed epidermis."

**Weeks 4-6 (True Color Emergence):**
"The final color and definition emerge now. This is when you can truly evaluate the results."

**Weeks 6-8 (Touch-Up Window):**
"The touch-up appointment is where we perfect the work. It's part of the process, not a correction."

### 2. Fresh vs. Healed: Show the Difference

Always show the client photos of BOTH fresh and healed results:
- "This is what it will look like when you leave today"
- "This is what it will look like in 6 weeks"
- Let them see the difference so they're not surprised during the healing process

### 3. Skin Type Conversation

Explain how their specific skin type will affect results:
- **Oily skin:** Strokes may spread slightly during healing; may need more frequent touch-ups
- **Dry skin:** Typically holds strokes well; may flake more dramatically during healing
- **Mature skin:** Thinner skin requires lighter technique; results can be beautiful but more delicate
- **Sensitive skin:** May experience more redness and swelling initially

### 4. Pain and Discomfort

Be honest about sensation:
- "Most clients describe it as mild scratching — uncomfortable but not painful"
- "Topical numbing is applied during the procedure to maximize comfort"
- "Everyone's pain tolerance is different — if you need a break, say so"

Never promise "painless" procedures. If a client expects zero discomfort and feels anything at all, you've already disappointed them.

### 5. What PMU Cannot Do

Address common misconceptions directly:
- PMU cannot replicate the look of filled-in makeup brows exactly
- Results will soften and fade over time — this is by design
- Symmetry will be improved but faces are naturally asymmetric
- If the client has very sparse natural brows, the PMU strokes will be visible as individual marks until natural hair provides additional coverage

## The Reference Photo Conversation

When a client shows you an inspiration photo:

**Do:**
- Acknowledge what they like about it ("You love that soft arch and the natural tapering")
- Explain how you can achieve a similar feeling on their specific face
- Show your own work that captures a similar aesthetic

**Don't:**
- Promise identical results to the photo
- Dismiss the photo ("That's completely unrealistic")
- Agree to something you can't deliver just to make the sale

**Say this:** "I love this inspiration. Let me show you what a similar style looks like on faces with your bone structure and skin type. I'll map a design on you that captures the same feeling, and you can see it before we start."

## Documenting the Conversation

Verbal conversations are legally unenforceable. You need documented proof that expectations were discussed:

- Your consent form should include a section stating that the client understands the healing timeline, expected variance, and the need for a touch-up
- Note specific discussions on the client file: "Discussed that healed results will be approximately 30% softer than day-of appearance. Client acknowledged."
- If the client has very specific expectations, note what was promised and what was not

> **The uncomfortable truth:** Some clients should be declined. If after thorough conversation, the client's expectations remain unrealistic — if they insist on identical Instagram brows, if they cannot accept that healing involves a process, if they seem like they will be dissatisfied with anything less than perfection — it is better to decline graciously than to accept a client who will be unhappy no matter what. Protect your reputation.`,
        },
        {
            id: 'mod2-lesson4',
            slug: 'consent-and-documentation',
            title: 'Consent & Documentation',
            type: 'reading',
            durationMinutes: 30,
            order: 4,
            keyPoints: [
                'Informed consent requires the client to understand risks, alternatives, and limitations',
                'Consent forms must be reviewed with the client — not just signed blindly',
                'All client records must be stored securely and retained for a minimum of 7 years',
                'Photography consent is separate from procedure consent',
                'Minors require parental/guardian consent — check your state\'s specific age requirements',
            ],
            content: `# Consent & Documentation

Documentation is the backbone of a legally protected, professionally operated PMU practice. The forms you create, the records you maintain, and the consent you obtain are not bureaucratic formalities — they are the evidence that proves you practiced responsibly if any dispute, complication, or legal challenge ever arises.

## Informed Consent: More Than a Signature

Informed consent is a legal and ethical concept that requires three elements:

### 1. Disclosure
You must explain:
- The nature of the procedure (what you're doing and how)
- The risks involved (infection, allergic reaction, dissatisfaction, scarring, color change)
- The alternatives (traditional cosmetics, other PMU techniques, doing nothing)
- The expected outcomes and limitations
- The aftercare requirements and their importance to results

### 2. Understanding
The client must demonstrate that they understand what was disclosed. This means:
- Presenting information in clear, non-technical language
- Allowing time for questions
- Verifying understanding: "Do you have any questions about what we discussed?"
- Providing written information they can refer to later

### 3. Voluntariness
The client's consent must be given freely, without pressure or coercion. Watch for:
- Clients being pressured by a companion ("My mom wants me to get this done")
- Financial pressure ("I already paid, so I have to go through with it")
- Time pressure ("I'm getting married tomorrow, I have to do this now")

If any of these are present, pause and address them directly.

## The Comprehensive Consent Form

Your consent form should include:

### Section 1: Procedure Description
- What will be done (PMU procedure, specific type)
- The area being treated
- Number of sessions expected (initial + touch-up)
- Approximate duration of each session

### Section 2: Risk Disclosure
- Infection (rare with proper protocols)
- Allergic reaction to pigments or topical anesthetics
- Asymmetry or unsatisfactory aesthetic results
- Color change, fading, or migration over time
- Scarring (rare, primarily in predisposed individuals)
- Need for touch-up or correction procedures
- Long-term commitment — PMU is semi-permanent and may require professional removal if unwanted

### Section 3: Pre-Procedure Confirmations
The client confirms in writing:
- "I have disclosed my complete medical history truthfully"
- "I am not currently pregnant or breastfeeding" (or: "I am breastfeeding and have been informed of the limited data available")
- "I understand that results will vary from reference photos"
- "I understand the healing process, including temporary darkening, peeling, and ghosting"
- "I understand that a touch-up appointment is part of the process"
- "I have not consumed alcohol in the past 24 hours"
- "I have followed all pre-procedure instructions"

### Section 4: Financial Terms
- Total cost and payment terms
- Touch-up included or additional fee
- Cancellation and refund policy
- What happens if additional sessions are needed

### Section 5: Photography Consent (Separate)
- Permission to photograph before, during, and after the procedure
- Permission to use photos for marketing purposes
- Option for anonymity (face cropped, eyes covered)
- Right to revoke consent for marketing use at any time

### Section 6: Signatures
- Client signature and printed name
- Date
- Witness signature (recommended but not always legally required)
- Artist/practitioner signature

## Record Retention and Security

### How Long to Keep Records
- **Minimum 7 years** from the date of last service (check your state — some require longer)
- Indefinite retention is best practice for digital records (storage is cheap)
- Include: signed consent forms, intake forms, procedure notes, photos, correspondence

### Secure Storage Requirements
- **Paper records:** Locked filing cabinet in a secure location
- **Digital records:** Password-protected storage with backup (cloud + local)
- **HIPAA-adjacent compliance:** While PMU studios aren't technically covered entities under HIPAA, following HIPAA-level privacy practices protects you and demonstrates professionalism
- Never share client records, photos, or information without written consent

### What to Document for Each Appointment

Create a procedure record for every session:
- Date and time
- Client name and file reference
- Procedure performed
- Pigments used (brand, shade, lot number, any custom mixing notes)
- Needle/cartridge configuration used
- Numbing products applied
- Any complications, unusual findings, or deviations from standard protocol
- Before/after photos (date-stamped)
- Aftercare instructions provided (note whether verbal, written, or both)
- Follow-up appointment scheduled

## When Documentation Saves You

**Scenario 1:** A client claims 6 months later that they "were never told about healing" and demands a full refund. Your signed consent form with the healing timeline acknowledgment section proves otherwise.

**Scenario 2:** A client develops an allergic reaction. Your procedure notes document the exact pigment brand, shade, and lot number — enabling medical professionals to identify the allergen and enabling you to report the reaction to the manufacturer.

**Scenario 3:** A health department inspector reviews your records during a routine visit. Your organized, complete files demonstrate compliance and professionalism.

**Scenario 4:** You are named in a liability claim. Your documentation of intake, contraindication screening, informed consent, proper technique, and aftercare guidance creates a defensible position.

> **If it isn't documented, it didn't happen.** This is a legal reality. Your word against a client's word, without documentation, is a fight you will lose. Invest the time in thorough documentation. Your future self — and your attorney — will thank you.`,
        },
    ],
};

export default mod02;
