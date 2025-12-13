
import Image from 'next/image';
import { getLocale } from 'next-intl/server';
import ReactMarkdown from 'react-markdown';

export const revalidate = 3600;

export default async function Academic() {
    const locale = await getLocale();
    const endpoint = `/api/academic${locale}.json`;

    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ''}${endpoint}`, {
        next: { revalidate: 3600 }
    });

    if (!res.ok) throw new Error('Error al cargar logros académicos');

    const { title, content, image, altImage } = await res.json();

    return (
        <section className="bg-gray-50 py-10 px-6 rounded-lg shadow-md">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>

                {image && (
                    <div className="mb-6">
                        <Image
                            src={image}
                            alt={altImage || 'Logros académicos'}
                            width={800}
                            height={300}
                            className="rounded-lg object-cover mx-auto"
                            priority
                        />
                    </div>
                )}

                {/* Renderizar contenido Markdown */}
                <div className="prose prose-lg text-left mx-auto">
                    <ReactMarkdown>{content}</ReactMarkdown>
                </div>
            </div>
        </section>
    );
}

