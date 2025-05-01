import { describe, expect, test } from 'vitest';
import { imageSchema, ImageSchemaType } from './image';
import { RemoteFileListBuilder } from '@mock-filelist/browser';

describe('Validation Test of imageSchema', () => {
  test.concurrent('Vaild Value', async () => {
    let filelist: FileList = (
      await new RemoteFileListBuilder().addFile({
        url: 'https://pub-5d8c638a3a5f4474b17d2a501dae7b3b.r2.dev/sample.png',
        name: 'sample.png',
        mimeType: 'image/png',
      })
    ).build();
    const validInput: ImageSchemaType = {
      image: filelist,
    };
    const result = imageSchema.safeParse(validInput);
    expect(result.success).toBe(true);
  });
});
