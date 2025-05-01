import { MergeFileListBuilderType } from './types/builder';

export class MergeFileListBuilder implements MergeFileListBuilderType {
  private files: File[] = [];

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
