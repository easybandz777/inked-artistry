'use client';

import Image from 'next/image';
import { Section, SectionHeader } from '@/components/ui/section';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Button } from '@/components/ui/button';

const RESULTS = [
    { src: '/images/Inked_2_1724378681.webp', title: 'Brow Transformation', caption: 'Before & after — natural enhancement', category: 'Brows' },
    { src: '/images/inked4.webp', title: 'Lip Blush Results', caption: 'Before & after — soft, natural tint', category: 'Lip Blush' },
    { src: '/images/inked5.webp', title: 'Permanent Brows', caption: 'Enhanced natural beauty', category: 'Brows' },
    { src: '/images/inked6.webp', title: 'Lip Blush Artistry', caption: 'Naturally flushed, defined lips', category: 'Lip Blush' },
    { src: '/images/inked8.webp', title: 'Fine-Line Tattoo', caption: 'Delicate floral fine-line work', category: 'Fine-Line' },
    { src: '/images/inked7.webp', title: 'Tiny Tattoo', caption: 'Dainty heart — minimal, meaningful', category: 'Tiny Tattoos' },
];

export function ResultsPreview() {
    return (
        <Section variant="alternate" spacious>
            <SectionHeader
                label="Results"
                title="Real Results, Real Confidence"
                description="Every transformation is unique. Browse real photos that showcase the precision, artistry, and natural beauty of my work."
            />

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {RESULTS.map((item, i) => (
                    <AnimatedSection key={i} direction="fade" delay={i * 0.08}>
                        <div className="group relative aspect-square rounded-sm overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300">
                            <Image
                                src={item.src}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 768px) 50vw, 33vw"
                            />

                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/60 transition-all duration-300 flex items-end p-4">
                                <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <p className="text-xs text-rose-gold-light font-sans font-medium uppercase tracking-wider mb-1">{item.category}</p>
                                    <p className="text-warm-white text-sm font-medium">{item.title}</p>
                                    <p className="text-warm-white/70 text-xs mt-1">{item.caption}</p>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                ))}
            </div>

            <AnimatedSection direction="up" delay={0.3}>
                <div className="text-center mt-10">
                    <Button href="/gallery" variant="outline">
                        View Full Gallery
                    </Button>
                </div>
            </AnimatedSection>
        </Section>
    );
}
