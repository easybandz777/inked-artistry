'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionItem {
    question: string;
    answer: string;
}

interface AccordionProps {
    items: AccordionItem[];
    className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className={cn('divide-y divide-border', className)}>
            {items.map((item, index) => (
                <div key={index} className="py-5">
                    <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="flex w-full items-center justify-between text-left group cursor-pointer"
                    >
                        <span className="font-sans text-base font-medium text-charcoal pr-8 group-hover:text-espresso transition-colors">
                            {item.question}
                        </span>
                        <ChevronDown
                            className={cn(
                                'h-4 w-4 text-soft-gray shrink-0 transition-transform duration-300',
                                openIndex === index && 'rotate-180'
                            )}
                        />
                    </button>
                    <AnimatePresence>
                        {openIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                                className="overflow-hidden"
                            >
                                <p className="pt-3 text-soft-gray leading-relaxed text-sm">
                                    {item.answer}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}
