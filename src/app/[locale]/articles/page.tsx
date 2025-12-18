
// src/app/[locale]/articles/page.tsx
import Link from 'next/link';
/* import { useTranslations } from 'next-intl'; */
import { getLocale } from 'next-intl/server';

export default async function ArticlesPage() {
    //const t = useTranslations('articles');
    const locale = await getLocale();
    // Información quemada
    const article = {
        title: locale === 'es' ? 'Título del artículo' : 'Article Title',
        description: locale === 'es'
            ? 'Este es un artículo de ejemplo en español.'
            : 'This is a sample article in English.',
        slug: 'titulo-articulo'
    };

    return (
        <section>
            <h2 className="text-2xl font-bold mb-4">{'titulo quemado'}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white shadow rounded p-4 hover:shadow-lg transition">
                    <h3 className="text-lg font-semibold mb-2">Contenido quemado</h3>
                    <p className="text-gray-600 mb-4">{article.description}</p>
                    <Link
                        href={`/${locale}/articles/${article.slug}`}
                        className="text-blue-600 font-medium hover:underline"
                    >
                        {'readMore'}
                    </Link>
                </div>
            </div>
        </section>
    );
}
