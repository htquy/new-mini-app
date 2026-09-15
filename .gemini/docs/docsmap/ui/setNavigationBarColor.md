---
sourceType: api-reference
slug: MA/api/user-interface/view/setNavigationBarColor
title: setNavigationBarColor
source: https://docs.zaloplatforms.com/docs/MA/api/user-interface/view/setNavigationBarColor
---
```ts
import { setNavigationBarColor } from "zmp-sdk";
```

API đặt lại màu thanh điều hướng của trang hiện tại.

## Ví dụ

```ts
setNavigationBarColor({
  color: "#000000",
});
```

## Tham số

| Property | Type | Required | Description |
|---|---|---|---|
| color | `string` | Yes | Giá trị màu HEX (ví dụ `#000000`). Nếu rỗng thì thanh điều hướng bị ẩn. |
| textColor | `"black" \| "white"` | No | Màu của text và icon trên thanh action bar và status bar. |
| statusBarColor | `string` | No | Màu của thanh status bar khi thanh điều hướng bị ẩn. |
