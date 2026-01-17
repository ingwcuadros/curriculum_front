
// src/app/[locale]/layout.tsx
import '../globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Script from 'next/script';
import { getLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { getPersonJsonLd, getWebSiteJsonLd } from '@/lib/jsonld';

type Props = {
    children: React.ReactNode;
};


export default async function RootLayout({ children }: Props) {
    const locale = await getLocale();
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tu-dominio.com'
    const personLd = getPersonJsonLd(locale, { baseUrl, imageUrl: `${baseUrl}/images/walter.jpg` });
    const webSiteLd = getWebSiteJsonLd(locale, { baseUrl });

    return (
        <html lang={locale}>
            <head>
                <Script
                    id={`person-json-ld-${locale}`}
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
                />
                <Script
                    id={`website-json-ld-${locale}`}
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteLd) }}
                />
            </head>
            <body className="min-h-screen font-sans bg-[#0B0F14]">
                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:bg-black focus:text-white focus:px-3 focus:py-2 focus:rounded"
                />
                <NextIntlClientProvider>
                    <Header nombre="Walter Cuadros" />
                    <main id="main-content" className="min-h-screen">
                        {children}
                    </main>
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html >
    );
}

