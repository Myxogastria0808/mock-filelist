import { Hello } from '@mock-filelist/core';

export class Sample implements Hello {
  hello(): void {
    console.log('Hello from browser');
  }
}
