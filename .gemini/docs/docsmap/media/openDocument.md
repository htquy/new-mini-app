---
sourceType: api-reference
slug: MA/api/media/file/openDocument
title: openDocument
source: https://docs.zaloplatforms.com/docs/MA/api/media/file/openDocument
---
```ts
import { openDocument } from "zmp-sdk";
```

API cho phép ứng dụng xem trực tiếp tài liệu PDF từ URL hoặc LFS file.

## Ví dụ

```ts
openDocument({
  url: "https://example.com/sample.pdf",
  title: "Tài liệu mẫu",
  download: true,
});
```

## Tham số

| Property | Type | Description |
|---|---|---|
| url | `string` | URL tài liệu PDF cần mở. |
| title | `string` | Tiêu đề hiển thị trên header bar. |
| download | `boolean` | Bật tính năng tải về. |
| edit | `boolean` | Bật tính năng chỉnh sửa (iOS). |
