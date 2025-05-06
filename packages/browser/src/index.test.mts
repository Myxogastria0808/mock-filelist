import { describe, expect, expectTypeOf, test } from 'vitest';
import {
  RemoteFileBuilder,
  RemoteFileListBuilder,
  MergeFileListBuilder,
  FileSourceBase,
  BlobFileSource,
  RemoteFileSource,
} from './index.mjs';

describe('export test', () => {
  test.concurrent('RemoteFileBuilder export test', () => {
    const remoteFileBuilderSample = new RemoteFileBuilder();
    expect(remoteFileBuilderSample).toBeDefined();
  });
  test.concurrent('RemoteFileListBuilder export test', () => {
    const remoteFileListBuilderSample = new RemoteFileListBuilder();
    expect(remoteFileListBuilderSample).toBeDefined();
  });
  test.concurrent('MergeFileListBuilder export test', () => {
    const mergeFileListBuilderSample = new MergeFileListBuilder();
    expect(mergeFileListBuilderSample).toBeDefined();
  });
  test.concurrent('FileSourceBase export test', () => {
    const fileSourceBaseSample: FileSourceBase = {
      mimeType: 'text/plain',
      name: 'sample.txt',
    };
    expectTypeOf(fileSourceBaseSample).toEqualTypeOf<FileSourceBase>();
  });
  test.concurrent('BlobFileSource export test', () => {
    const blobFileSourceSample: BlobFileSource = {
      mimeType: 'text/plain',
      name: 'sample.txt',
      blob: new Blob(['Hello, World!'], { type: 'text/plain' }),
    };
    expectTypeOf(blobFileSourceSample).toEqualTypeOf<BlobFileSource>();
  });
  test.concurrent('RemoteFileSource export test', () => {
    const RemoteFileSourceSample: RemoteFileSource = {
      mimeType: 'text/plain',
      name: 'sample.txt',
      url: 'https://example.com/sample.txt',
    };
    expectTypeOf(RemoteFileSourceSample).toEqualTypeOf<RemoteFileSource>();
  });
});
