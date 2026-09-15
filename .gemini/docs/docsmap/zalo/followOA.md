---
sourceType: api-reference
slug: MA/api/zalo/followOA
title: followOA
source: https://docs.zaloplatforms.com/docs/MA/api/zalo/followOA
---
```ts
import { followOA } from "zmp-sdk";
```

API yêu cầu theo dõi Official Account.

## Ví dụ

```ts
await followOA({
  id: "xxxx",
});
```

## Tham số

| Property | Type | Required | Description |
|---|---|---|---|
| id | `string` | Yes | Id của Official Account cần theo dõi. |
