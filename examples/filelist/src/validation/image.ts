import { z } from 'zod';

//Acceptable MIME types
const ACCEPT_MIME_TYPES = ['image/png', 'image/jpeg', 'image/webp'];
//Allowable file size
const MAX_SIZE = 1024 * 1024 * 100; //100MB

const imageSchema = z.object({
  image: z
    .custom<FileList>()
    .refine((files) => 0 < files.length, {
      message: 'Attachment of image files is required.',
    })
    .refine((files) => 0 < files.length && files.length < 2, {
      message: 'Only one image file can be attached.',
    })
    .refine((files) => Array.from(files).every((file) => file.size < MAX_SIZE), {
      message: 'Image files can be attached up to 100MB.',
    })
    .refine((files) => Array.from(files).every((file) => ACCEPT_MIME_TYPES.includes(file.type)), {
      message: 'You can attach jpeg, jpg, png, and webp image files.',
    }),
});

export { imageSchema };
export type ImageSchemaType = z.infer<typeof imageSchema>;
