import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function ArticleCard({ article, index, locale }: { article: any, index: any, locale: any }) {
    const t = useTranslations('articles');
    const formatDate = (dateStr: any) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('es', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const visibleTags = article.tags?.slice(0, 4) || [];

    // Check if prefers reduced motion
    const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return (
        <motion.article
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="group relative bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-[#4C9EEB]/10 transition-all duration-300"
        >
            {/* Image */}
            <Link
                href={`/${locale}/articles/${article.slug}`}
                className="block aspect-video overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#4C9EEB]"
                aria-label={`${t('readArticle')}: ${article.titulo}`}
            >
                {article.image ? (
                    <img
                        src={article.image}
                        alt={article.titulo}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#4C9EEB]/10 via-[#7C4DFF]/10 to-[#22D3EE]/10">
                        <div className="text-4xl font-bold text-slate-300">
                            {article.titulo?.charAt(0) || 'A'}
                        </div>
                    </div>
                )}
            </Link>

            {/* Content */}
            <div className="p-5 lg:p-6">
                {/* Meta: Category & Date */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-full bg-[#7C4DFF]/10 text-[#7C4DFF] border border-[#7C4DFF]/20">
                        {article.categoria}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                        <Calendar className="w-3.5 h-3.5" />
                        <time dateTime={article.fecha}>{formatDate(article.fecha)}</time>
                    </span>
                </div>

                {/* Title */}
                <Link
                    href={`/${locale}/articles/${article.slug}`}
                    className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4C9EEB] focus-visible:ring-offset-2 rounded-sm"
                >
                    <h3 className="text-lg font-bold text-slate-900 line-clamp-2 group-hover:text-[#4C9EEB] transition-colors duration-200 mb-2">
                        {article.titulo}
                    </h3>
                </Link>

                {/* Promo */}
                {article.promo && (
                    <p className="text-sm text-slate-600 line-clamp-2 mb-3">
                        {article.promo}
                    </p>
                )}

                {/* Tags */}
                {visibleTags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                        {visibleTags.map((tag: any) => (
                            <span
                                key={tag}
                                className="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full bg-[#22D3EE]/10 text-[#0891B2] border border-[#22D3EE]/20"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* CTA */}
                <Link
                    href={`/${locale}/articles/${article.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#4C9EEB] hover:text-[#7C4DFF] transition-colors group/cta focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4C9EEB] focus-visible:ring-offset-2 rounded-sm"
                    aria-label={`${t('readArticle')}: ${article.titulo}`}
                >
                    {t('readArticle')}
                    <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform duration-200" />
                </Link>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ring-1 ring-inset ring-[#4C9EEB]/20" />
        </motion.article>
    );

}