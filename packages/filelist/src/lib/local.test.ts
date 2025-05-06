import { describe, expect, expectTypeOf, test } from 'vitest';
import { LocalFileBuilder, LocalFileListBuilder } from './local';

describe('LocalFileListBuilder test', () => {
  test.concurrent('addBlob() method test', () => {
    const localFileListBuilderSample: FileList = new LocalFileListBuilder()
      .addBlob({
        name: 'sample.txt',
        mimeType: 'text/plain',
        blob: new Blob(['Hello, World!']),
      })
      .build();
    const localFileListBuilderArraySample: File[] = new LocalFileListBuilder()
      .addBlob({
        name: 'sample.txt',
        mimeType: 'text/plain',
        blob: new Blob(['Hello, World!']),
      })
      .buildFileArray();
    expect(localFileListBuilderArraySample).toBeInstanceOf(Array);
    expectTypeOf(localFileListBuilderSample).toEqualTypeOf<FileList>();
    expectTypeOf(localFileListBuilderArraySample).toEqualTypeOf<File[]>();
  });
  test.concurrent('addBlobs() method test', () => {
    const localFileListBuilderSample: FileList = new LocalFileListBuilder()
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
    const localFileListBuilderArraySample: File[] = new LocalFileListBuilder()
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
    expect(localFileListBuilderArraySample).toBeInstanceOf(Array);
    expectTypeOf(localFileListBuilderSample).toEqualTypeOf<FileList>();
    expectTypeOf(localFileListBuilderArraySample).toEqualTypeOf<File[]>();
  });
  test.concurrent('addFile() method test', () => {
    const localFileListBuilderSample: FileList = new LocalFileListBuilder()
      .addFile({
        name: 'sample.txt',
        mimeType: 'text/plain',
        filePath: 'test_assets/sample.txt',
      })
      .build();
    const localFileListBuilderArraySample: File[] = new LocalFileListBuilder()
      .addFile({
        name: 'sample.txt',
        mimeType: 'text/plain',
        filePath: 'test_assets/sample.txt',
      })
      .buildFileArray();
    expect(localFileListBuilderArraySample).toBeInstanceOf(Array);
    expectTypeOf(localFileListBuilderSample).toEqualTypeOf<FileList>();
    expectTypeOf(localFileListBuilderArraySample).toEqualTypeOf<File[]>();
  });
  test.concurrent('addFiles() method test', () => {
    const localFileListBuilderSample: FileList = new LocalFileListBuilder()
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
    const localFileListBuilderArraySample: File[] = new LocalFileListBuilder()
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
      .buildFileArray();
    expect(localFileListBuilderArraySample).toBeInstanceOf(Array);
    expectTypeOf(localFileListBuilderSample).toEqualTypeOf<FileList>();
    expectTypeOf(localFileListBuilderArraySample).toEqualTypeOf<File[]>();
  });
  test.concurrent('addFileObject() method test', () => {
    let file: File = new File(['Hello, World!'], 'sample.txt', { type: 'text/plain' });
    const localFileListBuilderSample: FileList = new LocalFileListBuilder().addFileObject(file).build();
    const localFileListBuilderArraySample: File[] = new LocalFileListBuilder().addFileObject(file).buildFileArray();
    expect(localFileListBuilderArraySample).toBeInstanceOf(Array);
    expectTypeOf(localFileListBuilderSample).toEqualTypeOf<FileList>();
    expectTypeOf(localFileListBuilderArraySample).toEqualTypeOf<File[]>();
  });
  test.concurrent('addFileObjects() method test', () => {
    const files: File[] = [
      new File(['Hello, World!'], 'sample.txt', { type: 'text/plain' }),
      new File(['Hello, World!'], 'sample2.txt', { type: 'text/plain' }),
    ];
    const localFileListBuilderSample: FileList = new LocalFileListBuilder().addFileObjects(files).build();
    const localFileListBuilderArraySample: File[] = new LocalFileListBuilder().addFileObjects(files).buildFileArray();
    expect(localFileListBuilderArraySample).toBeInstanceOf(Array);
    expectTypeOf(localFileListBuilderSample).toEqualTypeOf<FileList>();
    expectTypeOf(localFileListBuilderArraySample).toEqualTypeOf<File[]>();
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
