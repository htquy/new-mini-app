---
sourceType: api-reference
slug: MA/api/device/screen/keepScreen
title: keepScreen
source: https://docs.zaloplatforms.com/docs/MA/api/device/screen/keepScreen
---
```ts
import { keepScreen } from "zmp-sdk";
```

API cho phép ứng dụng giữ cho màn hình luôn bật.

## Ví dụ

```ts
await keepScreen({
  keepScreenOn: true,
});
```

## Tham số

| Property | Type | Required | Description |
|---|---|---|---|
| keepScreenOn | `boolean` | Yes | Truyền `true` để giữ màn hình luôn bật, `false` để tắt. |
