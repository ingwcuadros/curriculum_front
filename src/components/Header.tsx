
"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
    const t = useTranslations("navigation");

    return (
        <header className="bg-gray-800 text-white">
            <nav className="container mx-auto flex justify-between items-center p-4">
                <div className="text-lg font-bold">Mi Sitio</div>
                <ul className="flex gap-6">

                    <li><Link href={`/`}>{t('home')}</Link></li>
                    <li><Link href={`/articles`}>{t('articles')}</Link></li>
                    <li><Link href={`/contact`}>{t('contact')}</Link></li>

                </ul>
                <LanguageSwitcher />
            </nav>
        </header>
    );
}
