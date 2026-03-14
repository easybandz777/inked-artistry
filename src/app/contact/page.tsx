'use client';

import { useState } from 'react';
import { Section } from '@/components/ui/section';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { SITE_CONFIG } from '@/content/site-config';
import { Phone, Mail, MapPin, Clock, Instagram, Send } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
        } catch { /* API not yet connected */ }
        setSubmitted(true);
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'LocalBusiness',
                    name: SITE_CONFIG.name,
                    telephone: SITE_CONFIG.phone,
                    email: SITE_CONFIG.email,
                    address: { '@type': 'PostalAddress', streetAddress: SITE_CONFIG.address.street, addressLocality: SITE_CONFIG.address.city, addressRegion: SITE_CONFIG.address.state, postalCode: SITE_CONFIG.address.zip },
                })
            }} />

            <section className="relative py-20 md:py-28 bg-gradient-to-b from-cream to-warm-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <AnimatedSection direction="up">
                        <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-rose-gold mb-4">Contact</p>
                        <h1>Get in <span className="italic">Touch</span></h1>
                        <p className="mt-4 max-w-2xl mx-auto text-soft-gray">
                            Questions, inquiries, or just want to say hello? We would love to hear from you.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <Section spacious>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <AnimatedSection direction="left" className="lg:col-span-1">
                        <div className="space-y-6">
                            <Card>
                                <Phone className="h-5 w-5 text-rose-gold mb-3" />
                                <h3 className="font-serif text-lg mb-2">Phone</h3>
                                <a href={`tel:${SITE_CONFIG.phone}`} className="text-sm text-rose-gold hover:text-rose-gold-light transition-colors">{SITE_CONFIG.phone}</a>
                            </Card>
                            <Card>
                                <Mail className="h-5 w-5 text-rose-gold mb-3" />
                                <h3 className="font-serif text-lg mb-2">Email</h3>
                                <a href={`mailto:${SITE_CONFIG.email}`} className="text-sm text-rose-gold hover:text-rose-gold-light transition-colors break-all">{SITE_CONFIG.email}</a>
                            </Card>
                            <Card>
                                <MapPin className="h-5 w-5 text-rose-gold mb-3" />
                                <h3 className="font-serif text-lg mb-2">Location</h3>
                                <p className="text-sm text-soft-gray">{SITE_CONFIG.address.street}</p>
                                <p className="text-sm text-soft-gray">{SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} {SITE_CONFIG.address.zip}</p>
                            </Card>
                            <Card>
                                <Clock className="h-5 w-5 text-rose-gold mb-3" />
                                <h3 className="font-serif text-lg mb-2">Studio Hours</h3>
                                <div className="text-sm text-soft-gray space-y-1">
                                    <p>{SITE_CONFIG.hours.weekdays}</p>
                                    <p>{SITE_CONFIG.hours.saturday}</p>
                                    <p>{SITE_CONFIG.hours.sunday}</p>
                                </div>
                            </Card>
                            <Card>
                                <Instagram className="h-5 w-5 text-rose-gold mb-3" />
                                <h3 className="font-serif text-lg mb-2">Follow Us</h3>
                                <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="text-sm text-rose-gold hover:text-rose-gold-light transition-colors">@inkedpermanentartistry</a>
                            </Card>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection direction="right" delay={0.15} className="lg:col-span-2">
                        <Card>
                            <h2 className="font-serif text-2xl mb-2">Send Us a Message</h2>
                            <p className="text-sm text-soft-gray mb-8">We typically respond within 24 hours.</p>

                            {submitted ? (
                                <div className="text-center py-12">
                                    <Send className="h-8 w-8 text-rose-gold mx-auto mb-4" />
                                    <h3 className="font-serif text-xl mb-2">Message Sent!</h3>
                                    <p className="text-soft-gray">Thank you for reaching out. We will get back to you soon.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs uppercase tracking-wider text-soft-gray mb-2">Name *</label>
                                            <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 bg-cream border border-border rounded-sm text-sm text-charcoal placeholder:text-taupe" placeholder="Your name" />
                                        </div>
                                        <div>
                                            <label className="block text-xs uppercase tracking-wider text-soft-gray mb-2">Email *</label>
                                            <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-cream border border-border rounded-sm text-sm text-charcoal placeholder:text-taupe" placeholder="you@email.com" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs uppercase tracking-wider text-soft-gray mb-2">Subject</label>
                                        <input type="text" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full px-4 py-3 bg-cream border border-border rounded-sm text-sm text-charcoal placeholder:text-taupe" placeholder="What is this about?" />
                                    </div>
                                    <div>
                                        <label className="block text-xs uppercase tracking-wider text-soft-gray mb-2">Message *</label>
                                        <textarea rows={5} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 bg-cream border border-border rounded-sm text-sm text-charcoal placeholder:text-taupe resize-none" placeholder="How can we help?" />
                                    </div>
                                    <Button type="submit" size="lg" className="w-full md:w-auto">Send Message</Button>
                                </form>
                            )}
                        </Card>
                    </AnimatedSection>
                </div>
            </Section>

            {/* Map Placeholder */}
            <Section variant="alternate">
                <AnimatedSection direction="fade">
                    <div className="aspect-[21/9] bg-gradient-to-br from-cream to-blush rounded-sm flex items-center justify-center">
                        <div className="text-center">
                            <MapPin className="h-8 w-8 text-taupe/40 mx-auto mb-2" />
                            <p className="text-sm text-taupe/60 uppercase tracking-widest">Map Integration</p>
                            <p className="text-xs text-taupe/40 mt-1">Google Maps embed placeholder</p>
                        </div>
                    </div>
                </AnimatedSection>
            </Section>
        </>
    );
}
