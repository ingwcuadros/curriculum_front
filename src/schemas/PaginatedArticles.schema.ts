import { z } from "zod";
import { ArticleSchema } from "./article.schema";

export const PaginatedArticlesSchema = z.object({
    items: z.array(ArticleSchema),
    total: z.number().int().nonnegative(),
    page: z.number().int().positive(),
    limit: z.number().int().positive(),
    totalPages: z.number().int().positive(),
});

export type PaginatedArticles = z.infer<typeof PaginatedArticlesSchema>;