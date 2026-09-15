---
sourceType: api-reference
slug: MA/api/zalo/createShortcut
title: createShortcut
source: https://docs.zaloplatforms.com/docs/MA/api/zalo/createShortcut
---
```ts
import { createShortcut } from "zmp-sdk";
```

API cho phép ứng dụng tạo shortcut trên màn hình chờ thiết bị.

## Ví dụ

```ts
await createShortcut({
  params: {
    utm_source: "shortcut",
  },
});
```

## Tham số

| Property | Type | Required | Description |
|---|---|---|---|
| params | `Record<string, string>` | No | Params cần thêm vào khi mở qua shortcut. |
