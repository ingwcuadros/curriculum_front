
import Link from 'next/link';
import { getLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export const revalidate = 3600;

export default async function Projects() {
    const t = useTranslations('Projects');
    const locale = await getLocale();
    const endpoint = `/api/projects${locale}.json`;

    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ''}${endpoint}`, {
        next: { revalidate: 3600 }
    });

    if (!res.ok) throw new Error('Error al cargar proyectos');

    const { title, content, articles } = await res.json();


    return (
        <section className="bg-white py-10 px-6 rounded-lg shadow-md">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
                <p className="text-lg text-gray-700 mb-8">{content}</p>

                <div className="grid md:grid-cols-2 gap-6">
                    {articles.map((article: any) => (
                        <div key={article.id} className="border rounded-lg p-4 text-left shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                            <p className="text-gray-600 mb-4">{article.content}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {article.tags.map((tag: string, index: number) => (
                                    <span key={index} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                            <Link
                                href={`/${locale}/articles/${article.url}`}
                                className="text-blue-600 hover:underline font-medium"
                            >
                                {t("more")}  →
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="mt-8">
                    <Link
                        href={`/${locale}/articles`}
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        {t("viewAll")}
                    </Link>
                </div>
            </div>
        </section>
    );
}