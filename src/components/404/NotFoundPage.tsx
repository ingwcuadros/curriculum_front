
"use client";
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Animated404 from './Animated404';
import FloatingShape from './FloatingShape';
import { Home, ArrowLeft, Search, Mail } from 'lucide-react';

export default function NotFounPage() {
    const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const t = useTranslations('notFoundPage');

    return (
        <div className="bg-gradient-to-br from-[#F6F7F9] via-white to-[#F6F7F9] relative overflow-hidden">
            <FloatingShape size={300} color="#4C9EEB" delay={0} initialX={10} initialY={20} />
            <FloatingShape size={200} color="#2563EB" delay={1} initialX={80} initialY={60} />
            <FloatingShape size={250} color="#22D3EE" delay={2} initialX={60} initialY={10} />
            <FloatingShape size={180} color="#4C9EEB" delay={1.5} initialX={20} initialY={70} />
            <main className="relative pt-8 lg:pt-16 pb-12">
                <div className="max-w-6xl mx-auto px-4 ">
                    {/* Animated 404 */}
                    <Animated404 />

                    {/* Text Content */}
                    <motion.div
                        initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-center mt-8 mb-12"
                    >
                        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                            {t('title')}
                        </h1>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            {t('subtitle')}
                        </p>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap items-center justify-center gap-4 mb-10"
                    >
                        <Link
                            href="/"
                            className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#4C9EEB] to-[#2563EB] text-white font-semibold rounded-xl shadow-lg shadow-[#4C9EEB]/30 hover:shadow-xl hover:shadow-[#4C9EEB]/40 hover:scale-105 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4C9EEB] focus-visible:ring-offset-2"
                        >
                            <Home className="w-5 h-5" />
                            {t('goHome')}
                        </Link>


                    </motion.div>

                    {/* Decorative Elements */}
                    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                        <motion.div
                            className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-[#4C9EEB]"
                            animate={prefersReducedMotion ? {} : {
                                scale: [1, 2, 1],
                                opacity: [0.3, 1, 0.3],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <motion.div
                            className="absolute top-1/2 right-20 w-3 h-3 rounded-full bg-[#2563EB]"
                            animate={prefersReducedMotion ? {} : {
                                scale: [1, 2, 1],
                                opacity: [0.3, 1, 0.3],
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                            }}
                        />
                        <motion.div
                            className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-[#22D3EE]"
                            animate={prefersReducedMotion ? {} : {
                                scale: [1, 2, 1],
                                opacity: [0.3, 1, 0.3],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5
                            }}
                        />
                    </div>
                </div>
            </main>
        </div>
    )




}