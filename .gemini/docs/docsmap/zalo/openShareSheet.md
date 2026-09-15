---
sourceType: api-reference
slug: MA/api/zalo/openShareSheet
title: openShareSheet
source: https://docs.zaloplatforms.com/docs/MA/api/zalo/openShareSheet
---
```ts
import { openShareSheet } from "zmp-sdk";
```

API cho phép mở giao diện chia sẻ với bạn bè Zalo (văn bản, hình ảnh, link, OA, video, ZMP page...).

## Ví dụ

Chia sẻ Zalo Mini App page:

```ts
const data = await openShareSheet({
  type: "zmp",
  data: {
    title: "My Zalo Mini App",
    description: "Home page",
    thumbnail: "https://example.com/thumb.jpg",
  },
});
```

## Tham số

| Property | Type | Required | Description |
|---|---|---|---|
| type | `"text" \| "image" \| "link" \| "oa" \| "gif" \| "video" \| "zmp" \| "zmp_deep_link"` | Yes | Loại nội dung chia sẻ. |
| data | `ShareData` | Yes | Data chia sẻ tùy theo `type`. |
