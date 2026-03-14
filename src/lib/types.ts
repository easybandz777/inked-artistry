export interface Service {
    slug: string;
    title: string;
    shortTitle: string;
    tagline: string;
    description: string;
    image: string;
    heroImage?: string;
    benefits: string[];
    whoIsItFor: string[];
    prepRequirements: string[];
    aftercare: string[];
    pricingStart: number;
    duration: string;
    healingTime: string;
    touchUpIncluded: boolean;
    faqs: FAQ[];
}

export interface FAQ {
    question: string;
    answer: string;
    category?: string;
}

export interface Testimonial {
    name: string;
    service: string;
    quote: string;
    rating: number;
    location?: string;
}

export interface GalleryItem {
    id: string;
    category: string;
    type: 'before-after' | 'healed' | 'fresh' | 'detail';
    title: string;
    caption: string;
    beforeImage?: string;
    afterImage?: string;
    image?: string;
}

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
}

export type LessonType = 'reading' | 'video' | 'exercise' | 'quiz';

export interface Lesson {
    id: string;           // e.g. 'mod1-lesson1'
    slug: string;         // e.g. 'ppe-and-glove-protocol'
    title: string;
    type: LessonType;
    durationMinutes: number;
    content: string;      // Markdown-formatted body
    keyPoints?: string[]; // Summary bullet points shown in sidebar
    order: number;
}

export interface CurriculumModule {
    number: number;
    slug: string;          // e.g. 'sanitation-workstation-setup'
    title: string;
    description: string;
    topics: string[];
    lessons: Lesson[];
    estimatedHours: number;
}

export interface FormData {
    [key: string]: string | boolean | File | null;
}
