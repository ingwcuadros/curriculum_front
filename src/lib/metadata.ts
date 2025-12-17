
interface GenerateMetadataParams {
    locale: string;
    baseUrl?: string; // opcional para inyectar dominio
}

export function generateMetadataForLocale({ locale, baseUrl = 'https://tu-dominio.com' }: GenerateMetadataParams) {
    const urlForLocale = `${baseUrl}/${locale}`;

    const title =
        locale === 'es'
            ? 'Walter Giovanny Cuadros Rincon'
            : 'Walter Giovanny Cuadros Rincon';

    const description =
        locale === 'es'
            ? 'Arquitecto de Soluciones Cloud · Delivery Manager · Product Owner Técnico'
            : 'Cloud Solutions Architect · Delivery Manager · Technical Product Owner';

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
                    url: `${baseUrl}/images/og-cover.jpg`,
                    width: 1200,
                    height: 630,
                    alt:
                        locale === 'es'
                            ? 'Portada del portfolio de Walter Giovanny Cuadros Rincon'
                            : 'Walter Giovanny Cuadros Rincon portfolio cover',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [`${baseUrl}/images/og-cover.jpg`],
        },
    };
}
