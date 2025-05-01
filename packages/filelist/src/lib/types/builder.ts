import { BlobFileSource, LocalFileSource, RemoteFileSource } from './args';

export interface LocalFileListBuilderType {
  addBlob(file: BlobFileSource): this;
  addBlobs(files: BlobFileSource[]): this;
  addFile(file: LocalFileSource): this;
  addFiles(files: LocalFileSource[]): this;
  addFileObject(file: File): this;
  addFileObjects(files: File[]): this;
  build(): FileList;
}

export interface RemoteFileListBuilderType {
  addBlob(file: BlobFileSource): this;
  addBlobs(files: BlobFileSource[]): this;
  addFile(file: RemoteFileSource): Promise<this>;
  addFiles(files: RemoteFileSource[]): Promise<this>;
  addFileObject(file: File): this;
  addFileObjects(files: File[]): this;
  build(): Promise<FileList>;
}

export interface LocalFileBuilderType {
  addBlob(file: BlobFileSource): this;
  addBlobs(files: BlobFileSource[]): this;
  addFile(file: LocalFileSource): this;
  addFileObject(file: File): this;
  build(): File;
}

export interface RemoteFileBuilderType {
  addBlob(file: BlobFileSource): this;
  addBlobs(files: BlobFileSource[]): this;
  addFile(file: RemoteFileSource): Promise<this>;
  addFileObject(file: File): this;
  build(): Promise<File>;
}

export interface MergeFileListBuilderType {
  addFileObjects(files: Iterable<File>): this;
  build(): Promise<FileList>;
}
