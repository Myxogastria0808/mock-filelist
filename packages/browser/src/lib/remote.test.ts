import { describe, expect, expectTypeOf, test } from 'vitest';
import { RemoteFileListBuilder, RemoteFileBuilder } from './remote.mjs';

describe('RemoteFileListBuilder test', () => {
  test.concurrent('addBlob() method test', () => {
    const remoteFileListBuilderSample: FileList = new RemoteFileListBuilder()
      .addBlob({
        name: 'sample.txt',
        mimeType: 'text/plain',
        blob: new Blob(['Hello, World!']),
      })
      .build();
    const remoteFileListBuilderArraySample: File[] = new RemoteFileListBuilder()
      .addBlob({
        name: 'sample.txt',
        mimeType: 'text/plain',
        blob: new Blob(['Hello, World!']),
      })
      .buildFileArray();
    expect(remoteFileListBuilderArraySample).toBeInstanceOf(Array);
    expectTypeOf(remoteFileListBuilderSample).toEqualTypeOf<FileList>();
    expectTypeOf(remoteFileListBuilderArraySample).toEqualTypeOf<File[]>();
  });
  test.concurrent('addBlobs() method test', () => {
    const remoteFileListBuilderSample: FileList = new RemoteFileListBuilder()
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
    const remoteFileListBuilderArraySample: File[] = new RemoteFileListBuilder()
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
      .buildFileArray();
    expect(remoteFileListBuilderArraySample).toBeInstanceOf(Array);
    expectTypeOf(remoteFileListBuilderSample).toEqualTypeOf<FileList>();
    expectTypeOf(remoteFileListBuilderArraySample).toEqualTypeOf<File[]>();
  });
  test.concurrent('addFile() method test', async () => {
    const remoteFileListBuilderSample: FileList = (
      await new RemoteFileListBuilder().addFile({
        name: 'sample.txt',
        mimeType: 'text/plain',
        url: 'http://localhost:3000/api/success/',
      })
    ).build();
    const remoteFileListBuilderArraySample: File[] = (
      await new RemoteFileListBuilder().addFile({
        name: 'sample.txt',
        mimeType: 'text/plain',
        url: 'http://localhost:3000/api/success/',
      })
    ).buildFileArray();
    expect(remoteFileListBuilderArraySample).toBeInstanceOf(Array);
    expectTypeOf(remoteFileListBuilderSample).toEqualTypeOf<FileList>();
    expectTypeOf(remoteFileListBuilderArraySample).toEqualTypeOf<File[]>();
  });
  test.concurrent('addFiles() method test', async () => {
    const remoteFileListBuilderSample: FileList = (
      await new RemoteFileListBuilder().addFiles([
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
    const remoteFileListBuilderArraySample: File[] = (
      await new RemoteFileListBuilder().addFiles([
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
    ).buildFileArray();
    expect(remoteFileListBuilderArraySample).toBeInstanceOf(Array);
    expectTypeOf(remoteFileListBuilderSample).toEqualTypeOf<FileList>();
    expectTypeOf(remoteFileListBuilderArraySample).toEqualTypeOf<File[]>();
  });
  test.concurrent('addFileObject() method test', () => {
    let file: File = new File(['Hello, World!'], 'sample.txt', { type: 'text/plain' });
    const remoteFileListBuilderSample: FileList = new RemoteFileListBuilder().addFileObject(file).build();
    const remoteFileListBuilderArraySample: File[] = new RemoteFileListBuilder().addFileObject(file).buildFileArray();
    expect(remoteFileListBuilderArraySample).toBeInstanceOf(Array);
    expectTypeOf(remoteFileListBuilderSample).toEqualTypeOf<FileList>();
    expectTypeOf(remoteFileListBuilderArraySample).toEqualTypeOf<File[]>();
  });
  test.concurrent('addFileObjects() method test', () => {
    const files: File[] = [
      new File(['Hello, World!'], 'sample.txt', { type: 'text/plain' }),
      new File(['Hello, World!'], 'sample2.txt', { type: 'text/plain' }),
    ];
    const remoteFileListBuilderSample: FileList = new RemoteFileListBuilder().addFileObjects(files).build();
    const remoteFileListBuilderArraySample: File[] = new RemoteFileListBuilder().addFileObjects(files).buildFileArray();
    expect(remoteFileListBuilderArraySample).toBeInstanceOf(Array);
    expectTypeOf(remoteFileListBuilderSample).toEqualTypeOf<FileList>();
    expectTypeOf(remoteFileListBuilderArraySample).toEqualTypeOf<File[]>();
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
