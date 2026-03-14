import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PortalShell from '@/components/portal/PortalShell';
import { CURRICULUM_MODULES, getLessonBySlug } from '@/content/curriculum';
import { ChevronLeft, ArrowRight, Clock, BookOpen, Play, FileText, HelpCircle } from 'lucide-react';

const TYPE_ICONS: Record<string, React.ElementType> = {
    reading: BookOpen, video: Play, exercise: FileText, quiz: HelpCircle,
};

export function generateStaticParams() {
    const params: { moduleSlug: string; lessonSlug: string }[] = [];
    for (const mod of CURRICULUM_MODULES) {
        for (const lesson of mod.lessons) {
            params.push({ moduleSlug: mod.slug, lessonSlug: lesson.slug });
        }
    }
    return params;
}

export async function generateMetadata({ params }: { params: Promise<{ moduleSlug: string; lessonSlug: string }> }): Promise<Metadata> {
    const { moduleSlug, lessonSlug } = await params;
    const { module: mod, lesson } = getLessonBySlug(moduleSlug, lessonSlug);
    if (!mod || !lesson) return { title: 'Lesson Not Found' };
    return {
        title: `${lesson.title} | Module ${mod.number} | Inked Academy`,
        description: `${lesson.title} — ${mod.title}. ${lesson.durationMinutes} minute ${lesson.type} lesson.`,
    };
}

/** Simple markdown-to-HTML (handles headers, bold, tables, blockquotes, lists, code blocks) */
function renderMarkdown(md: string) {
    const lines = md.split('\n');
    const html: string[] = [];
    let inTable = false;
    let inCode = false;

    for (const line of lines) {
        // Code blocks
        if (line.trim().startsWith('```')) {
            if (inCode) { html.push('</pre>'); inCode = false; }
            else { html.push('<pre class="lesson-code">'); inCode = true; }
            continue;
        }
        if (inCode) { html.push(line); continue; }

        // Table rows
        if (line.includes('|') && line.trim().startsWith('|')) {
            const cells = line.split('|').filter(Boolean).map((c) => c.trim());
            if (cells.every((c) => /^[-:]+$/.test(c))) continue; // separator row
            if (!inTable) { html.push('<table class="lesson-table">'); inTable = true; }
            html.push('<tr>' + cells.map((c) => `<td>${c}</td>`).join('') + '</tr>');
            continue;
        }
        if (inTable) { html.push('</table>'); inTable = false; }

        // Headers
        if (line.startsWith('### ')) { html.push(`<h4 class="lesson-h4">${line.slice(4)}</h4>`); continue; }
        if (line.startsWith('## ')) { html.push(`<h3 class="lesson-h3">${line.slice(3)}</h3>`); continue; }
        if (line.startsWith('# ')) { html.push(`<h2 class="lesson-h2">${line.slice(2)}</h2>`); continue; }

        // Blockquotes
        if (line.startsWith('> ')) {
            html.push(`<blockquote class="lesson-blockquote">${boldify(line.slice(2))}</blockquote>`);
            continue;
        }

        // Checklist items
        if (line.trim().match(/^\d+\.\s*☐/)) {
            html.push(`<p class="lesson-checklist">${boldify(line.trim())}</p>`);
            continue;
        }

        // List items
        if (line.trim().startsWith('- ')) {
            html.push(`<li class="lesson-li">${boldify(line.trim().slice(2))}</li>`);
            continue;
        }
        if (line.trim().match(/^\d+\./)) {
            html.push(`<li class="lesson-li lesson-li-ordered">${boldify(line.trim().replace(/^\d+\.\s*/, ''))}</li>`);
            continue;
        }

        // Empty line
        if (!line.trim()) { html.push('<br/>'); continue; }

        // Paragraph
        html.push(`<p class="lesson-p">${boldify(line)}</p>`);
    }
    if (inTable) html.push('</table>');
    if (inCode) html.push('</pre>');

    return html.join('\n');
}

function boldify(text: string) {
    return text
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/`(.+?)`/g, '<code class="lesson-inline-code">$1</code>');
}

export default async function LessonPage({ params }: { params: Promise<{ moduleSlug: string; lessonSlug: string }> }) {
    const { moduleSlug, lessonSlug } = await params;
    const { module: mod, lesson } = getLessonBySlug(moduleSlug, lessonSlug);
    if (!mod || !lesson) notFound();

    const lessonIndex = mod.lessons.findIndex((l) => l.slug === lessonSlug);
    const prevLesson = lessonIndex > 0 ? mod.lessons[lessonIndex - 1] : null;
    const nextLesson = lessonIndex < mod.lessons.length - 1 ? mod.lessons[lessonIndex + 1] : null;

    const Icon = TYPE_ICONS[lesson.type] ?? BookOpen;

    return (
        <PortalShell>
            {/* Breadcrumb */}
            <div className="lesson-breadcrumb">
                <Link href="/academy/portal/curriculum" className="portal-back-link">All Modules</Link>
                <span className="lesson-breadcrumb-sep">/</span>
                <Link href={`/academy/portal/curriculum/${mod.slug}`} className="portal-back-link">
                    Module {mod.number}
                </Link>
                <span className="lesson-breadcrumb-sep">/</span>
                <span className="lesson-breadcrumb-current">{lesson.title}</span>
            </div>

            <div className="lesson-reader-layout">
                {/* Main content */}
                <article className="lesson-content">
                    <div className="lesson-header">
                        <div className="lesson-type-badge">
                            <Icon className="h-4 w-4" /> {lesson.type}
                        </div>
                        <div className="lesson-duration">
                            <Clock className="h-3.5 w-3.5" /> {lesson.durationMinutes} min
                        </div>
                    </div>

                    <div
                        className="lesson-body"
                        dangerouslySetInnerHTML={{ __html: renderMarkdown(lesson.content) }}
                    />

                    {/* Prev / Next Lesson */}
                    <div className="lesson-nav">
                        {prevLesson ? (
                            <Link href={`/academy/portal/curriculum/${mod.slug}/${prevLesson.slug}`} className="lesson-nav-link">
                                <ChevronLeft className="h-4 w-4" />
                                <div>
                                    <span className="lesson-nav-label">Previous</span>
                                    <span className="lesson-nav-title">{prevLesson.title}</span>
                                </div>
                            </Link>
                        ) : <div />}
                        {nextLesson ? (
                            <Link href={`/academy/portal/curriculum/${mod.slug}/${nextLesson.slug}`} className="lesson-nav-link lesson-nav-right">
                                <div>
                                    <span className="lesson-nav-label">Next</span>
                                    <span className="lesson-nav-title">{nextLesson.title}</span>
                                </div>
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        ) : (
                            <Link href={`/academy/portal/curriculum/${mod.slug}`} className="lesson-nav-link lesson-nav-right">
                                <div>
                                    <span className="lesson-nav-label">Complete</span>
                                    <span className="lesson-nav-title">Back to Module</span>
                                </div>
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        )}
                    </div>
                </article>

                {/* Sidebar — Key Points */}
                {lesson.keyPoints && lesson.keyPoints.length > 0 && (
                    <aside className="lesson-sidebar">
                        <h3 className="lesson-sidebar-title">Key Points</h3>
                        <ul className="lesson-sidebar-list">
                            {lesson.keyPoints.map((kp, i) => (
                                <li key={i} className="lesson-sidebar-item">{kp}</li>
                            ))}
                        </ul>
                    </aside>
                )}
            </div>
        </PortalShell>
    );
}
