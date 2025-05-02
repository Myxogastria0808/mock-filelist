export type FileSourceBase = {
  mimeType: string;
  name: string;
};

export type BlobFileSource = FileSourceBase & {
  blob: Blob;
};

export type LocalFileSource = FileSourceBase & {
  filePath: string;
};

export type RemoteFileSource = FileSourceBase & {
  url: string;
};
