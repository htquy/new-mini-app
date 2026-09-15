---
sourceType: api-reference
slug: MA/api/media/file/chooseImage
title: chooseImage
source: https://docs.zaloplatforms.com/docs/MA/api/media/file/chooseImage
---
```ts
import { chooseImage } from "zmp-sdk";
```

API chọn hình ảnh từ album hoặc camera.

## Ví dụ

```ts
const { filePaths } = await chooseImage({
  sourceType: ["album", "camera"],
  count: 5,
});
```

## Tham số

| Property | Type | Description |
|---|---|---|
| sourceType | `("album" \| "camera")[]` | Nguồn chọn hình ảnh. |
| cameraType | `"back" \| "front"` | Hướng camera (trước/sau). |
| count | `number` | Số lượng hình ảnh tối đa. |
