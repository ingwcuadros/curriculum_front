
"use client";
import Link from 'next/link';


export default function LanguageSwitcher({ locale, path }: { locale: string, path: string }) {
    console.log(path)
    return (
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <div className="flex text-sm">
                <Link href={`/es${path}`} className={`px-1.5 ${locale === 'es' ? 'text-white font-medium' : 'text-gray-500 hover:text-gray-300'}`}>
                    ES
                </Link>
                <span className="text-gray-600">|</span>
                <Link href={`/en${path}`} className={`px-1.5 ${locale === 'en' ? 'text-white font-medium' : 'text-gray-500 hover:text-gray-300'}`}>
                    EN
                </Link>
            </div>
        </div>
    );
}
