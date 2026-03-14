import type { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/ui/section';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Droplets, Sun, Scissors } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Pre-Care & Post-Care',
    description: 'Essential preparation and aftercare instructions for your permanent makeup appointment. Follow these guidelines for the best possible results.',
};

const preCareItems = [
    'Avoid blood thinners (aspirin, ibuprofen, fish oil, vitamin E) for 48–72 hours prior',
    'No alcohol consumption for 24 hours before your appointment',
    'Avoid caffeine the morning of your procedure',
    'Do not wax, thread, or tint your brows for 1 week before',
    'Avoid chemical peels, retinols, or AHAs on the treatment area for 2 weeks prior',
    'Do not tan or get sunburned before your appointment',
    'Arrive with clean skin — no makeup on the treatment area',
    'If you have a history of cold sores (for lip procedures), start antivirals 3 days prior',
    'Eat a meal before arriving — low blood sugar can increase sensitivity',
    'Inform your artist of any medical changes, medications, or skin conditions',
];

const postCareItems = [
    'Keep the treated area dry for 10 days — avoid water, sweat, and steam',
    'Apply the provided aftercare balm as directed (thin, light layer)',
    'Do not pick, scratch, or peel any flaking skin',
    'Avoid makeup on or near the treated area for 10–14 days',
    'Sleep on your back to avoid friction on the treated area',
    'Avoid swimming pools, hot tubs, saunas, and steam rooms for 2 weeks',
    'No intense exercise or sweating for 10 days',
    'Avoid direct sun exposure — use SPF 30+ once fully healed',
    'Skip retinols, AHAs, BHAs, and exfoliants near the area until fully healed',
    'Attend your scheduled touch-up appointment (6–8 weeks after)',
];

export default function CarePage() {
    return (
        <>
            <section className="relative py-20 md:py-28 bg-gradient-to-b from-cream to-warm-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <AnimatedSection direction="up">
                        <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-rose-gold mb-4">Care Instructions</p>
                        <h1>Pre-Care & <span className="italic">Post-Care</span></h1>
                        <p className="mt-4 max-w-2xl mx-auto text-soft-gray">
                            Proper preparation and aftercare are essential for achieving the best possible results from your permanent makeup procedure.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Important Notice */}
            <Section>
                <AnimatedSection direction="up">
                    <div className="max-w-3xl mx-auto bg-blush/50 border border-rose-gold/20 rounded-sm p-6 flex items-start gap-4">
                        <AlertTriangle className="h-5 w-5 text-rose-gold shrink-0 mt-0.5" />
                        <div>
                            <p className="font-sans text-sm font-medium text-charcoal mb-1">Important</p>
                            <p className="text-sm text-soft-gray leading-relaxed">
                                Following these guidelines closely will directly impact the quality, longevity, and healing of your results.
                                These instructions apply to most PMU services — your artist will provide any service-specific adjustments during your appointment.
                            </p>
                        </div>
                    </div>
                </AnimatedSection>
            </Section>

            {/* Pre-Care */}
            <Section spacious>
                <SectionHeader label="Before Your Appointment" title="Pre-Care Instructions" description="Prepare your skin and body for the best possible procedure experience and outcome." />
                <div className="max-w-3xl mx-auto space-y-3">
                    {preCareItems.map((item, i) => (
                        <AnimatedSection key={i} direction="left" delay={i * 0.04}>
                            <div className="flex items-start gap-4 p-4 bg-cream rounded-sm">
                                <span className="w-6 h-6 rounded-full bg-blush flex items-center justify-center text-xs font-medium text-rose-gold shrink-0">{i + 1}</span>
                                <p className="text-sm text-charcoal">{item}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </Section>

            {/* Post-Care */}
            <Section variant="alternate" spacious>
                <SectionHeader label="After Your Procedure" title="Post-Care Instructions" description="Proper aftercare is critical for pigment retention, color accuracy, and clean healing." />
                <div className="max-w-3xl mx-auto space-y-3">
                    {postCareItems.map((item, i) => (
                        <AnimatedSection key={i} direction="left" delay={i * 0.04}>
                            <div className="flex items-start gap-4 p-4 bg-white rounded-sm border border-border/50">
                                <span className="w-6 h-6 rounded-full bg-blush flex items-center justify-center text-xs font-medium text-rose-gold shrink-0">{i + 1}</span>
                                <p className="text-sm text-charcoal">{item}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </Section>

            {/* Healing Timeline */}
            <Section spacious>
                <SectionHeader label="What to Expect" title="Healing Timeline" />
                <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { icon: Droplets, period: 'Days 1–3', title: 'Initial Healing', description: 'Color will appear dark and bold. Some redness and minor swelling is normal. Keep area clean and dry.' },
                        { icon: Scissors, period: 'Days 4–7', title: 'Flaking Stage', description: 'Light flaking or peeling begins. Do not pick — let the skin shed naturally. Color may appear patchy.' },
                        { icon: Sun, period: 'Weeks 2–3', title: 'Ghosting Phase', description: 'Color may appear very light or faded. This is completely normal — the pigment is settling beneath the surface.' },
                        { icon: AlertTriangle, period: 'Weeks 4–6', title: 'Final Result', description: 'True healed color emerges. Shape and density become clear. Touch-up can now be scheduled to perfect any areas.' },
                    ].map((stage, i) => (
                        <AnimatedSection key={i} direction="up" delay={i * 0.1}>
                            <div className="bg-cream rounded-sm p-6">
                                <stage.icon className="h-5 w-5 text-rose-gold mb-3" />
                                <p className="text-xs uppercase tracking-wider text-rose-gold mb-1">{stage.period}</p>
                                <h3 className="font-serif text-lg mb-2">{stage.title}</h3>
                                <p className="text-sm text-soft-gray leading-relaxed">{stage.description}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </Section>

            <Section variant="alternate" spacious>
                <div className="text-center">
                    <AnimatedSection direction="up">
                        <h2>Questions About Your Care?</h2>
                        <p className="mt-4 text-soft-gray max-w-xl mx-auto">
                            Do not hesitate to reach out if you have any concerns during your healing process.
                        </p>
                        <div className="mt-8">
                            <Button href="/contact" size="lg">Contact Us</Button>
                        </div>
                    </AnimatedSection>
                </div>
            </Section>
        </>
    );
}
