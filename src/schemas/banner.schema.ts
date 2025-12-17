
import { z } from "zod";

export const BannerSchema = z.object({
    id: z.uuid(),
    bannerId: z.uuid(),
    title: z.string(),
    role: z.string(),
    textBanner: z.string(),
    altImage: z.string(),
    image: z.string().url(),
    tags: z.array(z.string())
});

export type BannerData = z.infer<typeof BannerSchema>;
