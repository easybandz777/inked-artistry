import type { Metadata } from 'next';
import { Section } from '@/components/ui/section';
import { AnimatedSection } from '@/components/ui/animated-section';
import { SITE_CONFIG } from '@/content/site-config';

export const metadata: Metadata = { title: 'Privacy Policy' };

export default function PrivacyPage() {
    return (
        <>
            <section className="relative py-20 md:py-28 bg-gradient-to-b from-cream to-warm-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <AnimatedSection direction="up">
                        <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-rose-gold mb-4">Legal</p>
                        <h1>Privacy Policy</h1>
                    </AnimatedSection>
                </div>
            </section>
            <Section spacious>
                <div className="max-w-3xl mx-auto">
                    <AnimatedSection direction="up">
                        <p className="text-xs text-soft-gray uppercase tracking-wider mb-8">Last updated: March 2025</p>
                        <h2 className="font-serif text-xl mb-4">Information We Collect</h2>
                        <p className="text-sm text-soft-gray leading-relaxed mb-6">We collect personal information that you voluntarily provide, including name, email, phone number, and health-related information necessary for performing our services safely.</p>
                        <h2 className="font-serif text-xl mb-4">How We Use Your Information</h2>
                        <p className="text-sm text-soft-gray leading-relaxed mb-6">Your information is used to provide and improve our services, communicate with you about appointments, send relevant updates, and ensure medical safety during procedures.</p>
                        <h2 className="font-serif text-xl mb-4">Data Protection</h2>
                        <p className="text-sm text-soft-gray leading-relaxed mb-6">We implement appropriate security measures to protect your personal data. Health-related information is stored securely and accessed only by authorized personnel.</p>
                        <h2 className="font-serif text-xl mb-4">Third-Party Sharing</h2>
                        <p className="text-sm text-soft-gray leading-relaxed mb-6">We do not sell your personal information. We may share data with trusted service providers (booking platforms, payment processors) as necessary to deliver our services.</p>
                        <h2 className="font-serif text-xl mb-4">Your Rights</h2>
                        <p className="text-sm text-soft-gray leading-relaxed mb-6">You have the right to access, correct, or request deletion of your personal data. Contact us at {SITE_CONFIG.email} to exercise these rights.</p>
                        <h2 className="font-serif text-xl mb-4">Contact</h2>
                        <p className="text-sm text-soft-gray leading-relaxed">For privacy-related inquiries, contact us at {SITE_CONFIG.email}.</p>
                    </AnimatedSection>
                </div>
            </Section>
        </>
    );
}
