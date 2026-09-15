---
sourceType: api-reference
slug: MA/api/native-storage/removeItem
title: removeItem
source: https://docs.zaloplatforms.com/docs/MA/api/native-storage/removeItem
---
```ts
import { nativeStorage } from "zmp-sdk";
```

Xoá dữ liệu trong cache theo cơ chế đồng bộ.

## Ví dụ

Xoá từ khoá tìm kiếm cũ khỏi bộ nhớ:

```ts
nativeStorage.removeItem("recentSearch");
```

> Xem hướng dẫn xử lý lỗi và bảng mô tả chi tiết mã lỗi [tại đây](/docs/MA/api/errorCode).

## Tham số

Truyền trực tiếp tham số `key` kiểu `string` vào API:

| Property | Type | Required | Description |
|---|---|---|---|
| key | `string` | Yes | Tên khóa của dữ liệu cần xoá |
