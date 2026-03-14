'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { type ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant = 'primary', size = 'md', href, className, children, ...props }, ref) => {
        const baseStyles = 'inline-flex items-center justify-center font-sans font-medium tracking-wider uppercase transition-all duration-300 ease-out rounded-sm focus:outline-none focus:ring-2 focus:ring-rose-gold/30 focus:ring-offset-2 focus:ring-offset-warm-white cursor-pointer';

        const variants = {
            primary: 'bg-charcoal text-warm-white hover:bg-espresso',
            secondary: 'bg-rose-gold text-warm-white hover:bg-rose-gold-light',
            outline: 'border border-charcoal text-charcoal hover:bg-charcoal hover:text-warm-white',
            ghost: 'text-current hover:bg-blush/30',
        };

        const sizes = {
            sm: 'px-5 py-2.5 text-xs',
            md: 'px-7 py-3 text-xs',
            lg: 'px-9 py-4 text-sm',
        };

        const classes = cn(baseStyles, variants[variant], sizes[size], className);

        if (href) {
            return (
                <Link href={href} className={classes}>
                    {children}
                </Link>
            );
        }

        return (
            <button ref={ref} className={classes} {...props}>
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';
export { Button };
