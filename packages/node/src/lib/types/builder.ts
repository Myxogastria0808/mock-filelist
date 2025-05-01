import { BlobFileSource, LocalFileSource } from './args';

export interface LocalFileListBuilderType {
  addBlob(file: BlobFileSource): this;
  addBlobs(files: BlobFileSource[]): this;
  addFile(file: LocalFileSource): this;
  addFiles(files: LocalFileSource[]): this;
  addFileObject(file: File): this;
  addFileObjects(files: File[]): this;
  build(): File[];
}

export interface LocalFileBuilderType {
  addBlob(file: BlobFileSource): this;
  addBlobs(files: BlobFileSource[]): this;
  addFile(file: LocalFileSource): this;
  addFileObject(file: File): this;
  build(): File;
}

export interface MergeFileListBuilderType {
  addFileObjects(files: Iterable<File>): this;
  build(): File[];
}
