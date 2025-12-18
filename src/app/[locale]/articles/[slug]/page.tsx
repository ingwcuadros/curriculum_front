
import { getLocale } from 'next-intl/server';

// src/app/[locale]/articles/[slug]/page.tsx
export default async function ArticleDetailPage() {
    const locale = await getLocale();
    // Información quemada
    const article = {
        title: locale === 'es' ? 'Título del artículo' : 'Article Title',
        content: locale === 'es'
            ? 'Este es el contenido completo del artículo en español.'
            : 'This is the full content of the article in English.'
    };

    return (
        <article className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
            <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
            <p className="text-gray-700">{article.content}</p>
        </article>
    );
}

