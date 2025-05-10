import { describe, expect, test } from 'vitest';
import { imageSchema, ImageSchemaType } from './image';
import { RemoteFileListBuilder } from '@mock-filelist/browser';
import { server } from '../../mock';

// Call the `.listen` method to enable API mocking.
server.listen();

describe('Validation Test of imageSchema', () => {
  test.concurrent('Vaild Value', async () => {
    let filelist: FileList = (
      await new RemoteFileListBuilder().addFile({
        name: 'sample.png',
        mimeType: 'image/png',
        url: 'http://localhost:3000/api/success/',
      })
    ).build();
    const validInput: ImageSchemaType = {
      image: filelist,
    };
    const result = imageSchema.safeParse(validInput);
    expect(result.success).toBe(true);
  });
});
