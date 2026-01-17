
import './globals.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { NextIntlClientProvider } from 'next-intl';
import NotFoundPage from '@/components/404/NotFoundPage';



export default function NotFound() {


    return (
        <html lang="es">
            <body className="min-h-screen font-sans bg-[#0B0F14]">
                <NextIntlClientProvider>
                    <div className='bg-gradient-to-br from-[#F6F7F9] via-white to-[#F6F7F9] relative overflow-hidden' >
                        <Header nombre="Walter Cuadros" />
                        <NotFoundPage />
                        <Footer />
                    </div>
                </NextIntlClientProvider>
            </body>

        </html>
    )
}