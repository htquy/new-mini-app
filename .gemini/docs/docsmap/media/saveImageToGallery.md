---
sourceType: api-reference
slug: MA/api/media/file/saveImageToGallery
title: saveImageToGallery
source: https://docs.zaloplatforms.com/docs/MA/api/media/file/saveImageToGallery
---
```ts
import { saveImageToGallery } from "zmp-sdk";
```

API lưu ảnh vào thư viện media của thiết bị.

## Ví dụ

```ts
await saveImageToGallery({
  imageUrl: "https://example.com/sample.jpg",
  onProgress: (progress) => {
    console.log(`Đã lưu ${progress}%`);
  },
});
```

## Tham số

| Property | Type | Description |
|---|---|---|
| imageUrl | `string` | URL của ảnh cần lưu. |
| imageBase64Data | `string` | Dữ liệu base64 của ảnh. |
| onProgress | `function` | Callback tiến độ tải (0-100%). |
