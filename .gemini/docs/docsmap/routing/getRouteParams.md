---
sourceType: api-reference
slug: MA/api/routing/getRouteParams
title: getRouteParams
source: https://docs.zaloplatforms.com/docs/MA/api/routing/getRouteParams
---
```ts
import { getRouteParams } from "zmp-sdk";
```

API truy xuất các tham số được gửi đến trang hiện tại.

## Ví dụ

Lấy ID của sản phẩm được truyền vào trong URL:

```ts
const { id } = getRouteParams();
```

> Xem hướng dẫn xử lý lỗi và bảng mô tả chi tiết mã lỗi [tại đây](/docs/MA/api/errorCode).

## Kết quả trả về

API trả về `Record<string, string>` chứa tất cả tham số dưới dạng key-value.
