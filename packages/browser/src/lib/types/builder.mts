import { BlobFileSource, RemoteFileSource } from './args.mts';

export type RemoteFileListBuilderType = {
  addBlob(file: BlobFileSource): RemoteFileListBuilderType;
  addBlobs(files: BlobFileSource[]): RemoteFileListBuilderType;
  addFile(file: RemoteFileSource): RemoteFileListBuilderType;
  addFiles(files: RemoteFileSource[]): RemoteFileListBuilderType;
  addFileObject(file: File): RemoteFileListBuilderType;
  addFileObjects(files: File[]): RemoteFileListBuilderType;
  build(): Promise<FileList>;
  buildFileArray(): Promise<File[]>;
};

export type RemoteFileBuilderType = {
  addBlob(file: BlobFileSource): RemoteFileBuilderType;
  addFile(file: RemoteFileSource): RemoteFileBuilderType;
  addFileObject(file: File): RemoteFileBuilderType;
  build(): Promise<File>;
};

export type MergeFileListBuilderType = {
  addFileObjects(files: Iterable<File>): MergeFileListBuilderType;
  build(): FileList;
  buildFileArray(): File[];
};
