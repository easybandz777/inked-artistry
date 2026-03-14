'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { BookOpen, Download, MessageSquare, LayoutDashboard, Menu, X, LogOut } from 'lucide-react';
import { useState } from 'react';
import { useAuth, RequireAuth } from '@/lib/auth';

const NAV_ITEMS = [
    { href: '/academy/portal/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/academy/portal/curriculum', label: 'Curriculum', icon: BookOpen },
    { href: '/academy/portal/resources', label: 'Resources', icon: Download },
    { href: 'mailto:hello@inkedpermanentartistry.com', label: 'Mentorship', icon: MessageSquare },
];

export default function PortalShell({ children }: { children: React.ReactNode }) {
    return (
        <RequireAuth>
            <PortalShellInner>{children}</PortalShellInner>
        </RequireAuth>
    );
}

function PortalShellInner({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();
    const { user, logout } = useAuth();
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleLogout = () => {
        logout();
        router.push('/academy/portal/login');
    };

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
                    <p className="portal-sidebar-sub">
                        {user ? `${user.name} · ${user.role === 'admin' ? 'Administrator' : 'Student'}` : 'Student Portal'}
                    </p>
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
                    <button onClick={handleLogout} className="portal-signout">
                        <LogOut className="h-3.5 w-3.5" />
                        Sign Out
                    </button>
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
