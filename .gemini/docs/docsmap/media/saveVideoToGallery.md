---
sourceType: api-reference
slug: MA/api/media/file/saveVideoToGallery
title: saveVideoToGallery
source: https://docs.zaloplatforms.com/docs/MA/api/media/file/saveVideoToGallery
---
```ts
import { saveVideoToGallery } from "zmp-sdk";
```

API lưu video vào thư viện media của thiết bị (giới hạn iOS 100MB).

## Ví dụ

```ts
await saveVideoToGallery({
  videoUrl: "https://example.com/sample.mp4",
});
```

## Tham số

| Property | Type | Description |
|---|---|---|
| videoUrl | `string` | URL video cần lưu. |
| videoBase64Data | `string` | Dữ liệu base64 video. |
| onProgress | `function` | Callback tiến độ (0-100%). |
