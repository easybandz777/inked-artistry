'use client';

import { AnimatedSection } from '@/components/ui/animated-section';
import { Button } from '@/components/ui/button';

export function FinalCTA() {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-cream via-blush/30 to-warm-white" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-rose-gold/5 rounded-full blur-3xl" />

            {/* Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.02]">
                <span className="font-serif text-[16rem] text-espresso leading-none">A</span>
            </div>

            <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8 text-center">
                <AnimatedSection direction="up">
                    <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-rose-gold mb-4">
                        Ready to Begin?
                    </p>
                    <h2>
                        Your Confidence <span className="italic">Transformation</span> Starts Here
                    </h2>
                    <p className="mt-4 text-soft-gray leading-relaxed">
                        Whether you are ready to book your permanent makeup appointment or explore a career
                        in beauty artistry — we are here to guide you every step of the way.
                    </p>
                </AnimatedSection>

                <AnimatedSection direction="up" delay={0.15}>
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button href="/booking" size="lg" variant="primary">
                            Book Your Appointment
                        </Button>
                        <Button href="/academy/apply" size="lg" variant="secondary">
                            Apply for Training
                        </Button>
                    </div>
                </AnimatedSection>

                <AnimatedSection direction="fade" delay={0.3}>
                    <div className="mt-8 flex items-center justify-center gap-6 text-xs text-soft-gray">
                        <a href="/academy/waitlist" className="hover:text-rose-gold transition-colors underline underline-offset-4 decoration-border">
                            Join Waitlist
                        </a>
                        <span className="w-1 h-1 bg-border rounded-full" />
                        <a href="/contact" className="hover:text-rose-gold transition-colors underline underline-offset-4 decoration-border">
                            Contact Studio
                        </a>
                        <span className="w-1 h-1 bg-border rounded-full" />
                        <a href="/gift-cards" className="hover:text-rose-gold transition-colors underline underline-offset-4 decoration-border">
                            Gift Cards
                        </a>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
