'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { NAV_LINKS, SITE_CONFIG } from '@/content/site-config';
import { Button } from '@/components/ui/button';

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    // Only homepage has the dark video hero
    const isHomepage = pathname === '/';
    const useLightText = isHomepage && !scrolled;

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [mobileOpen]);

    return (
        <>
            <header
                className={cn(
                    'fixed top-0 left-0 right-0 z-40 transition-all duration-500',
                    scrolled
                        ? 'bg-warm-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.05)]'
                        : isHomepage
                            ? 'bg-gradient-to-b from-espresso/40 to-transparent'
                            : 'bg-warm-white/80 backdrop-blur-sm'
                )}
            >
                <nav className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 group">
                            <span className={cn(
                                'font-serif text-xl tracking-wide transition-colors duration-300',
                                useLightText
                                    ? 'text-white group-hover:text-rose-gold-light'
                                    : 'text-espresso group-hover:text-rose-gold'
                            )}>
                                {SITE_CONFIG.name}
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex items-center gap-8">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        'font-sans text-[11px] uppercase tracking-[0.18em] transition-colors duration-300',
                                        useLightText
                                            ? 'text-white/80 hover:text-white'
                                            : 'text-charcoal/70 hover:text-espresso'
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Button href="/booking" size="sm" variant="primary">
                                Book Now
                            </Button>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className={cn(
                                'lg:hidden p-2 cursor-pointer transition-colors',
                                useLightText ? 'text-white' : 'text-charcoal'
                            )}
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        className="fixed inset-0 z-50 bg-warm-white"
                    >
                        <div className="flex flex-col h-full">
                            <div className="flex items-center justify-between px-6 h-20 border-b border-border">
                                <Link href="/" onClick={() => setMobileOpen(false)} className="font-serif text-xl tracking-wide text-espresso">
                                    {SITE_CONFIG.name}
                                </Link>
                                <button onClick={() => setMobileOpen(false)} className="p-2 text-charcoal cursor-pointer">
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            <div className="flex-1 flex flex-col justify-center px-8 gap-6">
                                {NAV_LINKS.map((link, i) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + i * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setMobileOpen(false)}
                                            className="block font-serif text-2xl text-charcoal hover:text-rose-gold transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="pt-6"
                                >
                                    <Button href="/booking" size="lg" className="w-full" onClick={() => setMobileOpen(false)}>
                                        Book Now
                                    </Button>
                                </motion.div>
                            </div>

                            <div className="px-8 pb-10 text-center">
                                <p className="text-xs text-soft-gray uppercase tracking-widest">{SITE_CONFIG.tagline}</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
