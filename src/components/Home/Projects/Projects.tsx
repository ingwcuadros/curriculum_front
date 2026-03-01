
'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Grid3X3, ArrowRight } from 'lucide-react';
import { ProjectsData, ArticleData } from "@/schemas/projects.schema";
import ProjectCard from '@/components/Home/Projects/ProjectCard';


interface ProjectsProps {
    data: ProjectsData;
}


export default function Projects({ data }: ProjectsProps) {
    const tranlation = useTranslations('Projects');
    return (
        <section aria-labelledby="projects-title" className="relative py-24 lg:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F14] via-[#12151B] to-[#0B0F14]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#4C9EEB]/5 rounded-full blur-[120px]" />

            <div className="relative max-w-7xl lg:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-14">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4C9EEB]/10 border border-[#4C9EEB]/20 text-[#4C9EEB] text-sm font-medium mb-4">
                        <Grid3X3 className="w-4 h-4" />
                        Portfolio
                    </span>

                </motion.div>

                {/* Projects grid */}


                <div role="list" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

                    {data.articles.map((item: ArticleData) => (
                        <ProjectCard
                            key={item.id}
                            project={item}
                            index={data.articles.indexOf(item)}
                            t={tranlation}
                        />

                    ))}
                </div>

                {/* View all button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center mt-12"
                >
                    <motion.a
                        href={'/articles'}
                        target='_blank'
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        aria-label={tranlation('viewAll')}
                        className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-medium hover:bg-white/10 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#4C9EEB] focus:ring-offset-2 focus:ring-offset-[#0B0F14]"
                    >
                        <Grid3X3 className="w-4 h-4" />
                        {tranlation('viewAll')}
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}