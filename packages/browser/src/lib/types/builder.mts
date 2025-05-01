import { BlobFileSource, RemoteFileSource } from './args.mjs';

export interface RemoteFileListBuilderType {
  addBlob(file: BlobFileSource): this;
  addBlobs(files: BlobFileSource[]): this;
  addFile(file: RemoteFileSource): Promise<this>;
  addFiles(files: RemoteFileSource[]): Promise<this>;
  addFileObject(file: File): this;
  addFileObjects(files: File[]): this;
  build(): FileList;
  buildFileArray(): File[];
}

export interface RemoteFileBuilderType {
  addBlob(file: BlobFileSource): this;
  addFile(file: RemoteFileSource): Promise<this>;
  addFileObject(file: File): this;
  build(): File;
}

export interface MergeFileListBuilderType {
  addFileObjects(files: Iterable<File>): this;
  build(): FileList;
  buildFileArray(): File[];
}
