import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface BadgeProps {
    children: ReactNode;
    variant?: 'default' | 'accent' | 'dark' | 'outline';
    className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
    const variants = {
        default: 'bg-blush text-charcoal',
        accent: 'bg-rose-gold/10 text-rose-gold',
        dark: 'bg-charcoal text-warm-white',
        outline: 'border border-taupe text-soft-gray',
    };

    return (
        <span
            className={cn(
                'inline-block font-sans text-[10px] font-semibold uppercase tracking-[0.2em] px-3 py-1.5 rounded-sm',
                variants[variant],
                className
            )}
        >
            {children}
        </span>
    );
}
