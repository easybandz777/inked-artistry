import type { Metadata } from 'next';
import Link from 'next/link';
import PortalShell from '@/components/portal/PortalShell';
import { CURRICULUM_MODULES, TOTAL_LESSONS, TOTAL_HOURS } from '@/content/curriculum';
import { BookOpen, Download, MessageSquare, Award, ChevronRight, Clock, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Student Dashboard | Inked Academy Portal',
    description: 'Your Inked Academy student dashboard — track progress, access curriculum, and connect.',
};

const STUDENT = {
    name: 'Student',
    cohort: 'Spring 2025',
    progressModules: 3,
    totalModules: 12,
};

const QUICK_LINKS = [
    { href: '/academy/portal/curriculum', icon: BookOpen, label: 'Full Curriculum', desc: `${TOTAL_LESSONS} lessons` },
    { href: '/academy/portal/resources', icon: Download, label: 'Resources', desc: 'Templates & guides' },
    { href: 'mailto:hello@inkedpermanentartistry.com', icon: MessageSquare, label: 'Mentor', desc: 'Direct support' },
    { href: '#', icon: Award, label: 'Certificate', desc: 'Upon completion' },
];

export default function PortalDashboardPage() {
    const pct = Math.round((STUDENT.progressModules / STUDENT.totalModules) * 100);

    return (
        <PortalShell>
            {/* Header */}
            <div className="portal-header">
                <div>
                    <h1 className="portal-welcome">Welcome back, {STUDENT.name} 👋</h1>
                    <p className="portal-cohort">Cohort: {STUDENT.cohort} · {TOTAL_HOURS} total hours</p>
                </div>
            </div>

            {/* Progress */}
            <div className="portal-progress-card">
                <div className="portal-progress-top">
                    <div>
                        <p className="portal-progress-label">Course Progress</p>
                        <p className="portal-progress-stat">
                            {STUDENT.progressModules} of {STUDENT.totalModules} modules complete
                        </p>
                    </div>
                    <span className="portal-progress-pct">{pct}%</span>
                </div>
                <div className="portal-progress-bar-bg">
                    <div className="portal-progress-bar-fill" style={{ width: `${pct}%` }} />
                </div>
            </div>

            {/* Quick Links */}
            <div className="portal-quick-grid">
                {QUICK_LINKS.map((item) => (
                    <Link key={item.label} href={item.href} className="portal-quick-card">
                        <item.icon className="h-6 w-6 text-rose-gold mb-3" />
                        <p className="portal-quick-title">{item.label}</p>
                        <p className="portal-quick-desc">{item.desc}</p>
                        <ChevronRight className="h-4 w-4 text-soft-gray mt-auto ml-auto" />
                    </Link>
                ))}
            </div>

            {/* Continue Learning */}
            <div className="portal-section">
                <div className="portal-section-header">
                    <h2 className="portal-section-title">Continue Learning</h2>
                    <Link href="/academy/portal/curriculum" className="portal-section-link">View all →</Link>
                </div>
                <div className="portal-module-list">
                    {CURRICULUM_MODULES.slice(0, 4).map((mod, i) => (
                        <Link
                            key={mod.number}
                            href={`/academy/portal/curriculum/${mod.slug}`}
                            className="portal-module-row"
                        >
                            <div className="portal-module-num">{String(mod.number).padStart(2, '0')}</div>
                            <div className="portal-module-info">
                                <p className="portal-module-title">{mod.title}</p>
                                <p className="portal-module-topics">
                                    {mod.lessons.length} lessons · {mod.estimatedHours}h
                                </p>
                            </div>
                            {i < STUDENT.progressModules ? (
                                <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                            ) : i === STUDENT.progressModules ? (
                                <span className="portal-module-badge-current">In Progress</span>
                            ) : (
                                <span className="portal-module-badge-locked">
                                    <Clock className="h-3.5 w-3.5 mr-1" /> Upcoming
                                </span>
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        </PortalShell>
    );
}
