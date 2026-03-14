'use client';

import { AnimatedSection } from '@/components/ui/animated-section';
import { Award, Star, Shield, Heart } from 'lucide-react';

const trustItems = [
    { icon: Star, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '8+', label: 'Years Experience' },
    { icon: Shield, value: '100%', label: 'Sterile Practice' },
    { icon: Heart, value: '5.0', label: 'Average Rating' },
];

export function TrustBand() {
    return (
        <section className="py-12 bg-cream border-y border-border/50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <AnimatedSection direction="fade">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {trustItems.map((item, i) => (
                            <div key={i} className="text-center">
                                <item.icon className="h-5 w-5 mx-auto mb-3 text-rose-gold" />
                                <p className="font-serif text-2xl text-espresso">{item.value}</p>
                                <p className="font-sans text-xs uppercase tracking-[0.15em] text-soft-gray mt-1">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
