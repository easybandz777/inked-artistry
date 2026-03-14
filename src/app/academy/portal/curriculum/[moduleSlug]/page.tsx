import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PortalShell from '@/components/portal/PortalShell';
import { CURRICULUM_MODULES, getModuleBySlug } from '@/content/curriculum';
import { ChevronLeft, BookOpen, Play, FileText, HelpCircle, Clock, ArrowRight } from 'lucide-react';

const TYPE_ICONS: Record<string, React.ElementType> = {
    reading: BookOpen, video: Play, exercise: FileText, quiz: HelpCircle,
};

export function generateStaticParams() {
    return CURRICULUM_MODULES.map((m) => ({ moduleSlug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ moduleSlug: string }> }): Promise<Metadata> {
    const { moduleSlug } = await params;
    const mod = getModuleBySlug(moduleSlug);
    if (!mod) return { title: 'Module Not Found' };
    return {
        title: `Module ${mod.number}: ${mod.title} | Inked Academy`,
        description: mod.description,
    };
}

export default async function ModuleDetailPage({ params }: { params: Promise<{ moduleSlug: string }> }) {
    const { moduleSlug } = await params;
    const mod = getModuleBySlug(moduleSlug);
    if (!mod) notFound();

    const modIndex = CURRICULUM_MODULES.findIndex((m) => m.slug === moduleSlug);
    const prevMod = modIndex > 0 ? CURRICULUM_MODULES[modIndex - 1] : null;
    const nextMod = modIndex < CURRICULUM_MODULES.length - 1 ? CURRICULUM_MODULES[modIndex + 1] : null;

    return (
        <PortalShell>
            <div className="portal-header">
                <div>
                    <Link href="/academy/portal/curriculum" className="portal-back-link">
                        <ChevronLeft className="h-4 w-4" /> All Modules
                    </Link>
                    <p className="portal-label-sm mt-3">Module {String(mod.number).padStart(2, '0')}</p>
                    <h1 className="portal-welcome">{mod.title}</h1>
                    <p className="portal-cohort">{mod.lessons.length} lessons · {mod.estimatedHours} estimated hours</p>
                </div>
            </div>

            <p className="portal-module-desc">{mod.description}</p>

            {/* Topics */}
            <div className="portal-topics-row">
                {mod.topics.map((t) => (
                    <span key={t} className="curriculum-tag">{t}</span>
                ))}
            </div>

            {/* Lesson List */}
            <div className="portal-lesson-list">
                <h2 className="portal-section-title portal-section-title-spaced">Lessons</h2>
                {mod.lessons.map((lesson, i) => {
                    const Icon = TYPE_ICONS[lesson.type] ?? BookOpen;
                    return (
                        <Link
                            key={lesson.id}
                            href={`/academy/portal/curriculum/${mod.slug}/${lesson.slug}`}
                            className="portal-lesson-row"
                        >
                            <span className="portal-lesson-num">{String(i + 1).padStart(2, '0')}</span>
                            <Icon className="h-4 w-4 text-rose-gold shrink-0" />
                            <div className="portal-lesson-info">
                                <span className="portal-lesson-title">{lesson.title}</span>
                                <span className="portal-lesson-meta">
                                    <Clock className="h-3 w-3" /> {lesson.durationMinutes} min · {lesson.type}
                                </span>
                            </div>
                            <ArrowRight className="h-4 w-4 text-soft-gray shrink-0" />
                        </Link>
                    );
                })}
            </div>

            {/* Prev / Next Module navigation */}
            <div className="portal-module-nav">
                {prevMod ? (
                    <Link href={`/academy/portal/curriculum/${prevMod.slug}`} className="portal-module-nav-link">
                        <ChevronLeft className="h-4 w-4" />
                        <div>
                            <span className="portal-module-nav-label">Previous Module</span>
                            <span className="portal-module-nav-title">{prevMod.title}</span>
                        </div>
                    </Link>
                ) : <div />}
                {nextMod ? (
                    <Link href={`/academy/portal/curriculum/${nextMod.slug}`} className="portal-module-nav-link portal-module-nav-right">
                        <div>
                            <span className="portal-module-nav-label">Next Module</span>
                            <span className="portal-module-nav-title">{nextMod.title}</span>
                        </div>
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                ) : <div />}
            </div>
        </PortalShell>
    );
}
