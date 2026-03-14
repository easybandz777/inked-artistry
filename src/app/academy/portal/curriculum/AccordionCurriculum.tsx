'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { CurriculumModule } from '@/lib/types';
import { ChevronDown, CheckCircle, Clock, BookOpen, Play, FileText, HelpCircle } from 'lucide-react';

const TYPE_ICONS: Record<string, React.ElementType> = {
    reading: BookOpen,
    video: Play,
    exercise: FileText,
    quiz: HelpCircle,
};

interface Props {
    modules: CurriculumModule[];
    completedModules: number;
}

export default function AccordionCurriculum({ modules, completedModules }: Props) {
    const [openIndex, setOpenIndex] = useState<number | null>(completedModules < modules.length ? completedModules : 0);

    return (
        <div className="accordion-curriculum">
            {modules.map((mod, i) => {
                const isOpen = openIndex === i;
                const isComplete = i < completedModules;
                const isCurrent = i === completedModules;

                return (
                    <div
                        key={mod.slug}
                        className={`accordion-module ${isComplete ? 'accordion-complete' : ''} ${isCurrent ? 'accordion-current' : ''}`}
                    >
                        {/* Header / Toggle */}
                        <button
                            className="accordion-header"
                            onClick={() => setOpenIndex(isOpen ? null : i)}
                            aria-expanded={isOpen}
                        >
                            <div className="accordion-header-left">
                                <span className="accordion-num">{String(mod.number).padStart(2, '0')}</span>
                                <div>
                                    <h3 className="accordion-title">{mod.title}</h3>
                                    <p className="accordion-meta">
                                        {mod.lessons.length} lessons · {mod.estimatedHours}h
                                    </p>
                                </div>
                            </div>
                            <div className="accordion-header-right">
                                {isComplete && <CheckCircle className="h-5 w-5 text-green-500" />}
                                {isCurrent && <span className="portal-module-badge-current">In Progress</span>}
                                {!isComplete && !isCurrent && <Clock className="h-4 w-4 text-soft-gray" />}
                                <ChevronDown className={`h-4 w-4 text-soft-gray accordion-chevron ${isOpen ? 'accordion-chevron-open' : ''}`} />
                            </div>
                        </button>

                        {/* Expanded Body */}
                        {isOpen && (
                            <div className="accordion-body">
                                <p className="accordion-desc">{mod.description}</p>
                                <div className="accordion-lessons">
                                    {mod.lessons.map((lesson) => {
                                        const Icon = TYPE_ICONS[lesson.type] ?? BookOpen;
                                        return (
                                            <Link
                                                key={lesson.id}
                                                href={`/academy/portal/curriculum/${mod.slug}/${lesson.slug}`}
                                                className="accordion-lesson-row"
                                            >
                                                <Icon className="h-4 w-4 text-rose-gold shrink-0" />
                                                <div className="accordion-lesson-info">
                                                    <span className="accordion-lesson-title">{lesson.title}</span>
                                                    <span className="accordion-lesson-meta">
                                                        {lesson.durationMinutes} min · {lesson.type}
                                                    </span>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                                <Link
                                    href={`/academy/portal/curriculum/${mod.slug}`}
                                    className="accordion-module-link"
                                >
                                    View Module Overview →
                                </Link>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
