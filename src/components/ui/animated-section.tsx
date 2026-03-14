'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';

interface AnimatedSectionProps extends HTMLMotionProps<'div'> {
    direction?: 'up' | 'left' | 'right' | 'fade';
    delay?: number;
    duration?: number;
}

const directionMap = {
    up: { y: 30, x: 0 },
    left: { y: 0, x: -30 },
    right: { y: 0, x: 30 },
    fade: { y: 0, x: 0 },
};

export function AnimatedSection({
    direction = 'up',
    delay = 0,
    duration = 0.6,
    children,
    ...props
}: AnimatedSectionProps) {
    const offset = directionMap[direction];

    return (
        <motion.div
            initial={{ opacity: 0, y: offset.y, x: offset.x }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            {...props}
        >
            {children}
        </motion.div>
    );
}
