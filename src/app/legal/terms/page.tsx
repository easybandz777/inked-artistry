import type { Metadata } from 'next';
import { Section } from '@/components/ui/section';
import { AnimatedSection } from '@/components/ui/animated-section';
import { SITE_CONFIG } from '@/content/site-config';

export const metadata: Metadata = { title: 'Terms of Service' };

export default function TermsPage() {
    return (
        <>
            <section className="relative py-20 md:py-28 bg-gradient-to-b from-cream to-warm-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <AnimatedSection direction="up">
                        <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-rose-gold mb-4">Legal</p>
                        <h1>Terms of Service</h1>
                    </AnimatedSection>
                </div>
            </section>
            <Section spacious>
                <div className="max-w-3xl mx-auto prose prose-sm prose-stone">
                    <AnimatedSection direction="up">
                        <p className="text-xs text-soft-gray uppercase tracking-wider mb-8">Last updated: March 2025</p>
                        <h2 className="font-serif text-xl mb-4">1. Agreement to Terms</h2>
                        <p className="text-sm text-soft-gray leading-relaxed mb-6">By accessing or using the {SITE_CONFIG.name} website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
                        <h2 className="font-serif text-xl mb-4">2. Services</h2>
                        <p className="text-sm text-soft-gray leading-relaxed mb-6">{SITE_CONFIG.name} provides permanent makeup and beauty artistry services, training programs, and related educational content. All services are performed by appointment only and subject to consultation and health screening.</p>
                        <h2 className="font-serif text-xl mb-4">3. Appointments & Payment</h2>
                        <p className="text-sm text-soft-gray leading-relaxed mb-6">Deposits and payments are processed through our booking system. By booking, you acknowledge our cancellation and deposit policies. All pricing is subject to change without prior notice.</p>
                        <h2 className="font-serif text-xl mb-4">4. Limitation of Liability</h2>
                        <p className="text-sm text-soft-gray leading-relaxed mb-6">{SITE_CONFIG.name} is not liable for results that vary due to individual skin characteristics, healing differences, or failure to follow pre-care or post-care instructions.</p>
                        <h2 className="font-serif text-xl mb-4">5. Intellectual Property</h2>
                        <p className="text-sm text-soft-gray leading-relaxed mb-6">All content, images, and materials on this website are the property of {SITE_CONFIG.name} and may not be reproduced without written permission.</p>
                        <h2 className="font-serif text-xl mb-4">6. Changes to Terms</h2>
                        <p className="text-sm text-soft-gray leading-relaxed mb-6">We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of updated terms.</p>
                        <h2 className="font-serif text-xl mb-4">7. Contact</h2>
                        <p className="text-sm text-soft-gray leading-relaxed">For questions regarding these terms, please contact us at {SITE_CONFIG.email}.</p>
                    </AnimatedSection>
                </div>
            </Section>
        </>
    );
}
