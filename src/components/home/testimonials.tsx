'use client';

import { useState } from 'react';
import { Section, SectionHeader } from '@/components/ui/section';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '@/content/testimonials';

export function Testimonials() {
    const [current, setCurrent] = useState(0);

    const goNext = () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    const goPrev = () => setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

    return (
        <Section spacious>
            <SectionHeader
                label="Client Love"
                title="Words That Mean Everything"
                description="Real experiences from real clients who trusted us with their confidence."
            />

            <AnimatedSection direction="fade">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Stars */}
                    <div className="flex items-center justify-center gap-1 mb-6">
                        {Array.from({ length: TESTIMONIALS[current].rating }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-rose-gold text-rose-gold" />
                        ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="font-serif text-xl md:text-2xl text-charcoal leading-relaxed italic">
                        &ldquo;{TESTIMONIALS[current].quote}&rdquo;
                    </blockquote>

                    {/* Attribution */}
                    <div className="mt-6">
                        <p className="font-sans text-sm font-medium text-espresso">{TESTIMONIALS[current].name}</p>
                        <p className="font-sans text-xs text-soft-gray uppercase tracking-wider mt-1">{TESTIMONIALS[current].service}</p>
                    </div>

                    {/* Navigation */}
                    <div className="mt-8 flex items-center justify-center gap-4">
                        <button onClick={goPrev} className="p-2 text-soft-gray hover:text-charcoal transition-colors cursor-pointer">
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <div className="flex gap-2">
                            {TESTIMONIALS.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${i === current ? 'bg-rose-gold w-6' : 'bg-taupe-light'
                                        }`}
                                />
                            ))}
                        </div>
                        <button onClick={goNext} className="p-2 text-soft-gray hover:text-charcoal transition-colors cursor-pointer">
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </AnimatedSection>
        </Section>
    );
}
