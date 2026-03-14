'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, Suspense } from 'react';
import { useAuth } from '@/lib/auth';
import { LogIn, AlertCircle } from 'lucide-react';

export default function PortalLoginPage() {
    return (
        <Suspense>
            <LoginInner />
        </Suspense>
    );
}

function LoginInner() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { login, user } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // If already logged in, redirect
    if (user) {
        const redirect = searchParams.get('redirect') || '/academy/portal/dashboard';
        router.replace(redirect);
        return null;
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        const err = login(email, password);
        if (err) {
            setError(err);
            setLoading(false);
        } else {
            const redirect = searchParams.get('redirect') || '/academy/portal/dashboard';
            router.push(redirect);
        }
    };

    return (
        <div className="portal-login-page">
            <div className="portal-login-card">
                {/* Brand */}
                <div className="portal-login-brand">
                    <p className="academy-label">Inked Academy</p>
                    <h1 className="portal-login-title">Student Portal</h1>
                    <p className="portal-login-sub">
                        Access your curriculum, resources, and mentorship support.
                    </p>
                </div>

                {/* Error message */}
                {error && (
                    <div className="portal-login-error">
                        <AlertCircle className="h-4 w-4 shrink-0" />
                        <span>{error}</span>
                    </div>
                )}

                {/* Login form */}
                <form className="portal-login-form" onSubmit={handleSubmit}>
                    <div className="portal-field">
                        <label htmlFor="email" className="portal-label">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            autoComplete="email"
                            placeholder="you@email.com"
                            className="portal-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="portal-field">
                        <label htmlFor="password" className="portal-label">Password</label>
                        <input
                            id="password"
                            type="password"
                            autoComplete="current-password"
                            placeholder="••••••••"
                            className="portal-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="portal-login-meta">
                        <label className="portal-remember">
                            <input type="checkbox" className="portal-checkbox" />
                            <span>Remember me</span>
                        </label>
                    </div>

                    <button type="submit" className="portal-login-btn" disabled={loading}>
                        <LogIn className="h-4 w-4" />
                        {loading ? 'Signing in...' : 'Sign In to Portal'}
                    </button>
                </form>

                {/* Demo credentials helper */}
                <div className="portal-demo-credentials">
                    <p className="portal-demo-title">Demo Accounts</p>
                    <div className="portal-demo-account">
                        <span className="portal-demo-role">Admin</span>
                        <span className="portal-demo-detail">admin@inkedacademy.com / admin123</span>
                    </div>
                    <div className="portal-demo-account">
                        <span className="portal-demo-role">Student</span>
                        <span className="portal-demo-detail">student@inkedacademy.com / student123</span>
                    </div>
                </div>

                <p className="portal-login-footer">
                    Not yet enrolled?{' '}
                    <Link href="/academy/apply" className="portal-link">
                        Apply for training →
                    </Link>
                </p>
            </div>

            {/* Decorative background */}
            <div className="portal-login-bg" aria-hidden="true">
                <div className="portal-login-blob-1" />
                <div className="portal-login-blob-2" />
            </div>
        </div>
    );
}
