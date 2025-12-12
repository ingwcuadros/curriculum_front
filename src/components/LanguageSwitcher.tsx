
"use client";

import { useRouter, usePathname } from "next/navigation";

export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();

    const changeLanguage = (lang: string) => {
        // Reemplaza el primer segmento de la URL por el nuevo idioma
        const segments = pathname.split("/");
        segments[1] = lang;
        router.push(segments.join("/"));
    };

    return (
        <select
            onChange={(e) => changeLanguage(e.target.value)}
            className="bg-gray-700 text-white p-2 rounded"
            defaultValue={pathname.split("/")[1]}
        >
            <option value="es">ES</option>
            <option value="en">EN</option>
        </select>
    );
}
