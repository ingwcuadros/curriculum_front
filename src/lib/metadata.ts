import { icons } from "lucide-react";


interface GenerateMetadataParams {
    locale: string;
    baseUrl?: string;
    title?: string;
    slug?: string;
    typePage?: string;
    description?: string;
    image?: string;
}

export function generateMetadataForLocale({ locale, baseUrl = 'https://tu-dominio.com', title = 'Walter Giovanny Cuadros Rincon', slug = '', typePage = 'home', description = '', image = '' }: GenerateMetadataParams) {


    // determine which kind of page we are generating metadata for

    let urlForLocale;
    switch (typePage) {
        case 'article-list':
            urlForLocale = `${baseUrl}/${locale}/articles`;
            break;
        case 'article-detail':
            urlForLocale = `${baseUrl}/${locale}/articles/${slug}`;
            break;
        case 'home':
            urlForLocale = `${baseUrl}/${locale}`;
            break;
        case 'contact':
        default:
            urlForLocale = `${baseUrl}/${locale}/contact`;
            break;
    }


    return {
        title,
        description,
        icons:
        {
            icon: "/favicon.svg",
        }
        ,
        alternates: {
            canonical: urlForLocale
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
        }
    };
}
