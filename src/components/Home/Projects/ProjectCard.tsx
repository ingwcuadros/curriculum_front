
'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ArticleData } from "@/schemas/projects.schema";
import { useLocale } from 'next-intl';

interface ProjectCardProps {
    project: ArticleData;
    index: number;
    t?: any; // Lo tiparemos después
}


export default function ProjectCard({ project, index, t }: ProjectCardProps) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const locale = useLocale();
    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative"
        >
            <div role="listitem" className="relative rounded-2xl overflow-hidden bg-[#12151B] border border-white/5 hover:border-white/10 transition-all duration-500">
                {/* Glassmorphism effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-[#4C9EEB]/5 to-[#7C4DFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                    {!imageLoaded && (
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1f26] to-[#12151B] animate-pulse" />
                    )}
                    <Image
                        src={project.image}
                        alt={project.altImage || 'Project image'}
                        width={800}
                        height={450}
                        priority={index === 0}
                        className={`w-full h-full object-cover transition-all duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                            } ${isHovered ? 'scale-110' : 'scale-100'}`}
                        onLoad={() => setImageLoaded(true)}
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12151B] via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="relative p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#4C9EEB] transition-colors duration-300">
                        {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                        {project.promo}
                    </p>

                    <motion.a
                        href={`/${locale}/articles/${project.url}`}
                        whileHover={{ x: 5 }}
                        aria-label={`${t('more')} ${project.title}`}
                        className="flex items-center gap-2 text-[#4C9EEB] font-medium text-sm hover:text-[#22D3EE] transition-colors focus:outline-none focus:ring-2 focus:ring-[#4C9EEB] rounded"
                    >
                        {t('more')}
                        <ArrowUpRight className="w-4 h-4" />
                    </motion.a>
                </div>

                {/* Corner accent */}
                <div className="absolute top-4 right-4">
                    <motion.div
                        animate={{ rotate: isHovered ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-8 h-8 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center"
                    >
                        <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#4C9EEB] transition-colors" />
                    </motion.div>
                </div>
            </div>
        </motion.article >
    );
}