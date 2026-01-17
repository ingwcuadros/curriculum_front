import React from 'react';
import { motion } from 'framer-motion';

export default function FloatingShape({
    size = 60,
    color = '#4C9EEB',
    delay = 0,
    duration = 3,
    initialX = 0,
    initialY = 0
}) {
    const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    return (
        <motion.div
            className="absolute rounded-full blur-xl opacity-30"
            style={{
                width: size,
                height: size,
                background: `radial-gradient(circle, ${color}, transparent)`,
                left: initialX,
                top: initialY,
            }}
            animate={prefersReducedMotion ? {} : {
                x: [0, 30, -30, 0],
                y: [0, -30, 30, 0],
                scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut"
            }}
        />
    );
}