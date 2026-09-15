---
sourceType: api-reference
slug: MA/api/native-storage/getItem
title: getItem
source: https://docs.zaloplatforms.com/docs/MA/api/native-storage/getItem
---
```ts
import { nativeStorage } from "zmp-sdk";
```

Lấy dữ liệu đã lưu ở cache theo cơ chế đồng bộ.

## Ví dụ

Lấy giá trị tìm kiếm gần đây

```ts
const keyword = getItem("recentSearch");
```

Lấy danh sách sản phẩm từ cache. Đảm bảo luôn sử dụng `try/catch` khi parse JSON để tránh lỗi có thể dẫn đến crash app.

```ts
try {
  const data: Product[] = JSON.parse(getItem("cache.productList"));
} catch (error) {
  // Không tìm thấy dữ liệu trong cache, hoặc dữ liệu không phải chuỗi JSON hợp lệ
}
```

> Xem hướng dẫn xử lý lỗi và bảng mô tả chi tiết mã lỗi [tại đây](/docs/MA/api/errorCode).

## Tham số

| Property | Type | Required | Description |
|---|---|---|---|
| key | `string` | Yes | Tên khóa của dữ liệu cần lấy |

## Kết quả trả về

API trả về `string` chứa giá trị của khóa cần lấy, hoặc `null` nếu khóa không tồn tại.
