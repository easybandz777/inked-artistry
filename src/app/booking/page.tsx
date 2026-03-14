'use client';

import { useState } from 'react';
import { Section, SectionHeader } from '@/components/ui/section';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { SERVICES } from '@/content/services';
import { SITE_CONFIG } from '@/content/site-config';
import { Calendar, Clock, CreditCard, Phone } from 'lucide-react';

export default function BookingPage() {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', service: '', preferredDate: '', preferredTime: '', message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await fetch('/api/consultation', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
        } catch { /* API not yet connected */ }
        setSubmitted(true);
    };

    return (
        <>
            <section className="relative py-20 md:py-28 bg-gradient-to-b from-cream to-warm-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <AnimatedSection direction="up">
                        <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-rose-gold mb-4">Booking</p>
                        <h1>Book Your <span className="italic">Appointment</span></h1>
                        <p className="mt-4 max-w-2xl mx-auto text-soft-gray">
                            Ready to begin your transformation? Schedule a consultation or book your appointment below.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <Section spacious>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Booking Info */}
                    <AnimatedSection direction="left" className="lg:col-span-1">
                        <div className="space-y-6">
                            <Card>
                                <Calendar className="h-5 w-5 text-rose-gold mb-3" />
                                <h3 className="font-serif text-lg mb-2">Schedule Online</h3>
                                <p className="text-sm text-soft-gray mb-4">Book through our online scheduling system for instant confirmation.</p>
                                <Button href={SITE_CONFIG.booking.squareUrl} size="sm" variant="secondary" className="w-full">
                                    Book via Square
                                </Button>
                            </Card>

                            <Card>
                                <Phone className="h-5 w-5 text-rose-gold mb-3" />
                                <h3 className="font-serif text-lg mb-2">Call Us</h3>
                                <p className="text-sm text-soft-gray mb-2">Prefer to speak with us directly?</p>
                                <a href={`tel:${SITE_CONFIG.phone}`} className="text-sm font-medium text-rose-gold hover:text-rose-gold-light transition-colors">
                                    {SITE_CONFIG.phone}
                                </a>
                            </Card>

                            <Card>
                                <Clock className="h-5 w-5 text-rose-gold mb-3" />
                                <h3 className="font-serif text-lg mb-2">Hours</h3>
                                <div className="text-sm text-soft-gray space-y-1">
                                    <p>{SITE_CONFIG.hours.weekdays}</p>
                                    <p>{SITE_CONFIG.hours.saturday}</p>
                                    <p>{SITE_CONFIG.hours.sunday}</p>
                                </div>
                            </Card>

                            <Card>
                                <CreditCard className="h-5 w-5 text-rose-gold mb-3" />
                                <h3 className="font-serif text-lg mb-2">Deposit Required</h3>
                                <p className="text-sm text-soft-gray">A non-refundable deposit is required to secure your appointment time. Full details are provided at booking.</p>
                            </Card>
                        </div>
                    </AnimatedSection>

                    {/* Consultation Form */}
                    <AnimatedSection direction="right" delay={0.15} className="lg:col-span-2">
                        <Card padded={true}>
                            <h2 className="font-serif text-2xl mb-2">Request a Consultation</h2>
                            <p className="text-sm text-soft-gray mb-8">Fill out the form below and we will get back to you within 24 hours.</p>

                            {submitted ? (
                                <div className="text-center py-12">
                                    <h3 className="font-serif text-xl mb-2">Thank You!</h3>
                                    <p className="text-soft-gray">Your consultation request has been received. We will be in touch shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs uppercase tracking-wider text-soft-gray mb-2">Full Name *</label>
                                            <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 bg-cream border border-border rounded-sm text-sm text-charcoal placeholder:text-taupe" placeholder="Your name" />
                                        </div>
                                        <div>
                                            <label className="block text-xs uppercase tracking-wider text-soft-gray mb-2">Email *</label>
                                            <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-cream border border-border rounded-sm text-sm text-charcoal placeholder:text-taupe" placeholder="you@email.com" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs uppercase tracking-wider text-soft-gray mb-2">Phone</label>
                                            <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 bg-cream border border-border rounded-sm text-sm text-charcoal placeholder:text-taupe" placeholder="(555) 000-0000" />
                                        </div>
                                        <div>
                                            <label className="block text-xs uppercase tracking-wider text-soft-gray mb-2">Service of Interest *</label>
                                            <select required value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="w-full px-4 py-3 bg-cream border border-border rounded-sm text-sm text-charcoal">
                                                <option value="">Select a service</option>
                                                {SERVICES.map((s) => <option key={s.slug} value={s.slug}>{s.title}</option>)}
                                                <option value="other">Not sure — need guidance</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs uppercase tracking-wider text-soft-gray mb-2">Preferred Date</label>
                                            <input type="date" value={formData.preferredDate} onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })} className="w-full px-4 py-3 bg-cream border border-border rounded-sm text-sm text-charcoal" />
                                        </div>
                                        <div>
                                            <label className="block text-xs uppercase tracking-wider text-soft-gray mb-2">Preferred Time</label>
                                            <select value={formData.preferredTime} onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })} className="w-full px-4 py-3 bg-cream border border-border rounded-sm text-sm text-charcoal">
                                                <option value="">Any time</option>
                                                <option value="morning">Morning (9–12 PM)</option>
                                                <option value="afternoon">Afternoon (12–3 PM)</option>
                                                <option value="late-afternoon">Late Afternoon (3–5 PM)</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs uppercase tracking-wider text-soft-gray mb-2">Message</label>
                                        <textarea rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 bg-cream border border-border rounded-sm text-sm text-charcoal placeholder:text-taupe resize-none" placeholder="Tell us about your goals, concerns, or any questions..." />
                                    </div>

                                    <Button type="submit" size="lg" className="w-full md:w-auto">
                                        Request Consultation
                                    </Button>
                                </form>
                            )}
                        </Card>
                    </AnimatedSection>
                </div>
            </Section>
        </>
    );
}
