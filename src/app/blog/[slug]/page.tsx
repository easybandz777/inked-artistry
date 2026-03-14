import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Section } from '@/components/ui/section';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BLOG_POSTS } from '@/content/blog';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);
    if (!post) return {};
    return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);
    if (!post) notFound();

    return (
        <>
            <section className="relative py-20 md:py-28 bg-gradient-to-b from-cream to-warm-white">
                <div className="mx-auto max-w-3xl px-6 lg:px-8">
                    <AnimatedSection direction="up">
                        <Button href="/blog" variant="ghost" size="sm" className="mb-6">
                            <ArrowLeft className="h-3 w-3 mr-2" /> Back to Blog
                        </Button>
                        <Badge variant="accent" className="mb-4">{post.category}</Badge>
                        <h1 className="leading-tight">{post.title}</h1>
                        <div className="mt-4 flex items-center gap-4 text-sm text-soft-gray">
                            <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                            <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {post.readTime}</span>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            <Section spacious>
                <div className="max-w-3xl mx-auto">
                    <AnimatedSection direction="up">
                        <div className="aspect-video bg-gradient-to-br from-cream to-blush rounded-sm mb-10 flex items-center justify-center">
                            <span className="font-serif text-2xl text-taupe/30 italic">Featured Image</span>
                        </div>

                        <div className="space-y-6 text-soft-gray leading-relaxed">
                            <p className="text-lg">{post.excerpt}</p>
                            <p>This is a placeholder for the full blog post content. In a production environment, this content would be loaded from a CMS, markdown files, or a database. The blog post template is designed to support rich content including headings, paragraphs, images, lists, and call-to-action blocks.</p>
                            <h2 className="font-serif text-xl text-charcoal !mt-10">Key Takeaways</h2>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-rose-gold rounded-full mt-2 shrink-0" />This section would contain the main points of the article.</li>
                                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-rose-gold rounded-full mt-2 shrink-0" />Information would be educational, trustworthy, and SEO-optimized.</li>
                                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-rose-gold rounded-full mt-2 shrink-0" />Each article supports the brand&apos;s authority and local search presence.</li>
                            </ul>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection direction="up" delay={0.15}>
                        <div className="mt-14 pt-10 border-t border-border">
                            <div className="text-center">
                                <h3 className="font-serif text-xl mb-3">Ready to Take the Next Step?</h3>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                                    <Button href="/booking" size="md">Book a Consultation</Button>
                                    <Button href="/services" size="md" variant="outline">View Our Services</Button>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </Section>
        </>
    );
}
