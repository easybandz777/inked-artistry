'use client';

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';

/* ── Demo accounts ── */
export interface DemoUser {
    email: string;
    name: string;
    role: 'admin' | 'student';
}

const DEMO_ACCOUNTS: Record<string, { password: string; user: DemoUser }> = {
    'admin@inkedacademy.com': {
        password: 'admin123',
        user: { email: 'admin@inkedacademy.com', name: 'Rachel (Admin)', role: 'admin' },
    },
    'student@inkedacademy.com': {
        password: 'student123',
        user: { email: 'student@inkedacademy.com', name: 'Demo Student', role: 'student' },
    },
};

/* ── Context ── */
interface AuthContextType {
    user: DemoUser | null;
    isLoading: boolean;
    login: (email: string, password: string) => string | null;  // returns error or null
    logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    isLoading: true,
    login: () => 'Not initialised',
    logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

/* ── Provider ── */
export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<DemoUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Hydrate from localStorage on mount
    useEffect(() => {
        try {
            const stored = localStorage.getItem('inked_user');
            if (stored) setUser(JSON.parse(stored));
        } catch { /* ignore */ }
        setIsLoading(false);
    }, []);

    const login = (email: string, password: string): string | null => {
        const entry = DEMO_ACCOUNTS[email.toLowerCase().trim()];
        if (!entry) return 'No account found with that email';
        if (entry.password !== password) return 'Incorrect password';
        setUser(entry.user);
        localStorage.setItem('inked_user', JSON.stringify(entry.user));
        return null;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('inked_user');
    };

    return (
        <AuthContext.Provider value={{ user, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

/* ── Route guard component ── */
export function RequireAuth({ children }: { children: ReactNode }) {
    const { user, isLoading } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (!isLoading && !user) {
            router.replace(`/academy/portal/login?redirect=${encodeURIComponent(pathname)}`);
        }
    }, [user, isLoading, router, pathname]);

    if (isLoading) {
        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-sans)', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Loading...
                </p>
            </div>
        );
    }

    if (!user) return null;

    return <>{children}</>;
}
