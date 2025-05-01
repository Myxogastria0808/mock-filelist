import { BlobFileSource, LocalFileSource } from './types/args';
import { LocalFileBuilderType, LocalFileListBuilderType } from './types/builder';
import { buildFile, localFileSourceConverter } from './types/helper';

export class LocalFileListBuilder implements LocalFileListBuilderType {
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

  addFile(file: LocalFileSource): this {
    const object = localFileSourceConverter(file);
    this.files.push(object);
    return this;
  }

  addFiles(files: LocalFileSource[]): this {
    for (const file of files) {
      const object = localFileSourceConverter(file);
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

  build(): File[] {
    return this.files;
  }
}

export class LocalFileBuilder implements LocalFileBuilderType {
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

  addFile(file: LocalFileSource): this {
    this.file = localFileSourceConverter(file);
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
