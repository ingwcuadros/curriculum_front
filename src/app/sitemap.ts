// app/sitemap.ts
import type { MetadataRoute } from 'next';
import { getSitemapForLang } from '@/lib/api/sitemap';

export const revalidate = 60 * 60; // 1 hora

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Llamamos al API para ambos idiomas
    const [esUrls, enUrls] = await Promise.all([
        getSitemapForLang('es'),
        getSitemapForLang('en'),
    ]);

    // Devolvemos todas las URLs mezcladas
    return [...esUrls, ...enUrls];
}