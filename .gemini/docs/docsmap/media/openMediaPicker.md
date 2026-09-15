---
sourceType: api-reference
slug: MA/api/media/file/openMediaPicker
title: openMediaPicker
source: https://docs.zaloplatforms.com/docs/MA/api/media/file/openMediaPicker
---
```ts
import { openMediaPicker } from "zmp-sdk";
```

API mở cửa sổ chọn media (camera, ảnh, file, video) từ thiết bị.

## Ví dụ

```ts
const { data } = await openMediaPicker({
  type: "photo",
  compressLevel: 2,
});
```

## Tham số

| Property | Type | Description |
|---|---|---|
| serverUploadUrl | `string` | URL upload media lên server (nếu không truyền sẽ lưu file tạm LFS). |
| type | `"photo" \| "file" \| "video" \| "zcamera" \| "zcamera_photo" \| "zcamera_video" \| "zcamera_scan"` | Loại media cần chọn. |
| maxItemSize | `number` | Giới hạn kích thước file (byte). |
| maxSelectItem | `number` | Số lượng chọn tối đa (default: 1). |
| compressLevel | `number` | Mức nén ảnh (0: không nén, 1: thấp, 2: vừa, 3: cao). |
