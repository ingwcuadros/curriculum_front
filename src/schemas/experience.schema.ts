
import { z } from "zod";

// Schema para cada artículo de experiencia
const ExperienceArticleSchema = z.object({
    id: z.uuid(),
    title: z.string(),
    period: z.string(),
    url: z.string(), // Puede ser null
    promo: z.string(),
    auxiliaryContent: z.string(),
    tags: z.array(z.string())
});

// Schema para la sección Experience
export const ExperienceSchema = z.object({
    id: z.uuid(),
    experienceId: z.uuid(),
    title: z.string(),
    content: z.string(),
    articles: z.array(ExperienceArticleSchema)
});

// Tipos inferidos
export type ExperienceData = z.infer<typeof ExperienceSchema>;
export type ExperienceArticleData = z.infer<typeof ExperienceArticleSchema>;
``
