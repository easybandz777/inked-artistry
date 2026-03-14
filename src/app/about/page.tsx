import type { Metadata } from 'next';
import Image from 'next/image';
import { Section, SectionHeader } from '@/components/ui/section';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Button } from '@/components/ui/button';
import { Heart, Eye, Award, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '@/content/site-config';

export const metadata: Metadata = {
    title: 'About',
    description: 'Meet Rachel — Carrollton\'s most trusted PMU artist. Permanent brows, lip blush, fine-line & tiny tattoos at Inked Permanent Artistry.',
};

const values = [
    { icon: Heart, title: 'Genuine Care', description: 'Every interaction is rooted in empathy, respect, and a commitment to making you feel comfortable and heard.' },
    { icon: Eye, title: 'Attention to Detail', description: 'From brow mapping symmetry to pigment color matching — every decision is intentional and precise.' },
    { icon: Award, title: 'Professional Excellence', description: 'Continuous education, premium products, and adherence to the highest health and safety standards.' },
    { icon: Sparkles, title: 'Natural Enhancement', description: 'My philosophy is to enhance your natural beauty — creating results so seamless, they look like they have always been there.' },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-40 pb-16 md:pt-44 md:pb-20 bg-gradient-to-b from-cream to-warm-white overflow-hidden">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <AnimatedSection direction="left">
                            <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-rose-gold mb-4">Meet the Artist</p>
                            <h1>Hi, I&apos;m <span className="italic">Rachel</span></h1>
                            <p className="mt-6 text-soft-gray leading-relaxed">
                                {SITE_CONFIG.artist.bio}
                            </p>
                            <p className="mt-4 text-soft-gray leading-relaxed">
                                What began as a passion for enhancing natural beauty has grown into Carrollton&apos;s
                                most trusted permanent makeup studio. From my brand new storefront at{' '}
                                <strong className="text-charcoal">315 Bankhead Hwy</strong>, I create artistry
                                that helps you feel like the most confident version of yourself — every single day.
                            </p>
                            <p className="mt-4 text-soft-gray leading-relaxed">
                                Today, that same passion extends to our academy — where I train
                                the next generation of skilled, professional permanent makeup artists.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection direction="right" delay={0.2}>
                            <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/inked9.webp"
                                    alt="Rachel at Inked Permanent Artistry studio"
                                    fill
                                    className="object-cover object-top"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-espresso/30 to-transparent" />
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Values */}
            <Section spacious>
                <SectionHeader
                    label="My Values"
                    title="What Guides My Work"
                    description="The principles that shape every consultation, every procedure, and every student I train."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {values.map((value, i) => (
                        <AnimatedSection key={i} direction="up" delay={i * 0.1}>
                            <div className="flex gap-5 p-6 bg-cream rounded-sm">
                                <div className="w-12 h-12 rounded-full bg-blush flex items-center justify-center shrink-0">
                                    <value.icon className="h-5 w-5 text-rose-gold" />
                                </div>
                                <div>
                                    <h3 className="font-serif text-lg mb-1">{value.title}</h3>
                                    <p className="text-sm text-soft-gray leading-relaxed">{value.description}</p>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </Section>

            {/* Studio */}
            <Section variant="alternate" spacious>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <AnimatedSection direction="left">
                        <div className="relative aspect-video rounded-sm overflow-hidden shadow-xl">
                            <Image
                                src="/images/inked5.webp"
                                alt="Permanent brows — close-up artistry at the studio"
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </AnimatedSection>
                    <AnimatedSection direction="right" delay={0.15}>
                        <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-rose-gold mb-4">The New Studio</p>
                        <h2>Come See the <span className="italic">Magic</span> in Person</h2>
                        <p className="mt-4 text-soft-gray leading-relaxed">
                            Now booking at our brand new studio storefront at <strong className="text-charcoal">315 Bankhead Hwy, Carrollton</strong>.
                            The space is thoughtfully designed to create a calm, private, and premium experience —
                            every detail reflects my commitment to both comfort and professionalism.
                        </p>
                        <p className="mt-3 text-soft-gray leading-relaxed">
                            This is not a busy salon floor. This is your private space to relax, trust the process,
                            and leave feeling more confident than when you walked in.
                        </p>
                    </AnimatedSection>
                </div>
            </Section>

            {/* CTA */}
            <Section spacious>
                <div className="text-center">
                    <AnimatedSection direction="up">
                        <h2>Ready to Experience the Difference?</h2>
                        <p className="mt-4 text-soft-gray max-w-xl mx-auto">
                            Book your consultation to meet with me, discuss your goals, and see what
                            personalized permanent artistry can do for you.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button href="/booking" size="lg">Book a Consultation</Button>
                            <Button href="/gallery" size="lg" variant="outline">View My Work</Button>
                        </div>
                    </AnimatedSection>
                </div>
            </Section>
        </>
    );
}
