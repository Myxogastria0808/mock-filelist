import { describe, expect, test } from 'vitest';
import { imageSchema, ImageSchemaType } from './image';
import { LocalFileListBuilder } from '@mock-filelist/filelist';

describe('imageSchemaのバリデーション', () => {
  test.concurrent('有効な入力', async () => {
    let filelist: FileList = new LocalFileListBuilder()
      .addFile({ filePath: 'test_assets/sample.png', name: 'sample.png', mimeType: 'image/png' })
      .build();
    const validInput: ImageSchemaType = {
      image: filelist,
    };
    const result = imageSchema.safeParse(validInput);
    expect(result.success).toBe(true);
  });
});
