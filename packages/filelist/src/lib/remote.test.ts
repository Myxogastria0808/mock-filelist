import { describe, expect, expectTypeOf, test } from 'vitest';
import { RemoteFileListBuilder, RemoteFileBuilder } from './remote';

describe('RemoteFileListBuilder test', () => {
  test.concurrent('addBlob() method test', async () => {
    const builder = new RemoteFileListBuilder();
    const remoteFileListBuilderSample = await builder
      .addBlob({
        name: 'sample.txt',
        mimeType: 'text/plain',
        blob: new Blob(['Hello, World!']),
      })
      .build();
    const builder2 = new RemoteFileListBuilder();
    const remoteFileListBuilderArraySample: File[] = await builder2
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
  test.concurrent('addBlobs() method test', async () => {
    const builder = new RemoteFileListBuilder();
    const remoteFileListBuilderSample: FileList = await builder
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
    const builder2 = new RemoteFileListBuilder();
    const remoteFileListBuilderArraySample: File[] = await builder2
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
    const builder = new RemoteFileListBuilder();
    const remoteFileListBuilderSample: FileList = await builder
      .addFile({
        name: 'sample.txt',
        mimeType: 'text/plain',
        url: 'http://localhost:3000/api/success/',
      })
      .build();
    const builder2 = new RemoteFileListBuilder();
    const remoteFileListBuilderArraySample: File[] = await builder2
      .addFile({
        name: 'sample.txt',
        mimeType: 'text/plain',
        url: 'http://localhost:3000/api/success/',
      })
      .buildFileArray();
    expect(remoteFileListBuilderArraySample).toBeInstanceOf(Array);
    expectTypeOf(remoteFileListBuilderSample).toEqualTypeOf<FileList>();
    expectTypeOf(remoteFileListBuilderArraySample).toEqualTypeOf<File[]>();
  });
  test.concurrent('addFiles() method test', async () => {
    const builder = new RemoteFileListBuilder();
    const remoteFileListBuilderSample: FileList = await builder
      .addFiles([
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
      .build();
    const builder2 = new RemoteFileListBuilder();
    const remoteFileListBuilderArraySample: File[] = await builder2
      .addFiles([
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
      .buildFileArray();
    expect(remoteFileListBuilderArraySample).toBeInstanceOf(Array);
    expectTypeOf(remoteFileListBuilderSample).toEqualTypeOf<FileList>();
    expectTypeOf(remoteFileListBuilderArraySample).toEqualTypeOf<File[]>();
  });
  test.concurrent('addFileObject() method test', async () => {
    let file: File = new File(['Hello, World!'], 'sample.txt', { type: 'text/plain' });
    const builder = new RemoteFileListBuilder();
    const remoteFileListBuilderSample: FileList = await builder.addFileObject(file).build();
    const builder2 = new RemoteFileListBuilder();
    const remoteFileListBuilderArraySample: File[] = await builder2.addFileObject(file).buildFileArray();
    expect(remoteFileListBuilderArraySample).toBeInstanceOf(Array);
    expectTypeOf(remoteFileListBuilderSample).toEqualTypeOf<FileList>();
    expectTypeOf(remoteFileListBuilderArraySample).toEqualTypeOf<File[]>();
  });
  test.concurrent('addFileObjects() method test', async () => {
    const files: File[] = [
      new File(['Hello, World!'], 'sample.txt', { type: 'text/plain' }),
      new File(['Hello, World!'], 'sample2.txt', { type: 'text/plain' }),
    ];
    const builder = new RemoteFileListBuilder();
    const remoteFileListBuilderSample: FileList = await builder.addFileObjects(files).build();
    const builder2 = new RemoteFileListBuilder();
    const remoteFileListBuilderArraySample: File[] = await builder2.addFileObjects(files).buildFileArray();
    expect(remoteFileListBuilderArraySample).toBeInstanceOf(Array);
    expectTypeOf(remoteFileListBuilderSample).toEqualTypeOf<FileList>();
    expectTypeOf(remoteFileListBuilderArraySample).toEqualTypeOf<File[]>();
  });
});

describe('RemoteFileBuilder test', () => {
  test.concurrent('addBlob() method test', async () => {
    const builder = new RemoteFileBuilder();
    const remoteFileBuilderSample: File = await builder
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
    const builder = new RemoteFileBuilder();
    const remoteFileBuilderSample: File = await builder
      .addFile({
        name: 'sample.txt',
        mimeType: 'text/plain',
        url: 'http://localhost:3000/api/success/',
      })
      .build();
    expect(remoteFileBuilderSample).toBeInstanceOf(File);
    expectTypeOf(remoteFileBuilderSample).toEqualTypeOf<File>();
  });
  test.concurrent('addFileObject() method test', async () => {
    const builder = new RemoteFileBuilder();
    const file: File = new File(['Hello, World!'], 'sample.txt', { type: 'text/plain' });
    const localFileBuilderSample: File = await builder.addFileObject(file).build();
    expect(localFileBuilderSample).toBeInstanceOf(File);
    expectTypeOf(localFileBuilderSample).toEqualTypeOf<File>();
  });
});
