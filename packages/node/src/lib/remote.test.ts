import { describe, expect, expectTypeOf, test } from 'vitest';
import { RemoteFileArrayBuilder, RemoteFileBuilder } from './remote';

describe('RemoteFileArrayBuilder test', () => {
  test.concurrent('addBlob() method test', () => {
    const remoteFileArrayBuilderSample: File[] = new RemoteFileArrayBuilder()
      .addBlob({
        name: 'sample.txt',
        mimeType: 'text/plain',
        blob: new Blob(['Hello, World!']),
      })
      .build();
    expect(remoteFileArrayBuilderSample).toBeInstanceOf(Array);
    expectTypeOf(remoteFileArrayBuilderSample).toEqualTypeOf<File[]>();
  });
  test.concurrent('addBlobs() method test', () => {
    const remoteFileArrayBuilderSample: File[] = new RemoteFileArrayBuilder()
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
    expect(remoteFileArrayBuilderSample).toBeInstanceOf(Array);
    expectTypeOf(remoteFileArrayBuilderSample).toEqualTypeOf<File[]>();
  });
  test.concurrent('addFile() method test', async () => {
    const remoteFileArrayBuilderSample: File[] = (
      await new RemoteFileArrayBuilder().addFile({
        name: 'sample.txt',
        mimeType: 'text/plain',
        url: 'http://localhost:3000/api/success/',
      })
    ).build();
    expect(remoteFileArrayBuilderSample).toBeInstanceOf(Array);
    expectTypeOf(remoteFileArrayBuilderSample).toEqualTypeOf<File[]>();
  });
  test.concurrent('addFiles() method test', async () => {
    const remoteFileArrayBuilderSample: File[] = (
      await new RemoteFileArrayBuilder().addFiles([
        {
          name: 'sample.txt',
          mimeType: 'text/plain',
          url: 'http://localhost:3000/api/success/',
        },
        {
          name: 'sample2.txt',
          mimeType: 'text/plain',
          url: 'http://localhost:3000/api/success/',
        },
      ])
    ).build();
    expect(remoteFileArrayBuilderSample).toBeInstanceOf(Array);
    expectTypeOf(remoteFileArrayBuilderSample).toEqualTypeOf<File[]>();
  });
  test.concurrent('addFileObject() method test', () => {
    let file: File = new File(['Hello, World!'], 'sample.txt', { type: 'text/plain' });
    const remoteFileArrayBuilderSample: File[] = new RemoteFileArrayBuilder().addFileObject(file).build();
    expect(remoteFileArrayBuilderSample).toBeInstanceOf(Array);
    expectTypeOf(remoteFileArrayBuilderSample).toEqualTypeOf<File[]>();
  });
  test.concurrent('addFileObjects() method test', () => {
    const files: File[] = [
      new File(['Hello, World!'], 'sample.txt', { type: 'text/plain' }),
      new File(['Hello, World!'], 'sample2.txt', { type: 'text/plain' }),
    ];
    const remoteFileArrayBuilderSample: File[] = new RemoteFileArrayBuilder().addFileObjects(files).build();
    expect(remoteFileArrayBuilderSample).toBeInstanceOf(Array);
    expectTypeOf(remoteFileArrayBuilderSample).toEqualTypeOf<File[]>();
  });
});

describe('RemoteFileBuilder test', () => {
  test.concurrent('addBlob() method test', () => {
    const remoteFileBuilderSample: File = new RemoteFileBuilder()
      .addBlob({
        name: 'sample.txt',
        mimeType: 'text/plain',
        blob: new Blob(['Hello, World!']),
      })
      .build();
    expect(remoteFileBuilderSample).toBeInstanceOf(File);
    expectTypeOf(remoteFileBuilderSample).toEqualTypeOf<File>();
  });
  test.concurrent('addFile() method test', async () => {
    const remoteFileBuilderSample: File = (
      await new RemoteFileBuilder().addFile({
        name: 'sample.txt',
        mimeType: 'text/plain',
        url: 'http://localhost:3000/api/success/',
      })
    ).build();
    expect(remoteFileBuilderSample).toBeInstanceOf(File);
    expectTypeOf(remoteFileBuilderSample).toEqualTypeOf<File>();
  });
  test.concurrent('addFileObject() method test', async () => {
    const file: File = new File(['Hello, World!'], 'sample.txt', { type: 'text/plain' });
    const localFileBuilderSample: File = new RemoteFileBuilder().addFileObject(file).build();
    expect(localFileBuilderSample).toBeInstanceOf(File);
    expectTypeOf(localFileBuilderSample).toEqualTypeOf<File>();
  });
});
