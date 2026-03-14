import type { CurriculumModule } from '@/lib/types';
import mod01 from './mod01-sanitation';
import mod02 from './mod02-consultation';
import mod03 from './mod03-skin-science';
import mod04 from './mod04-brow-mapping';
import mod05 from './mod05-technique';
import mod06 from './mod06-pigment';
import mod07 from './mod07-aftercare';
import mod08 from './mod08-photography';
import { mod09, mod10, mod11, mod12 } from './mod04-to-mod12';

export const CURRICULUM_MODULES: CurriculumModule[] = [
    mod01, mod02, mod03, mod04, mod05, mod06,
    mod07, mod08, mod09, mod10, mod11, mod12,
];

/** Look up a single module by slug */
export function getModuleBySlug(slug: string): CurriculumModule | undefined {
    return CURRICULUM_MODULES.find((m) => m.slug === slug);
}

/** Look up a lesson within a module */
export function getLessonBySlug(moduleSlug: string, lessonSlug: string) {
    const mod = getModuleBySlug(moduleSlug);
    if (!mod) return { module: undefined, lesson: undefined };
    return { module: mod, lesson: mod.lessons.find((l) => l.slug === lessonSlug) };
}

/** Total estimated hours across all modules */
export const TOTAL_HOURS = CURRICULUM_MODULES.reduce((sum, m) => sum + m.estimatedHours, 0);

/** Total lesson count */
export const TOTAL_LESSONS = CURRICULUM_MODULES.reduce((sum, m) => sum + m.lessons.length, 0);
