import { BlobFileSource, LocalFileSource, RemoteFileSource } from './args';

export type LocalFileArrayBuilderType = {
  addBlob(file: BlobFileSource): LocalFileArrayBuilderType;
  addBlobs(files: BlobFileSource[]): LocalFileArrayBuilderType;
  addFile(file: LocalFileSource): LocalFileArrayBuilderType;
  addFiles(files: LocalFileSource[]): LocalFileArrayBuilderType;
  addFileObject(file: File): LocalFileArrayBuilderType;
  addFileObjects(files: File[]): LocalFileArrayBuilderType;
  build(): File[];
};

export type RemoteFileArrayBuilderType = {
  addBlob(file: BlobFileSource): RemoteFileArrayBuilderType;
  addBlobs(files: BlobFileSource[]): RemoteFileArrayBuilderType;
  addFile(file: RemoteFileSource): Promise<RemoteFileArrayBuilderType>;
  addFiles(files: RemoteFileSource[]): Promise<RemoteFileArrayBuilderType>;
  addFileObject(file: File): RemoteFileArrayBuilderType;
  addFileObjects(files: File[]): RemoteFileArrayBuilderType;
  build(): File[];
};

export type LocalFileBuilderType = {
  addBlob(file: BlobFileSource): LocalFileBuilderType;
  addFile(file: LocalFileSource): LocalFileBuilderType;
  addFileObject(file: File): LocalFileBuilderType;
  build(): File;
};

export type RemoteFileBuilderType = {
  addBlob(file: BlobFileSource): RemoteFileBuilderType;
  addFile(file: RemoteFileSource): Promise<RemoteFileBuilderType>;
  addFileObject(file: File): RemoteFileBuilderType;
  build(): File;
};

export type MergeFileListBuilderType = {
  addFileObjects(files: Iterable<File>): MergeFileListBuilderType;
  build(): File[];
};
