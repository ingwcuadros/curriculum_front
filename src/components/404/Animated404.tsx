'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Animated404() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    useEffect(() => {
        if (prefersReducedMotion) return;

        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            setMousePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [prefersReducedMotion]);

    return (
        <div className="relative flex items-center justify-center py-12">
            {/* Glowing circles in background */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <motion.div
                    className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-[#4C9EEB]/20 to-[#2563EB]/20 blur-3xl"
                    animate={prefersReducedMotion ? {} : {
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
                <motion.div
                    className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-[#22D3EE]/20 to-[#4C9EEB]/20 blur-3xl"
                    animate={prefersReducedMotion ? {} : {
                        scale: [1.2, 1, 1.2],
                        rotate: [360, 180, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </div>

            {/* 404 Text */}
            <div className="relative flex items-center gap-4 sm:gap-8">
                {/* First 4 */}
                <motion.div
                    initial={prefersReducedMotion ? {} : { opacity: 0, x: -50 }}
                    animate={{
                        opacity: 1,
                        x: prefersReducedMotion ? 0 : mousePosition.x * 0.5,
                        y: prefersReducedMotion ? 0 : mousePosition.y * 0.5
                    }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                >
                    <div className="text-[120px] sm:text-[180px] lg:text-[240px] font-black leading-none bg-gradient-to-br from-[#4C9EEB] to-[#2563EB] bg-clip-text text-transparent select-none">
                        4
                    </div>
                    <motion.div
                        className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-[#4C9EEB] shadow-lg shadow-[#4C9EEB]/50"
                        animate={prefersReducedMotion ? {} : {
                            y: [0, -15, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </motion.div>

                {/* Middle 0 with rotating ring */}
                <motion.div
                    initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative"
                >
                    <div className="text-[120px] sm:text-[180px] lg:text-[240px] font-black leading-none bg-gradient-to-br from-[#2563EB] to-[#22D3EE] bg-clip-text text-transparent select-none">
                        0
                    </div>

                    {/* Orbiting particles */}
                    {[0, 120, 240].map((angle, i) => (
                        <motion.div
                            key={i}
                            className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-[#4C9EEB] to-[#2563EB]"
                            style={{
                                originX: 0.5,
                                originY: 0.5,
                            }}
                            animate={prefersReducedMotion ? {} : {
                                rotate: [angle, angle + 360],
                                x: [
                                    Math.cos((angle * Math.PI) / 180) * 70,
                                    Math.cos(((angle + 360) * Math.PI) / 180) * 70
                                ],
                                y: [
                                    Math.sin((angle * Math.PI) / 180) * 70,
                                    Math.sin(((angle + 360) * Math.PI) / 180) * 70
                                ],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear",
                                delay: i * 0.3
                            }}
                        />
                    ))}

                    {/* Rotating ring */}
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] sm:w-[200px] lg:w-[260px] h-[140px] sm:h-[200px] lg:h-[260px] rounded-full border-4 border-dashed border-[#4C9EEB]/30"
                        animate={prefersReducedMotion ? {} : {
                            rotate: 360,
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                </motion.div>

                {/* Last 4 */}
                <motion.div
                    initial={prefersReducedMotion ? {} : { opacity: 0, x: 50 }}
                    animate={{
                        opacity: 1,
                        x: prefersReducedMotion ? 0 : mousePosition.x * -0.5,
                        y: prefersReducedMotion ? 0 : mousePosition.y * -0.5
                    }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="relative"
                >
                    <div className="text-[120px] sm:text-[180px] lg:text-[240px] font-black leading-none bg-gradient-to-br from-[#22D3EE] to-[#4C9EEB] bg-clip-text text-transparent select-none">
                        4
                    </div>
                    <motion.div
                        className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-[#22D3EE] shadow-lg shadow-[#22D3EE]/50"
                        animate={prefersReducedMotion ? {} : {
                            x: [0, 15, 0],
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </motion.div>
            </div>

            {/* Floating geometric shapes */}
            <motion.div
                className="absolute top-10 left-1/4 w-12 h-12 border-2 border-[#2563EB]/50 rotate-45"
                animate={prefersReducedMotion ? {} : {
                    y: [0, -20, 0],
                    rotate: [45, 135, 45],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <motion.div
                className="absolute bottom-10 right-1/4 w-8 h-8 rounded-full border-2 border-[#4C9EEB]/50"
                animate={prefersReducedMotion ? {} : {
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </div>
    );
}