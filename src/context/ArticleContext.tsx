"use client";

import { createContext, useContext, useState } from "react";


type ArticleTranslations = Record<string, string> | null;

type ArticleContextType = {
    translations: ArticleTranslations;
    setTranslations: (data: ArticleTranslations) => void;
};

const ArticleContext = createContext<ArticleContextType>({
    translations: null,
    setTranslations: () => { },
});

export function ArticleProvider({ children }: { children: React.ReactNode }) {
    const [translations, setTranslations] = useState<ArticleTranslations>(null);
    return (
        <ArticleContext.Provider value={{ translations, setTranslations }}>
            {children}
        </ArticleContext.Provider>
    );
}

export const useArticleInfo = () => useContext(ArticleContext);