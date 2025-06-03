import { BlobFileSource, LocalFileSource, RemoteFileSource } from './args';

export type LocalFileListBuilderType = {
  addBlob(file: BlobFileSource): LocalFileListBuilderType;
  addBlobs(files: BlobFileSource[]): LocalFileListBuilderType;
  addFile(file: LocalFileSource): LocalFileListBuilderType;
  addFiles(files: LocalFileSource[]): LocalFileListBuilderType;
  addFileObject(file: File): LocalFileListBuilderType;
  addFileObjects(files: File[]): LocalFileListBuilderType;
  build(): FileList;
  buildFileArray(): File[];
};

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

export type LocalFileBuilderType = {
  addBlob(file: BlobFileSource): LocalFileBuilderType;
  addFile(file: LocalFileSource): LocalFileBuilderType;
  addFileObject(file: File): LocalFileBuilderType;
  build(): File;
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
