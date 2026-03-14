'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
    images: { src: string; alt: string; caption?: string }[];
    initialIndex?: number;
    isOpen: boolean;
    onClose: () => void;
}

export function Lightbox({ images, initialIndex = 0, isOpen, onClose }: LightboxProps) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    useEffect(() => {
        setCurrentIndex(initialIndex);
    }, [initialIndex]);

    const goNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const goPrev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') goNext();
            if (e.key === 'ArrowLeft') goPrev();
        };
        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose, goNext, goPrev]);

    if (!isOpen || images.length === 0) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-espresso/90 backdrop-blur-sm"
                onClick={onClose}
            >
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-warm-white/70 hover:text-warm-white transition-colors z-10 cursor-pointer"
                >
                    <X className="h-6 w-6" />
                </button>

                {images.length > 1 && (
                    <>
                        <button
                            onClick={(e) => { e.stopPropagation(); goPrev(); }}
                            className="absolute left-4 md:left-8 text-warm-white/70 hover:text-warm-white transition-colors z-10 cursor-pointer"
                        >
                            <ChevronLeft className="h-8 w-8" />
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); goNext(); }}
                            className="absolute right-4 md:right-8 text-warm-white/70 hover:text-warm-white transition-colors z-10 cursor-pointer"
                        >
                            <ChevronRight className="h-8 w-8" />
                        </button>
                    </>
                )}

                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="relative max-w-4xl max-h-[80vh] mx-4"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="w-full h-[60vh] bg-taupe-light/20 rounded-sm flex items-center justify-center">
                        <div className="text-center text-warm-white/50 p-8">
                            <p className="text-sm uppercase tracking-widest mb-2">Gallery Image</p>
                            <p className="text-xs">{images[currentIndex]?.alt}</p>
                        </div>
                    </div>
                    {images[currentIndex]?.caption && (
                        <p className="text-center text-warm-white/70 text-sm mt-4">{images[currentIndex].caption}</p>
                    )}
                    <p className="text-center text-warm-white/40 text-xs mt-2">
                        {currentIndex + 1} / {images.length}
                    </p>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
