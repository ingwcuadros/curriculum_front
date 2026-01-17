
"use client";
import { useLocale, useTranslations } from 'next-intl';
import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';
import { Calendar, ArrowLeft, Tag as TagIcon, User } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useParams } from "next/navigation";
import remarkGfm from "remark-gfm";
import { getArticleDetail } from "@/lib/api/articles";
import styles from "./ArticleDetail.module.css";

// src/app/[locale]/articles/[slug]/page.tsx
export default function ArticleDetail() {


    const t = useTranslations('artivleDetail');
    const locale = useLocale();
    const { slug } = useParams();
    const [article, setArticle] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!slug || typeof slug !== 'string') return;
        setLoading(true);
        getArticleDetail(slug, locale)
            .then((data) => setArticle(data))
            .finally(() => setLoading(false));
    }, [slug, locale]);


    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        console.log('Formatting date:', dateStr, 'to', locale);
        return date.toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };
    const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;


    if (loading) return <p className="p-6 text-center">Cargando artículo...</p>;
    if (!article) return <p className="p-6 text-center text-red-500">Artículo no encontrado</p>;

    return (
        <div className="min-h-screen bg-[#F6F7F9]">
            <div className="pt-16 lg:pt-20">
                {/* Hero Image (if exists) */}
                {article.image && (
                    <motion.div
                        initial={prefersReducedMotion ? {} : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-64 sm:h-80 lg:h-96 overflow-hidden bg-slate-200"
                    >
                        <img
                            src={article.image}
                            alt={article.titulo}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                )
                }

                {/* Content Container */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                    {/* Back Link */}
                    <motion.div
                        initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mb-8"
                    >
                        <Link
                            href={'/articles'}
                            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#4C9EEB] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4C9EEB] focus-visible:ring-offset-2 rounded-sm"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            {t('backToArticles')}
                        </Link>
                    </motion.div>

                    {/* Article Header */}
                    <motion.div
                        initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mb-8"
                    >
                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="inline-flex items-center px-3 py-1 text-sm font-semibold rounded-full bg-[#7C4DFF]/10 text-[#7C4DFF] border border-[#7C4DFF]/20">
                                {article.categoria}
                            </span>
                            <span className="flex items-center gap-1.5 text-sm text-slate-500">
                                <Calendar className="w-4 h-4" />
                                <time dateTime={article.fecha}>{formatDate(article.fecha)}</time>
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
                            {article.titulo}
                        </h1>

                        {/* Promo */}
                        {article.promo && (
                            <p className="text-lg text-slate-600 mb-6">
                                {article.promo}
                            </p>
                        )}

                        {/* Tags */}
                        {article.tags && article.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {article.tags.map((tag: string) => (
                                    <span
                                        key={tag}
                                        className="inline-flex items-center gap-1 px-3 py-1 text-sm font-medium rounded-full bg-[#22D3EE]/10 text-[#0891B2] border border-[#22D3EE]/20"
                                    >
                                        <TagIcon className="w-3 h-3" />
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Author */}
                        <div className="flex items-center gap-2 mt-6 pt-6 border-t border-slate-200">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4C9EEB] to-[#7C4DFF] flex items-center justify-center">
                                <User className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-slate-900">Walter Giovanny Cuadros Rincon</p>
                                <p className="text-xs text-slate-500">Cloud Solutions Architect</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Main Content */}
                    <motion.div
                        initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="grid grid-cols-1 lg:grid-cols-[1fr,280px] gap-8 text-slate-900"
                    >
                        {/* Article Body */}
                        <article className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-8 lg:p-10">
                            <div
                                className="prose prose-slate max-w-none
                  prose-headings:text-slate-900 prose-headings:font-bold
                  prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                  prose-p:text-slate-700 prose-p:leading-relaxed
                  prose-a:text-[#4C9EEB] prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-slate-900
                  prose-code:text-[#7C4DFF] prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
                  prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:rounded-xl prose-pre:p-4
                  prose-ul:my-4 prose-ol:my-4
                  prose-li:text-slate-700 prose-li:marker:text-[#4C9EEB]
                  prose-table:border-collapse prose-table:w-full
                  prose-th:bg-slate-100 prose-th:border prose-th:border-slate-200 prose-th:p-3 prose-th:text-left prose-th:font-semibold
                  prose-td:border prose-td:border-slate-200 prose-td:p-3
                  prose-blockquote:border-l-4 prose-blockquote:border-[#4C9EEB] prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-slate-600
                "
                                style={{ lineHeight: '1.7' }}
                            >


                                <div className={`prose prose-slate max-w-none ${styles.customProse}`}>
                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                        {article.content}
                                    </ReactMarkdown>
                                </div>


                            </div>
                        </article>


                    </motion.div>

                    {/* Bottom Back Link */}
                    <div className="mt-12 pt-8 border-t border-slate-200">
                        <Link
                            href={'/articles'}
                            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#4C9EEB] to-[#7C4DFF] rounded-xl hover:shadow-lg hover:shadow-[#4C9EEB]/30 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4C9EEB] focus-visible:ring-offset-2"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            {t('backToArticles')}
                        </Link>
                    </div>
                </div>
            </div >
            <div className="h-16" />
        </div >
    );
}

