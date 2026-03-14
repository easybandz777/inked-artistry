import type { CurriculumModule } from '@/lib/types';

const mod04: CurriculumModule = {
    number: 4,
    slug: 'brow-mapping-design',
    title: 'Brow Mapping & Design',
    description: 'Mastering facial symmetry analysis, golden ratio principles, brow architecture, and creating custom designs that enhance each client\'s unique facial geometry.',
    topics: ['Measurement techniques', 'Golden ratio application', 'Shape customization', 'Client face analysis'],
    estimatedHours: 5,
    lessons: [
        {
            id: 'mod4-lesson1', slug: 'facial-symmetry-and-landmarks', title: 'Facial Symmetry & Landmarks',
            type: 'reading', durationMinutes: 35, order: 1,
            keyPoints: [
                'No human face is perfectly symmetrical — the goal is balance, not mathematical perfection',
                'There are 7 primary facial landmarks that anchor every brow design',
                'Asymmetry assessment must happen with the client upright, never lying down',
                'Documenting existing asymmetries before the procedure protects you from post-procedure complaints',
                'The "flip test" (mirroring a photo) reveals asymmetries your adapted eye misses',
            ],
            content: `# Facial Symmetry & Landmarks

Before you can design a beautiful brow, you must learn to read the face beneath it. Every face is a unique landscape of bone structure, muscle patterns, and skin characteristics — and your job is to place brows that look as though they grew there naturally. This starts with understanding symmetry: not as a mathematical ideal, but as a practical art.

## The Symmetry Paradox

In academic settings, you'll hear that the "most attractive" faces are the most symmetrical. This is true in aggregate research — but in your treatment room, it creates a dangerous trap. If you try to impose perfect mathematical symmetry on a naturally asymmetric face, you will create brows that look wrong.

Here's why: humans subconsciously recognize and accept their own asymmetry. A client's left eye may sit slightly higher than the right. Their smile may pull more to one side. Their brow bone may be more prominent on one side. These variations are part of what makes them look like *themselves.* Brows that ignore these variations — that impose rigid symmetry — look artificial and unsettling.

**Your goal is always harmonious balance, not identical twins.**

### The Professional Language

When discussing asymmetry with clients:
- **Do say:** "I'm customizing each side to work with your natural bone structure"
- **Don't say:** "Your face is asymmetric" (even though it's true — clients hear this as criticism)
- **Do say:** "Brows are sisters, not twins — they should look related and balanced"
- **Don't say:** "I can't make them perfectly even" (sounds like an excuse for imprecision)

## The 7 Primary Facial Landmarks

These are the anatomical reference points you'll use for every single brow design throughout your career. Memorize them. Practice finding them with your eyes closed (on a mannequin). Make them second nature.

### Eye Landmarks
1. **Inner canthus** — the inner corner where the upper and lower eyelids meet at the nose
2. **Pupil center** — the center of the pupil when the client looks straight ahead at a fixed point
3. **Outer iris edge** — the lateral border of the iris (not the pupil, not the white — the iris)
4. **Outer canthus** — the outer corner where the eyelids meet at the temple

### Nose Landmarks
5. **Alar crease** — the point where the wing of the nostril meets the cheek
6. **Bridge midpoint** — the center of the nasal bridge between the eyes

### Brow Landmarks
7. **Brow bone apex** — the most prominent point of the orbital bone above each eye (feel this with your fingertip — it's the bony ridge)

## The Three-Point System: Foundations

The classic three-point system gives you the starting coordinates for every brow. These are not gospel — they are a starting framework that you will then adjust based on the individual face.

### Point 1: Brow Head (Where the Brow Begins)

**Method:** Hold a straight reference (mapping string, ruler, or pencil) vertically from the alar crease, passing alongside the inner canthus. Where this line intersects the brow ridge is the head position.

**Variation by face width:**
- Narrow face / close-set eyes → move the head slightly outward (to "open" the face)
- Wide face / wide-set eyes → keep head closer to the inner canthus (to visually narrow the face)

**Common mistakes:**
- Starting too far medially (toward the nose) → creates an angry, intense expression
- Starting too far laterally → shortens the brow, makes the face look wider

### Point 2: Arch (The Highest Point)

**Method:** Align from the alar crease through the outer edge of the iris (not the pupil center). Where this line meets the brow ridge is the arch position.

**Why the iris edge, not the pupil?** The older method used the pupil center, which places the arch too medially for most modern brow aesthetics. The iris-edge method creates a more natural, slightly lateral arch that opens the eye.

**Variation by preference:**
- Higher arch → more dramatic, defined look (good for round faces)
- Lower, softer arch → more natural, relaxed look (good for long faces)

**Common mistakes:**
- Arch too high → surprised expression
- Arch too medial → droopy, sad appearance
- Arch too lateral → unnatural angularity

### Point 3: Tail (Where the Brow Ends)

**Method:** Align from the alar crease through the outer canthus. The tail ends where this line meets the brow ridge.

**The critical rule:** The tail should NEVER drop below the head. If it does, the brow creates a visual downward pull that makes the client look tired or sad. The tail should end at the same horizontal level as the head, or very slightly above.

**Common mistakes:**
- Tail too short → face appears wider, brow looks unfinished
- Tail too long → drags the eye downward, creates a drooping effect
- Tail drops below head → tired, aged appearance

| Point | Alignment Reference | Adjustable Range | Critical Error |
|-------|-------------------|-----------------|----------------|
| Head | Alar crease → inner canthus | ±2mm based on eye spacing | >3mm off = angry or short look |
| Arch | Alar crease → outer iris edge | Height adjustable by 1-3mm | Arch below midpoint = droopy brow |
| Tail | Alar crease → outer canthus | Length adjustable ±3mm | Tail below head line = aged look |

## The Full Assessment Protocol

1. **Client position:** Seated upright, back straight, chin level. Never assess lying down — gravity redistributes facial tissue and creates false measurements.
2. **Your position:** Standing directly in front at the client's eye level. Not above, not below — eye level.
3. **Client expression:** Completely relaxed. No smiling, no furrowing, no eyebrow raising. Have them take a deep breath and let everything go.
4. **Lighting:** Even, from both sides. Side shadows create illusions of asymmetry.
5. **Document asymmetries:** Before mapping, photograph from directly in front. Note which eye sits higher, whether the brow bones are even, whether the hairline is symmetric. Point these out to the client (gently) and explain how your design accommodates them.
6. **The flip test:** Take a photo of the client from directly in front. Flip it horizontally. Suddenly, asymmetries become glaringly obvious that your adapted eye was filtering out. Use this to inform your design.

> **Why document before you start:** If a client later says "my brows aren't even," you can reference the pre-procedure photos and notes showing that you identified and designed around existing facial asymmetry. This documentation protects you and educates the client.`,
        },
        {
            id: 'mod4-lesson2', slug: 'golden-ratio-brow-mapping', title: 'Golden Ratio Brow Mapping',
            type: 'reading', durationMinutes: 35, order: 2,
            keyPoints: [
                'The golden ratio (1:1.618) provides a mathematical framework, not an absolute rule',
                'Calipers speed up measurement but must be verified by your trained eye',
                'The ratio governs both horizontal proportions and vertical thickness relationships',
                'The most beautiful brows break the ratio slightly to match the individual face',
                'Ratio tools are a starting point — artistic judgment is the finishing point',
            ],
            content: `# Golden Ratio Brow Mapping

The golden ratio (phi, φ = 1.618) has defined aesthetic harmony in art and architecture for millennia — from the Parthenon to Da Vinci's Vitruvian Man. In brow design, it provides a mathematical framework for creating proportions that the human brain instinctively perceives as balanced and beautiful. But like all frameworks, its power comes from knowing when to apply it strictly and when to break it deliberately.

## Understanding Phi in Practical Terms

Forget the math textbook definition. In brow design, phi means one thing: **the ratio between the longer section and the shorter section equals the ratio between the whole and the longer section.**

### Applied to Brow Proportions

**Horizontal:**
- Total brow length : Head-to-arch length = 1.618 : 1
- This means the arch sits roughly 62% of the way from the head to the tail
- Practically: if the total brow is 6.5cm, the head-to-arch distance is approximately 4cm, and the arch-to-tail is approximately 2.5cm

**Vertical:**
- Brow thickness at the head : Brow thickness at the body ≈ 1.618 : 1
- The head is the widest part; the body is slightly narrower
- The tail tapers to approximately 40% of the head thickness

**Arch geometry:**
- The height of the arch above the straight line from head to tail relates to the body thickness by phi
- This creates a lift that feels natural rather than extreme

## Using Golden Ratio Calipers

Calipers are a specialized measuring tool with three articulating points that maintain the golden ratio automatically. When you adjust one point, the others move proportionally.

### How to Use Them

**Step 1: Horizontal Placement**
- Place one outer point at the proposed brow head
- Extend the calipers until the other outer point sits at the proposed tail
- The center point should fall near your intended arch location
- If it doesn't, adjust either the head or tail position until the center point aligns

**Step 2: Vertical Placement**
- Rotate calipers to vertical orientation
- Use to verify head thickness vs. body thickness proportions
- Verify arch height vs. body thickness

**Step 3: Cross-Comparison**
- Take the same measurement on both sides
- Verify that caliper readings are equal (or intentionally offset to accommodate asymmetry)

### Caliper Limitations
- Calipers measure in two dimensions; faces are three-dimensional
- Brow bone curvature affects how measurements translate to visible design
- Client movement between measurements introduces error
- The tool gives you a starting point — your eye makes the final call

## The Complete Mapping Sequence

### Step 1: Establish the Center Line
Using mapping string or a flexible ruler, draw a vertical reference line from the center of the forehead down through the bridge of the nose. This is your primary symmetry axis. All measurements reference back to this line.

### Step 2: Mark Brow Heads
Using the three-point method (alar crease alignment), mark both brow heads. Measure each head's distance from the center line — they should be equidistant. If they aren't, adjust by splitting the difference.

### Step 3: Mark Arch Points
Using the iris-edge method, mark both arch points. Again, verify equidistance from the center line. The arch should be the highest point of the brow design.

### Step 4: Mark Tail Points
Using the alar-to-outer-canthus line, mark both tails. Verify that neither tail drops below its corresponding head horizontally.

### Step 5: Apply Calipers
Check the head/arch/tail positions against the golden ratio. Adjust any point that falls outside the ratio by more than 2mm.

### Step 6: Draw the Top Border
Connect head, arch, and tail with a smooth, flowing line. This is the most architecturally important line — it defines the brow shape. Use light, removable marking pencil.

### Step 7: Draw the Bottom Border
Define thickness at the head, body, and tail according to the proportional guidelines. Connect with a smooth line. The bottom border defines the brow's weight and impact.

### Step 8: Step Back and Assess
Step back 3-4 feet. Look at both brows together, not individually. Ask yourself:
- Do they look balanced from a distance?
- Does either one look heavier, higher, or longer?
- Would a stranger notice asymmetry, or just the artist who drew them?

### Step 9: Client Approval
Show the client the design:
- Give them a mirror
- Photograph from directly in front and show them on your phone
- Ask: "How does this feel? Is there anything you want adjusted?"
- Make changes based on their feedback
- Get explicit verbal approval before beginning the procedure

### Step 10: Document the Final Design
Photograph the approved design from at least two angles before you start. If a dispute ever arises about the agreed-upon shape, this photograph is your evidence.

## When to Break the Ratio

The golden ratio is a guide, not a law. These situations require deliberate deviation:

- **Very round faces:** A slightly more angular arch (higher than phi suggests) adds visual length and definition
- **Very long faces:** A flatter brow (lower arch, more horizontal) creates visual width
- **Extremely close-set eyes:** Wider head spacing (beyond phi) opens the face
- **Extremely wide-set eyes:** Narrower head spacing (inside phi) draws features inward
- **Strong brow bone:** A lower arch may complement the bone structure better than the "ideal" height
- **Previous work or scars:** Existing features may constrain your design — work with what's there

> **The paradox of mastery:** You must learn the rules thoroughly before you earn the right to break them. Master golden ratio mapping first. Apply it strictly for your first 50 clients. As your eye develops and your experience deepens, you'll instinctively know when a mathematically perfect brow doesn't look right on a particular face — and you'll know exactly how to adjust.`,
        },
        {
            id: 'mod4-lesson3', slug: 'shape-customization-by-face-type', title: 'Shape Customization by Face Type',
            type: 'reading', durationMinutes: 30, order: 3,
            keyPoints: [
                'There is no universally "best" brow shape — only the best shape for a specific face',
                'Always show 2-3 shape options using removable marker before committing',
                'The client\'s natural brow growth direction should influence your design',
                'Trends are temporary (2-3 years), but PMU lasts 1-3 years — guide clients toward timeless designs',
                'Glasses, hairstyle, and lifestyle all affect how the brow is perceived daily',
            ],
            content: `# Shape Customization by Face Type

Golden ratio mapping gives you the coordinates. This lesson teaches you the art — the creative judgment that transforms technically correct proportions into a brow that makes a specific person look and feel extraordinary. This is where science becomes artistry.

## The Principle of Contrast

Brow design operates on a fundamental principle: **the brow should provide what the face lacks.**

- Round face → angular brow (provides structure)
- Angular face → soft brow (provides warmth)
- Short face → arched brow (provides vertical lift)
- Long face → flat brow (provides horizontal balance)

This isn't arbitrary — it's the science of visual balance. When one element provides the counterpoint to another, the overall composition reads as harmonious.

## Face Shape Analysis & Prescription

### Oval Face
**Characteristics:** Forehead slightly wider than chin, gentle narrowing from cheekbones to jaw. Considered the most balanced face shape.
**Optimal brow:** Soft, natural arch. Almost any brow shape works because the face itself is balanced. The brow enhances without needing to correct.
**Avoid:** Over-arching (adds unnecessary drama to an already balanced canvas)
**Celebrity reference framework:** Think subtle, elegant curves that never compete with the face.

### Round Face
**Characteristics:** Face width and length are approximately equal. Soft jawline, full cheeks.
**Optimal brow:** Higher arch with angular peak. Creates vertical dimension and adds definition that the soft face contours don't provide naturally.
**Avoid:** Rounded brows that echo the circular geometry — this amplifies roundness rather than balancing it.
**Key insight:** The arch is the power move here. A well-placed, slightly higher arch can visually lengthen the face by 10-15%.

### Long / Oblong Face
**Characteristics:** Noticeably longer than wide, even forehead-to-chin proportions.
**Optimal brow:** Flatter, more horizontal design with minimal arch. Creates visual width and "shortens" the perceived face length by drawing the eye side to side rather than up and down.
**Avoid:** High arches — they add more vertical emphasis to an already long canvas.
**Key insight:** Extend the tail slightly beyond the standard endpoint to maximize horizontal emphasis.

### Heart / Inverted Triangle Face
**Characteristics:** Wider forehead, prominent cheekbones, narrow chin. May have a widow's peak.
**Optimal brow:** Softly rounded arch. Gentle curves complement the face's natural geometry without emphasizing the wide forehead.
**Avoid:** Harsh angular arches that create corners aligned with the broad forehead — this makes the chin appear even narrower.
**Key insight:** A slightly thicker brow can visually reduce the perceived forehead width by filling more space.

### Square Face
**Characteristics:** Strong jawline, forehead and jaw approximately equal width, angular features.
**Optimal brow:** Gently curved with a medium arch. Provides softness to counterbalance the angular jaw and brow bone.
**Avoid:** Flat, straight brows that create another horizontal line parallel to the jawline — this emphasizes the squareness.
**Key insight:** The curve of the brow is the softening agent here. Think smooth arcs, not sharp peaks.

### Diamond Face
**Characteristics:** Narrow forehead and chin, wide cheekbones create the widest point of the face.
**Optimal brow:** Curved arch that adds visual width at the brow area, balancing the prominent cheekbones.
**Avoid:** Very thin brows that leave too much forehead visible, making the cheekbones appear even wider.
**Key insight:** Adding slight fullness at the head of the brow helps balance the narrow forehead.

## The Consultation Design Process

Never just decide what shape a client gets. The design process is collaborative:

### 1. Analyze Together
Sit the client in front of a mirror. Point out their face shape (positively): "You have beautiful high cheekbones — I'd call this a diamond-shaped face. Here's what I'd recommend to complement that structure."

### 2. Draw Multiple Options
Using white removable pencil, draw 2-3 shape variations directly on the client's face:
- Option A: Your professional recommendation based on face shape analysis
- Option B: A variation close to what the client requested
- Option C: A compromise between the two, if they differ

### 3. Discuss in Context
Ask lifestyle questions that affect daily brow perception:
- "Do you wear glasses?" (Frames change how brows are seen dramatically)
- "How do you typically style your hair?" (Bangs vs. pulled back affect forehead visibility)
- "What's your daily makeup routine?" (Natural vs. full-glam affects how bold the brow should be)

### 4. Let Them Choose
Show photos of each drawn option. Let the client see themselves, take a selfie, think about it. The client's preference matters enormously — they will live with this result every day.

### 5. Document the Choice
Note which design the client approved and photograph it. This protects both of you.

## The Trend Conversation

Brow trends cycle approximately every 5-10 years. PMU lasts 1-3 years. This creates a mismatch that you must manage.

| Era | Trend | How It Ages |
|-----|-------|-------------|
| 1990s-2000s | Ultra-thin, heavily arched | Dated quickly, difficult to reverse |
| 2010s | Full, Instagram-defined | Softened well but over-application was common |
| 2020s | Fluffy, natural "laminated" look | Currently popular, ages well if not overdone |
| Timeless | Natural proportion, moderate fullness and arch | Never looks dated |

**Your guidance to clients:** "I always recommend a shape that will look beautiful and natural for years, not just months. Trends change, but a classically proportioned brow never looks outdated. Let's find the version of current style that works within timeless proportions."

> **The art of restraint:** The most elegant brows are not the most dramatic ones. They are the brows that make people say "you look amazing" without being able to pinpoint that it's the brows doing the work. Restraint in design — resisting the urge to go bigger, bolder, or more dramatic than the face needs — is the hallmark of a truly skilled artist.`,
        },
        {
            id: 'mod4-lesson4', slug: 'mapping-tools-and-practice-drills', title: 'Mapping Tools & Practice Drills',
            type: 'exercise', durationMinutes: 45, order: 4,
            keyPoints: [
                'Invest in quality tools — cheap calipers and rulers introduce measurement error',
                'Muscle memory for symmetrical mapping develops around 50-100 full mappings',
                'Practice on paper, then mannequin heads, then yourself — in that order',
                'Speed follows accuracy, not the other way around — never rush practice sessions',
                'Document every practice session with photos for mentor review',
            ],
            content: `# Mapping Tools & Practice Drills

Brow mapping is a physical skill. Like learning a musical instrument, understanding the theory means nothing until your hands can execute reliably, consistently, and eventually — quickly. This lesson introduces your professional toolkit and provides structured drills designed to build the muscle memory that separates a competent mapper from a confident one.

## Your Professional Mapping Toolkit

### Brow Mapping String (Essential)
Pre-inked thread that creates straight reference lines on the skin.

**How it works:**
- Pre-saturated with cosmetic-grade marking pigment
- Hold taut between two anchor points
- "Snap" gently against the skin surface to transfer a straight line
- Creates perfectly straight reference lines regardless of hand steadiness

**Selection tips:**
- Available in multiple colors — use lighter colors on dark skin, darker on light skin
- Quality varies dramatically — invest in professional-grade string that lays clean, consistent marks
- Replace frequently — used string picks up oils and loses ink consistency

### Golden Ratio Calipers (Essential)
Fixed-ratio measuring instrument with three articulating points.

**Types available:**
- Basic plastic calipers ($10-20) — adequate for practice but less durable
- Professional metal calipers ($40-80) — precision machined, holds ratio accurately
- Digital calipers with phi function ($100+) — for artists who want measurement displays

**Recommendation:** Start with professional metal calipers. The precision matters — a cheap caliper that's 2% off phi produces noticeably inaccurate mappings.

### Brow Mapping Ruler (Useful, Not Mandatory)
Flexible clear rulers marked with common measurement references.

**Best for:** Beginners who benefit from visual guides. Quick positioning checks.
**Limitation:** Can become a crutch — don't rely on ruler markings instead of developing your eye.

### Marking Pencils (Essential)
**White concealer pencil** — visible on most skin tones, easily removable
**Surgical marking pen** — precise lines, requires more deliberate removal
**Use thin, light marks** — thick lines blur your precision and are harder to correct

### Digital Verification Tools
**Phone camera with grid overlay** — free, already in your pocket
**Brow mapping apps** — overlay guides on photos for symmetry verification
**Photo flip function** — mirror-reverse photos to catch asymmetries

**Use these as verification tools, not primary design methods.** The design happens with your hands, string, and calipers. The phone confirms what your eyes and tools created.

## Practice Drill 1: Paper Face Mapping (100+ Repetitions)

### Setup
- Print 50+ copies of a symmetrical face template (available in your resource pack)
- Get a pencil, ruler, and calipers
- Work at a desk in good lighting

### The Drill
1. Mark the center line
2. Place brow heads using the three-point system
3. Place arch points
4. Place tail points
5. Apply calipers to verify proportions
6. Draw top and bottom borders
7. Step back and assess

### Targets
- First 20 faces: Focus only on ACCURACY. Take as long as you need.
- Faces 21-40: Introduce a timer. Target: under 5 minutes per face.
- Faces 41-50+: Target: under 3 minutes per face while maintaining accuracy.

### Assessment
- Are left and right sides measurably equidistant from center?
- Do caliper readings confirm golden ratio proportions (within ±2mm)?
- Does the overall design look balanced when viewed from arm's length?

## Practice Drill 2: Mannequin Head Mapping (50+ Repetitions)

### Why Mannequins Are Different From Paper
- Three-dimensional surface introduces curvature challenges
- String placement on curved surfaces requires different technique
- More realistic tactile feedback for tool handling
- Mapping on a face-shaped surface develops spatial judgment

### The Drill
1. Full mapping sequence (center line → heads → arches → tails → borders)
2. Step back to 4 feet and photograph from directly in front
3. Check photo for symmetry — flip horizontally
4. Grade yourself using the assessment rubric (below)
5. Wipe marks completely and repeat

### Volume Target
- Complete 10 full mappings per practice session
- Minimum 5 sessions before moving to self-mapping
- Total: 50+ mannequin mappings before live practice

## Practice Drill 3: Self-Mapping (20+ Repetitions)

### Why Self-Mapping Is Valuable
- You learn how the tools FEEL on real skin
- You experience the client perspective (sensation, positioning, waiting)
- Mirror work develops the spatial reversal skill needed for client work
- Mapping yourself is harder than mapping others — building this skill gives you confidence

### The Drill
1. Sit in front of a large, well-lit mirror
2. Full mapping sequence using removable pencil and calipers
3. Take a photo when complete (forward-facing)
4. Assess using the rubric
5. Remove marks and repeat

## Self-Assessment Rubric (Use For All Drills)

Score each mapping (1-5):

| Criteria | 1 (Needs Work) | 3 (Progressing) | 5 (Professional) |
|----------|----------------|-----------------|-------------------|
| Center line accuracy | Visibly off-center | Mostly centered, <2mm off | Precisely centered |
| Head placement symmetry | >3mm difference L vs R | 1-3mm difference | <1mm difference |
| Arch placement and height | Uneven or wrong position | Mostly correct, minor variance | Symmetric, proportionally placed |
| Tail position and angle | Different lengths or below head line | Similar but not identical | Matching length, on/above head line |
| Golden ratio verification | Caliper check fails by >3mm | Within 2-3mm | Within 1mm of ratio |
| Overall visual balance | Noticeable asymmetry at arm's length | Close, minor corrections needed | Balanced, professional appearance |

### Tracking Progress
For each practice session, record:
- Date
- Drill type (paper / mannequin / self)
- Number of mappings completed
- Average self-assessment score
- Time per mapping
- Specific observations ("arch placement improving, tails still inconsistent")
- Photo of best and worst mapping of the session

### When You're Ready for Live Practice

**Benchmark:** When you consistently score 4+ across ALL rubric criteria on mannequin heads AND complete mappings in under 5 minutes, you are ready for supervised live model work.

This typically requires:
- 100+ paper face mappings
- 50+ mannequin head mappings
- 20+ self-mappings
- Approximately 30-40 hours of dedicated practice

> **The truth about mastery:** Mapping is a skill that separates the artists who took their training seriously from those who rushed through it. The artist with excellent mapping skills will produce consistently beautiful, predictable designs for every client. The artist who skimped on practice will spend their career second-guessing their designs and producing inconsistent results. The hours you invest in practice now pay dividends for the rest of your career.`,
        },
    ],
};

export default mod04;
