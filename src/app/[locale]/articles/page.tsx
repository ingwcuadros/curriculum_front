

import Articles from "@/components/Articles/Articles";
import { generateMetadataForLocale } from '@/lib/metadata';
import { getPaginatedArticles, getFiltersData } from "@/lib/api/articles";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: { locale: string; } }) {

    const resolvedParams = await params;
    const { locale } = resolvedParams;
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tu-dominio.com';
    const t = await getTranslations({ locale, namespace: 'articlesMeta' });
    return generateMetadataForLocale({ locale, baseUrl, title: t('title'), typePage: 'article-list', description: t('description'), image: t('image'), slug: '' });

}


interface ArticlesPageProps {
    params: { locale: string };
    searchParams: Record<string, string | string[] | undefined>;
}


export const dynamic = "force-dynamic";
// O podrías usar: export const revalidate = 60; // si quieres ISR de 60s


export default async function ArticlesPage({ params, searchParams }: ArticlesPageProps) {
    // 🟢 Resolver parámetros para evitar el bug de source maps
    const resolvedParams = await params;
    const resolvedSearch = await searchParams;

    const locale = resolvedParams.locale;

    const pageParam = resolvedSearch.page;
    const categoryParam = resolvedSearch.category;
    const tagParam = resolvedSearch.tag;

    const currentPage = pageParam ? Number(pageParam) : 1;
    const selectedCategory = typeof categoryParam === "string" ? categoryParam : "";
    const selectedTag = typeof tagParam === "string" ? tagParam : "";

    const [articlesData, filtersData] = await Promise.all([
        getPaginatedArticles({
            page: currentPage,
            limit: 6,
            category: selectedCategory || undefined,
            tag: selectedTag || undefined,
            lang: locale,
        }),

        getFiltersData(locale),
    ]);

    return (
        <Articles
            locale={locale}
            articles={articlesData.items}
            totalPages={articlesData.totalPages}
            currentPage={articlesData.page}
            categories={filtersData.categories}
            tags={filtersData.tags}
            selectedCategory={selectedCategory}
            selectedTag={selectedTag}
        />
    );
}

