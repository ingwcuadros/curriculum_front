
// src/lib/api/articles.ts
export interface Article {
    id: string;
    titulo: string;
    url: string;
    fecha: string;
    categoria: string;
    tags: string[];
    promo?: string;
    image?: string | null;
}

export interface PaginatedResponse {
    items: Article[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}

export async function getArticles(params: {
    page?: number;
    limit?: number;
    category?: string;
    tag?: string;
    lang?: string;
}): Promise<PaginatedResponse> {
    const res = await fetch('/api/articles-paginated.json', { cache: 'no-store' });
    if (!res.ok) throw new Error('Error al obtener artículos');
    return res.json();
}


export async function getArticleDetail(slug: string, lang: string): Promise<Article> {
    console.log("Fetching article detail for slug:", slug, "and lang:", lang);
    const res = await fetch(`http://localhost:3000/api/article${lang}.json`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Error al obtener el artículo');
    // Filtrar por slug (campo url)

    const article: Article = await res.json();
    return article;

}

