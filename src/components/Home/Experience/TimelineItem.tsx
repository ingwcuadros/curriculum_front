'use client'

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { ExperienceArticleData } from "@/schemas/experience.schema";



interface TimelineItemProps {
    experience: ExperienceArticleData;
    index: number;
    isLeft: boolean;
    prefersReducedMotion?: boolean;
}


export default function TimelineItem({ experience, index, isLeft, prefersReducedMotion }: TimelineItemProps) {

    const Icon = Briefcase;
    const accentColors = [
        { bg: 'from-[#4C9EEB]/20 to-[#4C9EEB]/5', border: 'border-[#4C9EEB]/30', text: 'text-[#4C9EEB]', glow: 'bg-[#4C9EEB]', dot: 'bg-[#4C9EEB]' },
        { bg: 'from-[#7C4DFF]/20 to-[#7C4DFF]/5', border: 'border-[#7C4DFF]/30', text: 'text-[#7C4DFF]', glow: 'bg-[#7C4DFF]', dot: 'bg-[#7C4DFF]' },
        { bg: 'from-[#22D3EE]/20 to-[#22D3EE]/5', border: 'border-[#22D3EE]/30', text: 'text-[#22D3EE]', glow: 'bg-[#22D3EE]', dot: 'bg-[#22D3EE]' },
    ];

    const accent = accentColors[index % accentColors.length];

    const animationDuration = prefersReducedMotion ? 0 : 0.3;

    return (
        <div className={`relative flex items-center ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
            {/* Card */}
            <motion.article
                role="listitem"
                aria-label={`Experiencia: ${experience.title}`}
                initial={{
                    opacity: 0,
                    x: prefersReducedMotion ? 0 : (isLeft ? -30 : 30),
                    y: prefersReducedMotion ? 0 : 20
                }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: animationDuration, ease: "easeOut" }}
                className={`group relative w-full lg:w-[calc(50%-3rem)] ${isLeft ? 'lg:pr-8' : 'lg:pl-8'} pl-16 lg:pl-0`}
            >
                <div
                    className={`relative p-6 rounded-2xl bg-gradient-to-br ${accent.bg} border ${accent.border} backdrop-blur-sm hover:border-opacity-70 hover:shadow-xl hover:shadow-[#4C9EEB]/10 hover:-translate-y-1 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#4C9EEB] focus-within:ring-offset-2 focus-within:ring-offset-[#0B0F14]`}
                    tabIndex={0}
                    role="article"
                    aria-label={`Experiencia: ${experience.title}`}
                >
                    {/* Top decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden rounded-tr-2xl pointer-events-none">
                        <div className={`absolute -top-16 -right-16 w-32 h-32 ${accent.glow} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity duration-300`} />
                    </div>

                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#0B0F14] border ${accent.border} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-5 h-5 ${accent.text}`} aria-hidden="true" />
                    </div>

                    {/* Period badge */}
                    <div className={`inline-flex items-center px-3 py-1 rounded-full bg-[#0B0F14]/50 border border-white/10 text-gray-400 text-xs font-medium mb-4`}>
                        <time dateTime={experience.period}>{experience.period}</time>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-[#4C9EEB] transition-colors duration-300">
                        {experience.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {experience.content}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2" role="list" aria-label="Tecnologías y competencias">
                        {experience.tags.map((tag: any, tagIndex: any) => (
                            <span
                                key={tagIndex}
                                role="listitem"
                                className="px-2.5 py-1 rounded-lg bg-[#0B0F14]/50 border border-white/10 text-gray-300 text-xs font-medium"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Hover effect line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 ${accent.glow} rounded-b-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-300`} />
                </div>
            </motion.article>

            {/* Timeline dot - Desktop (centered) */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: animationDuration, delay: 0.2 }}
                className="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-10"
            >
                <div className={`relative w-14 h-14 rounded-full ${accent.dot} flex items-center justify-center border-4 border-[#0B0F14] shadow-lg shadow-[#4C9EEB]/30`}>
                    <Icon className="w-6 h-6 text-white" />
                    {/* Pulse effect */}
                    <span className={`absolute inset-0 rounded-full ${accent.dot} animate-ping opacity-20`} />
                </div>
            </motion.div>

            {/* Timeline dot - Mobile (left) */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: animationDuration, delay: 0.2 }}
                className="lg:hidden absolute left-6 -translate-x-1/2 z-10"
            >
                <div className={`relative w-10 h-10 rounded-full ${accent.dot} flex items-center justify-center border-4 border-[#0B0F14] shadow-lg shadow-[#4C9EEB]/30`}>
                    <Icon className="w-4 h-4 text-white" />
                    {/* Pulse effect */}
                    <span className={`absolute inset-0 rounded-full ${accent.dot} animate-ping opacity-20`} />
                </div>
            </motion.div>

            {/* Spacer for alternating layout (desktop) */}
            <div className="hidden lg:block w-[calc(50%-3rem)]" />
        </div>
    );
}