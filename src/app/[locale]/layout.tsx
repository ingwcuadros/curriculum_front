
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "@/components/Layout/Head";
import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';

type Props = {
    children: React.ReactNode;
};


export const metadata = {
    title: "Walter Giovanny Cuadros Rincon",
    description: "Cloud Solutions Architect · Delivery Manager · Product Owner Técnico",
    alternates: {
        canonical: "https://tu-dominio.com/es",
        languages: {
            "es": "https://tu-dominio.com/es",
            "en": "https://tu-dominio.com/en",
        },
    },
};


export default async function RootLayout({ children }: Props) {
    return (
        <html>

            {/* <Head /> */}

            <body className="min-h-screen font-sans bg-[#0B0F14]">
                <NextIntlClientProvider>
                    <Header nombre="Walter Cuadros" />
                    <main id="main-content" className="min-h-screen">{children}</main>
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}