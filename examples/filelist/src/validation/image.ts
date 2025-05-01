import { z } from "zod";

//許容するMIMEタイプ
const ACCEPT_MIME_TYPES = ["image/png", "image/jpeg", "image/webp"];
//許容するファイルサイズ
const MAX_SIZE = 1024 * 1024 * 100; //100MB

const imageSchema = z.object({
  image: z
    .custom<FileList>()
    .refine((files) => 0 < files.length, {
      message: "画像ファイルの添付は必須です",
    })
    .refine((files) => 0 < files.length && files.length < 2, {
      message: "添付できる画像ファイルは1枚だけです",
    })
    .refine(
      (files) => Array.from(files).every((file) => file.size < MAX_SIZE),
      {
        message: "添付できる画像ファイルは100MBまでです",
      }
    )
    .refine(
      (files) =>
        Array.from(files).every((file) =>
          ACCEPT_MIME_TYPES.includes(file.type)
        ),
      {
        message: "添付できる画像ファイルは jpeg、jpg、png、webp です",
      }
    ),
});

export { imageSchema };
export type ImageSchemaType = z.infer<typeof imageSchema>;
