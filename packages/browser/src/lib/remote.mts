import { BlobFileSource, RemoteFileSource } from './types/args.mjs';
import { RemoteFileBuilderType, RemoteFileListBuilderType } from './types/builder.mjs';
import { buildFile, buildFileList, remoteFileSourceConverter } from './types/helper.mjs';

/* Remote Class */
export class RemoteFileListBuilder implements RemoteFileListBuilderType {
  private files: File[] = [];

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

  async addFile(file: RemoteFileSource): Promise<this> {
    const object = await remoteFileSourceConverter(file);
    this.files.push(object);
    return this;
  }

  async addFiles(files: RemoteFileSource[]): Promise<this> {
    for (const file of files) {
      const object = await remoteFileSourceConverter(file);
      this.files.push(object);
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

  build(): FileList {
    return buildFileList(this.files);
  }

  buildFileArray(): File[] {
    return this.files;
  }
}

export class RemoteFileBuilder implements RemoteFileBuilderType {
  private file: File | undefined;
  constructor() {
    this.file = undefined;
  }

  addBlob(blob: BlobFileSource): this {
    this.file = new File([blob.blob], blob.name, {
      type: blob.mimeType,
    });
    return this;
  }

  async addFile(file: RemoteFileSource): Promise<this> {
    this.file = await remoteFileSourceConverter(file);
    return this;
  }

  addFileObject(file: File): this {
    this.file = file;
    return this;
  }

  build(): File {
    return buildFile(this.file);
  }
}
