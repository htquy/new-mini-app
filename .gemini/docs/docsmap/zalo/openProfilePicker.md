---
sourceType: api-reference
slug: MA/api/zalo/openProfilePicker
title: openProfilePicker
source: https://docs.zaloplatforms.com/docs/MA/api/zalo/openProfilePicker
---
```ts
import { openProfilePicker } from "zmp-sdk";
```

API mở cửa sổ chọn bạn bè trong Zalo.

## Ví dụ

```ts
const { users } = await openProfilePicker({
  maxProfile: 2,
});
```

## Tham số

| Property | Type | Required | Description |
|---|---|---|---|
| maxProfile | `number` | No | Số lượng bạn bè tối đa được chọn (1-10). Default: 1. |
