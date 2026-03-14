import type { Metadata } from 'next';
import { Section } from '@/components/ui/section';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    title: 'Policies',
    description: 'Studio policies for Inked Permanent Artistry — including booking, cancellation, deposits, health requirements, and no-show policies.',
};

const policies = [
    {
        title: 'General Requirements',
        items: [
            'Must be 18+ for tattoos or permanent makeup.',
            'Cannot be pregnant or nursing.',
            'Must bring valid photo ID for verification of age.',
            'Please review our contraindications guide to ensure you\'re a good candidate for your desired service.',
        ],
    },
    {
        title: 'Booking & Deposits',
        items: [
            'A non-refundable booking fee is required to secure your appointment.',
            'Booking fees are transferable one time if rescheduled at least 48 hours prior.',
            'Only one reschedule per appointment is allowed — a new fee applies for any further changes.',
        ],
    },
    {
        title: 'Cancellations',
        items: [
            'Cancellations must be made 48 hours prior to avoid a cancellation fee.',
            'Late cancellations (under 48 hours) are subject to a 50% charge of the service cost.',
            'There is a 15-minute grace period — please call or text if running late.',
            'Arrivals beyond 15 minutes may require rescheduling and a new booking fee.',
        ],
    },
    {
        title: 'No Call / No Show',
        items: [
            'No call / no show clients will be charged 100% of the service cost.',
            'This may result in being permanently banned from future bookings.',
            'There are absolutely no refunds under any circumstances.',
        ],
    },
    {
        title: 'Touch-Up Sessions',
        items: [
            'An initial touch-up (6–8 weeks post-procedure) is included with most PMU services.',
            'Must be completed within 12 weeks — after which a new session fee applies.',
            'Annual color refresh touch-ups available at a reduced rate for returning clients.',
        ],
    },
    {
        title: 'Results & Expectations',
        items: [
            'Results vary based on skin type, lifestyle, aftercare, and individual healing.',
            'We customize every service but exact color and retention cannot be guaranteed.',
            'Proper pre-care and post-care are essential for optimal results.',
        ],
    },
];

export default function PoliciesPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-40 pb-16 md:pt-44 md:pb-20 bg-gradient-to-b from-cream to-warm-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <AnimatedSection direction="up">
                        <p className="label-elegant mb-5">Studio Policies</p>
                        <h1>Our <span className="italic">Policies</span></h1>
                        <div className="section-divider mt-6 mb-6" />
                        <p className="mt-4 max-w-xl mx-auto text-soft-gray leading-relaxed">
                            These policies allow me to give each client the attention, care, and artistry
                            they deserve. Please review before booking your appointment.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Policies Grid */}
            <Section spacious>
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {policies.map((policy, i) => (
                            <AnimatedSection key={i} direction="up" delay={i * 0.05}>
                                <div className="p-8 bg-cream/40 rounded-sm border border-border/30 h-full">
                                    <h3 className="font-serif text-lg mb-5 text-espresso">{policy.title}</h3>
                                    <ul className="space-y-3">
                                        {policy.items.map((item, j) => (
                                            <li key={j} className="flex items-start gap-3 text-[13px] text-soft-gray leading-relaxed">
                                                <span className="w-1 h-1 bg-rose-gold rounded-full mt-2 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Agreement */}
            <section className="py-12">
                <div className="mx-auto max-w-2xl px-6 lg:px-8">
                    <AnimatedSection direction="up">
                        <div className="p-10 bg-espresso rounded-sm text-center">
                            <p className="text-warm-white/80 text-sm leading-relaxed italic font-serif">
                                &ldquo;By booking, you acknowledge and agree to all Inked Permanent Artistry LLC
                                policies and cancellation terms.&rdquo;
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* CTA */}
            <Section spacious>
                <div className="text-center">
                    <AnimatedSection direction="up">
                        <p className="label-elegant mb-4">Questions?</p>
                        <h2>Ready to <span className="italic">Book</span>?</h2>
                        <p className="mt-4 text-soft-gray max-w-md mx-auto">
                            Feel free to reach out with any questions before your appointment.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button href="/booking" size="lg">Book Now</Button>
                            <Button href="/contact" size="lg" variant="outline">Contact Me</Button>
                        </div>
                    </AnimatedSection>
                </div>
            </Section>
        </>
    );
}
