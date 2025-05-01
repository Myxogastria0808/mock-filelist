import fs from "fs";
import path from "path";

type FileSourceBase = {
  mimeType: string;
  name?: string;
};

export type BlobFileSource = {
  mimeType: string;
  name: string;
  blob: Blob;
};

export type LocalFileSource = FileSourceBase & {
  filePath: string;
};

export type RemoteFileSource = FileSourceBase & {
  url: string;
};

type FileSource = LocalFileSource | RemoteFileSource;

interface MockFileListBuilder {
  addBlob(file: BlobFileSource): this;
  addBlobs(files: BlobFileSource[]): this;
  addFile(file: FileSource): this | Promise<this>;
  addFiles(files: FileSource[]): this | Promise<this>;
  addFileObject(file: File): this;
  addFileObjects(files: File[]): this;
  build(): FileList | Promise<FileList>;
}

interface MockFileBuilder {
  addBlob(file: BlobFileSource): this;
  addBlobs(files: BlobFileSource[]): this;
  addFile(file: FileSource): this | Promise<this>;
  addFileObject(file: File): this;
  build(): File | Promise<File>;
}

interface MockFileListBuilderType {
  addFileObjects(files: Iterable<File>): this;
  build(): Promise<FileList>;
}

/* build Method Helper Function */
const buildFileList = (files: File[]): FileList => {
  const dataTransfer = new DataTransfer();
  for (const file of files) {
    dataTransfer.items.add(file);
  }
  return dataTransfer.files;
};

const buildFile = (file: File | undefined): File => {
  if (typeof file === "undefined") {
    throw new Error("File is not defined");
  }
  return file;
};

/* Local Class Helper Function */
const localFileSourceConverter = (file: LocalFileSource): File => {
  const buffer = fs.readFileSync(file.filePath);
  const blob = new Blob([buffer], { type: file.mimeType });
  return new File(
    [blob],
    typeof file.name === "string" ? file.name : path.basename(file.filePath),
    {
      type: file.mimeType,
    }
  );
};

/* Remote Class Helper Function */
const remoteFileSourceConverter = async (
  source: RemoteFileSource
): Promise<File> => {
  if (
    typeof source.name === "undefined" &&
    path.basename(new URL(source.url).pathname) === ""
  ) {
    throw new Error("File name is not defined");
  }
  const object = await fetch(source.url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Failed to fetch ${source.url}: ${response.status} ${response.statusText}`
        );
      }
      return response.blob();
    })
    .then((blob) => {
      return new File(
        [blob],
        source.name ?? path.basename(new URL(source.url).pathname),
        { type: source.mimeType }
      );
    })
    .catch((error) => {
      throw new Error(`Error converting remote file: ${error.message}`);
    });
  return object;
};

/* Local Class */
export class LocalFileListBuilder implements MockFileListBuilder {
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

  build(): FileList {
    return buildFileList(this.files);
  }
}

export class LocalFileBuilder implements MockFileBuilder {
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

  addBlobs(blobs: BlobFileSource[]): this {
    for (const blob of blobs) {
      this.file = new File([blob.blob], blob.name, {
        type: blob.mimeType,
      });
    }
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

/* Remote Class */
export class RemoteFileListBuilder implements MockFileListBuilder {
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

  async build(): Promise<FileList> {
    return buildFileList(this.files);
  }
}

export class RemoteFileBuilder implements MockFileBuilder {
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

  addBlobs(blobs: BlobFileSource[]): this {
    for (const blob of blobs) {
      this.file = new File([blob.blob], blob.name, {
        type: blob.mimeType,
      });
    }
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

  async build(): Promise<File> {
    return buildFile(this.file);
  }
}

export class MergeFileListBuilder implements MockFileListBuilderType {
  private files: File[] = [];

  addFileObjects(files: Iterable<File>): this {
    for (const file of files) {
      this.files.push(file);
    }
    return this;
  }

  async build(): Promise<FileList> {
    return buildFileList(this.files);
  }
}
