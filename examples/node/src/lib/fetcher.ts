import { ErrorResponse, OkResponse } from './model';
import { ImageSchemaType } from './schema';

export const imageUploadFetcher = async (data: ImageSchemaType): Promise<OkResponse | ErrorResponse> => {
  // create form data
  const formData = new FormData();
  formData.append('image', new Blob([data.image[0]], { type: data.image[0].type }), data.image[0].name);
  // send
  const result: OkResponse | ErrorResponse = await fetch(`http://localhost:3000/api/image`, {
    method: 'PUT',
    body: formData,
  })
    .then((res) => {
      if (res.status === 200) {
        // 200 OK
        return res.json();
      } else {
        try {
          return res.json();
        } catch (error) {
          // parse error
          console.error(error);
          return {
            status: 'error',
            code: 'image/parse-error',
            message: `${error}`,
          };
        }
      }
    })
    .catch((error) => {
      // unexpected error
      console.error(error);
      return {
        status: 'error',
        code: 'image/unexpected-error',
        message: `${error}`,
      };
    });
  return result;
};
