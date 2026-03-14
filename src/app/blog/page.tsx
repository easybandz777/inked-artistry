import type { Metadata } from 'next';
import Link from 'next/link';
import { Section, SectionHeader } from '@/components/ui/section';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Badge } from '@/components/ui/badge';
import { BLOG_POSTS } from '@/content/blog';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Blog | Education & Insights',
    description: 'Expert insights, education, and guidance on permanent makeup, aftercare, artist training, and beauty artistry from Inked Permanent Artistry.',
};

export default function BlogPage() {
    return (
        <>
            <section className="relative py-20 md:py-28 bg-gradient-to-b from-cream to-warm-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <AnimatedSection direction="up">
                        <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-rose-gold mb-4">Blog</p>
                        <h1>Education & <span className="italic">Insights</span></h1>
                        <p className="mt-4 max-w-2xl mx-auto text-soft-gray">
                            Expert guidance on permanent makeup, aftercare, choosing the right artist, and building a career in beauty artistry.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <Section spacious>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {BLOG_POSTS.map((post, i) => (
                        <AnimatedSection key={post.slug} direction="up" delay={i * 0.08}>
                            <Link href={`/blog/${post.slug}`} className="group block">
                                <div className="bg-white rounded-sm border border-border/50 overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(26,26,26,0.08)] hover:-translate-y-1">
                                    <div className="h-48 bg-gradient-to-br from-cream to-blush flex items-center justify-center">
                                        <span className="font-serif text-lg text-taupe/30 italic">{post.category}</span>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <Badge variant="outline">{post.category}</Badge>
                                        </div>
                                        <h3 className="font-serif text-lg mb-2 group-hover:text-rose-gold transition-colors leading-snug">
                                            {post.title}
                                        </h3>
                                        <p className="text-sm text-soft-gray leading-relaxed mb-4">{post.excerpt}</p>
                                        <div className="flex items-center justify-between text-xs text-soft-gray">
                                            <div className="flex items-center gap-3">
                                                <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {new Date(post.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                                                <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                                            </div>
                                            <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </AnimatedSection>
                    ))}
                </div>
            </Section>
        </>
    );
}
