---
sourceType: api-reference
slug: MA/api/user-interface/view/setNavigationBarLeftButton
title: setNavigationBarLeftButton
source: https://docs.zaloplatforms.com/docs/MA/api/user-interface/view/setNavigationBarLeftButton
---
```ts
import { setNavigationBarLeftButton } from "zmp-sdk";
```

API đặt lại nút bên trái trên thanh điều hướng của trang hiện tại.

## Ví dụ

```ts
await setNavigationBarLeftButton({
  type: "back",
});
```

## Tham số

| Property | Type | Required | Description |
|---|---|---|---|
| type | `"none" \| "back" \| "home" \| "both"` | No | Loại nút bên trái. (default: "back") |
