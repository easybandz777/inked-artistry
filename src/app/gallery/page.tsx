'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/ui/section';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Badge } from '@/components/ui/badge';
import { Lightbox } from '@/components/ui/lightbox';
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '@/content/gallery';
import { cn } from '@/lib/utils';

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const filtered = activeCategory === 'All'
        ? GALLERY_ITEMS
        : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

    const lightboxImages = filtered.map((item) => ({
        src: item.image || item.afterImage || '',
        alt: item.title,
        caption: item.caption,
    }));

    return (
        <>
            {/* Hero */}
            <section className="relative py-20 md:py-28 bg-gradient-to-b from-cream to-warm-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <AnimatedSection direction="up">
                        <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-rose-gold mb-4">Results</p>
                        <h1>Our <span className="italic">Gallery</span></h1>
                        <p className="mt-4 max-w-2xl mx-auto text-soft-gray">
                            Browse real results from real clients. Every transformation showcases precision artistry,
                            natural enhancement, and confidence-building outcomes.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <Section spacious>
                {/* Category Filters */}
                <AnimatedSection direction="fade">
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
                        {GALLERY_CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={cn(
                                    'font-sans text-xs uppercase tracking-[0.15em] px-5 py-2.5 rounded-sm transition-all duration-300 cursor-pointer',
                                    activeCategory === cat
                                        ? 'bg-charcoal text-warm-white'
                                        : 'bg-cream text-soft-gray hover:bg-blush hover:text-charcoal'
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </AnimatedSection>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filtered.map((item, i) => (
                        <AnimatedSection key={item.id} direction="fade" delay={i * 0.05}>
                            <div
                                onClick={() => { setLightboxIndex(i); setLightboxOpen(true); }}
                                className="group relative cursor-pointer"
                            >
                                {item.type === 'before-after' ? (
                                    <div className="grid grid-cols-2 gap-0.5">
                                        <div className="aspect-square bg-gradient-to-br from-taupe-light/30 to-cream rounded-l-sm flex items-center justify-center">
                                            <span className="text-[10px] text-taupe/50 uppercase tracking-widest">Before</span>
                                        </div>
                                        <div className="aspect-square bg-gradient-to-br from-cream to-blush rounded-r-sm flex items-center justify-center">
                                            <span className="text-[10px] text-taupe/50 uppercase tracking-widest">After</span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="aspect-square bg-gradient-to-br from-cream to-blush rounded-sm flex items-center justify-center">
                                        <span className="font-serif text-lg text-taupe/30 italic">{item.category}</span>
                                    </div>
                                )}

                                {/* Top badge */}
                                <div className="absolute top-2 right-2">
                                    <Badge variant={item.type === 'healed' ? 'accent' : item.type === 'fresh' ? 'dark' : 'outline'}>
                                        {item.type}
                                    </Badge>
                                </div>

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/50 transition-all duration-300 rounded-sm flex items-end p-3">
                                    <div className="transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <p className="text-warm-white text-xs font-medium">{item.title}</p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </Section>

            <Lightbox
                images={lightboxImages}
                initialIndex={lightboxIndex}
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
            />
        </>
    );
}
