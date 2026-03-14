'use client';

import { Section, SectionHeader } from '@/components/ui/section';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Accordion } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { FAQS } from '@/content/faqs';

export function FAQPreview() {
    const previewFaqs = FAQS.filter((f) => f.category === 'General' || f.category === 'Booking').slice(0, 5);

    return (
        <Section variant="alternate" spacious>
            <SectionHeader
                label="Common Questions"
                title="Frequently Asked Questions"
                description="Get answers to the most common questions about our services, process, and what to expect."
            />

            <AnimatedSection direction="up">
                <div className="max-w-3xl mx-auto">
                    <Accordion items={previewFaqs} />
                </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
                <div className="text-center mt-8">
                    <Button href="/faqs" variant="ghost">
                        View All FAQs
                    </Button>
                </div>
            </AnimatedSection>
        </Section>
    );
}
