import type { Metadata } from 'next';
import Link from 'next/link';
import PortalShell from '@/components/portal/PortalShell';
import { CURRICULUM_MODULES, TOTAL_LESSONS, TOTAL_HOURS } from '@/content/curriculum';
import { ChevronLeft, CheckCircle, Clock, ChevronDown, BookOpen } from 'lucide-react';
import AccordionCurriculum from './AccordionCurriculum';

export const metadata: Metadata = {
    title: 'Curriculum | Inked Academy Portal',
    description: 'Access all 12 curriculum modules of the PMU Foundations Intensive.',
};

export default function PortalCurriculumPage() {
    return (
        <PortalShell>
            <div className="portal-header">
                <div>
                    <Link href="/academy/portal/dashboard" className="portal-back-link">
                        <ChevronLeft className="h-4 w-4" /> Back to Dashboard
                    </Link>
                    <h1 className="portal-welcome mt-2">PMU Foundations Curriculum</h1>
                    <p className="portal-cohort">
                        {CURRICULUM_MODULES.length} modules · {TOTAL_LESSONS} lessons · {TOTAL_HOURS} hours
                    </p>
                </div>
            </div>

            <AccordionCurriculum modules={CURRICULUM_MODULES} completedModules={3} />
        </PortalShell>
    );
}
