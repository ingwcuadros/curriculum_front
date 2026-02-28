// src/lib/sitemap.ts
import type { MetadataRoute } from 'next';

export type SitemapLang = 'es' | 'en';

type RemoteSitemapItem = {
    path: string;
    lastmod: string;
    type: string; // 'home' | 'article' | etc.
};

const API_BASE_URL = process.env.NEXT_PUBLIC_SITE_URL!;
const SITE_URL = process.env.SITE_URL!;
export const revalidate = 60 * 60;

export async function getSitemapForLang(
    lang: SitemapLang
): Promise<MetadataRoute.Sitemap> {
    const url = `${API_BASE_URL}/api/v1/articles/sitemap?lang=${lang}`;

    try {
        const res = await fetch(url, {
            next: { revalidate: 3600 },
        });

        if (!res.ok) {
            console.error(`[sitemap] Error al obtener datos para lang=${lang}`, {
                status: res.status,
                statusText: res.statusText,
            });
            return [
                {
                    url: `${SITE_URL}/${lang}`,
                    lastModified: new Date(),
                    changeFrequency: 'daily',
                    priority: 1,
                },
            ];
        }

        const data = (await res.json()) as RemoteSitemapItem[];

        return data.map((item) => {
            const path = item.path.startsWith('/') ? item.path : `/${item.path}`;
            const isHome = item.type === 'home';

            return {
                url: `${SITE_URL}${path}`,
                lastModified: item.lastmod || new Date().toISOString(),
                changeFrequency: (isHome ? 'daily' : 'monthly') as
                    | 'daily'
                    | 'monthly',
                priority: isHome ? 1 : 0.7,
            };
        });
    } catch (error) {
        console.error(`[sitemap] Error inesperado para lang=${lang}:`, error);

        return [
            {
                url: `${SITE_URL}/${lang}`,
                lastModified: new Date(),
                changeFrequency: 'daily',
                priority: 1,
            },
        ];
    }
}
