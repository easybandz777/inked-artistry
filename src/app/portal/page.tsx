'use client';

import { useState } from 'react';
import { Section } from '@/components/ui/section';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Lock, GraduationCap, BookOpen } from 'lucide-react';

export default function PortalPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <section className="relative py-20 md:py-28 bg-gradient-to-b from-espresso to-charcoal">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <AnimatedSection direction="up">
                        <GraduationCap className="h-10 w-10 text-rose-gold mx-auto mb-6" />
                        <h1 className="text-warm-white">Student <span className="italic">Portal</span></h1>
                        <p className="mt-4 max-w-lg mx-auto text-warm-white/60">
                            Access your training program, course materials, assignments, and progress tracking.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <Section spacious>
                <div className="max-w-md mx-auto">
                    <AnimatedSection direction="up">
                        <Card>
                            <div className="text-center mb-8">
                                <Lock className="h-8 w-8 text-rose-gold mx-auto mb-3" />
                                <h2 className="font-serif text-2xl mb-1">Sign In</h2>
                                <p className="text-sm text-soft-gray">Access your student dashboard</p>
                            </div>

                            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                                <div>
                                    <label className="block text-xs uppercase tracking-wider text-soft-gray mb-2">Email</label>
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 bg-cream border border-border rounded-sm text-sm text-charcoal" placeholder="student@email.com" />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase tracking-wider text-soft-gray mb-2">Password</label>
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-3 bg-cream border border-border rounded-sm text-sm text-charcoal" placeholder="Enter your password" />
                                </div>
                                <Button type="submit" size="lg" className="w-full">Sign In</Button>
                            </form>

                            <div className="mt-6 text-center">
                                <a href="#" className="text-xs text-soft-gray hover:text-rose-gold transition-colors">Forgot your password?</a>
                            </div>
                        </Card>
                    </AnimatedSection>

                    <AnimatedSection direction="up" delay={0.15}>
                        <div className="mt-8 text-center">
                            <p className="text-sm text-soft-gray mb-2">Not a student yet?</p>
                            <Button href="/academy/apply" variant="outline" size="sm">Apply for Training</Button>
                        </div>
                    </AnimatedSection>
                </div>
            </Section>
        </>
    );
}
