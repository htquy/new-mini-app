---
sourceType: api-reference
slug: MA/api/media/file/downloadFile
title: downloadFile
source: https://docs.zaloplatforms.com/docs/MA/api/media/file/downloadFile
---
```ts
import { downloadFile } from "zmp-sdk";
```

API hỗ trợ tải file về thiết bị (pdf, doc, xls, ppt, png, jpg, mp4...).

## Ví dụ

```ts
await downloadFile({
  url: "https://example.com/banner.png",
  onProgress: (progress) => {
    console.log(`Đã tải ${progress}%`);
  },
});
```

## Tham số

| Property | Type | Description |
|---|---|---|
| url | `string` | URL file cần tải. |
| fileBase64Data | `string` | Dữ liệu base64 file cần lưu. |
| onProgress | `function` | Callback tiến độ (0-100%). |
