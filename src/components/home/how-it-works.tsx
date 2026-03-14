'use client';

import { Section, SectionHeader } from '@/components/ui/section';
import { AnimatedSection } from '@/components/ui/animated-section';

const steps = [
    { number: '01', title: 'Consultation', description: 'We begin with a thorough consultation to understand your goals, assess your skin, and create a custom design plan tailored to your features.' },
    { number: '02', title: 'Appointment', description: 'On the day of your procedure, we review your design, apply numbing for comfort, and carefully execute your custom treatment with precision.' },
    { number: '03', title: 'Healing', description: 'Your results will evolve over 4–6 weeks as your skin heals. We provide detailed aftercare guidance to ensure the best possible outcome.' },
    { number: '04', title: 'Perfecting Touch-Up', description: 'A follow-up appointment allows us to refine shape, density, and color — ensuring your results are absolutely flawless.' },
];

export function HowItWorks() {
    return (
        <Section variant="alternate" spacious>
            <SectionHeader
                label="The Process"
                title="How It Works"
                description="A seamless, care-driven experience from first consultation to final result."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, i) => (
                    <AnimatedSection key={i} direction="up" delay={i * 0.12}>
                        <div className="relative">
                            {/* Connector line (desktop) */}
                            {i < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-8 left-[60%] w-full h-px bg-border" />
                            )}

                            <div className="relative z-10">
                                <span className="font-serif text-4xl text-rose-gold/20">{step.number}</span>
                                <h3 className="font-serif text-lg mt-3 mb-2">{step.title}</h3>
                                <p className="text-sm text-soft-gray leading-relaxed">{step.description}</p>
                            </div>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </Section>
    );
}
