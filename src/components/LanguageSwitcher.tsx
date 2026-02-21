"use client";

import Link from "next/link";
import { useArticleInfo } from "@/context/ArticleContext";

export default function LanguageSwitcher({ locale, path }: { locale: string, path: string }) {
    const { translations } = useArticleInfo();


    const makeUrl = (targetLocale: string) => {
        // Si estamos en un artículo y tenemos traducciones → usar el slug correcto
        if (translations && translations[targetLocale]) {
            return `/${targetLocale}/articles/${translations[targetLocale]}`;
        }

        // Para páginas normales → usar el path original
        return `/${targetLocale}${path}`;
    };

    return (
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
            <div className="flex text-sm">
                <Link
                    href={makeUrl('es')}
                    className={`px-1.5 ${locale === 'es' ? 'text-white font-medium' : 'text-gray-500'}`}
                >
                    ES
                </Link>
                <span className="text-gray-600">|</span>
                <Link
                    href={makeUrl('en')}
                    className={`px-1.5 ${locale === 'en' ? 'text-white font-medium' : 'text-gray-500'}`}
                >
                    EN
                </Link>
            </div>
        </div>
    );
}