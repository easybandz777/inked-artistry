'use client';

import { Section } from '@/components/ui/section';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Download, FileText, MessageSquare, User, Award, Video, Users, LayoutDashboard, CheckCircle } from 'lucide-react';

const sidebarItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: BookOpen, label: 'My Program', active: false },
    { icon: CheckCircle, label: 'Progress', active: false },
    { icon: Download, label: 'Downloads', active: false },
    { icon: FileText, label: 'Assignments', active: false },
    { icon: MessageSquare, label: 'Feedback', active: false },
    { icon: Video, label: 'Replays', active: false },
    { icon: Award, label: 'Certificate', active: false },
    { icon: Users, label: 'Alumni', active: false },
    { icon: User, label: 'Account', active: false },
];

const dashboardCards = [
    { title: 'Course Progress', value: '0%', description: 'PMU Foundations Intensive', badge: 'Not Started' },
    { title: 'Assignments', value: '0/12', description: 'Completed assignments', badge: 'Pending' },
    { title: 'Downloads', value: '0', description: 'Available resources', badge: 'Available' },
    { title: 'Next Session', value: 'TBD', description: 'Upcoming live session', badge: 'Scheduled' },
];

export default function DashboardPage() {
    return (
        <Section spacious>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* Sidebar */}
                <AnimatedSection direction="left" className="lg:col-span-1">
                    <div className="lg:sticky lg:top-28 space-y-1">
                        <p className="font-sans text-xs uppercase tracking-[0.2em] text-rose-gold mb-4">Student Portal</p>
                        {sidebarItems.map((item, i) => (
                            <button
                                key={i}
                                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm transition-colors cursor-pointer ${item.active ? 'bg-blush text-charcoal font-medium' : 'text-soft-gray hover:bg-cream hover:text-charcoal'
                                    }`}
                            >
                                <item.icon className="h-4 w-4" />
                                {item.label}
                            </button>
                        ))}
                    </div>
                </AnimatedSection>

                {/* Main Content */}
                <div className="lg:col-span-4 space-y-8">
                    <AnimatedSection direction="up">
                        <div>
                            <h1 className="font-serif text-3xl mb-2">Welcome Back, Student</h1>
                            <p className="text-soft-gray">Here is an overview of your training program and progress.</p>
                        </div>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {dashboardCards.map((card, i) => (
                            <AnimatedSection key={i} direction="up" delay={i * 0.08}>
                                <Card>
                                    <div className="flex items-start justify-between mb-3">
                                        <p className="text-xs uppercase tracking-wider text-soft-gray">{card.title}</p>
                                        <Badge variant="outline">{card.badge}</Badge>
                                    </div>
                                    <p className="font-serif text-3xl text-espresso mb-1">{card.value}</p>
                                    <p className="text-sm text-soft-gray">{card.description}</p>
                                </Card>
                            </AnimatedSection>
                        ))}
                    </div>

                    {/* Modules Preview */}
                    <AnimatedSection direction="up" delay={0.3}>
                        <Card>
                            <h2 className="font-serif text-xl mb-6">Your Curriculum</h2>
                            <div className="space-y-3">
                                {Array.from({ length: 12 }).map((_, i) => (
                                    <div key={i} className="flex items-center gap-4 p-3 bg-cream rounded-sm">
                                        <span className="w-8 h-8 rounded-full bg-blush flex items-center justify-center text-xs font-medium text-rose-gold">{String(i + 1).padStart(2, '0')}</span>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-charcoal">Module {i + 1}</p>
                                            <p className="text-xs text-soft-gray">Content locked — complete previous modules to unlock</p>
                                        </div>
                                        <Badge variant="outline">Locked</Badge>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </AnimatedSection>
                </div>
            </div>
        </Section>
    );
}
