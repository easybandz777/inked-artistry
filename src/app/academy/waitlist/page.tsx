'use client';

import { useState } from 'react';
import { Section } from '@/components/ui/section';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sparkles, Bell, Gift } from 'lucide-react';

export default function WaitlistPage() {
    const [formData, setFormData] = useState({ name: '', email: '', interest: '', phone: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await fetch('/api/waitlist', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
        } catch { /* API not yet connected */ }
        setSubmitted(true);
    };

    return (
        <>
            <section className="relative py-20 md:py-28 bg-gradient-to-b from-cream to-warm-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <AnimatedSection direction="up">
                        <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-rose-gold mb-4">Stay in the Loop</p>
                        <h1>Join the <span className="italic">Waitlist</span></h1>
                        <p className="mt-4 max-w-2xl mx-auto text-soft-gray">
                            Be the first to know about upcoming training cohorts, special launches, and exclusive opportunities.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <Section spacious>
                <div className="max-w-2xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                        {[
                            { icon: Bell, title: 'Early Access', description: 'Be first to enroll in new training cohorts' },
                            { icon: Gift, title: 'Exclusive Offers', description: 'Special pricing for waitlist members' },
                            { icon: Sparkles, title: 'Updates', description: 'New services, programs, and events' },
                        ].map((item, i) => (
                            <AnimatedSection key={i} direction="up" delay={i * 0.1}>
                                <Card className="text-center">
                                    <item.icon className="h-6 w-6 text-rose-gold mx-auto mb-3" />
                                    <h3 className="font-serif text-base mb-1">{item.title}</h3>
                                    <p className="text-xs text-soft-gray">{item.description}</p>
                                </Card>
                            </AnimatedSection>
                        ))}
                    </div>

                    <AnimatedSection direction="up" delay={0.2}>
                        <Card>
                            {submitted ? (
                                <div className="text-center py-12">
                                    <Sparkles className="h-8 w-8 text-rose-gold mx-auto mb-4" />
                                    <h2 className="font-serif text-2xl mb-2">You&apos;re on the List!</h2>
                                    <p className="text-soft-gray">We will be in touch when new opportunities are available.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <h2 className="font-serif text-2xl mb-1">Join the Waitlist</h2>
                                    <p className="text-sm text-soft-gray mb-6">Enter your details and tell us what you are interested in.</p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs uppercase tracking-wider text-soft-gray mb-2">Name *</label>
                                            <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 bg-cream border border-border rounded-sm text-sm text-charcoal" placeholder="Your name" />
                                        </div>
                                        <div>
                                            <label className="block text-xs uppercase tracking-wider text-soft-gray mb-2">Email *</label>
                                            <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-cream border border-border rounded-sm text-sm text-charcoal" placeholder="you@email.com" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs uppercase tracking-wider text-soft-gray mb-2">Phone</label>
                                        <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 bg-cream border border-border rounded-sm text-sm text-charcoal" placeholder="(555) 000-0000" />
                                    </div>

                                    <div>
                                        <label className="block text-xs uppercase tracking-wider text-soft-gray mb-2">I am interested in... *</label>
                                        <select required value={formData.interest} onChange={(e) => setFormData({ ...formData, interest: e.target.value })} className="w-full px-4 py-3 bg-cream border border-border rounded-sm text-sm text-charcoal">
                                            <option value="">Select an interest</option>
                                            <option value="pmu-training">PMU Foundations Training</option>
                                            <option value="advanced-training">Advanced Training Programs</option>
                                            <option value="new-services">New Service Launches</option>
                                            <option value="all">All of the Above</option>
                                        </select>
                                    </div>

                                    <Button type="submit" size="lg" className="w-full md:w-auto">Join Waitlist</Button>
                                </form>
                            )}
                        </Card>
                    </AnimatedSection>
                </div>
            </Section>
        </>
    );
}
