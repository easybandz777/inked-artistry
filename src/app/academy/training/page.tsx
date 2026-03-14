import type { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/ui/section';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { FLAGSHIP_COURSE, CURRICULUM_MODULES } from '@/content/academy';
import { formatPrice } from '@/lib/utils';
import { CheckCircle, BookOpen, Palette, Users, HeartHandshake } from 'lucide-react';

export const metadata: Metadata = {
    title: 'PMU Foundations Intensive | Training Program',
    description: 'Comprehensive permanent makeup training covering technique, theory, business, and mentorship. Apply now for our flagship PMU Foundations Intensive.',
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = { BookOpen, Palette, Users, HeartHandshake };

const trainingFaqs = [
    { question: 'Do I need prior experience?', answer: 'No prior PMU experience is required. A genuine interest in artistry, attention to detail, and a professional mindset are what matter most.' },
    { question: 'What is included in the kit?', answer: FLAGSHIP_COURSE.kitIncludes.join(', ') + '.' },
    { question: 'Will I be certified after completing the program?', answer: 'You will receive a certificate of completion documenting your training hours and curriculum. Licensing requirements vary by state — we provide guidance on navigating those requirements in your area.' },
    { question: 'Is financing available?', answer: 'We offer deposit-based enrollment with payment plan options. Contact us for details on current availability.' },
    { question: 'How many students are in each cohort?', answer: 'We keep class sizes small to ensure personalized instruction and hands-on attention for every student.' },
];

export default function TrainingPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative py-24 md:py-32 bg-gradient-to-b from-cream via-blush/20 to-warm-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <AnimatedSection direction="left">
                            <Badge variant="accent" className="mb-4">Flagship Program</Badge>
                            <h1>{FLAGSHIP_COURSE.title}</h1>
                            <p className="mt-2 text-lg text-soft-gray italic">{FLAGSHIP_COURSE.tagline}</p>
                            <p className="mt-4 text-soft-gray leading-relaxed">{FLAGSHIP_COURSE.description}</p>
                            <div className="mt-6 flex items-center gap-6">
                                <div>
                                    <p className="text-xs text-soft-gray uppercase tracking-wider">Investment</p>
                                    <p className="font-serif text-2xl text-espresso">From {formatPrice(FLAGSHIP_COURSE.investmentStart)}</p>
                                </div>
                                {FLAGSHIP_COURSE.kitIncluded && (
                                    <Badge variant="dark">Kit Included</Badge>
                                )}
                            </div>
                            <div className="mt-8 flex flex-col sm:flex-row gap-3">
                                <Button href="/academy/apply" size="lg">Apply for This Program</Button>
                                <Button href="/academy/waitlist" size="lg" variant="outline">Join Waitlist</Button>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection direction="right" delay={0.2}>
                            <div className="aspect-square bg-gradient-to-br from-cream to-blush rounded-sm flex items-center justify-center">
                                <Palette className="h-20 w-20 text-taupe/20" />
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Outcomes */}
            <Section spacious>
                <SectionHeader label="What You Will Learn" title="Program Outcomes" />
                <div className="max-w-3xl mx-auto space-y-3">
                    {FLAGSHIP_COURSE.outcomes.map((outcome, i) => (
                        <AnimatedSection key={i} direction="left" delay={i * 0.05}>
                            <div className="flex items-start gap-4 p-4 bg-cream rounded-sm">
                                <CheckCircle className="h-5 w-5 text-rose-gold shrink-0 mt-0.5" />
                                <p className="text-sm text-charcoal">{outcome}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </Section>

            {/* Format */}
            <Section variant="alternate" spacious>
                <SectionHeader label="Training Format" title="How the Program Works" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {FLAGSHIP_COURSE.format.map((item, i) => {
                        const Icon = iconMap[item.icon] || BookOpen;
                        return (
                            <AnimatedSection key={i} direction="up" delay={i * 0.1}>
                                <Card>
                                    <Icon className="h-6 w-6 text-rose-gold mb-4" />
                                    <h3 className="font-serif text-lg mb-2">{item.title}</h3>
                                    <p className="text-sm text-soft-gray leading-relaxed">{item.description}</p>
                                </Card>
                            </AnimatedSection>
                        );
                    })}
                </div>
            </Section>

            {/* Curriculum */}
            <Section spacious>
                <SectionHeader label="Curriculum" title="12-Module Training Curriculum" description="A structured, comprehensive educational journey from foundational theory to studio-readiness." />
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                    {CURRICULUM_MODULES.map((mod, i) => (
                        <AnimatedSection key={mod.number} direction="up" delay={i * 0.04}>
                            <div className="bg-cream rounded-sm p-5 hover:bg-blush/50 transition-colors">
                                <div className="flex items-start gap-4">
                                    <span className="font-serif text-2xl text-rose-gold/30 leading-none">{String(mod.number).padStart(2, '0')}</span>
                                    <div>
                                        <h3 className="font-serif text-base mb-1">{mod.title}</h3>
                                        <p className="text-xs text-soft-gray leading-relaxed">{mod.description}</p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </Section>

            {/* Kit */}
            <Section variant="alternate" spacious>
                <SectionHeader label="Included" title="Professional Starter Kit" description="Every student receives a curated kit of professional-grade tools and materials." />
                <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3">
                    {FLAGSHIP_COURSE.kitIncludes.map((item, i) => (
                        <AnimatedSection key={i} direction="up" delay={i * 0.06}>
                            <div className="flex items-center gap-3 p-3 bg-white rounded-sm border border-border/50">
                                <CheckCircle className="h-4 w-4 text-rose-gold shrink-0" />
                                <span className="text-sm text-charcoal">{item}</span>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </Section>

            {/* FAQs */}
            <Section spacious>
                <SectionHeader label="Questions" title="Training FAQs" />
                <div className="max-w-3xl mx-auto">
                    <Accordion items={trainingFaqs} />
                </div>
            </Section>

            {/* CTA */}
            <Section variant="dark" spacious>
                <div className="text-center">
                    <AnimatedSection direction="up">
                        <h2 className="text-warm-white">Ready to Begin Your Training Journey?</h2>
                        <p className="mt-4 text-warm-white/60 max-w-xl mx-auto">
                            Spaces are limited. Apply today or join our waitlist for the next available cohort.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button href="/academy/apply" variant="secondary" size="lg">Apply Now</Button>
                            <Button href="/academy/waitlist" variant="ghost" size="md" className="text-warm-white/70 hover:text-warm-white hover:bg-warm-white/10">Join Waitlist</Button>
                        </div>
                    </AnimatedSection>
                </div>
            </Section>
        </>
    );
}
