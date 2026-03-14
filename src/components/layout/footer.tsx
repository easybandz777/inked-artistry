import Link from 'next/link';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { SITE_CONFIG, FOOTER_LINKS } from '@/content/site-config';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-espresso text-warm-white/80">
            {/* Gold accent line */}
            <div className="h-px bg-gradient-to-r from-transparent via-rose-gold to-transparent" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-16 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-block">
                            <span className="font-serif text-2xl text-warm-white tracking-wide">
                                {SITE_CONFIG.name}
                            </span>
                        </Link>
                        <p className="mt-4 text-sm leading-relaxed max-w-sm" style={{ color: 'rgba(250,248,245,0.7)' }}>
                            {SITE_CONFIG.description}
                        </p>
                        <div className="mt-6 space-y-3">
                            <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-3 text-sm hover:text-rose-gold transition-colors" style={{ color: 'rgba(250,248,245,0.75)' }}>
                                <Phone className="h-4 w-4" />
                                {SITE_CONFIG.phone}
                            </a>
                            <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-3 text-sm hover:text-rose-gold transition-colors" style={{ color: 'rgba(250,248,245,0.75)' }}>
                                <Mail className="h-4 w-4" />
                                {SITE_CONFIG.email}
                            </a>
                            <div className="flex items-center gap-3 text-sm" style={{ color: 'rgba(250,248,245,0.75)' }}>
                                <MapPin className="h-4 w-4 shrink-0" />
                                {SITE_CONFIG.address.street}, {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}
                            </div>
                        </div>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-warm-white mb-5">Services</h4>
                        <ul className="space-y-3">
                            {FOOTER_LINKS.services.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-sm hover:text-rose-gold transition-colors" style={{ color: 'rgba(250,248,245,0.7)' }}>

                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Academy Links */}
                    <div>
                        <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-warm-white mb-5">Academy</h4>
                        <ul className="space-y-3">
                            {FOOTER_LINKS.academy.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-sm hover:text-rose-gold transition-colors" style={{ color: 'rgba(250,248,245,0.7)' }}>

                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-warm-white mb-5">Company</h4>
                        <ul className="space-y-3">
                            {FOOTER_LINKS.company.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-sm hover:text-rose-gold transition-colors" style={{ color: 'rgba(250,248,245,0.7)' }}>

                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-14 pt-8 border-t border-warm-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-6">
                        {FOOTER_LINKS.legal.map((link) => (
                            <Link key={link.href} href={link.href} className="text-xs text-warm-white/40 hover:text-warm-white/60 transition-colors">
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="p-2 border border-warm-white/15 rounded-full text-warm-white/40 hover:text-rose-gold hover:border-rose-gold transition-all">
                            <Instagram className="h-4 w-4" />
                        </a>
                        <a href={SITE_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer" className="p-2 border border-warm-white/15 rounded-full text-warm-white/40 hover:text-rose-gold hover:border-rose-gold transition-all">
                            <Facebook className="h-4 w-4" />
                        </a>
                    </div>

                    <p className="text-xs text-warm-white/30">
                        © {currentYear} {SITE_CONFIG.name}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
