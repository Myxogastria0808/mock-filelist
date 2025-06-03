import { RemoteFileSource } from './args.mts';

/* Build Helper Function */
export const buildFile = (file: File | undefined): File => {
  if (typeof file === 'undefined') {
    throw new Error('File is not defined.');
  }
  return file;
};

export const buildFileList = (files: File[]): FileList => {
  const dataTransfer = new DataTransfer();
  for (const file of files) {
    dataTransfer.items.add(file);
  }
  return dataTransfer.files;
};

/* Remote Class Helper Function */
export const remoteFileSourceConverter = async (source: RemoteFileSource): Promise<File> => {
  const object = await fetch(source.url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Failed to fetch url: ${source.url}, status: ${response.status}, statusText: ${response.statusText}.`
        );
      }
      return response.blob();
    })
    .then((blob) => {
      return new File([blob], source.name, { type: source.mimeType });
    });
  return object;
};
