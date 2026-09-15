---
sourceType: api-reference
slug: MA/api/zalo/openPostFeed
title: openPostFeed
source: https://docs.zaloplatforms.com/docs/MA/api/zalo/openPostFeed
---
```ts
import { openPostFeed } from "zmp-sdk";
```

API cho phép ứng dụng mở giao diện chia sẻ lên nhật ký Zalo (hình ảnh, link, profile OA).

## Ví dụ

```ts
const { status } = await openPostFeed({
  type: "image",
  data: {
    imageUrls: ["https://example.com/image.jpg"],
  },
});
```

## Tham số

| Property | Type | Required | Description |
|---|---|---|---|
| type | `"image" \| "link" \| "profile"` | Yes | Loại chia sẻ lên nhật ký. |
| data | `ShareData` | Yes | Nội dung tương ứng. |
