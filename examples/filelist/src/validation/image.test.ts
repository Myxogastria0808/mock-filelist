import { describe, expect, test } from "vitest";
import { imageSchema, ImageSchemaType } from "./image";
import { LocalFileListBuilder } from "./sample";

describe("imageSchemaのバリデーション", () => {
  test.concurrent("有効な入力", async () => {
    const image: FileList = new LocalFileListBuilder()
      .addFile({
        filePath: "test_assets/sample.jpg",
        mimeType: "image/jpeg",
      })
      .build();
    const validInput: ImageSchemaType = {
      image: image,
    };
    const result = imageSchema.safeParse(validInput);
    expect(result.success).toBe(true);
  });
});
