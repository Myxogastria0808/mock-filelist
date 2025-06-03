import { BlobFileSource, RemoteFileSource } from './types/args';
import { RemoteFileBuilderType, RemoteFileListBuilderType } from './types/builder';
import { buildFile, buildFileList, remoteFileSourceConverter } from './types/helper';

/* Remote Class */
export class RemoteFileListBuilder implements RemoteFileListBuilderType {
  private files: (Promise<File> | File)[] = [];

  addBlob(blob: BlobFileSource): this {
    const object = new File([blob.blob], blob.name, {
      type: blob.mimeType,
    });
    this.files.push(object);
    return this;
  }

  addBlobs(blobs: BlobFileSource[]): this {
    for (const blob of blobs) {
      const object = new File([blob.blob], blob.name, {
        type: blob.mimeType,
      });
      this.files.push(object);
    }
    return this;
  }

  addFile(file: RemoteFileSource): this {
    this.files.push(remoteFileSourceConverter(file));
    return this;
  }

  addFiles(files: RemoteFileSource[]): this {
    for (const file of files) {
      this.files.push(remoteFileSourceConverter(file));
    }
    return this;
  }

  addFileObject(file: File): this {
    this.files.push(file);
    return this;
  }

  addFileObjects(files: Iterable<File>): this {
    for (const file of files) {
      this.files.push(file);
    }
    return this;
  }

  async build(): Promise<FileList> {
    return buildFileList(await Promise.all(this.files));
  }

  async buildFileArray(): Promise<File[]> {
    return await Promise.all(this.files);
  }
}

export class RemoteFileBuilder implements RemoteFileBuilderType {
  private file: Promise<File> | File | undefined;
  constructor() {
    this.file = undefined;
  }

  addBlob(blob: BlobFileSource): this {
    this.file = new File([blob.blob], blob.name, {
      type: blob.mimeType,
    });
    return this;
  }

  addFile(file: RemoteFileSource): this {
    this.file = remoteFileSourceConverter(file);
    return this;
  }

  addFileObject(file: File): this {
    this.file = file;
    return this;
  }

  async build(): Promise<File> {
    return buildFile(await this.file);
  }
}
