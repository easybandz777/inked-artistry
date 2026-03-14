'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/section';
import { AnimatedSection } from '@/components/ui/animated-section';
import { SERVICES } from '@/content/services';
import { formatPrice } from '@/lib/utils';

export function ServicesPreview() {
    return (
        <Section spacious>
            <SectionHeader
                label="Our Services"
                title="Precision-Crafted Beauty"
                description="Every service is tailored to your unique features, skin type, and aesthetic goals. No two results look the same — because no two faces are the same."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SERVICES.map((service, i) => (
                    <AnimatedSection key={service.slug} direction="up" delay={i * 0.1}>
                        <Link href={`/services/${service.slug}`} className="group block">
                            <div className="relative bg-white rounded-sm border border-border/50 overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(26,26,26,0.08)] hover:-translate-y-1">
                                {/* Image */}
                                <div className="relative h-56 overflow-hidden">
                                    {service.heroImage ? (
                                        <Image
                                            src={service.heroImage}
                                            alt={service.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 bg-gradient-to-br from-cream to-blush flex items-center justify-center">
                                            <span className="font-serif text-3xl text-taupe/40 italic">{service.shortTitle}</span>
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/20 to-transparent" />
                                </div>

                                <div className="p-6">
                                    <h3 className="font-serif text-xl mb-2 group-hover:text-rose-gold transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-soft-gray leading-relaxed mb-4">
                                        {service.tagline}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-soft-gray uppercase tracking-wider">
                                            From {formatPrice(service.pricingStart)}
                                        </span>
                                        <span className="flex items-center gap-1 text-xs text-rose-gold font-sans font-medium uppercase tracking-wider group-hover:gap-2 transition-all">
                                            Learn More <ArrowRight className="h-3 w-3" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </AnimatedSection>
                ))}
            </div>
        </Section>
    );
}
