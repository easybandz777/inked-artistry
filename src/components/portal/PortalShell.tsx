'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Download, MessageSquare, LayoutDashboard, Menu, X } from 'lucide-react';
import { useState } from 'react';

const NAV_ITEMS = [
    { href: '/academy/portal/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/academy/portal/curriculum', label: 'Curriculum', icon: BookOpen },
    { href: '/academy/portal/resources', label: 'Resources', icon: Download },
    { href: 'mailto:hello@inkedpermanentartistry.com', label: 'Mentorship', icon: MessageSquare },
];

export default function PortalShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div className="portal-layout">
            {/* Mobile hamburger */}
            <button
                className="portal-mobile-toggle"
                onClick={() => setMobileOpen((o) => !o)}
                aria-label="Toggle sidebar"
            >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            {/* Sidebar */}
            <aside className={`portal-sidebar ${mobileOpen ? 'portal-sidebar-open' : ''}`}>
                <div className="portal-sidebar-brand">
                    <p className="portal-sidebar-label">Inked Academy</p>
                    <p className="portal-sidebar-sub">Student Portal</p>
                </div>
                <nav className="portal-nav">
                    {NAV_ITEMS.map((item) => {
                        const isActive = item.href.startsWith('/academy/portal')
                            ? pathname === item.href || pathname.startsWith(item.href + '/')
                            : false;
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`portal-nav-item ${isActive ? 'portal-nav-active' : ''}`}
                                onClick={() => setMobileOpen(false)}
                            >
                                <Icon className="h-4 w-4" />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>
                <div className="portal-sidebar-footer">
                    <Link href="/academy/portal/login" className="portal-signout">Sign Out</Link>
                </div>
            </aside>

            {/* Backdrop */}
            {mobileOpen && (
                <div className="portal-backdrop" onClick={() => setMobileOpen(false)} aria-hidden="true" />
            )}

            {/* Main */}
            <main className="portal-main">{children}</main>
        </div>
    );
}
