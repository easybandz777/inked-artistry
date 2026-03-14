'use client';

import { Section } from '@/components/ui/section';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Button } from '@/components/ui/button';
import { GraduationCap, BookOpen, Users, Sparkles } from 'lucide-react';

export function AcademyTeaser() {
    return (
        <Section variant="dark" spacious>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <AnimatedSection direction="left">
                    <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-rose-gold mb-4">
                        Inked Academy
                    </p>
                    <h2 className="text-warm-white">
                        Train With the <span className="italic">Artist</span>,{' '}
                        Not Just the <span className="italic">Textbook</span>
                    </h2>
                    <p className="mt-5 text-warm-white/85 leading-relaxed">
                        Our structured, hands-on training programs are designed for aspiring permanent makeup artists
                        who are serious about building a professional, studio-ready practice. Learn technique, theory,
                        business fundamentals, and client management — all under the guidance of an experienced working artist.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-3">
                        <Button href="/academy" variant="secondary" size="md">
                            Explore Training
                        </Button>
                        <Button href="/academy/apply" variant="ghost" size="md" className="text-warm-white/70 hover:text-warm-white hover:bg-warm-white/10">
                            Apply Now
                        </Button>
                    </div>
                </AnimatedSection>

                <AnimatedSection direction="right" delay={0.2}>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { icon: GraduationCap, title: 'Structured Curriculum', description: '12 comprehensive modules' },
                            { icon: BookOpen, title: 'Theory + Practice', description: 'Online + in-studio format' },
                            { icon: Users, title: 'Live Model Work', description: 'Supervised real procedures' },
                            { icon: Sparkles, title: 'Post-Training Support', description: 'Ongoing mentorship access' },
                        ].map((item, i) => (
                            <div key={i} className="bg-warm-white/10 border border-warm-white/20 rounded-sm p-5 hover:bg-warm-white/15 transition-colors">
                                <item.icon className="h-5 w-5 text-rose-gold mb-3" />
                                <p className="font-sans text-sm font-medium text-warm-white">{item.title}</p>
                                <p className="text-xs text-warm-white/65 mt-1">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </Section>
    );
}
