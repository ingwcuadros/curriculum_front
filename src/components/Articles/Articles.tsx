"use client";

import { useRouter, useSearchParams } from "next/navigation";
import ArticleBanner from "@/components/Articles/ArticleBanner";
import ArticleFilters from "@/components/Articles/ArticleFilters";
import ArticleCard from "@/components/Articles/ArticleCard";
import ArticlePagination from "@/components/Articles/ArticlePagination";
import EmptyState from "@/components/Articles/EmptyState";
// Si quieres usar skeletons, puedes integrarlos en loading.tsx o con transición

import type { Article } from "@/lib/api/articles";

interface ArticlesProps {
    locale: string;
    articles: Article[];
    totalPages: number;
    currentPage: number;
    categories: string[];
    tags: string[];
    selectedCategory: string;
    selectedTag: string;
}

export default function Articles({
    locale,
    articles,
    totalPages,
    currentPage,
    categories,
    tags,
    selectedCategory,
    selectedTag,
}: ArticlesProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const buildQueryString = (paramsToUpdate: Record<string, string | null>) => {
        const params = new URLSearchParams(searchParams.toString());

        Object.entries(paramsToUpdate).forEach(([key, value]) => {
            if (value === null || value === "") {
                params.delete(key);
            } else {
                params.set(key, value);
            }
        });

        return params.toString();
    };

    const handleCategoryChange = (category: string) => {
        const query = buildQueryString({
            category: category || null,
            page: "1", // siempre reseteamos a la página 1 al cambiar filtros
        });

        router.push(`?${query}`, { scroll: false });
    };

    const handleTagChange = (tag: string) => {
        const query = buildQueryString({
            tag: tag || null,
            page: "1",
        });

        router.push(`?${query}`, { scroll: false });
    };

    const handlePageChange = (page: number) => {
        const query = buildQueryString({
            page: String(page),
        });

        // Aquí mantenemos category/tag actuales
        router.push(`?${query}`, { scroll: false });
    };

    return (
        <div className="min-h-screen bg-[#F6F7F9]">
            {/* Banner */}
            <div className="pt-16 lg:pt-20">
                <ArticleBanner />
            </div>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                {/* Filtros */}
                <div className="mb-8">
                    <ArticleFilters
                        categories={categories}
                        tags={tags}
                        selectedCategory={selectedCategory}
                        selectedTag={selectedTag}
                        onCategoryChange={handleCategoryChange}
                        onTagChange={handleTagChange}
                    />
                </div>

                {/* Grilla de artículos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
                    {articles.length > 0 ? (
                        <>
                            {articles.map((article, index) => (
                                <ArticleCard
                                    key={article.id}
                                    article={article}
                                    index={index}
                                    locale={locale}
                                />
                            ))}
                        </>
                    ) : (
                        <EmptyState />
                    )}
                </div>

                {/* Paginación */}
                {totalPages > 0 && (
                    <ArticlePagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                )}
            </main>
        </div>
    );
}