'use client';

import { Section, SectionHeader } from '@/components/ui/section';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Palette, Shield, Heart, Eye, Sparkles, UserCheck } from 'lucide-react';

const reasons = [
    { icon: Palette, title: 'Bespoke Artistry', description: 'Every service is custom-designed to complement your unique features, skin tone, and personal aesthetic.' },
    { icon: Shield, title: 'Clinical Standards', description: 'Hospital-grade sterilization, single-use tools, and strict sanitation protocols for your safety and peace of mind.' },
    { icon: Heart, title: 'Genuine Care', description: 'We invest time in understanding your goals, concerns, and expectations before ever picking up a tool.' },
    { icon: Eye, title: 'Detail-Obsessed', description: 'From brow mapping to pigment selection to stroke placement — every detail is intentional and precise.' },
    { icon: Sparkles, title: 'Natural Results', description: 'Our philosophy is enhancement, not alteration. Results that make people notice you, not your makeup.' },
    { icon: UserCheck, title: 'Full Transparency', description: 'Honest pricing, realistic expectations, thorough consultations, and no pressure — ever.' },
];

export function WhyChoose() {
    return (
        <Section spacious>
            <SectionHeader
                label="Why Inked"
                title="Why Clients Choose Us"
                description="Premium permanent makeup is an investment in yourself. Here is what sets our studio apart."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {reasons.map((item, i) => (
                    <AnimatedSection key={i} direction="up" delay={i * 0.08}>
                        <div className="text-center group">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blush mb-5 group-hover:bg-rose-gold/10 transition-colors duration-300">
                                <item.icon className="h-6 w-6 text-rose-gold" />
                            </div>
                            <h3 className="font-serif text-lg mb-2">{item.title}</h3>
                            <p className="text-sm text-soft-gray leading-relaxed">{item.description}</p>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </Section>
    );
}
