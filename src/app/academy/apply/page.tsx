'use client';

import { useState } from 'react';
import { Section } from '@/components/ui/section';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, Send } from 'lucide-react';

export default function ApplyPage() {
    const [formData, setFormData] = useState({
        firstName: '', lastName: '', email: '', phone: '', city: '', state: '',
        experience: '', licenseStatus: '', motivation: '', goals: '', timeline: '', consent: false,
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await fetch('/api/apply', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
        } catch { /* API not yet connected */ }
        setSubmitted(true);
    };

    const update = (field: string, value: string | boolean) => setFormData(prev => ({ ...prev, [field]: value }));

    return (
        <>
            <section className="relative py-20 md:py-28 bg-gradient-to-b from-cream to-warm-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <AnimatedSection direction="up">
                        <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-rose-gold mb-4">Apply Now</p>
                        <h1>Training <span className="italic">Application</span></h1>
                        <p className="mt-4 max-w-2xl mx-auto text-soft-gray">
                            Tell us about yourself and your goals. We review every application personally and will be in touch within 48 hours.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <Section spacious>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <AnimatedSection direction="left" className="lg:col-span-1">
                        <div className="space-y-6 lg:sticky lg:top-28">
                            <Card>
                                <h3 className="font-serif text-lg mb-4">What Happens Next</h3>
                                <div className="space-y-4">
                                    {[
                                        'We review your application within 48 hours',
                                        'You will receive a personal response from our team',
                                        'If accepted, we discuss enrollment details and timing',
                                        'Deposit secures your spot in the next cohort',
                                    ].map((step, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <span className="w-6 h-6 rounded-full bg-blush flex items-center justify-center text-xs font-medium text-rose-gold shrink-0">{i + 1}</span>
                                            <p className="text-sm text-soft-gray">{step}</p>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                            <Card>
                                <h3 className="font-serif text-lg mb-3">Not Ready to Apply?</h3>
                                <p className="text-sm text-soft-gray mb-4">Join our waitlist to be notified about future cohorts and early enrollment opportunities.</p>
                                <Button href="/academy/waitlist" variant="outline" size="sm" className="w-full">Join Waitlist</Button>
                            </Card>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection direction="right" delay={0.15} className="lg:col-span-2">
                        <Card>
                            {submitted ? (
                                <div className="text-center py-16">
                                    <Send className="h-10 w-10 text-rose-gold mx-auto mb-4" />
                                    <h2 className="font-serif text-2xl mb-2">Application Received!</h2>
                                    <p className="text-soft-gray max-w-md mx-auto">Thank you for your interest in Inked Academy. We will review your application and respond within 48 hours.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <h2 className="font-serif text-2xl mb-1">Your Information</h2>
                                    <p className="text-sm text-soft-gray mb-6">All fields marked with * are required.</p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs uppercase tracking-wider text-soft-gray mb-2">First Name *</label>
                                            <input type="text" required value={formData.firstName} onChange={(e) => update('firstName', e.target.value)} className="w-full px-4 py-3 bg-cream border border-border rounded-sm text-sm text-charcoal" placeholder="First name" />
                                        </div>
                                        <div>
                                            <label className="block text-xs uppercase tracking-wider text-soft-gray mb-2">Last Name *</label>
                                            <input type="text" required value={formData.lastName} onChange={(e) => update('lastName', e.target.value)} className="w-full px-4 py-3 bg-cream border border-border rounded-sm text-sm text-charcoal" placeholder="Last name" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs uppercase tracking-wider text-soft-gray mb-2">Email *</label>
                                            <input type="email" required value={formData.email} onChange={(e) => update('email', e.target.value)} className="w-full px-4 py-3 bg-cream border border-border rounded-sm text-sm text-charcoal" placeholder="you@email.com" />
                                        </div>
                                        <div>
                                            <label className="block text-xs uppercase tracking-wider text-soft-gray mb-2">Phone *</label>
                                            <input type="tel" required value={formData.phone} onChange={(e) => update('phone', e.target.value)} className="w-full px-4 py-3 bg-cream border border-border rounded-sm text-sm text-charcoal" placeholder="(555) 000-0000" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs uppercase tracking-wider text-soft-gray mb-2">City *</label>
                                            <input type="text" required value={formData.city} onChange={(e) => update('city', e.target.value)} className="w-full px-4 py-3 bg-cream border border-border rounded-sm text-sm text-charcoal" placeholder="Your city" />
                                        </div>
                                        <div>
                                            <label className="block text-xs uppercase tracking-wider text-soft-gray mb-2">State *</label>
                                            <input type="text" required value={formData.state} onChange={(e) => update('state', e.target.value)} className="w-full px-4 py-3 bg-cream border border-border rounded-sm text-sm text-charcoal" placeholder="State" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs uppercase tracking-wider text-soft-gray mb-2">Experience Level *</label>
                                        <select required value={formData.experience} onChange={(e) => update('experience', e.target.value)} className="w-full px-4 py-3 bg-cream border border-border rounded-sm text-sm text-charcoal">
                                            <option value="">Select your experience level</option>
                                            <option value="none">No prior PMU experience</option>
                                            <option value="self-taught">Self-taught / practiced on practice skins</option>
                                            <option value="some-training">Some formal training / workshops</option>
                                            <option value="practicing">Currently practicing PMU</option>
                                            <option value="licensed-beauty">Licensed beauty professional (esthetician, cosmetologist, etc.)</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-xs uppercase tracking-wider text-soft-gray mb-2">Current License or Certification Status</label>
                                        <input type="text" value={formData.licenseStatus} onChange={(e) => update('licenseStatus', e.target.value)} className="w-full px-4 py-3 bg-cream border border-border rounded-sm text-sm text-charcoal" placeholder="e.g., Licensed esthetician, none, etc." />
                                    </div>

                                    <div>
                                        <label className="block text-xs uppercase tracking-wider text-soft-gray mb-2">Why Do You Want to Train in PMU? *</label>
                                        <textarea rows={4} required value={formData.motivation} onChange={(e) => update('motivation', e.target.value)} className="w-full px-4 py-3 bg-cream border border-border rounded-sm text-sm text-charcoal resize-none" placeholder="Tell us what inspires you to pursue permanent makeup artistry..." />
                                    </div>

                                    <div>
                                        <label className="block text-xs uppercase tracking-wider text-soft-gray mb-2">What Are Your Goals?</label>
                                        <textarea rows={3} value={formData.goals} onChange={(e) => update('goals', e.target.value)} className="w-full px-4 py-3 bg-cream border border-border rounded-sm text-sm text-charcoal resize-none" placeholder="Open your own studio, add services to existing practice, etc." />
                                    </div>

                                    <div>
                                        <label className="block text-xs uppercase tracking-wider text-soft-gray mb-2">Desired Training Timeline</label>
                                        <select value={formData.timeline} onChange={(e) => update('timeline', e.target.value)} className="w-full px-4 py-3 bg-cream border border-border rounded-sm text-sm text-charcoal">
                                            <option value="">When would you like to start?</option>
                                            <option value="asap">As soon as possible</option>
                                            <option value="1-3-months">Within 1–3 months</option>
                                            <option value="3-6-months">Within 3–6 months</option>
                                            <option value="flexible">Flexible / exploring options</option>
                                        </select>
                                    </div>

                                    <div className="flex items-start gap-3 p-4 bg-cream rounded-sm">
                                        <input type="checkbox" id="consent" required checked={formData.consent} onChange={(e) => update('consent', e.target.checked)} className="mt-1 accent-rose-gold cursor-pointer" />
                                        <label htmlFor="consent" className="text-sm text-soft-gray leading-relaxed cursor-pointer">
                                            I understand that submitting this application is an expression of interest and does not guarantee enrollment.
                                            I consent to being contacted about training opportunities and understand that program details are subject to availability.
                                        </label>
                                    </div>

                                    <Button type="submit" size="lg" className="w-full md:w-auto">Submit Application</Button>
                                </form>
                            )}
                        </Card>
                    </AnimatedSection>
                </div>
            </Section>
        </>
    );
}
