---
sourceType: api-reference
slug: MA/api/user-interface/interative/showToast
title: showToast
source: https://docs.zaloplatforms.com/docs/MA/api/user-interface/interative/showToast
---
```ts
import { showToast } from "zmp-sdk";
```

API hiển thị một thông báo ngắn trên màn hình.

## Ví dụ

Hiện thông báo đặt hàng thành công:

```ts
showToast({
  message: "Đặt hàng thành công!",
});
```

## Tham số

Truyền tham số vào API dưới dạng object chứa các thuộc tính:

| Property | Type | Required | Description |
|---|---|---|---|
| message | `string` | Yes | Nội dung thông báo cần hiển thị. |
