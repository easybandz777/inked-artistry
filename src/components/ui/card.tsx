import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
    hoverable?: boolean;
    padded?: boolean;
}

export function Card({ children, className, hoverable = true, padded = true }: CardProps) {
    return (
        <div
            className={cn(
                'bg-white rounded-sm border border-border/50',
                'shadow-[0_2px_16px_rgba(26,26,26,0.04)]',
                hoverable && 'transition-all duration-300 hover:shadow-[0_8px_30px_rgba(26,26,26,0.08)] hover:-translate-y-1',
                padded && 'p-6 md:p-8',
                className
            )}
        >
            {children}
        </div>
    );
}

export function CardImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
    return (
        <div className={cn('overflow-hidden rounded-sm', className)}>
            <div
                className="w-full h-full bg-taupe-light/30 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                style={{ backgroundImage: `url(${src})` }}
                role="img"
                aria-label={alt}
            />
        </div>
    );
}
