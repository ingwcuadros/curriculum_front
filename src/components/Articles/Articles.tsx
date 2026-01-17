"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getArticles } from "@/lib/api/articles";
import { useFiltersData } from "@/hooks/useFiltersData";
import { useLocale } from 'next-intl';
import ArticleFilters from "@/components/Articles/ArticleFilters";
import ArticleCard from "@/components/Articles/ArticleCard";
import ArticlePagination from "@/components/Articles/ArticlePagination";
import ArticleBanner from '@/components/Articles/ArticleBanner';
import ArticleCardSkeleton from "@/components/Articles/ArticleCardSkeleton";
import EmptyState from "@/components/Articles/EmptyState";



export default function Articles() {
    const locale = useLocale();

    const searchParams = useSearchParams();

    const initialPage = Number(searchParams.get("page") || 1);
    const initialCategory = searchParams.get("category") || "";
    const initialTag = searchParams.get("tag") || "";

    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [selectedTag, setSelectedTag] = useState(initialTag);
    const [currentPage, setCurrentPage] = useState(initialPage);

    const [articles, setArticles] = useState<any[]>([]);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);

    const { categories, tags, loading: loadingFilters } = useFiltersData(locale);

    useEffect(() => {
        setLoading(true);
        getArticles({
            page: currentPage,
            limit: 9,
            category: selectedCategory,
            tag: selectedTag,
            lang: locale
        })
            .then((res) => {
                setArticles(res.items);
                setTotalPages(res.totalPages);
                setCurrentPage(res.page);
            })
            .finally(() => setLoading(false));
    }, [currentPage, selectedCategory, selectedTag, locale]);

    return (
        <div className="min-h-screen bg-[#F6F7F9]">
            {/* Banner */}
            <div className="pt-16 lg:pt-20">
                <ArticleBanner />
            </div>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                <div className="mb-8">
                    <ArticleFilters
                        categories={categories}
                        tags={tags}
                        selectedCategory={selectedCategory}
                        selectedTag={selectedTag}
                        onCategoryChange={(cat) => {
                            setSelectedCategory(cat);
                            setCurrentPage(1);
                        }}
                        onTagChange={(tag) => {
                            setSelectedTag(tag);
                            setCurrentPage(1);
                        }}
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
                    {loading ? (
                        Array.from({ length: 6 }).map((_, i) => (
                            <ArticleCardSkeleton key={i} />
                        ))
                    ) : articles.length > 0 ? (
                        <>
                            {articles.map((article, index) => (
                                <ArticleCard key={article.id} article={article} index={index} locale={locale} />
                            ))}
                        </>
                    ) : (
                        <EmptyState />
                    )}
                </div>
                {!loading && totalPages > 0 && (
                    <ArticlePagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                )}
            </main>
        </div>







    );
}
