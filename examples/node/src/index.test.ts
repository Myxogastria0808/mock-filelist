import { describe, expect, test } from 'vitest';
import { imageSchema, ImageSchemaType } from './lib/schema';
import { LocalFileArrayBuilder } from '@mock-filelist/node';

describe('Validation Test of imageSchema', () => {
  test.concurrent('Vaild Value', async () => {
    let fileArray: File[] = new LocalFileArrayBuilder()
      .addFile({ filePath: 'test_assets/sample.png', name: 'sample.png', mimeType: 'image/png' })
      .build();
    const validInput: ImageSchemaType = {
      image: fileArray,
    };
    const result = imageSchema.safeParse(validInput);
    expect(result.success).toBe(true);
  });
});
