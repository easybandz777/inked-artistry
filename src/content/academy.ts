
export const ACADEMY_INFO = {
    title: 'Inked Academy',
    tagline: 'Where Artistry Meets Education',
    philosophy: 'We believe exceptional artists are built through structured education, hands-on mastery, mentorship, and professional integrity. Our training programs are designed not just to teach technique — but to develop confident, studio-ready artists who understand the full scope of running a professional PMU practice.',
    whoIsItFor: [
        'Aspiring permanent makeup artists beginning their journey',
        'Licensed beauty professionals expanding their skill set',
        'Self-motivated individuals with a passion for artistry and detail',
        'Anyone seeking structured, hands-on PMU education rooted in real-world practice',
    ],
    whatMakesUsDifferent: [
        { title: 'Real Studio Experience', description: 'Train in our working studio alongside an active artist — not in a generic workshop setting.' },
        { title: 'Small Class Sizes', description: 'Personalized attention and individualized feedback throughout every phase of training.' },
        { title: 'Theory + Technique + Business', description: 'Our curriculum covers the full spectrum — from skin science to client management to building a sustainable practice.' },
        { title: 'Post-Training Mentorship', description: 'Ongoing support, portfolio review, and guidance as you begin your professional journey.' },
        { title: 'Compliance-Aware Education', description: 'We teach you how to navigate licensing requirements, health regulations, and professional standards in your market.' },
        { title: 'Certificate of Completion', description: 'Graduates receive a professional certificate documenting their training hours and curriculum completion.' },
    ],
};

export const FLAGSHIP_COURSE = {
    title: 'PMU Foundations Intensive',
    subtitle: 'Comprehensive Microblading & Permanent Makeup Training',
    tagline: 'Build the foundation for a career in permanent artistry.',
    description: 'Our flagship training program covers everything you need to begin your journey as a permanent makeup artist — from foundational theory and skin science to hands-on technique, client management, and business setup. This is a comprehensive, multi-day intensive designed to prepare you for real-world practice.',
    outcomes: [
        'Understand skin anatomy, healing science, and pigment theory',
        'Master brow mapping, design principles, and facial symmetry',
        'Develop confident manual technique with pressure and depth control',
        'Practice on latex, synthetic skin, and live models under supervision',
        'Learn professional consultation, contraindication screening, and consent processes',
        'Build foundational business knowledge for launching your practice',
        'Receive guidance on compliance, exam preparation, and studio-readiness',
    ],
    format: [
        { title: 'Online Theory Modules', description: 'Self-paced pre-course study covering skin science, sanitation, pigment theory, and professional standards.', icon: 'BookOpen' },
        { title: 'In-Studio Hands-On Training', description: 'Multi-day intensive with hands-on practice, live demonstrations, and supervised technique development.', icon: 'Palette' },
        { title: 'Live Model Work', description: 'Perform supervised procedures on real models to build confidence and real-world skill.', icon: 'Users' },
        { title: 'Mentorship & Support', description: 'Post-course mentorship including portfolio review, case discussion, and ongoing professional guidance.', icon: 'HeartHandshake' },
    ],
    investmentStart: 3500,
    kitIncluded: true,
    kitIncludes: [
        'Professional microblading tool set',
        'Starter pigment collection',
        'Practice materials (latex & synthetic skin)',
        'Aftercare product samples',
        'Business starter templates',
        'Course manual & reference materials',
    ],
};

// Re-export from the compartmentalized curriculum barrel (single source of truth)
export { CURRICULUM_MODULES } from './curriculum';
