---
sourceType: api-reference
slug: MA/api/zalo/unfollowOA
title: unfollowOA
source: https://docs.zaloplatforms.com/docs/MA/api/zalo/unfollowOA
---
```ts
import { unfollowOA } from "zmp-sdk";
```

API hiển thị giao diện xác nhận bỏ theo dõi Official Account.

## Ví dụ

```ts
await unfollowOA({
  id: "xxxx",
});
```

## Tham số

| Property | Type | Required | Description |
|---|---|---|---|
| id | `string` | Yes | Id của Official Account. |
