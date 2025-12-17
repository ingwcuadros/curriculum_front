'use client';

import { motion } from 'framer-motion';
import { FileText, Download, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';
import CVIllustration from './CVIlustration';
import { CVDownloadData } from "@/schemas/cvdownload.schema";



interface CVDownloadProps {
    data: CVDownloadData;
}


export default function CVDownload({ data }: CVDownloadProps) {
    const t = useTranslations('cv');
    return (
        <section aria-labelledby="cv-title" className="relative py-24 lg:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F14] to-[#12151B]" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    {/* Main card */}
                    <div className="relative rounded-3xl overflow-hidden">
                        {/* Gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#12151B] via-[#161B22] to-[#12151B]" />

                        {/* Animated border glow */}
                        <div className="absolute inset-0 rounded-3xl">
                            <div className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-r from-[#4C9EEB] via-[#7C4DFF] to-[#22D3EE] opacity-20" style={{ padding: '1px' }}>
                                <div className="w-full h-full rounded-3xl bg-[#12151B]" />
                            </div>
                        </div>

                        {/* Glow orbs */}
                        <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#4C9EEB]/20 rounded-full blur-[100px]" />
                        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#7C4DFF]/20 rounded-full blur-[100px]" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#22D3EE]/10 rounded-full blur-[120px]" />

                        {/* Content */}
                        <div className="relative z-10 p-8 sm:p-12 lg:p-16">
                            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                                {/* Left: Icon */}
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="relative flex-shrink-0"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#4C9EEB] to-[#7C4DFF] rounded-2xl blur-xl opacity-50" />
                                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-[#4C9EEB] to-[#7C4DFF] flex items-center justify-center">
                                        <FileText className="w-12 h-12 sm:w-16 sm:h-16 text-white" aria-hidden="true" />
                                    </div>
                                    {/* PDF badge */}
                                    <div className="absolute -bottom-2 -right-2 px-3 py-1 rounded-lg bg-[#0B0F14] border border-white/20 text-white text-xs font-bold">
                                        PDF
                                    </div>
                                </motion.div>

                                {/* Center: Text */}
                                <div className="flex-1 text-center lg:text-left max-w-xl">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                                            <span className="text-[#22D3EE] text-sm font-medium">{t('text')}</span>
                                        </div>
                                        <h2 id="cv-title" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
                                            {t('title')}
                                        </h2>
                                        <p className="text-gray-400 text-lg mb-6">
                                            {t('subtitle')}
                                        </p>
                                    </motion.div>

                                    {/* Button */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 }}
                                        className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
                                    >
                                        <motion.a
                                            href={data.url}
                                            download
                                            whileHover={{ scale: 1.02, y: -2 }}
                                            whileTap={{ scale: 0.98 }}
                                            aria-label={t('ariaLabel')}
                                            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#4C9EEB] to-[#7C4DFF] text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#4C9EEB]/25 focus:outline-none focus:ring-2 focus:ring-[#4C9EEB] focus:ring-offset-2 focus:ring-offset-[#12151B]"
                                        >
                                            <span className="relative z-10 flex items-center gap-3">
                                                <Download className="w-5 h-5" />
                                                {t('button')}
                                            </span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-[#7C4DFF] to-[#4C9EEB] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </motion.a>
                                    </motion.div>
                                </div>

                                {/* Right: Decorative SVG */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                    className="hidden lg:block flex-shrink-0"
                                >
                                    <CVIllustration />
                                </motion.div>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute top-8 right-8 hidden sm:block">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="w-20 h-20 rounded-full border border-dashed border-white/10"
                            />
                        </div>
                        <div className="absolute bottom-8 left-8 hidden sm:block">
                            <div className="w-3 h-3 rounded-full bg-[#4C9EEB]/50" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );

}