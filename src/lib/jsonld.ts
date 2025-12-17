

export function getPersonJsonLd(locale: string, options?: { baseUrl?: string; imageUrl?: string }) {
    const baseUrl = options?.baseUrl ?? 'https://tu-dominio.com';
    const imageUrl = options?.imageUrl ?? `${baseUrl}/images/walter.jpg`;

    return {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Walter Giovanny Cuadros Rincon',
        jobTitle:
            locale === 'es'
                ? 'Arquitecto de Soluciones Cloud · Delivery Manager · Product Owner Técnico'
                : 'Cloud Solutions Architect · Delivery Manager · Technical Product Owner',
        url: `${baseUrl}/${locale}`,
        image: imageUrl,
        sameAs: [
            'https://www.linkedin.com/in/tuusuario',
            'https://github.com/tuusuario',
            'https://twitter.com/tuusuario',
        ],
    };
}

export function getWebSiteJsonLd(locale: string, options?: { baseUrl?: string }) {
    const baseUrl = options?.baseUrl ?? 'https://tu-dominio.com';

    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Walter G. Cuadros — Portfolio',
        url: baseUrl,
        inLanguage: locale,
        potentialAction: {
            '@type': 'SearchAction',
            target: `${baseUrl}/search?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
        },
    };
}
