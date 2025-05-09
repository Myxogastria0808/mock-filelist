import { describe, expect, expectTypeOf, test } from 'vitest';
import { MergeFileListBuilder } from './merge.mjs';

describe('MergeFileListBuilder test', () => {
  test.concurrent('addFileObjects() method test', () => {
    const remoteFileListBuilderSample1: FileList = new MergeFileListBuilder()
      .addFileObjects([
        new File(['Hello, World!'], 'sample.txt', { type: 'text/plain' }),
        new File(['Hello, World!'], 'sample2.txt', { type: 'text/plain' }),
      ])
      .build();
    const remoteFileListBuilderSample2: FileList = new MergeFileListBuilder()
      .addFileObjects([
        new File(['Hello, World!'], 'sample.txt', { type: 'text/plain' }),
        new File(['Hello, World!'], 'sample2.txt', { type: 'text/plain' }),
      ])
      .build();

    const mergeFileListBuilderSample: FileList = new MergeFileListBuilder()
      .addFileObjects(remoteFileListBuilderSample1)
      .addFileObjects(remoteFileListBuilderSample2)
      .build();
    const mergeFileListBuilderArraySample: File[] = new MergeFileListBuilder()
      .addFileObjects(remoteFileListBuilderSample1)
      .addFileObjects(remoteFileListBuilderSample2)
      .buildFileArray();

    expect(mergeFileListBuilderArraySample).toBeInstanceOf(Array);
    expectTypeOf(mergeFileListBuilderSample).toEqualTypeOf<FileList>();
    expectTypeOf(mergeFileListBuilderArraySample).toEqualTypeOf<File[]>();
  });
});
