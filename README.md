# mock-filelist

[![Test](https://github.com/Myxogastria0808/mock-filelist/actions/workflows/test.yaml/badge.svg)](https://github.com/Myxogastria0808/mock-filelist/actions/workflows/test.yaml)
[![Docs](https://github.com/Myxogastria0808/mock-filelist/actions/workflows/docs.yaml/badge.svg)](https://github.com/Myxogastria0808/mock-filelist/actions/workflows/docs.yaml)
![GitHub Release](https://img.shields.io/github/v/release/Myxogastria0808/mock-filelist)
![GitHub License](https://img.shields.io/github/license/Myxogastria0808/mock-filelist)
![Vitest](https://img.shields.io/badge/-vitest-6e9f18?style=flat&logo=vitest&logoColor=ffffff)
![Typedoc](https://img.shields.io/badge/docs-typedoc-blue?style=flat-square&logo=typescript&logoColor=white)
[![RenovateBot](https://img.shields.io/badge/RenovateBot-1A1F6C?logo=renovate&logoColor=fff)](#)

`mock-filelist` is a mock (File | FileList | File[]) generator.

When you want to test against a `zod` schema (zod: validation library) with `vitest` (vitest: testing library), `mock-filelist` enables you to use a mock object which is treated as File, FileList, or File[].

## Simple Example

When you use `@mock-filelist/filelist` or `@mock-filelist/browser`, you have to add the settings to `vite.config.ts` at first.

### `vite.config.ts`

```typescript
/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // ↓ Add below settings
  test: {
    environment: 'happy-dom',
  },
});

```

If you create zod schema like this, you can use `@mock-filelist/filelist` or `@mock-filelist/browser` like [under the example](https://github.com/Myxogastria0808/mock-filelist?tab=readme-ov-file#mock-filelistfilelist-example)!

### `image.ts`

```typescript
import { z } from 'zod';

//Acceptable MIME types
const ACCEPT_MIME_TYPES = ['image/png', 'image/jpeg', 'image/webp'];
//Allowable file size
const MAX_SIZE = 1024 * 1024 * 100; //100MB

const imageSchema = z.object({
  image: z
    .custom<FileList>()
    .refine((files) => 0 < files.length, {
      message: 'Attachment of image files is required.',
    })
    .refine((files) => 0 < files.length && files.length < 2, {
      message: 'Only one image file can be attached.',
    })
    .refine((files) => Array.from(files).every((file) => file.size < MAX_SIZE), {
      message: 'Image files can be attached up to 100MB.',
    })
    .refine((files) => Array.from(files).every((file) => ACCEPT_MIME_TYPES.includes(file.type)), {
      message: 'You can attach jpeg, jpg, png, and webp image files.',
    }),
});

export { imageSchema };
export type ImageSchemaType = z.infer<typeof imageSchema>;
```

### @mock-filelist/filelist Example

You can use `@mock-filelist/filelist` or `@mock-filelist/browser` package like this!

This simple example depends on `vitest` and `happy-dom` (happy-dom: a javascript implementation of a web browser).

If you want to see the complete sourcecode of example project, look [this](https://github.com/Myxogastria0808/mock-filelist/tree/main/examples/filelist/).

### `image.test.ts`

```typescript
import { describe, expect, test } from 'vitest';
import { imageSchema, ImageSchemaType } from './image'; //<- this sourcecode is above example
import { LocalFileListBuilder } from '@mock-filelist/filelist';

describe('Validation Test of imageSchema', () => {
  test.concurrent('Vaild Value', async () => {
    // ↓ Using @mock-filelist/filelist, you can create a mock FileList type object!
    let filelist: FileList = new LocalFileListBuilder()
      .addFile({ filePath: 'test_assets/sample.png', name: 'sample.png', mimeType: 'image/png' })
      .build();
    const validInput: ImageSchemaType = {
      image: filelist,
    };
    const result = imageSchema.safeParse(validInput);
    expect(result.success).toBe(true);
  });
});
```

## About This Repository

This repository has three npm packages named [@mock-filelist/filelist](https://www.npmjs.com/package/@mock-filelist/filelist/), [@mock-fielist/browser](https://www.npmjs.com/package/@mock-filelist/browser/) and [@mock-filelist/node](https://www.npmjs.com/package/@mock-filelist/node/).

<table>
    <tbody>
        <tr>
            <th rowspan="2"></th>
            <th rowspan="2">Required Environment</th>
            <th colspan="3">Generatable Objects</th>
            <th colspan="2">Available Files</th>
        </tr>
        <tr>
            <th>File</th>
            <th>FileList</th>
            <th>File[]</th>
            <th>Local Files</th>
            <th>Files on the Internet</th>
        </tr>
        <tr>
            <td><a href="https://www.npmjs.com/package/@mock-filelist/filelist/">@mock-filelist/filelist</a></td>
            <td>Node + happy-dom</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
        </tr>
        <tr>
            <td><a href="https://www.npmjs.com/package/@mock-filelist/browser/">@mock-filelist/browser</a></td>
            <td>Browser<br/>or</br/>Node + happy-dom</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>❌</td>
            <td>✅</td>
        </tr>
        <tr>
            <td><a href="https://www.npmjs.com/package/@mock-filelist/node/">@mock-filelist/node</a></td>
            <td>Node</td>
            <td>✅</td>
            <td>❌</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
        </tr>
    </tbody>
</table>

> [!WARNING]
> If you use `jsdom` instead of `happy-dom`, you **cannot** use `@mock-filelist/filelist` and `@mock-filelist/browser`.


## Documentation

https://myxogastria0808.github.io/mock-filelist/

> [!IMPORTANT]
> Be sure to use the latest version.

## @mock-filelist/filelist

https://www.npmjs.com/package/@mock-filelist/filelist/

### Documentstion

https://myxogastria0808.github.io/mock-filelist/filelist/

### README.md

https://github.com/Myxogastria0808/mock-filelist/blob/main/packages/filelist/README.md

### Example (React + Vitest + **happy-dom**)

https://github.com/Myxogastria0808/mock-filelist/blob/main/examples/filelist/

## @mock-filelist/browser

https://www.npmjs.com/package/@mock-filelist/browser/

### Documentation

https://myxogastria0808.github.io/mock-filelist/browser/

### README.md

https://github.com/Myxogastria0808/mock-filelist/blob/main/packages/browser/README.md

### Example (React + Vitest + **happy-dom**)

https://github.com/Myxogastria0808/mock-filelist/blob/main/examples/browser/

## @mock-filelist/node

https://www.npmjs.com/package/@mock-filelist/node/

### Documentation

https://myxogastria0808.github.io/mock-filelist/node/

### README.md

https://github.com/Myxogastria0808/mock-filelist/blob/main/packages/node/README.md

### Example (Mock Service Worker + Vitest)

https://github.com/Myxogastria0808/mock-filelist/blob/main/examples/node/

---

## DeepWiki

> [!WARNING]
> The accuracy of the contents of generated deepwiki has not been verified by me.
> 
> I recommend that you look at a [documentation](https://myxogastria0808.github.io/mock-filelist/).

https://deepwiki.com/Myxogastria0808/mock-filelist/