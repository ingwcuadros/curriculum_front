
'use client'
import React, { useState, useEffect } from 'react';
import { ExperienceData, ExperienceArticleData } from "@/schemas/experience.schema";
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import TimelineItem from './TimelineItem';


interface ExperienceProps {
    data: ExperienceData;
}


export default function Experience({ data }: ExperienceProps) {

    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setPrefersReducedMotion(motionQuery.matches);

        const handleMotionChange = (e: any) => setPrefersReducedMotion(e.matches);
        motionQuery.addEventListener('change', handleMotionChange);

        return () => motionQuery.removeEventListener('change', handleMotionChange);
    }, []);

    return (
        <section aria-labelledby="career-title" className="relative py-24 lg:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#12151B] via-[#0B0F14] to-[#12151B]" />
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#22D3EE]/5 rounded-full blur-[150px]" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22D3EE]/10 border border-[#22D3EE]/20 text-[#22D3EE] text-sm font-medium mb-4">
                        <Briefcase className="w-4 h-4" />
                        Career
                    </span>
                    <h2 id="career-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                        {data.title}
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line - Desktop (centered) */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4C9EEB]/20 via-[#4C9EEB]/40 to-[#4C9EEB]/20 -translate-x-1/2" />

                    {/* Vertical line - Mobile (left) */}
                    <div className="lg:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4C9EEB]/20 via-[#4C9EEB]/40 to-[#4C9EEB]/20" />

                    {/* Timeline items */}
                    <div role="list" className="space-y-12 lg:space-y-20">
                        {data.articles.map((exp: ExperienceArticleData, index: any) => (
                            <TimelineItem
                                key={index}
                                experience={exp}
                                index={index}
                                isLeft={index % 2 === 0}
                                prefersReducedMotion={prefersReducedMotion}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}