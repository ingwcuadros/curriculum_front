
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';

type Props = {
    children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
    return (
        <html>
            <body className="min-h-screen font-sans bg-[#0B0F14]">
                <NextIntlClientProvider>
                    <Header nombre="Walter Cuadros" />
                    <main className="min-h-screen">{children}</main>
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}