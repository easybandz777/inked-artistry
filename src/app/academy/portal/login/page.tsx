import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Student Login | Inked Academy Portal',
    description: 'Access your Inked Academy student portal — curriculum, resources, and mentorship support.',
};

export default function PortalLoginPage() {
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

                {/* Login form */}
                <form className="portal-login-form" action="/academy/portal/dashboard">
                    <div className="portal-field">
                        <label htmlFor="email" className="portal-label">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            autoComplete="email"
                            placeholder="you@email.com"
                            className="portal-input"
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
                            required
                        />
                    </div>

                    <div className="portal-login-meta">
                        <label className="portal-remember">
                            <input type="checkbox" className="portal-checkbox" />
                            <span>Remember me</span>
                        </label>
                        <Link href="#" className="portal-forgot">Forgot password?</Link>
                    </div>

                    <button type="submit" className="portal-login-btn">
                        Sign In to Portal
                    </button>
                </form>

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
