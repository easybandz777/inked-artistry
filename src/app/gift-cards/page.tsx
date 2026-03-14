import type { Metadata } from 'next';
import { Section } from '@/components/ui/section';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Gift, Heart, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Gift Cards',
    description: 'Give the gift of confidence. Purchase a premium gift card for permanent makeup services at Inked Permanent Artistry.',
};

export default function GiftCardsPage() {
    return (
        <>
            <section className="relative py-24 md:py-32 bg-gradient-to-b from-cream via-blush/20 to-warm-white overflow-hidden">
                <div className="absolute top-1/3 right-0 w-96 h-96 bg-rose-gold/5 rounded-full blur-3xl" />
                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <AnimatedSection direction="up">
                        <Gift className="h-10 w-10 text-rose-gold mx-auto mb-6" />
                        <h1>Give the Gift of <span className="italic">Confidence</span></h1>
                        <p className="mt-4 max-w-2xl mx-auto text-soft-gray">
                            Treat someone special to a premium permanent makeup experience. Our gift cards can be used for any service — from consultations to full procedures.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <Section spacious>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
                    {[
                        { icon: Gift, title: 'Any Amount', description: 'Choose any dollar amount for your gift card — from a consultation to a full service package.' },
                        { icon: Heart, title: 'Perfect for Any Occasion', description: 'Birthdays, holidays, milestones, or just because. Give a gift that truly transforms.' },
                        { icon: Sparkles, title: 'Beautiful Presentation', description: 'Each gift card comes with premium digital or physical presentation options.' },
                    ].map((item, i) => (
                        <AnimatedSection key={i} direction="up" delay={i * 0.1}>
                            <Card className="text-center">
                                <item.icon className="h-6 w-6 text-rose-gold mx-auto mb-4" />
                                <h3 className="font-serif text-lg mb-2">{item.title}</h3>
                                <p className="text-sm text-soft-gray">{item.description}</p>
                            </Card>
                        </AnimatedSection>
                    ))}
                </div>

                <AnimatedSection direction="up" delay={0.2}>
                    <div className="max-w-lg mx-auto text-center">
                        <div className="bg-gradient-to-br from-cream to-blush rounded-sm p-12 mb-8">
                            <p className="font-serif text-3xl text-espresso italic mb-2">Gift Card</p>
                            <p className="text-xs uppercase tracking-[0.3em] text-rose-gold">Inked Permanent Artistry</p>
                        </div>
                        <Button href={`#`} size="lg" variant="primary" className="w-full md:w-auto">
                            Purchase a Gift Card
                        </Button>
                        <p className="text-xs text-soft-gray mt-4">Processed securely through Square. Available in any denomination.</p>
                    </div>
                </AnimatedSection>
            </Section>
        </>
    );
}
