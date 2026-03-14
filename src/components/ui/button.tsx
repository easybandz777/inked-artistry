'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { type ButtonHTMLAttributes, forwardRef, type CSSProperties } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    className?: string;
}

/* Explicit color values keyed by variant — guarantees text colour
   wins over the global `a { color: inherit }` and `p { color: … }` rules
   that were hiding button text on charcoal backgrounds. */
const variantColors: Record<string, string> = {
    primary: '#FAF8F5',   // warm-white
    secondary: '#FAF8F5', // warm-white
    outline: '#2A2A2A',   // charcoal (overridden on hover via CSS)
    ghost: 'currentColor',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant = 'primary', size = 'md', href, className, style, children, ...props }, ref) => {
        const baseStyles = 'inline-flex items-center justify-center font-sans font-medium tracking-wider uppercase transition-all duration-300 ease-out rounded-sm focus:outline-none focus:ring-2 focus:ring-rose-gold/30 focus:ring-offset-2 focus:ring-offset-warm-white cursor-pointer btn-component';

        const variants: Record<string, string> = {
            primary: 'bg-charcoal hover:bg-espresso btn-primary',
            secondary: 'bg-rose-gold hover:bg-rose-gold-light btn-secondary',
            outline: 'border border-charcoal hover:bg-charcoal btn-outline',
            ghost: 'hover:bg-blush/30',
        };

        const sizes: Record<string, string> = {
            sm: 'px-5 py-2.5 text-xs',
            md: 'px-7 py-3 text-xs',
            lg: 'px-9 py-4 text-sm',
        };

        const colorStyle: CSSProperties = {
            color: variantColors[variant] ?? 'currentColor',
            ...style,
        };

        const classes = cn(baseStyles, variants[variant], sizes[size], className);

        if (href) {
            return (
                <Link href={href} className={classes} style={colorStyle}>
                    {children}
                </Link>
            );
        }

        return (
            <button ref={ref} className={classes} style={colorStyle} {...props}>
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';
export { Button };
