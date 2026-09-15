---
sourceType: api-reference
slug: MA/api/user-interface/view/setNavigationBarTitle
title: setNavigationBarTitle
source: https://docs.zaloplatforms.com/docs/MA/api/user-interface/view/setNavigationBarTitle
---
```ts
import { setNavigationBarTitle } from "zmp-sdk";
```

API đặt lại tiêu đề trên thanh điều hướng của trang hiện tại.

## Ví dụ

```ts
function CartPage() {
  useEffect(() => {
    setNavigationBarTitle({ title: "Giỏ hàng" });
  }, []);
}
```

## Tham số

| Property | Type | Required | Description |
|---|---|---|---|
| title | `string` | Yes | Tiêu đề mới cần đặt cho trang. |
