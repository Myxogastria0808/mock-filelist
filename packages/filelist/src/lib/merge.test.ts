import { describe, expect, expectTypeOf, test } from 'vitest';
import { MergeFileListBuilder } from './merge';

describe('MergeFileListBuilder test', () => {
  test.concurrent('addFileObjects() method test', () => {
    const localFileListBuilderSample: FileList = new MergeFileListBuilder()
      .addFileObjects([
        new File(['Hello, World!'], 'sample.txt', { type: 'text/plain' }),
        new File(['Hello, World!'], 'sample2.txt', { type: 'text/plain' }),
      ])
      .build();
    const remoteFileListBuilderSample: FileList = new MergeFileListBuilder()
      .addFileObjects([
        new File(['Hello, World!'], 'sample.txt', { type: 'text/plain' }),
        new File(['Hello, World!'], 'sample2.txt', { type: 'text/plain' }),
      ])
      .build();

    const mergeFileListBuilderSample: FileList = new MergeFileListBuilder()
      .addFileObjects(localFileListBuilderSample)
      .addFileObjects(remoteFileListBuilderSample)
      .build();
    const mergeFileListBuilderArraySample: File[] = new MergeFileListBuilder()
      .addFileObjects(localFileListBuilderSample)
      .addFileObjects(remoteFileListBuilderSample)
      .buildFileArray();

    expect(mergeFileListBuilderArraySample).toBeInstanceOf(Array);
    expectTypeOf(mergeFileListBuilderSample).toEqualTypeOf<FileList>();
    expectTypeOf(mergeFileListBuilderArraySample).toEqualTypeOf<File[]>();
  });
});
