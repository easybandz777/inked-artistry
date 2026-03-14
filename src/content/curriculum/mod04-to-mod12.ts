import type { CurriculumModule } from '@/lib/types';

function stub(n: number, slug: string, title: string, desc: string, topics: string[], hours: number, lessonTitles: string[]): CurriculumModule {
    return {
        number: n, slug, title, description: desc, topics, estimatedHours: hours,
        lessons: lessonTitles.map((t, i) => ({
            id: `mod${n}-lesson${i + 1}`,
            slug: t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
            title: t,
            type: 'reading' as const,
            durationMinutes: 25,
            order: i + 1,
            keyPoints: [`Key concept for ${t}`],
            content: `# ${t}\n\nThis lesson is part of Module ${n}: ${title}. Full content will be available when your cohort begins this module.\n\n> Content coming soon — check back with your mentor for early access materials.`,
        })),
    };
}

export const mod09 = stub(9, 'policies-client-management', 'Policies & Client Management',
    'Setting professional boundaries, managing bookings, creating service agreements, and handling difficult situations gracefully.',
    ['Service agreements', 'Cancellation policies', 'Client communication', 'Record keeping'], 3,
    ['Creating Service Agreements', 'Booking & Cancellation Policies', 'Handling Difficult Client Situations', 'Record Keeping & Organization']);

export const mod10 = stub(10, 'business-setup', 'Business Setup for Artists',
    'Foundations for launching a PMU practice — from pricing strategy to insurance to building your brand presence.',
    ['Pricing your services', 'Insurance basics', 'Brand development', 'Marketing fundamentals'], 4,
    ['Pricing Strategy & Overhead Calculations', 'Insurance & Liability Essentials', 'Brand Identity & Visual Presence', 'Marketing Fundamentals for New Artists']);

export const mod11 = stub(11, 'compliance-studio-readiness', 'Compliance & Studio-Readiness',
    'Navigating local licensing requirements, health department regulations, and preparing for any required examinations in your area.',
    ['Licensing research', 'Health department standards', 'Exam preparation guidance', 'Professional associations'], 3,
    ['Licensing Requirements by State', 'Health Department Standards', 'Exam Preparation & Study Guide', 'Professional Associations & Continuing Education']);

export const mod12 = stub(12, 'professionalism-communication', 'Professionalism & Client Communication',
    'Building trust through communication excellence, managing expectations, and creating a premium client experience from first contact to follow-up.',
    ['Communication frameworks', 'Managing expectations', 'Follow-up systems', 'Building client loyalty'], 3,
    ['Professional Communication Frameworks', 'The Premium Client Experience', 'Follow-Up Systems & Retention', 'Building Long-Term Client Loyalty']);
