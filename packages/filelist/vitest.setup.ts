import { beforeAll, afterEach, afterAll } from 'vitest';
import { server } from './mock/index';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
