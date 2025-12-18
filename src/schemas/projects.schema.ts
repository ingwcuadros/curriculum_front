
import { z } from "zod";

// Schema para cada artículo
const ArticleSchema = z.object({
    id: z.uuid(),
    title: z.string(),
    url: z.string().optional(), // Algunos artículos pueden no tener URL
    auxiliaryContent: z.string(),
    image: z.string().url(),
    altImage: z.string()
});

// Schema para Projects
export const ProjectsSchema = z.object({
    id: z.uuid(),
    proyectId: z.uuid(),
    title: z.string(),
    content: z.string(),
    articles: z.array(ArticleSchema)
});

// Tipos inferidos
export type ProjectsData = z.infer<typeof ProjectsSchema>;
export type ArticleData = z.infer<typeof ArticleSchema>;
