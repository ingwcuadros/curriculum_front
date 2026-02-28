
"use client";

import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

interface ArticleCardProps {
    article: {
        id: string;
        titulo: string;
        url: string;
        fecha: string;
        category: string;
        tags?: string[];
        image?: string | null;
    };
    index: number;
    locale: string;
}

export default function ArticleCard({ article, index, locale }: ArticleCardProps) {
    const t = useTranslations("articles");

    // Formatear fecha según idioma
    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString(locale === "es" ? "es-ES" : "en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    };

    const visibleTags = article.tags?.slice(0, 4) || [];

    // Detectar preferencia de movimiento reducido
    const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    return (
        <motion.article
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="group relative bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-[#22D3EE]/20 hover:-translate-y-2 hover:border-[#22D3EE]/50 hover:bg-white/10 transition-all duration-300"
        >
            {/* Imagen */}
            <Link
                href={`/${locale}/articles/${article.url}`}
                className="block relative aspect-video overflow-hidden bg-gradient-to-br from-white/5 to-white/10"
                aria-label={`${t("readArticle")}: ${article.titulo}`}
            >
                {article.image ? (
                    <img
                        src={article.image}
                        alt={article.titulo}
                        loading="lazy"
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#22D3EE]/20 to-[#8B5CF6]/20 border border-white/10 flex items-center justify-center">
                            {article.titulo?.charAt(0) || "A"}
                        </div>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            {/* Contenido */}
            <div className="p-6">
                {/* Meta: Categoría y Fecha */}
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#22D3EE]/20 border border-[#22D3EE]/40 text-[#22D3EE] text-xs font-semibold backdrop-blur-sm">
                        {article.category}
                    </span>

                </div>

                {/* Título */}
                <Link
                    href={`/${locale}/articles/${article.url}`}
                >
                    <h3 className="text-xl font-bold text-white mb-4 leading-tight line-clamp-2 group-hover:text-[#22D3EE] transition-colors duration-300">
                        {article.titulo}
                    </h3>
                </Link>

                {/* Tags */}
                {visibleTags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                        {visibleTags.map((tag) => (
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
                    href={`/${locale}/articles/${article.url}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#4C9EEB] hover:text-[#7C4DFF] transition-colors group/cta focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4C9EEB] focus-visible:ring-offset-2 rounded-sm"
                    aria-label={`${t("readArticle")}: ${article.titulo}`}
                >
                    {t("readArticle")}
                    <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform duration-200" />
                </Link>
            </div>

            {/* Efecto hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ring-1 ring-inset ring-[#4C9EEB]/20" />
        </motion.article>
    );
}
