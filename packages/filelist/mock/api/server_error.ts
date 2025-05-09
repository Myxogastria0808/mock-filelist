import { http, HttpResponse } from 'msw';

const serverErrorHandler = http.get('http://localhost:3000/api/server/error/', async ({}) => {
  return new HttpResponse(null, { status: 500 });
});

export default serverErrorHandler;
