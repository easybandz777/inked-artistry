import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/section';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Button } from '@/components/ui/button';
import { SERVICES } from '@/content/services';
import { formatPrice } from '@/lib/utils';

export const metadata: Metadata = {
    title: 'Services',
    description: 'Explore our full range of premium permanent makeup and beauty artistry services — permanent brows, lip blush, fine-line tattoos, tiny tattoos, and lash enhancement.',
};

export default function ServicesPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-40 pb-16 md:pt-44 md:pb-20 bg-gradient-to-b from-cream to-warm-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <AnimatedSection direction="up">
                        <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-rose-gold mb-4">Our Services</p>
                        <h1>Premium Beauty, <span className="italic">Perfected</span></h1>
                        <p className="mt-4 max-w-2xl mx-auto text-soft-gray">
                            Each service is a bespoke experience — tailored to your unique features, goals, and lifestyle.
                            Explore our offerings and find the transformation that speaks to you.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <Section spacious>
                <div className="space-y-20">
                    {SERVICES.map((service, i) => (
                        <AnimatedSection key={service.slug} direction="up" delay={0.1}>
                            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center`}>
                                {/* Image */}
                                <div className={`relative aspect-[4/3] rounded-sm overflow-hidden shadow-xl ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                                    {service.heroImage ? (
                                        <Image
                                            src={service.heroImage}
                                            alt={service.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 bg-gradient-to-br from-cream to-blush flex items-center justify-center">
                                            <span className="font-serif text-4xl text-taupe/30 italic">{service.shortTitle}</span>
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/20 to-transparent" />
                                </div>

                                {/* Content */}
                                <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                                    <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-rose-gold mb-3">
                                        {service.shortTitle}
                                    </p>
                                    <h2 className="font-serif text-2xl mb-3">{service.title}</h2>
                                    <p className="text-soft-gray leading-relaxed mb-6">{service.description}</p>

                                    <div className="flex items-center gap-6 mb-6 text-sm">
                                        <span className="text-charcoal font-medium">From {formatPrice(service.pricingStart)}</span>
                                        <span className="w-1 h-1 bg-taupe rounded-full" />
                                        <span className="text-soft-gray">{service.duration}</span>
                                    </div>

                                    <Button href={`/services/${service.slug}`} variant="outline" size="sm">
                                        Learn More & Book <ArrowRight className="ml-2 h-3 w-3" />
                                    </Button>
                                </div>
                            </div>

                            {i < SERVICES.length - 1 && <div className="section-divider mt-20" />}
                        </AnimatedSection>
                    ))}
                </div>
            </Section>

            {/* CTA */}
            <Section variant="alternate" spacious>
                <div className="text-center">
                    <AnimatedSection direction="up">
                        <h2>Not Sure Which Service Is Right for You?</h2>
                        <p className="mt-4 text-soft-gray max-w-xl mx-auto">
                            Book a complimentary consultation and I&apos;ll help you determine the best approach for your unique features and goals.
                        </p>
                        <div className="mt-8">
                            <Button href="/booking" size="lg">Book a Consultation</Button>
                        </div>
                    </AnimatedSection>
                </div>
            </Section>
        </>
    );
}
