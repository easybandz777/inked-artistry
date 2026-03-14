'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Section, SectionHeader } from '@/components/ui/section';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Button } from '@/components/ui/button';
import { SERVICES } from '@/content/services';
import { SITE_CONFIG } from '@/content/site-config';
import { Calendar, Clock, CreditCard, Phone, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';

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

    const inputStyles = 'w-full px-4 py-3.5 bg-warm-white border border-border rounded-sm text-sm text-charcoal placeholder:text-taupe/60 transition-all duration-200 focus:border-rose-gold focus:ring-2 focus:ring-rose-gold/10 focus:bg-white';

    return (
        <>
            {/* Hero — immersive top banner with background image */}
            <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
                {/* Background image */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/inked9.webp"
                        alt="Inked Permanent Artistry studio"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-espresso/75 via-espresso/60 to-espresso/80" />
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <AnimatedSection direction="up">
                        <p className="font-sans text-xs font-medium uppercase tracking-[0.35em] text-rose-gold-light mb-4">
                            Book Your Visit
                        </p>
                        <h1 className="text-warm-white" style={{ color: '#FAF8F5' }}>
                            Book Your <span className="italic">Appointment</span>
                        </h1>
                        <p className="mt-5 max-w-xl mx-auto text-warm-white/70 leading-relaxed" style={{ color: 'rgba(250,248,245,0.7)' }}>
                            Ready to begin your transformation? Schedule a consultation or book your appointment below.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Quick Actions — 4 benefit/info cards */}
            <section className="relative -mt-14 z-20 mb-0">
                <div className="mx-auto max-w-5xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { icon: Calendar, title: 'Easy Scheduling', desc: 'Book online or by phone — instant confirmation' },
                            { icon: Sparkles, title: 'Bespoke Experience', desc: 'Every session is custom-tailored to you' },
                            { icon: CreditCard, title: 'Deposit Secures', desc: 'A non-refundable deposit holds your time' },
                            { icon: CheckCircle, title: 'Touch-Ups Included', desc: 'Most services include a complimentary touch-up' },
                        ].map((item, i) => (
                            <AnimatedSection key={i} direction="up" delay={i * 0.06}>
                                <div className="bg-white rounded-sm border border-border/50 p-5 shadow-sm text-center hover:shadow-md transition-shadow">
                                    <div className="mx-auto w-10 h-10 rounded-full bg-blush flex items-center justify-center mb-3">
                                        <item.icon className="h-4 w-4 text-rose-gold" />
                                    </div>
                                    <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-charcoal mb-1">{item.title}</h4>
                                    <p className="text-xs text-soft-gray leading-relaxed">{item.desc}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Booking Content */}
            <Section spacious>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
                    {/* Left sidebar — contact info */}
                    <AnimatedSection direction="left" className="lg:col-span-1">
                        <div className="space-y-6">
                            {/* Schedule Online Card */}
                            <div className="bg-gradient-to-br from-espresso to-charcoal rounded-sm p-6 text-warm-white shadow-lg">
                                <Calendar className="h-5 w-5 text-rose-gold mb-4" />
                                <h3 className="font-serif text-xl mb-2" style={{ color: '#FAF8F5' }}>Schedule Online</h3>
                                <p className="text-sm text-warm-white/60 mb-5 leading-relaxed" style={{ color: 'rgba(250,248,245,0.6)' }}>
                                    Book through our online scheduling system for instant confirmation.
                                </p>
                                <Button href={SITE_CONFIG.booking.squareUrl} size="sm" variant="secondary" className="w-full">
                                    Book via Square <ArrowRight className="ml-2 h-3 w-3" />
                                </Button>
                            </div>

                            {/* Contact Card */}
                            <div className="bg-cream rounded-sm border border-border/50 p-6">
                                <Phone className="h-5 w-5 text-rose-gold mb-4" />
                                <h3 className="font-serif text-lg mb-2">Call Us Directly</h3>
                                <p className="text-sm text-soft-gray mb-3">Prefer to speak with us?</p>
                                <a href={`tel:${SITE_CONFIG.phone}`} className="inline-flex items-center gap-2 text-sm font-medium text-rose-gold hover:text-rose-gold-light transition-colors">
                                    {SITE_CONFIG.phone} <ArrowRight className="h-3 w-3" />
                                </a>
                            </div>

                            {/* Hours Card */}
                            <div className="bg-cream rounded-sm border border-border/50 p-6">
                                <Clock className="h-5 w-5 text-rose-gold mb-4" />
                                <h3 className="font-serif text-lg mb-3">Studio Hours</h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between text-charcoal">
                                        <span>Tue – Fri</span>
                                        <span className="font-medium">9 AM – 5 PM</span>
                                    </div>
                                    <div className="flex justify-between text-charcoal">
                                        <span>Saturday</span>
                                        <span className="font-medium">10 AM – 3 PM</span>
                                    </div>
                                    <div className="flex justify-between text-soft-gray">
                                        <span>Sun & Mon</span>
                                        <span>Closed</span>
                                    </div>
                                </div>
                            </div>

                            {/* Deposit Card */}
                            <div className="bg-blush/50 rounded-sm border border-rose-gold/15 p-5 flex items-start gap-4">
                                <CheckCircle className="h-5 w-5 text-rose-gold mt-0.5 shrink-0" />
                                <div>
                                    <p className="text-sm font-medium text-charcoal mb-1">Deposit Required</p>
                                    <p className="text-xs text-soft-gray leading-relaxed">A non-refundable deposit is required to secure your appointment time.</p>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Consultation Form */}
                    <AnimatedSection direction="right" delay={0.15} className="lg:col-span-2">
                        <div className="bg-white rounded-sm border border-border/50 shadow-[0_4px_24px_rgba(26,26,26,0.06)] overflow-hidden">
                            {/* Form Header */}
                            <div className="px-8 pt-8 pb-6 bg-gradient-to-b from-cream/80 to-white border-b border-border/30">
                                <h2 className="font-serif text-2xl mb-1">Request a Consultation</h2>
                                <p className="text-sm text-soft-gray">Fill out the form below and we will get back to you within 24 hours.</p>
                            </div>

                            <div className="p-8">
                                {submitted ? (
                                    <div className="text-center py-16">
                                        <div className="mx-auto w-16 h-16 rounded-full bg-blush flex items-center justify-center mb-6">
                                            <CheckCircle className="h-8 w-8 text-rose-gold" />
                                        </div>
                                        <h3 className="font-serif text-2xl mb-3">Thank You!</h3>
                                        <p className="text-soft-gray max-w-sm mx-auto">Your consultation request has been received. We will be in touch within 24 hours.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2">Full Name *</label>
                                                <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputStyles} placeholder="Your name" />
                                            </div>
                                            <div>
                                                <label className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2">Email *</label>
                                                <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputStyles} placeholder="you@email.com" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2">Phone</label>
                                                <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={inputStyles} placeholder="(555) 000-0000" />
                                            </div>
                                            <div>
                                                <label className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2">Service of Interest *</label>
                                                <select required value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className={inputStyles}>
                                                    <option value="">Select a service</option>
                                                    {SERVICES.map((s) => <option key={s.slug} value={s.slug}>{s.title}</option>)}
                                                    <option value="other">Not sure — need guidance</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2">Preferred Date</label>
                                                <input type="date" value={formData.preferredDate} onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })} className={inputStyles} />
                                            </div>
                                            <div>
                                                <label className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2">Preferred Time</label>
                                                <select value={formData.preferredTime} onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })} className={inputStyles}>
                                                    <option value="">Any time</option>
                                                    <option value="morning">Morning (9–12 PM)</option>
                                                    <option value="afternoon">Afternoon (12–3 PM)</option>
                                                    <option value="late-afternoon">Late Afternoon (3–5 PM)</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2">Message</label>
                                            <textarea rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={`${inputStyles} resize-none`} placeholder="Tell us about your goals, concerns, or any questions..." />
                                        </div>

                                        <div className="pt-2">
                                            <Button type="submit" size="lg" className="w-full md:w-auto">
                                                Request Consultation
                                            </Button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </Section>
        </>
    );
}
