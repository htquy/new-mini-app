---
sourceType: api-reference
slug: MA/api/zalo/openChat
title: openChat
source: https://docs.zaloplatforms.com/docs/MA/api/zalo/openChat
---
```ts
import { openChat } from "zmp-sdk";
```

API cho phép ứng dụng mở cửa sổ chat với User hoặc Official Account.

## Ví dụ

```ts
await openChat({
  type: "oa",
  id: "xxx",
  message: "Xin chào!",
});
```

## Tham số

| Property | Type | Required | Description |
|---|---|---|---|
| type | `"user" \| "oa"` | Yes | Đối tượng mở cửa sổ chat. |
| id | `string` | Yes | Id của User hoặc Official Account. |
| message | `string` | No | Nội dung tự động điền vào ô tin nhắn. |
