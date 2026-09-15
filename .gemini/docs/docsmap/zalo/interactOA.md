---
sourceType: api-reference
slug: MA/api/zalo/interactOA
title: interactOA
source: https://docs.zaloplatforms.com/docs/MA/api/zalo/interactOA
---
```ts
import { interactOA } from "zmp-sdk";
```

API yêu cầu người dùng cho phép gửi thông báo thông qua Official Account.

## Ví dụ

```ts
await interactOA({
  oaId: "xxxx",
});
```

## Tham số

| Property | Type | Required | Description |
|---|---|---|---|
| oaId | `string` | Yes | Id của Official Account. |
