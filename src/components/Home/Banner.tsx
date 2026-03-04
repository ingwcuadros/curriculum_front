
'use client';

import Image from 'next/image';
import { useState } from 'react';
import { BannerData } from "@/schemas/banner.schema";
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';


interface BannerProps {
    data: BannerData;
}

export default function Banner({ data }: BannerProps) {


    const traslation = useTranslations('Banner');
    const locale = useLocale();
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-12" aria-labelledby="banner-title">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F14] via-[#12151B] to-[#0B0F14]" />

            {/* Gradient orbs */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#4C9EEB]/10 rounded-full blur-[128px]" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#7C4DFF]/10 rounded-full blur-[128px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#22D3EE]/5 rounded-full blur-[150px]" />


            <div className="relative max-w-7xl lg:max-w-screen-2xl mx-auto px-2 py-12 md:py-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center lg:mx-12 lg:max-w-screen-2xl ">

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="order-2 lg:order-1 text-center lg:text-left"
                    >
                        {/* Status badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#4C9EEB]/10 to-[#7C4DFF]/10 border border-[#4C9EEB]/20 mb-6"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22D3EE] opacity-75" aria-hidden="true" role="presentation"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22D3EE]" aria-hidden="true" role="presentation"></span>
                            </span>
                            <span className="text-sm lg:text-base text-gray-300">{traslation('openWork')}</span>
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            id="banner-title"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-tight mb-4"
                        >
                            <span className="text-white">{data.title.split(' ').slice(0, 2).join(' ')}</span>
                            <br />
                            <span className="bg-gradient-to-r from-[#4C9EEB] via-[#7C4DFF] to-[#22D3EE] bg-clip-text text-transparent">
                                {data.title.split(' ').slice(2).join(' ')}
                            </span>
                        </motion.h1>

                        {/* Role */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg sm:text-xl xl:text-2xl text-gray-400 mb-4"
                        >
                            {data.role}
                        </motion.p>

                        {/* Pitch */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-base sm:text-lg xl:text-2xl text-gray-500 mb-8 max-w-xl mx-auto lg:mx-0"
                        >
                            {data.textBanner}
                        </motion.p>

                        {/* Tags */}
                        <motion.ul
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-wrap justify-center lg:justify-start gap-2 mb-10"
                            aria-label="Tags principales"
                        >
                            {data.tags.map((tag: string, index: number) => (
                                <motion.li
                                    key={tag}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.7 + index * 0.05 }}
                                    className="group relative px-3 py-1.5 text-sm font-medium rounded-full bg-white/5 border border-white/10 text-gray-300 hover:border-[#4C9EEB]/50 hover:bg-[#4C9EEB]/5 transition-all duration-300 cursor-default"
                                >
                                    <span className="relative z-10">#{tag}</span>
                                </motion.li>
                            ))}
                        </motion.ul>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <motion.a
                                href={`/${locale}/contact`}
                                target='_blank'
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                aria-label={traslation('ariaCtaContact')}
                                className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-[#4C9EEB] to-[#7C4DFF] text-white font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#4C9EEB]/25 focus:outline-none focus:ring-2 focus:ring-[#4C9EEB] focus:ring-offset-2 focus:ring-offset-[#0B0F14]"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    {traslation('contactMe')}
                                    <Sparkles className="w-4 h-4" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#7C4DFF] to-[#4C9EEB] opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" role="presentation" />
                            </motion.a>

                            <motion.a
                                href={`/${locale}/articles`}
                                target='_blank'
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                aria-label={traslation('ariaCtaProject')}
                                className="group px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#4C9EEB] focus:ring-offset-2 focus:ring-offset-[#0B0F14]"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    {traslation('seeMyWork')}
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="order-1 lg:order-2 flex justify-center"
                    >
                        <div className="relative">
                            {/* Decorative rings */}
                            <div className="absolute inset-0 -m-4 rounded-full border border-[#4C9EEB]/8 animate-pulse" aria-hidden="true" role="presentation" />
                            <div className="absolute inset-0 -m-8 rounded-full border border-[#7C4DFF]/5" aria-hidden="true" role="presentation" />
                            <div className="absolute inset-0 -m-12 rounded-full border border-[#22D3EE]/2" aria-hidden="true" role="presentation" />

                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#4C9EEB]/20 via-[#7C4DFF]/20 to-[#22D3EE]/20 rounded-full blur-2xl" aria-hidden="true" role="presentation" />

                            {/* Image container */}
                            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-100 lg:h-100 rounded-full overflow-hidden border-2 border-white/10">
                                {!imageError ? (
                                    <>
                                        {!imageLoaded && (
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#12151B] to-[#0B0F14] animate-pulse flex items-center justify-center" aria-hidden="true" role="presentation">
                                                <div className="w-16 h-16 rounded-full border-2 border-[#4C9EEB]/30 border-t-[#4C9EEB] animate-spin" />
                                            </div>
                                        )}
                                        <Image
                                            src={data.image}
                                            alt={data.altImage || 'Banner'}
                                            width={900}
                                            height={900}
                                            priority
                                            sizes="(max-width: 640px) 16rem,(max-width: 768px) 20rem,(max-width: 1024px) 24rem,28rem"
                                            className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                                            decoding="async"
                                            fetchPriority="high"
                                            onLoad={() => setImageLoaded(true)}
                                            onError={() => setImageError(true)}
                                        />
                                    </>
                                ) : (
                                    /* Fallback illustration */
                                    <div className="w-full h-full bg-gradient-to-br from-[#12151B] to-[#0B0F14] flex items-center justify-center">
                                        <div className="relative">
                                            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#4C9EEB]/20 to-[#7C4DFF]/20 flex items-center justify-center">
                                                <span className="text-5xl font-bold bg-gradient-to-r from-[#4C9EEB] to-[#7C4DFF] bg-clip-text text-transparent">
                                                    {data.title.split(' ').map((n: string) => n[0]).slice(0, 2).join('')}
                                                </span>
                                            </div>
                                            {/* Floating elements */}
                                            <motion.div
                                                animate={{ y: [-5, 5, -5], rotate: [0, 10, 0] }}
                                                transition={{ duration: 4, repeat: Infinity }}
                                                className="absolute -top-4 -right-4 w-8 h-8 rounded-lg bg-[#4C9EEB]/20 border border-[#4C9EEB]/30"
                                                aria-hidden="true" role="presentation"
                                            />
                                            <motion.div
                                                animate={{ y: [5, -5, 5], rotate: [0, -10, 0] }}
                                                transition={{ duration: 3, repeat: Infinity }}
                                                className="absolute -bottom-2 -left-6 w-6 h-6 rounded-full bg-[#7C4DFF]/20 border border-[#7C4DFF]/30"
                                                aria-hidden="true" role="presentation"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Floating badge */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1 }}
                                className="absolute -right-4 top-1/2 -translate-y-1/2 px-4 py-2 rounded-xl bg-[#12151B]/90 backdrop-blur border border-white/10"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4C9EEB] to-[#7C4DFF] flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div className="text-xs">
                                        <p className="text-white font-medium">{traslation('labelPrincipal')}</p>
                                        <p className="text-gray-500">{traslation('labelSecundary')}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-2 sm:bottom-12 md:bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
                >
                    <motion.div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                </motion.div>
            </motion.div>
        </section>
    );
}
