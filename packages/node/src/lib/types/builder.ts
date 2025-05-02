import { BlobFileSource, LocalFileSource, RemoteFileSource } from './args';

export interface LocalFileArrayBuilderType {
  addBlob(file: BlobFileSource): this;
  addBlobs(files: BlobFileSource[]): this;
  addFile(file: LocalFileSource): this;
  addFiles(files: LocalFileSource[]): this;
  addFileObject(file: File): this;
  addFileObjects(files: File[]): this;
  build(): File[];
}

export interface RemoteFileArrayBuilderType {
  addBlob(file: BlobFileSource): this;
  addBlobs(files: BlobFileSource[]): this;
  addFile(file: RemoteFileSource): Promise<this>;
  addFiles(files: RemoteFileSource[]): Promise<this>;
  addFileObject(file: File): this;
  addFileObjects(files: File[]): this;
  build(): File[];
}

export interface LocalFileBuilderType {
  addBlob(file: BlobFileSource): this;
  addFile(file: LocalFileSource): this;
  addFileObject(file: File): this;
  build(): File;
}

export interface RemoteFileBuilderType {
  addBlob(file: BlobFileSource): this;
  addFile(file: RemoteFileSource): Promise<this>;
  addFileObject(file: File): this;
  build(): File;
}

export interface MergeFileListBuilderType {
  addFileObjects(files: Iterable<File>): this;
  build(): File[];
}
