
import { z } from "zod";

export const AchievementsSchema = z.object({
    id: z.uuid(),
    academicAchievementId: z.uuid(),
    title: z.string(),
    content: z.string() // Aquí puede venir Markdown, lo dejamos como string
});

export type AchievementsData = z.infer<typeof AchievementsSchema>;
