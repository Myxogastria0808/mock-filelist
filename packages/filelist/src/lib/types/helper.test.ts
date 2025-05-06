import { describe, expect, expectTypeOf, test } from 'vitest';
import { buildFile, buildFileList, localFileSourceConverter, remoteFileSourceConverter } from './helper';

describe('helper function test', () => {
  test.concurrent('buildFile function test (input File object)', () => {
    const file: File = new File([''], 'sample.txt', { type: 'text/plain' });
    const result: File = buildFile(file);
    expectTypeOf(file).toEqualTypeOf<File>();
  });
  test.concurrent('buildFile function test (input undefine object)', () => {
    expect(() => buildFile(undefined)).toThrowError('File is not defined.');
  });
  test.concurrent('buildFileList function test (input File[])', () => {
    const files: File[] = [
      new File(['Hello, World!'], 'sample1.txt', { type: 'text/plain' }),
      new File(['Hello, World!'], 'sample2.txt', { type: 'text/plain' }),
    ];
    const result: FileList = buildFileList(files);
    expectTypeOf(result).toEqualTypeOf<FileList>();
  });
  test.concurrent('localFileSourceConverter function test (input LocalFileSource object)', () => {
    const file: File = localFileSourceConverter({
      name: 'sample.txt',
      mimeType: 'text/plain',
      filePath: 'test_assets/sample.txt',
    });
    expectTypeOf(file).toEqualTypeOf<File>();
  });
  test.concurrent('remoteFileSourceConverter function test (input RemoteFileSource object)', async () => {
    const file: File = await remoteFileSourceConverter({
      name: 'sample.png',
      mimeType: 'image/png',
      url: 'https://pub-5d8c638a3a5f4474b17d2a501dae7b3b.r2.dev/sample.png',
    });
    expectTypeOf(file).toEqualTypeOf<File>();
  });
});
