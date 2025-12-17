'use client';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { Award, GraduationCap, Mic } from 'lucide-react';
import AchievementIllustration from './AchievementIllustration';




export default function Achievements({ data }: { data?: any }) {
    return (
        <section aria-labelledby="achievements-title" className="relative py-24 lg:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#12151B] via-[#0B0F14] to-[#12151B]" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#7C4DFF]/5 rounded-full blur-[150px]" />

            <div className="relative max-w-7xl lg:max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-6 ">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C4DFF]/10 border border-[#7C4DFF]/20 text-[#7C4DFF] text-sm font-medium mb-4">
                        <Award className="w-4 h-4" />
                        Achievements
                    </span>
                    <h2 id="achievements-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                        {data?.title}
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Code block card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="order-2 lg:order-1"
                    >
                        <div className="rounded-2xl overflow-hidden bg-[#0D1117] border border-white/10 shadow-2xl">
                            {/* IDE header */}
                            <div className="flex items-center gap-2 px-4 py-3 bg-[#161B22] border-b border-white/5">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                                    <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                                </div>
                                <span className="ml-4 text-xs text-gray-500 font-mono">achievements.md</span>
                            </div>

                            {/* Content */}
                            <div className="p-6 font-mono text-sm">
                                <ReactMarkdown
                                    components={{
                                        h2: ({ children }) => (
                                            <h3 className="flex items-center gap-2 text-[#4C9EEB] font-semibold text-base lg:text-2xl mb-3 mt-4 first:mt-0">
                                                {String(children).includes('Certificaciones') && <Award className="w-4 h-4" />}
                                                {String(children).includes('Formación') && <GraduationCap className="w-4 h-4" />}
                                                {String(children).includes('Publicaciones') && <Mic className="w-4 h-4" />}
                                                <span className="text-[#7C4DFF]">##</span> {children}
                                            </h3>
                                        ),
                                        ul: ({ children }) => (
                                            <ul className="space-y-2 mb-4">{children}</ul>
                                        ),
                                        li: ({ children }) => (
                                            <li className="flex items-start gap-2 text-sm lg:text-base  text-gray-300">
                                                <span className="text-[#22D3EE] mt-0.5">-</span>
                                                <span>{children}</span>
                                            </li>
                                        ),
                                        p: ({ children }) => (
                                            <p className="text-gray-400 mb-2">{children}</p>
                                        ),
                                    }}
                                >
                                    {data.content}
                                </ReactMarkdown>
                            </div>

                            {/* Line numbers decoration */}
                            <div className="absolute left-0 top-12 bottom-0 w-10 bg-[#0D1117] border-r border-white/5 hidden" />
                        </div>
                    </motion.div>

                    {/* Animated SVG illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="order-1 lg:order-2 flex justify-center"
                    >
                        <div className="relative w-full max-w-md">
                            <AchievementIllustration aria-hidden="true" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );

}