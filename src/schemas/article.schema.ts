// src/types/article.ts
import { z } from 'zod';

export const ArticleSchema = z.object({
    id: z.string(),
    idTranslation: z.string(),
    titulo: z.string(),
    url: z.string(),
    content: z.string(),
    auxiliaryContent: z.string(),
    fecha: z.string(), // podrías usar refinements para validar formato fecha
    promo: z.string(),
    image: z.string(),
    categoria: z.string(),
    tags: z.array(z.string()),
    translations: z.record(z.string(), z.string()), // { en: 'url-en', es: 'url-es', ... }
});

export type ArticleData = z.infer<typeof ArticleSchema>;