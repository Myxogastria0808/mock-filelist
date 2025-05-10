import { imageUploadFetcher } from './lib/fetcher';
import { ErrorResponse, OkResponse } from './lib/model';
import { ImageSchemaType } from './lib/schema';
import { LocalFileArrayBuilder } from '@mock-filelist/node';
import { server } from '../mock';

// Call the `.listen` method to enable API mocking.
server.listen();

const main = async () => {
  // create File[]
  const filelist: File[] = new LocalFileArrayBuilder()
    .addFile({ filePath: 'test_assets/sample.png', name: 'sample.png', mimeType: 'image/png' })
    .build();

  // validate inputs
  const inputs: ImageSchemaType = {
    image: filelist,
  };

  // upload image
  const result: OkResponse | ErrorResponse = await imageUploadFetcher(inputs);

  // show result
  console.log('---Result (client)----------------');
  console.dir(result);
  console.log('----------------------------------');
};

main();
