import type { Metadata } from 'next';
import { Section } from '@/components/ui/section';
import { AnimatedSection } from '@/components/ui/animated-section';
import { SITE_CONFIG } from '@/content/site-config';

export const metadata: Metadata = { title: 'Disclaimer' };

export default function DisclaimerPage() {
    return (
        <>
            <section className="relative py-20 md:py-28 bg-gradient-to-b from-cream to-warm-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <AnimatedSection direction="up">
                        <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-rose-gold mb-4">Legal</p>
                        <h1>Disclaimer</h1>
                    </AnimatedSection>
                </div>
            </section>
            <Section spacious>
                <div className="max-w-3xl mx-auto">
                    <AnimatedSection direction="up">
                        <p className="text-xs text-soft-gray uppercase tracking-wider mb-8">Last updated: March 2025</p>
                        <h2 className="font-serif text-xl mb-4">General Disclaimer</h2>
                        <p className="text-sm text-soft-gray leading-relaxed mb-6">The information provided on this website is for general informational purposes only. It is not intended as medical advice and should not replace professional consultation with a licensed healthcare provider.</p>
                        <h2 className="font-serif text-xl mb-4">Results Disclaimer</h2>
                        <p className="text-sm text-soft-gray leading-relaxed mb-6">Individual results from permanent makeup procedures vary based on skin type, skin condition, lifestyle, healing response, and aftercare compliance. Photos and testimonials reflect individual experiences and do not guarantee identical outcomes.</p>
                        <h2 className="font-serif text-xl mb-4">Training Disclaimer</h2>
                        <p className="text-sm text-soft-gray leading-relaxed mb-6">Completion of our training programs results in a certificate of completion and does not constitute licensure, certification, or authorization to practice in any jurisdiction. Licensing and regulatory requirements vary by state and locality. Students are responsible for understanding and meeting the requirements of their area.</p>
                        <h2 className="font-serif text-xl mb-4">Contact</h2>
                        <p className="text-sm text-soft-gray leading-relaxed">Questions about this disclaimer may be directed to {SITE_CONFIG.email}.</p>
                    </AnimatedSection>
                </div>
            </Section>
        </>
    );
}
