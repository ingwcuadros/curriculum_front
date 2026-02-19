
import { z } from "zod";

export const CVDownloadSchema = z.object({
    id: z.uuid(),
    fileName: z.string(),
    metaKeywords: z.string(),
    filePath: z.string()
});

export type CVDownloadData = z.infer<typeof CVDownloadSchema>
