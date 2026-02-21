import { PaginatedArticles, PaginatedArticlesSchema } from "@/schemas/PaginatedArticles.schema";


export interface Article {
    id: string;
    titulo: string;
    url: string;
    fecha: string;
    category: string;
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

export interface GetPaginatedArticlesParams {
    page: number;
    limit: number;
    category?: string;
    tag?: string;
    lang: string;
}

export async function getPaginatedArticles(
    params: GetPaginatedArticlesParams
): Promise<PaginatedResponse> {
    const { page, limit, category, tag, lang } = params;
    const url = new URL(`${process.env.NEXT_PUBLIC_SITE_URL}/api/v1/articles/paginated`);
    const searchParams = new URLSearchParams();
    searchParams.set("page", String(page));
    searchParams.set("limit", String(limit));

    if (lang) searchParams.set("lang", lang);
    if (category) searchParams.set("category", category.toLowerCase());
    if (tag) searchParams.set("tags", tag.toLowerCase()); // tu API espera "tags" aunque sea uno solo

    url.search = searchParams.toString();
    console.log("Fetching paginated articles with URL:", url.toString());
    const res = await fetch(url.toString(), {
        // En desarrollo: datos siempre frescos
        cache: "no-store",
    });

    if (!res.ok) {
        console.error("Error al obtener artículos:", res.status, res.statusText);
        throw new Error("No se pudieron obtener los artículos");
    }

    const data = (await res.json()) as PaginatedResponse;

    // Validación mínima
    if (!Array.isArray(data.items)) {
        throw new Error("Respuesta de artículos inválida: 'items' no es un arreglo");
    }

    return data;
}


export interface FiltersData {
    categories: string[];
    tags: string[];
}


export async function getFiltersData(lang: string): Promise<FiltersData> {
    const page = 1;
    const limit = 100;

    const data = await getPaginatedArticles({
        page,
        limit,
        lang,
    });

    const categorySet = new Set<string>();
    const tagSet = new Set<string>();

    for (const article of data.items) {
        if (article.category) {
            categorySet.add(article.category);
        }

        if (Array.isArray(article.tags)) {
            for (const tag of article.tags) {
                if (tag) {
                    tagSet.add(tag);
                }
            }
        }
    }
    console.log("Categorías únicas encontradas:", Array.from(categorySet));
    return {
        categories: Array.from(categorySet),
        tags: Array.from(tagSet),
    };
}


export async function getArticleDetail(slug: string, lang: string): Promise<Article> {
    console.log("Fetching article detail for slug:", slug, "and lang:", lang);
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/v1/articles/${slug}?lang=${lang}`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Error al obtener el artículo');
    // Filtrar por slug (campo url)

    const article: Article = await res.json();
    return article;

}

