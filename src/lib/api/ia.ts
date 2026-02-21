// src/app/[locale]/articles/page.tsx

import { getPaginatedArticles, getFiltersData } from "@/lib/api/articles";
import Articles from "./Articles";

interface ArticlesPageProps {
    params: { locale: string };
    searchParams?: {
        page?: string;
        category?: string;
        tag?: string;
    };
}

// Opcional: fuerza que siempre se genere del lado del servidor sin cache global
export const dynamic = "force-dynamic";
// O podrías usar: export const revalidate = 60; // si quieres ISR de 60s

export default async function ArticlesPage({
    params,
    searchParams,
}: ArticlesPageProps) {
    const locale = params.locale;

    const currentPage = Number(searchParams?.page ?? "1") || 1;
    const selectedCategory = searchParams?.category ?? "";
    const selectedTag = searchParams?.tag ?? "";

    const [articlesData, filtersData] = await Promise.all([
        getPaginatedArticles({
            page: currentPage,
            limit: 9,
            category: selectedCategory || undefined,
            tag: selectedTag || undefined,
            lang: locale,
        }),
        getFiltersData(locale),
    ]);

    return (
        <Articles
      locale= { locale }
    articles = { articlesData.items }
    totalPages = { articlesData.totalPages }
    currentPage = { articlesData.page }
    categories = { filtersData.categories }
    tags = { filtersData.tags }
    selectedCategory = { selectedCategory }
    selectedTag = { selectedTag }
        />
  );
}