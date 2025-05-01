import { readFileSync } from 'fs';
import { LocalFileSource } from './args';

/* Build Helper Function */
export const buildFile = (file: File | undefined): File => {
  if (typeof file === 'undefined') {
    throw new Error('File is not defined');
  }
  return file;
};

/* Local Class Helper Function */
export const localFileSourceConverter = (file: LocalFileSource): File => {
  const buffer = readFileSync(file.filePath);
  const blob = new Blob([buffer], { type: file.mimeType });
  return new File([blob], file.name, {
    type: file.mimeType,
  });
};
