import { Hero } from '@/components/home/hero';
import { TrustBand } from '@/components/home/trust-band';
import { ServicesPreview } from '@/components/home/services-preview';
import { ResultsPreview } from '@/components/home/results-preview';
import { WhyChoose } from '@/components/home/why-choose';
import { HowItWorks } from '@/components/home/how-it-works';
import { AcademyTeaser } from '@/components/home/academy-teaser';
import { Testimonials } from '@/components/home/testimonials';
import { FAQPreview } from '@/components/home/faq-preview';
import { FinalCTA } from '@/components/home/final-cta';
import { SITE_CONFIG } from '@/content/site-config';

export default function HomePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BeautySalon',
            name: SITE_CONFIG.name,
            description: SITE_CONFIG.description,
            telephone: SITE_CONFIG.phone,
            email: SITE_CONFIG.email,
            address: {
              '@type': 'PostalAddress',
              streetAddress: SITE_CONFIG.address.street,
              addressLocality: SITE_CONFIG.address.city,
              addressRegion: SITE_CONFIG.address.state,
              postalCode: SITE_CONFIG.address.zip,
            },
            priceRange: '$$$',
          }),
        }}
      />

      <Hero />
      <TrustBand />
      <ServicesPreview />
      <ResultsPreview />
      <WhyChoose />
      <HowItWorks />
      <AcademyTeaser />
      <Testimonials />
      <FAQPreview />
      <FinalCTA />
    </>
  );
}
