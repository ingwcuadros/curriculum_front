

import Articles from "@/components/Articles/Articles";
import { generateMetadataForLocale } from '@/lib/metadata';

export async function generateMetadata({ params }: { params: { locale: string; } }) {

    const resolvedParams = await params;
    const { locale } = resolvedParams;
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tu-dominio.com';

    return generateMetadataForLocale({ locale, baseUrl, title: 'Articles', description: 'Browse all articles', image: '', slug: '' });

}



export default function ArticlesPage() {
    return <Articles />;
}
