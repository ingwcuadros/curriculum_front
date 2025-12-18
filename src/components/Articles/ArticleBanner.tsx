import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function ArticleBanner() {
    const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const t = useTranslations("articles");
    return (
        <section className="relative w-full h-48 sm:h-52 lg:h-56 overflow-hidden bg-slate-900">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')`,
                }}
            >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-[#4C9EEB]/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#4C9EEB]/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-[#7C4DFF]/20 rounded-full blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
                <motion.h1
                    initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3"
                    style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
                >
                    {t('bannerTitle')}
                </motion.h1>
                <motion.p
                    initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="text-base sm:text-lg text-slate-200 max-w-2xl"
                    style={{ textShadow: '0 1px 10px rgba(0,0,0,0.3)' }}
                >
                    {t("bannerSubtitle")}
                </motion.p>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#F6F7F9] to-transparent" />
        </section>
    )

}