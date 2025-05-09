import { successHandler, clientErrorHandler, serverErrorHandler } from './api';

export const handlers = [successHandler, clientErrorHandler, serverErrorHandler];
