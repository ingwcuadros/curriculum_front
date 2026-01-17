
import ArticleDetail from '@/components/ArticleDetail/ArticleDetail';
import { generateMetadataForLocale } from '@/lib/metadata';
import { getArticleDetail } from "@/lib/api/articles";




export async function generateMetadata({ params }: { params: { locale: string; slug: string } }) {

    const resolvedParams = await params; // ✅ Forzamos la resolución
    const { locale, slug } = resolvedParams;
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tu-dominio.com';
    const article = await getArticleDetail(slug, locale);

    return generateMetadataForLocale({ locale, baseUrl, title: article?.titulo || 'Default Title', description: article?.promo || 'Default Description', image: article?.image || '', slug });

}


// src/app/[locale]/articles/[slug]/page.tsx
export default function ArticleDetailPage() {

    return <ArticleDetail />;

}

