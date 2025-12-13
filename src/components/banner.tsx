
import Image from 'next/image';
import { getLocale } from 'next-intl/server';

export const revalidate = 3600; // ISR: revalidar cada hora

export default async function Banner() {
    const locale = await getLocale();
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ''}/api/banner${locale}.json`, {
        next: { revalidate: 3600 } // ISR
    });

    if (!res.ok) {
        throw new Error('Error al cargar el banner');
    }

    const { title, textBanner, image, altImage, tags } = await res.json();

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
            <div className="max-w-3xl mx-auto">
                {/* Imagen opcional */}
                {image && (
                    <div className="mb-6">
                        <Image
                            src={image}
                            alt={altImage || 'Banner'}
                            width={800}
                            height={300}
                            className="rounded-lg object-cover mx-auto"
                            priority
                        />
                    </div>
                )}

                {/* Título */}
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>

                {/* Texto */}
                <p className="text-lg text-gray-700 mb-6">{textBanner}</p>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2">
                    {tags.map((tag: string, index: number) => (
                        <span
                            key={index}
                            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
