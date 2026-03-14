import type { Metadata } from 'next';
import { Section } from '@/components/ui/section';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Accordion } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { FAQS } from '@/content/faqs';

export const metadata: Metadata = {
    title: 'FAQs',
    description: 'Get answers to frequently asked questions about permanent makeup services, the process, healing, safety, and our academy training programs.',
};

export default function FAQsPage() {
    const categories = [...new Set(FAQS.map((f) => f.category).filter(Boolean))] as string[];

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: FAQS.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero */}
            <section className="relative py-20 md:py-28 bg-gradient-to-b from-cream to-warm-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <AnimatedSection direction="up">
                        <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-rose-gold mb-4">FAQs</p>
                        <h1>Frequently Asked <span className="italic">Questions</span></h1>
                        <p className="mt-4 max-w-2xl mx-auto text-soft-gray">
                            Everything you need to know about our services, process, and training programs. If your question is not answered here, feel free to reach out.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <Section spacious>
                <div className="max-w-3xl mx-auto space-y-12">
                    {categories.map((category) => (
                        <AnimatedSection key={category} direction="up">
                            <div>
                                <h2 className="font-serif text-xl mb-6">{category}</h2>
                                <Accordion items={FAQS.filter((f) => f.category === category)} />
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </Section>

            {/* CTA */}
            <Section variant="alternate" spacious>
                <div className="text-center">
                    <AnimatedSection direction="up">
                        <h2>Still Have Questions?</h2>
                        <p className="mt-4 text-soft-gray max-w-xl mx-auto">
                            We are happy to answer any other questions. Book a consultation or reach out directly.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button href="/contact" size="lg">Contact Us</Button>
                            <Button href="/booking" size="lg" variant="outline">Book a Consultation</Button>
                        </div>
                    </AnimatedSection>
                </div>
            </Section>
        </>
    );
}
