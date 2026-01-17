
interface GenerateMetadataParams {
    locale: string;
    baseUrl?: string;
    title?: string;
    slug?: string;
    description?: string;
    image?: string;
}

export function generateMetadataForLocale({ locale, baseUrl = 'https://tu-dominio.com', title = 'Walter Giovanny Cuadros Rincon', slug = '', description = '', image = '' }: GenerateMetadataParams) {


    const urlForLocale = slug
        ? `${baseUrl}/${locale}/articles/${slug}`
        : `${baseUrl}/${locale}`;


    return {
        title,
        description,
        alternates: {
            canonical: urlForLocale,
            languages: {
                es: `${baseUrl}/es`,
                en: `${baseUrl}/en`,
            },
        },
        openGraph: {
            title,
            description,
            url: urlForLocale,
            siteName: 'Walter G. Cuadros — Portfolio',
            locale,
            type: 'website',
            images: [
                {
                    url: image || `${baseUrl}/images/og-cover.jpg`,
                    width: 1200,
                    height: 630,
                    alt: description || 'Walter Giovanny Cuadros Rincon Portfolio',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [image || `${baseUrl}/images/og-cover.jpg`],
        },
    };
}
