import { MergeFileListBuilderType } from './types/builder';
import { buildFileList } from './types/helper';

export class MergeFileListBuilder implements MergeFileListBuilderType {
  private files: File[] = [];

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
