import { imageSchema, ImageSchemaType } from './lib/schema';
import { LocalFileListBuilder } from '@mock-filelist/node';

const main = () => {
  const filelist: File[] = new LocalFileListBuilder()
    .addFile({ filePath: 'test_assets/sample.png', name: 'sample.png', mimeType: 'image/png' })
    .build();
  const validInput: ImageSchemaType = {
    image: filelist,
  };
  const result = imageSchema.safeParse(validInput);
  console.log('result: ' + result.success);
  console.log('File[] length: ' + result.data?.image.length);
  console.log('File[0] name: ' + result.data?.image[0].name);
  console.log('File[0] type: ' + result.data?.image[0].type);
};

main();
