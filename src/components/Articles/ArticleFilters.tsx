
"use client";


import { motion } from 'framer-motion';
import { Filter, ChevronDown } from 'lucide-react';
import { useTranslations } from "next-intl";

interface ArticleFiltersProps {
    categories: string[];
    tags: string[];
    selectedCategory: string;
    selectedTag: string;
    onCategoryChange: (value: string) => void;
    onTagChange: (value: string) => void;
}

export default function ArticleFilters({
    categories,
    tags,
    selectedCategory,
    selectedTag,
    onCategoryChange,
    onTagChange
}: ArticleFiltersProps) {
    const t = useTranslations("articles");

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-lg p-4 sm:p-5 mb-8"
        >
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                {/* Filter icon + label */}
                <div className="flex items-center gap-2 sm:min-w-[100px]">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#22D3EE]/20 to-[#60A5FA]/20 border border-[#22D3EE]/30 flex items-center justify-center">
                        <Filter className="w-4 h-4 text-[#22D3EE]" />
                    </div>
                    <span className="text-sm font-semibold text-white">{t("filterBy")}</span>
                </div>

                {/* Filters */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Category Filter */}
                    <div className="relative">
                        <label htmlFor="category-filter" className="sr-only">
                            {t("categoryLabel")}
                        </label>
                        <select
                            id="category-filter"
                            value={selectedCategory}
                            onChange={(e) => onCategoryChange(e.target.value)}
                            className="w-full pl-4 pr-10 py-2.5 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-white text-sm font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:border-[#22D3EE] focus:bg-white/10 transition-all duration-200 cursor-pointer hover:border-[#22D3EE]/50 hover:bg-white/10"
                            aria-label={t("categoryLabel")}
                        >
                            <option value="" className="bg-[#0B1020] text-white">{t("allCategories")}</option>
                            {categories.map((category) => (
                                <option key={category} value={category} className="bg-[#0B1020] text-white">
                                    {category}
                                </option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 pointer-events-none" />
                    </div>

                    {/* Tag Filter */}
                    <div className="relative">
                        <label htmlFor="tag-filter" className="sr-only">
                            {t("tagLabel")}
                        </label>
                        <select
                            id="tag-filter"
                            value={selectedTag}
                            onChange={(e) => onTagChange(e.target.value)}
                            className="w-full pl-4 pr-10 py-2.5 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-white text-sm font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:border-[#22D3EE] focus:bg-white/10 transition-all duration-200 cursor-pointer hover:border-[#22D3EE]/50 hover:bg-white/10"
                            aria-label={t("tagLabel")}
                        >
                            <option value="" className="bg-[#0B1020] text-white">{t("allTags")}</option>
                            {tags.map((tag) => (
                                <option key={tag} value={tag} className="bg-[#0B1020] text-white">
                                    {tag}
                                </option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 pointer-events-none" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
