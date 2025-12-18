'use client'
// src/app/[locale]/articles/page.tsx
import Link from 'next/link';
import React from "react";

/* import { useTranslations } from 'next-intl'; */
import {
    mockArticles,
    getFilterOptions,
    filterArticles,
    paginateArticles,
    sortArticlesByDate
} from '../../../components/Articles/mockArticles';
import { useState, useMemo, useEffect } from 'react';
import ArticleBanner from '@/components/Articles/ArticleBanner';
import ArticleFilters from '@/components/Articles/ArticleFilters';
import ArticleCardSkeleton from '@/components/Articles/ArticleCardSkeleton';
import ArticleCard from '@/components/Articles/ArticleCard';
import EmptyState from '@/components/Articles/EmptyState';
import ArticlePagination from '@/components/Articles/ArticlePagination';



interface Article {
    id: string;
    title: string;
    description: string;
    date: string;
    category?: string;
    tags?: string[];
}


const PAGE_SIZE = 9;


export default function ArticlesPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = React.use(params);

    // Información quemada
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedTag, setSelectedTag] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    // Get filter options from full dataset
    const { categories, tags } = useMemo(() => {
        return getFilterOptions(mockArticles);
    }, []);

    // Fetch articles (using mock data)
    useEffect(() => {
        const fetchArticles = async () => {
            setLoading(true);

            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 600));

            // Sort by date descending
            const sorted = sortArticlesByDate(mockArticles);
            setArticles(sorted);
            setLoading(false);
        };

        fetchArticles();
    }, []);

    // Filter and paginate articles
    const filteredArticles = useMemo(() => {
        return filterArticles(articles, selectedCategory, selectedTag);
    }, [articles, selectedCategory, selectedTag]);

    const paginatedArticles = useMemo(() => {
        return paginateArticles(filteredArticles, currentPage, PAGE_SIZE);
    }, [filteredArticles, currentPage]);

    const totalPages = Math.ceil(filteredArticles.length / PAGE_SIZE);

    // Reset page when filters change
    const handleCategoryChange = (category: any) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    const handleTagChange = (tag: any) => {
        setSelectedTag(tag);
        setCurrentPage(1);
    };

    const handlePageChange = (page: any) => {
        setCurrentPage(page);
        // Scroll to top of content
        window.scrollTo({ top: 280, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-[#F6F7F9]">

            {/* Banner */}
            <div className="pt-16 lg:pt-20">
                <ArticleBanner />
            </div>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                {/* Filters */}
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

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
                    {loading ? (
                        // Skeleton loaders
                        Array.from({ length: 6 }).map((_, i) => (
                            <ArticleCardSkeleton key={i} />
                        ))
                    ) : paginatedArticles.length > 0 ? (
                        // Article cards
                        paginatedArticles.map((article: any, index: any) => (
                            <ArticleCard
                                key={article.id}
                                article={article}
                                index={index}
                                locale={locale}
                            />
                        ))
                    ) : (
                        // Empty state
                        <EmptyState />
                    )}
                </div>

                {/* Pagination */}
                {!loading && totalPages > 0 && (
                    <ArticlePagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                )}
            </main>

            {/* Footer Spacer */}
            <div className="h-16" />
        </div>
    );
}

