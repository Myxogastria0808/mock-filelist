import { http, HttpResponse } from 'msw';

const uploadHandler = http.put('http://localhost:3000/api/image', async ({ request }) => {
  const formData: FormData = await request.formData();
  const image: FormDataEntryValue = formData.get('image');
  console.log('---uploadHandler (server)---------');
  console.log(image);
  console.log('----------------------------------');
  if (!image) {
    return HttpResponse.json(
      {
        status: 'error',
        code: 'image/empty-file-error',
        message: 'File not found in the request.',
      },
      { status: 400 }
    );
  }

  if (!(image instanceof File)) {
    return HttpResponse.json(
      {
        status: 'error',
        code: 'image/invalid-file-error',
        message: 'Invalid file type. Expected a File object.',
      },
      { status: 400 }
    );
  }
  return HttpResponse.json(
    {
      status: 'ok',
      code: 'image/success',
      message: 'Success: Image updated successfully.',
    },
    { status: 200 }
  );
});

export default uploadHandler;
