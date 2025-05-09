import { describe, expect, expectTypeOf, test } from 'vitest';
import { MergeFileListBuilder } from './merge';

describe('MergeFileListBuilder test', () => {
  test.concurrent('addFileObjects() method test', () => {
    const localFileArrayBuilderSample1: File[] = new MergeFileListBuilder()
      .addFileObjects([
        new File(['Hello, World!'], 'sample.txt', { type: 'text/plain' }),
        new File(['Hello, World!'], 'sample2.txt', { type: 'text/plain' }),
      ])
      .build();
    const localFileArrayBuilderSample2: File[] = new MergeFileListBuilder()
      .addFileObjects([
        new File(['Hello, World!'], 'sample.txt', { type: 'text/plain' }),
        new File(['Hello, World!'], 'sample2.txt', { type: 'text/plain' }),
      ])
      .build();

    const mergeFileArrayBuilderSample: File[] = new MergeFileListBuilder()
      .addFileObjects(localFileArrayBuilderSample1)
      .addFileObjects(localFileArrayBuilderSample2)
      .build();

    expect(mergeFileArrayBuilderSample).toBeInstanceOf(Array);
    expectTypeOf(mergeFileArrayBuilderSample).toEqualTypeOf<File[]>();
  });
});
