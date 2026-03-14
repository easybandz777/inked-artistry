'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function Hero() {
    return (
        <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    poster="/images/inkedrachel.webp"
                >
                    <source src="/hero-video.mp4" type="video/mp4" />
                </video>
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/75" />
            </div>

            {/* Hero Content — direct motion.div (no whileInView, hero is always visible) */}
            <div className="hero-text-glow hero-content-wrapper">

                {/* Logo — transparent, floats over video */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                    className="flex justify-center mb-6"
                >
                    <Image
                        src="/images/logo-transparent.png"
                        alt="Inked Permanent Artistry"
                        width={420}
                        height={160}
                        priority
                        className="hero-logo-img"
                    />
                </motion.div>

                {/* Elegant divider */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                    className="flex items-center justify-center gap-4 mb-8"
                >
                    <div className="hero-divider-line" />
                    <span className="hero-divider-diamond">◆</span>
                    <div className="hero-divider-line" />
                </motion.div>

                {/* Tagline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                    className="hero-heading-glow hero-tagline"
                >
                    Enhance Your{' '}
                    <em className="italic font-normal hero-tagline-em">Natural</em>
                    {' '}Beauty
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    className="hero-body-text"
                >
                    Permanent brows, lip blush, fine-line &amp; tiny tattoos — artistry that
                    defines your beauty with naturally stunning, long-lasting results.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
                    className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5"
                >
                    <Link href="/booking" className="hero-btn-primary">
                        Book Your Appointment
                    </Link>
                    <Link href="/services" className="hero-btn-secondary">
                        Explore Services
                    </Link>
                </motion.div>

                {/* Service labels */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="mt-16 flex items-center justify-center gap-6 sm:gap-10 hero-service-labels uppercase tracking-[0.25em]"
                >
                    <span>Brows</span>
                    <span className="hero-service-dot" />
                    <span>Lips</span>
                    <span className="hero-service-dot" />
                    <span>Fine-Line</span>
                    <span className="hero-service-dot" />
                    <span>Tiny Tats</span>
                </motion.div>
            </div>

            {/* Bottom gradient fade into page */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-warm-white to-transparent" />
        </section>
    );
}
