import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
    className?: string;
    variant?: 'default' | 'alternate' | 'dark' | 'accent';
    spacious?: boolean;
    id?: string;
}

export function Section({ children, className, variant = 'default', spacious = false, id }: SectionProps) {
    const variants = {
        default: 'bg-warm-white',
        alternate: 'bg-cream',
        dark: 'bg-espresso text-warm-white',
        accent: 'bg-blush',
    };

    return (
        <section
            id={id}
            className={cn(
                variants[variant],
                spacious ? 'py-24 md:py-32' : 'py-16 md:py-24',
                className
            )}
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {children}
            </div>
        </section>
    );
}

export function SectionHeader({ label, title, description, centered = true, className }: {
    label?: string;
    title: string;
    description?: string;
    centered?: boolean;
    className?: string;
}) {
    return (
        <div className={cn('mb-14', centered && 'text-center', className)}>
            {label && (
                <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-rose-gold mb-4">{label}</p>
            )}
            <h2>{title}</h2>
            {description && (
                <p className="mt-4 max-w-2xl text-soft-gray leading-relaxed mx-auto">{description}</p>
            )}
            <div className="section-divider mt-6" />
        </div>
    );
}
