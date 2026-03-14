import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Section, SectionHeader } from '@/components/ui/section';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Button } from '@/components/ui/button';
import { Accordion } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { SERVICES } from '@/content/services';
import { formatPrice } from '@/lib/utils';
import { Check, Clock, DollarSign, Calendar } from 'lucide-react';

export async function generateStaticParams() {
    return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = SERVICES.find((s) => s.slug === slug);
    if (!service) return {};
    return {
        title: `${service.title} | Premium Permanent Makeup`,
        description: service.description,
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = SERVICES.find((s) => s.slug === slug);
    if (!service) notFound();

    return (
        <>
            {/* Hero */}
            <section className="relative pt-40 pb-16 md:pt-44 md:pb-20 bg-gradient-to-b from-cream to-warm-white overflow-hidden">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <AnimatedSection direction="left">
                            <Badge variant="accent" className="mb-4">Service</Badge>
                            <h1>{service.title}</h1>
                            <p className="mt-4 text-lg text-soft-gray italic">{service.tagline}</p>
                            <p className="mt-4 text-soft-gray leading-relaxed">{service.description}</p>

                            <div className="mt-8 grid grid-cols-2 gap-4">
                                <div className="flex items-center gap-3">
                                    <DollarSign className="h-4 w-4 text-rose-gold" />
                                    <div>
                                        <p className="text-xs text-soft-gray uppercase tracking-wider">Starting At</p>
                                        <p className="font-medium">{formatPrice(service.pricingStart)}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Clock className="h-4 w-4 text-rose-gold" />
                                    <div>
                                        <p className="text-xs text-soft-gray uppercase tracking-wider">Duration</p>
                                        <p className="font-medium text-sm">{service.duration}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Calendar className="h-4 w-4 text-rose-gold" />
                                    <div>
                                        <p className="text-xs text-soft-gray uppercase tracking-wider">Healing</p>
                                        <p className="font-medium text-sm">{service.healingTime}</p>
                                    </div>
                                </div>
                                {service.touchUpIncluded && (
                                    <div className="flex items-center gap-3">
                                        <Check className="h-4 w-4 text-rose-gold" />
                                        <div>
                                            <p className="text-xs text-soft-gray uppercase tracking-wider">Touch-Up</p>
                                            <p className="font-medium text-sm">Included</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="mt-8">
                                <Button href="/booking" size="lg">Book This Service</Button>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection direction="right" delay={0.2}>
                            <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
                                {service.heroImage ? (
                                    <Image
                                        src={service.heroImage}
                                        alt={`${service.title} — Inked Permanent Artistry`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                ) : (
                                    <div className="absolute inset-0 bg-gradient-to-br from-cream to-blush flex items-center justify-center">
                                        <span className="font-serif text-5xl text-taupe/30 italic">{service.shortTitle}</span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-espresso/15 to-transparent" />
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <Section spacious>
                <SectionHeader label="Benefits" title={`Why ${service.title}?`} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                    {service.benefits.map((benefit, i) => (
                        <AnimatedSection key={i} direction="up" delay={i * 0.05}>
                            <div className="flex items-start gap-3 p-4 bg-cream rounded-sm">
                                <Check className="h-4 w-4 text-rose-gold mt-0.5 shrink-0" />
                                <p className="text-sm text-charcoal">{benefit}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </Section>

            {/* Who Is It For */}
            <Section variant="alternate" spacious>
                <SectionHeader label="Ideal Candidates" title="Who Is This For?" />
                <div className="max-w-2xl mx-auto space-y-3">
                    {service.whoIsItFor.map((item, i) => (
                        <AnimatedSection key={i} direction="left" delay={i * 0.08}>
                            <div className="flex items-center gap-4 p-4 bg-white rounded-sm border border-border/50">
                                <div className="w-8 h-8 rounded-full bg-blush flex items-center justify-center shrink-0">
                                    <Check className="h-4 w-4 text-rose-gold" />
                                </div>
                                <p className="text-sm text-charcoal">{item}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </Section>

            {/* Prep & Aftercare */}
            <Section variant="alternate" spacious>
                <SectionHeader label="Your Journey" title="Preparation & Aftercare" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <AnimatedSection direction="left">
                        <div className="bg-warm-white rounded-sm border border-border/50 overflow-hidden shadow-sm">
                            <div className="px-6 py-4 bg-gradient-to-r from-blush to-cream border-b border-border/50">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-rose-gold/10 flex items-center justify-center">
                                        <Calendar className="h-4 w-4 text-rose-gold" />
                                    </div>
                                    <h3 className="font-serif text-lg !mb-0">Before Your Appointment</h3>
                                </div>
                            </div>
                            <ul className="p-6 space-y-4">
                                {service.prepRequirements.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-blush text-rose-gold text-[0.6rem] font-semibold shrink-0">
                                            {i + 1}
                                        </span>
                                        <span className="text-sm text-charcoal leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection direction="right" delay={0.15}>
                        <div className="bg-warm-white rounded-sm border border-border/50 overflow-hidden shadow-sm">
                            <div className="px-6 py-4 bg-gradient-to-r from-blush to-cream border-b border-border/50">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-rose-gold/10 flex items-center justify-center">
                                        <Check className="h-4 w-4 text-rose-gold" />
                                    </div>
                                    <h3 className="font-serif text-lg !mb-0">Aftercare Instructions</h3>
                                </div>
                            </div>
                            <ul className="p-6 space-y-4">
                                {service.aftercare.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-blush text-rose-gold text-[0.6rem] font-semibold shrink-0">
                                            {i + 1}
                                        </span>
                                        <span className="text-sm text-charcoal leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AnimatedSection>
                </div>
            </Section>

            {/* FAQs */}
            {service.faqs.length > 0 && (
                <Section variant="alternate" spacious>
                    <SectionHeader label="Questions" title={`${service.title} FAQs`} />
                    <div className="max-w-3xl mx-auto">
                        <Accordion items={service.faqs} />
                    </div>
                </Section>
            )}

            {/* CTA */}
            <Section variant="dark" spacious>
                <div className="text-center">
                    <AnimatedSection direction="up">
                        <h2 className="text-warm-white">Ready to Book Your {service.title}?</h2>
                        <p className="mt-4 text-warm-white/60 max-w-xl mx-auto">
                            Schedule a consultation to discuss your goals and create a custom treatment plan.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button href="/booking" variant="secondary" size="lg">Book Consultation</Button>
                            <Button href="/services" variant="ghost" size="md" className="text-warm-white/70 hover:text-warm-white hover:bg-warm-white/10">
                                View All Services
                            </Button>
                        </div>
                    </AnimatedSection>
                </div>
            </Section>
        </>
    );
}
