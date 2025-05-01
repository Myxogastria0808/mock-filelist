type FileSourceBase = {
  mimeType: string;
  name: string;
};

export type BlobFileSource = FileSourceBase & {
  blob: Blob;
};

export type RemoteFileSource = FileSourceBase & {
  url: string;
};
