
"use client";

import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from 'framer-motion';


interface ArticlePaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function ArticlePagination({
    currentPage,
    totalPages,
    onPageChange
}: ArticlePaginationProps) {
    const t = useTranslations("articles");

    const pageText = `${t("pageOf")} ${currentPage} ${t("of")} ${totalPages}`;
    const canGoPrev = currentPage > 1;
    const canGoNext = currentPage < totalPages;

    // Genera lista de páginas con lógica de elipsis
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
        .filter((page) => {
            return (
                page === 1 ||
                page === totalPages ||
                Math.abs(page - currentPage) <= 1
            );
        })
        .reduce<(number | string)[]>((acc, page, idx, arr) => {
            if (idx > 0 && page - (arr[idx - 1] as number) > 1) {
                acc.push("...");
            }
            acc.push(page);
            return acc;
        }, []);

    return (
        <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center gap-4 mt-12"
            aria-label="Paginación de artículos"
        >
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={!canGoPrev}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:ring-offset-2 focus:ring-offset-[#0B1020] ${canGoPrev
                    ? 'bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 hover:border-[#22D3EE] hover:text-[#22D3EE] hover:-translate-x-1 shadow-lg'
                    : 'bg-white/5 border border-white/10 text-gray-500 cursor-not-allowed opacity-50'
                    }`}
                aria-label={t("previous")}
            >
                <ChevronLeft className="w-4 h-4" />
                {t("previous")}
            </button>

            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg">
                <span className="text-sm font-medium text-gray-300">
                    {t("pageOf")}{' '}
                    <span className="text-[#22D3EE] font-bold">{currentPage}</span>
                    {' '}{t("of")}{' '}
                    <span className="text-white font-bold">{totalPages}</span>
                </span>
            </div>

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={!canGoNext}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:ring-offset-2 focus:ring-offset-[#0B1020] ${canGoNext
                    ? 'bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 hover:border-[#22D3EE] hover:text-[#22D3EE] hover:translate-x-1 shadow-lg'
                    : 'bg-white/5 border border-white/10 text-gray-500 cursor-not-allowed opacity-50'
                    }`}
                aria-label={t("next")}
            >
                {t("next")}
                <ChevronRight className="w-4 h-4" />
            </button>
        </motion.nav>
    );
}
