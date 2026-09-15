---
sourceType: api-reference
slug: MA/api/zalo/openProfile
title: openProfile
source: https://docs.zaloplatforms.com/docs/MA/api/zalo/openProfile
---
```ts
import { openProfile } from "zmp-sdk";
```

API cho phép ứng dụng mở profile của User hoặc Official Account.

## Ví dụ

Mở profile của người dùng:

```ts
await openProfile({
  type: "user",
  id: "user-id",
});
```

Mở Official Account:

```ts
await openProfile({
  type: "oa",
  id: "oa-id",
});
```

## Tham số

| Property | Type | Required | Description |
|---|---|---|---|
| type | `"user" \| "oa" \| "aliasOA"` | Yes | `user`: Mở profile User. `oa`: Mở profile/chat OA. `aliasOA`: Như `oa`, dùng alias id. |
| id | `string` | Yes | Id của User hoặc OA. |
