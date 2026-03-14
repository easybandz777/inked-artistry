import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Section, SectionHeader } from '@/components/ui/section';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Button } from '@/components/ui/button';
import { ACADEMY_INFO, FLAGSHIP_COURSE, CURRICULUM_MODULES } from '@/content/academy';
import {
    GraduationCap, BookOpen, Users, Sparkles, CheckCircle,
    ArrowRight, Palette, HeartHandshake, Clock, Award
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'Academy | PMU Training & Education | Inked Permanent Artistry',
    description: 'Inked Academy — structured, hands-on permanent makeup training programs. 12 curriculum modules, live model work, real studio experience. Build a professional PMU practice.',
};

const formatIcons: Record<string, React.ElementType> = {
    BookOpen, Palette, Users, HeartHandshake,
};

export default function AcademyPage() {
    return (
        <>
            {/* ─── HERO ─── */}
            <section className="academy-hero">
                {/* Background static image (video placeholder — replace with academy-bg.mp4) */}
                <div className="academy-hero-bg">
                    <Image
                        src="/images/inkedrachel.webp"
                        alt="Inked Academy training"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="academy-hero-overlay" />
                </div>

                <div className="academy-hero-content">
                    <AnimatedSection direction="fade" duration={0.9}>
                        <p className="academy-label">Inked Academy</p>
                    </AnimatedSection>

                    <AnimatedSection direction="up" delay={0.2}>
                        <h1 className="academy-hero-h1">
                            Where Artistry<br />Meets{' '}
                            <em className="academy-hero-em">Education</em>
                        </h1>
                    </AnimatedSection>

                    <AnimatedSection direction="up" delay={0.35}>
                        <p className="academy-hero-sub">
                            Structured, hands-on PMU training designed to build confident,
                            studio-ready artists — not just technicians.
                        </p>
                    </AnimatedSection>

                    {/* Stat band inside hero */}
                    <AnimatedSection direction="up" delay={0.5}>
                        <div className="academy-hero-stats">
                            <div className="academy-hero-stat">
                                <span className="academy-stat-num">12</span>
                                <span className="academy-stat-label">Curriculum Modules</span>
                            </div>
                            <div className="academy-hero-divider" />
                            <div className="academy-hero-stat">
                                <span className="academy-stat-num">Live</span>
                                <span className="academy-stat-label">Model Work</span>
                            </div>
                            <div className="academy-hero-divider" />
                            <div className="academy-hero-stat">
                                <span className="academy-stat-num">1:1</span>
                                <span className="academy-stat-label">Mentorship Included</span>
                            </div>
                            <div className="academy-hero-divider" />
                            <div className="academy-hero-stat">
                                <Award className="h-5 w-5 text-rose-gold mb-1 mx-auto" />
                                <span className="academy-stat-label">Certificate of Completion</span>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection direction="up" delay={0.65}>
                        <div className="academy-hero-actions">
                            <Link href="/academy/training" className="hero-btn-primary">
                                View Training Program
                            </Link>
                            <Link href="/academy/apply" className="hero-btn-secondary">
                                Apply Now
                            </Link>
                        </div>
                        <p className="academy-hero-portal-link">
                            Already enrolled?{' '}
                            <Link href="/academy/portal/login" className="academy-hero-portal-a">
                                Student Login →
                            </Link>
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* ─── PROGRAM FORMAT JOURNEY ─── */}
            <Section spacious>
                <SectionHeader label="How It Works" title="Your Path to Becoming an Artist" />
                <div className="academy-format-grid">
                    {FLAGSHIP_COURSE.format.map((phase, i) => {
                        const Icon = formatIcons[phase.icon] ?? BookOpen;
                        return (
                            <AnimatedSection key={i} direction="up" delay={i * 0.1}>
                                <div className="academy-format-card">
                                    <div className="academy-format-num">{String(i + 1).padStart(2, '0')}</div>
                                    <Icon className="h-7 w-7 text-rose-gold mb-4" />
                                    <h3 className="academy-format-title">{phase.title}</h3>
                                    <p className="academy-format-desc">{phase.description}</p>
                                </div>
                            </AnimatedSection>
                        );
                    })}
                </div>
            </Section>

            {/* ─── WHO IT'S FOR ─── */}
            <Section variant="alternate" spacious>
                <SectionHeader label="Who This Is For" title="Built for Serious, Aspiring Artists" />
                <div className="academy-who-grid">
                    {ACADEMY_INFO.whoIsItFor.map((item, i) => (
                        <AnimatedSection key={i} direction="up" delay={i * 0.1}>
                            <div className="academy-who-card">
                                <span className="academy-who-num">0{i + 1}</span>
                                <p className="academy-who-text">{item}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </Section>

            {/* ─── CURRICULUM — all 12 modules ─── */}
            <Section spacious>
                <SectionHeader
                    label="Full Curriculum"
                    title="12 Modules. Every Skill You Need."
                    description="From sanitation protocols to client management to launching your brand — the complete PMU education."
                />
                <div className="curriculum-grid">
                    {CURRICULUM_MODULES.map((mod, i) => (
                        <AnimatedSection key={mod.number} direction="up" delay={i * 0.04}>
                            <div className="curriculum-card">
                                <div className="curriculum-card-header">
                                    <span className="curriculum-num">
                                        {String(mod.number).padStart(2, '0')}
                                    </span>
                                    <h3 className="curriculum-title">{mod.title}</h3>
                                </div>
                                <p className="curriculum-desc">{mod.description}</p>
                                <div className="curriculum-topics">
                                    {mod.topics.map((t, ti) => (
                                        <span key={ti} className="curriculum-tag">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </Section>

            {/* ─── WHY TRAIN WITH US ─── */}
            <Section variant="alternate" spacious>
                <SectionHeader label="The Difference" title="Why Train With Us" />
                <div className="academy-diff-grid">
                    {ACADEMY_INFO.whatMakesUsDifferent.map((item, i) => (
                        <AnimatedSection key={i} direction="up" delay={i * 0.08}>
                            <div className="academy-diff-card">
                                <CheckCircle className="h-5 w-5 text-rose-gold mb-3 shrink-0" />
                                <h3 className="academy-diff-title">{item.title}</h3>
                                <p className="academy-diff-desc">{item.description}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </Section>

            {/* ─── FLAGSHIP PROGRAM ─── */}
            <Section spacious>
                <div className="flagship-grid">
                    {/* Photo collage left */}
                    <AnimatedSection direction="left">
                        <div className="flagship-photo-grid">
                            <div className="flagship-photo-main">
                                <Image
                                    src="/images/inked3.webp"
                                    alt="PMU training in studio"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flagship-photo-secondary">
                                <Image
                                    src="/images/inked5.webp"
                                    alt="Brow artistry"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flagship-photo-tertiary">
                                <Image
                                    src="/images/inked7.webp"
                                    alt="Fine line detail work"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Content right */}
                    <AnimatedSection direction="right" delay={0.15}>
                        <div>
                            <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-rose-gold mb-4">
                                Flagship Program
                            </p>
                            <h2>
                                PMU Foundations{' '}
                                <em className="italic">Intensive</em>
                            </h2>
                            <p className="mt-4 text-soft-gray leading-relaxed">
                                {FLAGSHIP_COURSE.description}
                            </p>

                            {/* Investment badge */}
                            <div className="flagship-price-badge">
                                <span className="flagship-price-from">Starting from</span>
                                <span className="flagship-price-num">
                                    ${FLAGSHIP_COURSE.investmentStart.toLocaleString()}
                                </span>
                                <span className="flagship-price-note">Professional kit included</span>
                            </div>

                            {/* Outcomes */}
                            <div className="mt-6 space-y-2">
                                {FLAGSHIP_COURSE.outcomes.slice(0, 5).map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle className="h-4 w-4 text-rose-gold shrink-0 mt-0.5" />
                                        <span className="text-sm text-charcoal">{item}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Kit chips */}
                            <div className="mt-5 flex flex-wrap gap-2">
                                {FLAGSHIP_COURSE.kitIncludes.map((kit, i) => (
                                    <span key={i} className="flagship-kit-tag">{kit}</span>
                                ))}
                            </div>

                            <div className="mt-8 flex gap-3">
                                <Button href="/academy/training" size="lg">
                                    View Full Program <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                                <Button href="/academy/apply" size="md" variant="ghost">
                                    Apply Now
                                </Button>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </Section>

            {/* ─── FINAL CTA ─── */}
            <Section variant="dark" spacious>
                <div className="text-center">
                    <AnimatedSection direction="up">
                        <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-rose-gold mb-4">
                            Ready to Begin
                        </p>
                        <h2 className="text-warm-white">Start Your Journey Today</h2>
                        <p className="mt-4 text-warm-white/80 max-w-xl mx-auto leading-relaxed">
                            Apply for our next training cohort or join the waitlist for future sessions.
                            Seats are limited — we keep class sizes intentionally small.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
                            <Link href="/academy/apply" className="hero-btn-primary">
                                Apply Now
                            </Link>
                            <Link href="/academy/waitlist" className="hero-btn-secondary">
                                Join the Waitlist
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </Section>
        </>
    );
}
