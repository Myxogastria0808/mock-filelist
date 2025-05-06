import { describe, expect, expectTypeOf, test } from 'vitest';
import {
  LocalFileBuilder,
  LocalFileListBuilder,
  RemoteFileBuilder,
  RemoteFileListBuilder,
  MergeFileListBuilder,
  FileSourceBase,
  BlobFileSource,
  LocalFileSource,
  RemoteFileSource,
} from './index';

describe('export test', () => {
  test.concurrent('LocalFileBuilder export test', () => {
    const localFileBuilderSample: LocalFileBuilder = new LocalFileBuilder();
    expect(localFileBuilderSample).toBeInstanceOf(LocalFileBuilder);
  });
  test.concurrent('LocalFileListBuilder export test', () => {
    const localFileListBuilderSample: LocalFileListBuilder = new LocalFileListBuilder();
    expect(localFileListBuilderSample).toBeDefined();
  });
  test.concurrent('RemoteFileBuilder export test', () => {
    const remoteFileBuilderSample: RemoteFileBuilder = new RemoteFileBuilder();
    expect(remoteFileBuilderSample).toBeInstanceOf(RemoteFileBuilder);
  });
  test.concurrent('RemoteFileListBuilder export test', () => {
    const remoteFileListBuilderSample: RemoteFileListBuilder = new RemoteFileListBuilder();
    expect(remoteFileListBuilderSample).toBeInstanceOf(RemoteFileListBuilder);
  });
  test.concurrent('MergeFileListBuilder export test', () => {
    const mergeFileListBuilderSample: MergeFileListBuilder = new MergeFileListBuilder();
    expect(mergeFileListBuilderSample).toBeInstanceOf(MergeFileListBuilder);
  });
  test.concurrent('FileSourceBase export test', () => {
    const fileSourceBaseSample: FileSourceBase = {
      name: 'sample.txt',
      mimeType: 'text/plain',
    };
    expectTypeOf(fileSourceBaseSample).toEqualTypeOf<FileSourceBase>();
  });
  test.concurrent('BlobFileSource export test', () => {
    const blobFileSourceSample: BlobFileSource = {
      name: 'sample.txt',
      mimeType: 'text/plain',
      blob: new Blob(['Hello, World!'], { type: 'text/plain' }),
    };
    expectTypeOf(blobFileSourceSample).toEqualTypeOf<BlobFileSource>();
  });
  test.concurrent('LocalFileSource export test', () => {
    const localFileSourceSample: LocalFileSource = {
      name: 'sample.txt',
      mimeType: 'text/plain',
      filePath: 'test_assets/sample.txt',
    };
    expectTypeOf(localFileSourceSample).toEqualTypeOf<LocalFileSource>();
  });
  test.concurrent('RemoteFileSource export test', () => {
    const RemoteFileSourceSample: RemoteFileSource = {
      name: 'sample.png',
      mimeType: 'image/png',
      url: 'https://pub-5d8c638a3a5f4474b17d2a501dae7b3b.r2.dev/sample.png',
    };
    expectTypeOf(RemoteFileSourceSample).toEqualTypeOf<RemoteFileSource>();
  });
});
