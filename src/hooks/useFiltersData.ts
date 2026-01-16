
"use client";
import { useEffect, useState } from "react";

export function useFiltersData(locale: string) {
    const [categories, setCategories] = useState<string[]>([]);
    const [tags, setTags] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchFilters() {
            setLoading(true);
            try {
                const [catRes, tagRes] = await Promise.all([
                    fetch(`/api/categories.json`),
                    fetch(`/api/tags.json`)
                ]);

                const catData = await catRes.json();
                const tagData = await tagRes.json();

                setCategories(catData.map((c: any) => c.name));
                setTags(tagData.map((t: any) => t.name));
            } catch (error) {
                console.error("Error cargando filtros:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchFilters();
    }, [locale]);

    return { categories, tags, loading };
}
