import { http, HttpResponse } from 'msw';

const successHandler = http.get('http://localhost:3000/api/success/', async ({}) => {
  const blob: Blob = new Blob(['Hello, World!'], { type: 'text/plain' });
  const arrayBuffer = await blob.arrayBuffer();
  return HttpResponse.arrayBuffer(arrayBuffer, {
    status: 200,
  });
});

export default successHandler;
