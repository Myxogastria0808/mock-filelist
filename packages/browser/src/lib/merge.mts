import { MergeFileListBuilderType } from './types/builder.mts';
import { buildFileList } from './types/helper.mts';

export class MergeFileListBuilder implements MergeFileListBuilderType {
  private files: File[] = [];

  addFileObjects(files: Iterable<File>): this {
    for (const file of Array.from(files)) {
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
