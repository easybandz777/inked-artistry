import type { CurriculumModule } from '@/lib/types';

const mod08: CurriculumModule = {
    number: 8,
    slug: 'photography-content-creation',
    title: 'Photography & Content Creation',
    description: 'Capturing professional before/after photos, building a portfolio, and creating content that builds trust and attracts clients.',
    topics: ['Lighting setup', 'Before/after framing', 'Portfolio curation', 'Social media strategy'],
    estimatedHours: 3,
    lessons: [
        {
            id: 'mod8-lesson1', slug: 'lighting-and-camera-setup', title: 'Lighting & Camera Setup',
            type: 'reading', durationMinutes: 25, order: 1,
            keyPoints: [
                'Natural lighting or daylight-balanced LEDs produce the most accurate color representation',
                'Overhead fluorescents create unflattering shadows that distort your work',
                'A ring light at eye level is the simplest setup for consistent results',
                'Always photograph in the same spot with the same lighting for consistency',
            ],
            content: `# Lighting & Camera Setup

Your before/after photos are the single most important marketing tool in your PMU business. No amount of social media strategy compensates for poorly lit, inconsistent photos. This lesson sets up a simple, repeatable photography workflow.

## Lighting Fundamentals

### Why Lighting Matters
- Proper lighting shows accurate color and detail
- Poor lighting makes even excellent work look mediocre
- Consistent lighting allows fair before/after comparisons
- Clients judge your skill primarily through your photo portfolio

### Lighting Types

| Type | Pros | Cons | Verdict |
|------|------|------|---------|
| Natural window light | Beautiful, soft, accurate color | Varies by time of day and weather | Best quality but inconsistent |
| Ring light (LED) | Consistent, eliminates shadows on face | Can create a "flat" look if too close | Best for reliability |
| Softbox (studio) | Professional, even coverage | Requires space and setup knowledge | Best for dedicated photo area |
| Overhead fluorescent | Already installed | Green-yellow cast, harsh shadows | Avoid for portfolio photos |

### Recommended Setup: The Ring Light Station

1. **Ring light** — 18" LED with adjustable color temperature (set to 5000-5500K for daylight)
2. **Position** — directly in front of the client at face level
3. **Distance** — approximately 2-3 feet from the client's face
4. **Background** — plain, neutral wall (white, light gray, or light taupe)

## Camera/Phone Settings

### Smartphone Photography (Most Common)
- Use the rear camera (higher quality than front-facing)
- Turn OFF beauty/smoothing filters — they hide your work
- Shoot in the highest resolution available
- Use portrait mode selectively — it blurs background nicely but may softens brow details
- Keep the phone stable — lean against something or use a small tripod

### Settings to lock:
- **Exposure:** Tap to set focus on the brow area, lock exposure
- **White balance:** Most phones auto-adjust — if yours allows manual, set to daylight (5500K)
- **Grid overlay:** Turn ON — helps with consistent framing

## The Photo Station

Designate a specific spot in your studio for all before/after photos:
- Same position every time
- Same lighting every time
- Same background every time
- Same distance from the camera every time

**Consistency is the key.** When your before and after photos have identical lighting and framing, the viewer can focus entirely on the quality of your work.

> **Investment tip:** A $40 ring light, a $15 phone tripod, and a plain wall will produce better portfolio photos than 90% of PMU artists who shoot with their phone in random spots around the studio.`,
        },
        {
            id: 'mod8-lesson2', slug: 'before-after-photo-framing', title: 'Before/After Photo Framing',
            type: 'reading', durationMinutes: 25, order: 2,
            keyPoints: [
                'Capture 3 angles minimum: straight-on, left 3/4, right 3/4',
                'Client should have a neutral expression with eyes open in every shot',
                'Photograph before numbing cream and again immediately after the procedure',
                'Close-up detail shots showcase your stroke quality and precision',
            ],
            content: `# Before/After Photo Framing

Consistent, professional framing transforms casual snapshots into compelling portfolio pieces. This lesson establishes the standard shooting protocol for every client session.

## The Required Shot List

### Shot 1: Full Face — Straight On
- Camera at eye level, directly in front
- Client looks straight into the camera with neutral expression
- Eyes open, forehead visible, brows centered in frame
- Shows overall face balance and symmetry

### Shot 2: Left 3/4 View
- Client turns head 30-45° to their right (showing left side)
- Captures the brow arch and tail from a natural viewing angle
- Reveals how the brow looks in natural, everyday situations

### Shot 3: Right 3/4 View
- Mirror of Shot 2, showing the right side
- Ensures both sides are documented equally

### Shot 4: Close-Up Detail (Optional but Recommended)
- Camera positioned 8-12 inches from the brow area
- Shows individual strokes, color saturation, and mapping precision
- Only suitable for well-executed work — this shot is unforgiving

### Shot 5: Eyes Closed (Optional)
- Captures the brow shape without the distraction of eye contact
- Shows the full brow architecture cleanly
- Useful for demonstrating specific shapes and techniques

## The Before Set

Capture all required shots BEFORE:
- Applying numbing cream (which swells tissue)
- Drawing mapping lines
- Any prep that changes the brow area appearance

### Before Photo Checklist
- Client's own brows, untouched
- No makeup on or around the brow area
- Hair pulled back
- Clean, dry skin

## The After Set

Capture all required shots immediately after:
- Cleaning away residual pigment
- Gently patting dry
- Before applying aftercare product

### After Photo Notes
- Color will appear 30-50% darker than healed result — this is expected
- Minor swelling is normal and may affect arch appearance
- Some redness in the surrounding area is typical

## Healed Photos (Most Valuable)

The most powerful portfolio photos are **healed results** at 6-8 weeks:
- Show true color and stroke definition
- Demonstrate longevity and quality
- Build trust with prospective clients who fear the "fresh" darkness

Always request permission to photograph at the touch-up appointment.

## Editing Guidelines

### Acceptable
- Cropping for consistent framing
- Minor exposure/brightness adjustment to match lighting
- Watermarking with your brand

### Not Acceptable
- Skin smoothing or beauty filters
- Color saturation adjustments that misrepresent your work
- Reshaping or distorting features
- Removing skin texture or natural imperfections

> **Authenticity sells.** Clients can spot fake or heavily filtered photos, and it erodes trust. Real, consistent, well-lit before/after photos are more persuasive than any filter.`,
        },
        {
            id: 'mod8-lesson3', slug: 'portfolio-curation-best-practices', title: 'Portfolio Curation Best Practices',
            type: 'reading', durationMinutes: 20, order: 3,
            keyPoints: [
                'Quality over quantity — 15 excellent sets beats 50 mediocre ones',
                'Show variety: different skin tones, face shapes, and brow styles',
                'Include healed results whenever possible — they build more trust than fresh work',
                'Organize your portfolio by service type for easy navigation',
            ],
            content: `# Portfolio Curation Best Practices

Your portfolio is your resume. It speaks before you do. Curating it intentionally — rather than posting everything — is a strategic skill that directly impacts client conversion.

## The Curation Mindset

**Not every piece of work belongs in your portfolio.** Just because you did the work doesn't mean it's portfolio-worthy.

### Include
- Your best work from a technique and aesthetic standpoint
- Sets with clear, well-lit before/after comparisons
- Variety across skin tones, face shapes, and brow styles
- Healed + fresh work (healed builds more trust)

### Exclude
- Photos with inconsistent lighting
- Work you're not fully confident in
- Rushed photos or partial angle sets
- Work that doesn't represent where your skills are now

## Portfolio Structure

### By Service Type
Organize your portfolio into clear categories:
- **Microblading** — hair-stroke work
- **Powder/Ombré Brows** — soft, filled look
- **Combination Brows** — hybrid technique
- **Lip Blush** — if applicable
- **Color Corrections** — show transformations from previous work

### Within Each Category
- Lead with your best work (first impression matters)
- Show a range of skin tones
- Include at least 2-3 healed results if available
- Show before/after side by side for maximum impact

## Portfolio Size

### Starting Out (0-20 Clients)
- Include practice skin work labeled as such
- Volunteer/model work with permission
- Be transparent — "training portfolio" is honest and relatable
- Quality of 5 sets is better than mediocrity of 20

### Growing (20-50 Clients)
- Curate to your top 15-20 sets
- Remove all practice skin work
- Start including healed results
- Diversify skin tones and styles shown

### Established (50+ Clients)
- Top 20-30 sets, rotated as new work surpasses old
- Every set should include a healed photo
- Specialized portfolios for different services
- Back up everything in cloud storage

## Client Consent

**Always** obtain written consent before using client photos in your portfolio. Include in your consent form:
- Permission to use before/after photos for marketing
- Specification of where photos may be used (website, social media, print)
- Option for anonymity (face cropped, eyes covered, etc.)

> **Your portfolio should be a living document.** Revisit it monthly. As your skills improve, replace older work with better examples. What was your best work 6 months ago may not represent your current level.`,
        },
        {
            id: 'mod8-lesson4', slug: 'social-media-strategy-for-pmu', title: 'Social Media Strategy for PMU Artists',
            type: 'reading', durationMinutes: 25, order: 4,
            keyPoints: [
                'Instagram and TikTok are the primary platforms for PMU marketing',
                'Educational content (healing tips, aftercare) builds trust and expertise positioning',
                'Consistency in posting schedule matters more than perfection',
                'Engage with comments and DMs — social media is a conversation, not a billboard',
            ],
            content: `# Social Media Strategy for PMU Artists

Social media is where most PMU clients will discover you. A strategic, consistent presence converts followers into booked appointments. This lesson covers the essential strategy for building your brand online.

## Platform Priority

### Instagram (Primary)
- The visual portfolio platform for PMU artists
- Before/after carousels perform best
- Stories build personal connection (behind-the-scenes, Q&A)
- Reels reach new audiences through algorithm distribution

### TikTok (Growth)
- Short-form video dominates discovery
- Process videos (satisfying transformation content)
- Educational clips perform well
- Younger demographic — future clients

### Facebook (Supporting)
- Local community groups for area visibility
- Business page for reviews and credibility
- Paid advertising can target local audiences effectively
- Tends to reach an older demographic

## Content Pillars

Build your content around 4 recurring themes:

### 1. Portfolio Showcase (40%)
- Before/after carousels and reels
- Close-up detail shots
- Healed results with timeline
- Client testimonials with photos

### 2. Education (30%)
- Healing process explained
- Aftercare tips
- "What to expect" posts
- Myth-busting content (common misconceptions)

### 3. Behind the Scenes (20%)
- Studio setup and organization
- Tool and product spotlights
- Training and continuing education moments
- Day-in-the-life content

### 4. Personal Brand (10%)
- Your story and why you chose this career
- Professional development milestones
- Community involvement
- Relatable, authentic personal moments

## Posting Schedule

### Minimum Viable Posting
- **3 feed posts per week** (carousel, reel, or static)
- **Daily stories** (2-4 per day)
- **1 reel per week** (video performs best for reach)

### Content Batching
Dedicate 2-3 hours per week to content creation:
- Edit all photos from the week's clients
- Write captions in advance
- Schedule posts using a tool (Later, Buffer, Planoly)
- This is more efficient than daily content scrambling

## Hashtag Strategy

Use a mix of:
- **Broad:** #permanentmakeup #microblading #PMU
- **Specific:** #microbladingbrows #powderbrows #lipblush
- **Local:** #[yourcity]pmu #[yourcity]microblading #[yourstate]brows
- **Educational:** #pmutips #browhealing #pmueducation

## The Golden Rule of Social Media

> **Engage, don't broadcast.** Reply to every comment. Answer every DM. Ask questions in your captions. Clients don't book with faceless brands — they book with people they feel connected to. The artist who responds to a DM within an hour is the one who gets the appointment.`,
        },
    ],
};

export default mod08;
