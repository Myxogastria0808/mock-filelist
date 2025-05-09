import { describe, expect, expectTypeOf, test } from 'vitest';
import { LocalFileBuilder, LocalFileArrayBuilder } from './local';

describe('LocalFileArrayBuilder test', () => {
  test.concurrent('addBlob() method test', () => {
    const localFileArrayBuilderSample: File[] = new LocalFileArrayBuilder()
      .addBlob({
        name: 'sample.txt',
        mimeType: 'text/plain',
        blob: new Blob(['Hello, World!']),
      })
      .build();
    expect(localFileArrayBuilderSample).toBeInstanceOf(Array);
    expectTypeOf(localFileArrayBuilderSample).toEqualTypeOf<File[]>();
  });
  test.concurrent('addBlobs() method test', () => {
    const localFileArrayBuilderSample: File[] = new LocalFileArrayBuilder()
      .addBlobs([
        {
          name: 'sample.txt',
          mimeType: 'text/plain',
          blob: new Blob(['Hello, World!']),
        },
        {
          name: 'sample2.txt',
          mimeType: 'text/plain',
          blob: new Blob(['Hello, World!']),
        },
      ])
      .build();
    expect(localFileArrayBuilderSample).toBeInstanceOf(Array);
    expectTypeOf(localFileArrayBuilderSample).toEqualTypeOf<File[]>();
  });
  test.concurrent('addFile() method test', () => {
    const localFileArrayBuilderSample: File[] = new LocalFileArrayBuilder()
      .addFile({
        name: 'sample.txt',
        mimeType: 'text/plain',
        filePath: 'test_assets/sample.txt',
      })
      .build();
    expect(localFileArrayBuilderSample).toBeInstanceOf(Array);
    expectTypeOf(localFileArrayBuilderSample).toEqualTypeOf<File[]>();
  });
  test.concurrent('addFiles() method test', () => {
    const localFileArrayBuilderSample: File[] = new LocalFileArrayBuilder()
      .addFiles([
        {
          name: 'sample.txt',
          mimeType: 'text/plain',
          filePath: 'test_assets/sample.txt',
        },
        {
          name: 'sample2.txt',
          mimeType: 'text/plain',
          filePath: 'test_assets/sample.txt',
        },
      ])
      .build();
    expect(localFileArrayBuilderSample).toBeInstanceOf(Array);
    expectTypeOf(localFileArrayBuilderSample).toEqualTypeOf<File[]>();
  });
  test.concurrent('addFileObject() method test', () => {
    let file: File = new File(['Hello, World!'], 'sample.txt', { type: 'text/plain' });
    const localFileArrayBuilderSample: File[] = new LocalFileArrayBuilder().addFileObject(file).build();
    expect(localFileArrayBuilderSample).toBeInstanceOf(Array);
    expectTypeOf(localFileArrayBuilderSample).toEqualTypeOf<File[]>();
  });
  test.concurrent('addFileObjects() method test', () => {
    const files: File[] = [
      new File(['Hello, World!'], 'sample.txt', { type: 'text/plain' }),
      new File(['Hello, World!'], 'sample2.txt', { type: 'text/plain' }),
    ];
    const localFileArrayBuilderSample: File[] = new LocalFileArrayBuilder().addFileObjects(files).build();
    expect(localFileArrayBuilderSample).toBeInstanceOf(Array);
    expectTypeOf(localFileArrayBuilderSample).toEqualTypeOf<File[]>();
  });
});

describe('LocalFileBuilder test', () => {
  test.concurrent('addBlob() method test', () => {
    const localFileBuilderSample: File = new LocalFileBuilder()
      .addBlob({
        name: 'sample.txt',
        mimeType: 'text/plain',
        blob: new Blob(['Hello, World!']),
      })
      .build();
    expect(localFileBuilderSample).toBeInstanceOf(File);
    expectTypeOf(localFileBuilderSample).toEqualTypeOf<File>();
  });
  test.concurrent('addFile() method test', () => {
    const localFileBuilderSample: File = new LocalFileBuilder()
      .addFile({
        name: 'sample.txt',
        mimeType: 'text/plain',
        filePath: 'test_assets/sample.txt',
      })
      .build();
    expect(localFileBuilderSample).toBeInstanceOf(File);
    expectTypeOf(localFileBuilderSample).toEqualTypeOf<File>();
  });
  test.concurrent('addFileObject() method test', () => {
    const file: File = new File(['Hello, World!'], 'sample.txt', { type: 'text/plain' });
    const localFileBuilderSample: File = new LocalFileBuilder().addFileObject(file).build();
    expect(localFileBuilderSample).toBeInstanceOf(File);
    expectTypeOf(localFileBuilderSample).toEqualTypeOf<File>();
  });
});
