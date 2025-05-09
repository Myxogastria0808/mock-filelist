import { http, HttpResponse } from 'msw';

const clientErrorHandler = http.get('http://localhost:3000/api/client/error/', async ({}) => {
  return new HttpResponse(null, { status: 400 });
});

export default clientErrorHandler;
