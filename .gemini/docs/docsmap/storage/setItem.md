---
sourceType: api-reference
slug: MA/api/native-storage/setItem
title: setItem
source: https://docs.zaloplatforms.com/docs/MA/api/native-storage/setItem
---
```ts
import { nativeStorage } from "zmp-sdk";
```

Lưu trữ dữ liệu xuống bộ đệm theo cơ chế đồng bộ. Dữ liệu sẽ được lưu ở thiết bị của người dùng. Dữ liệu cũ nhất sẽ bị xoá nếu bộ nhớ đạt giới hạn (5MB).

## Ví dụ

Lưu từ khoá tìm kiếm vào bộ nhớ:

```ts
nativeStorage.setItem("recentSearch", keyword);
```

> Xem hướng dẫn xử lý lỗi và bảng mô tả chi tiết mã lỗi [tại đây](/docs/MA/api/errorCode).

## Tham số

Truyền trực tiếp hai tham số `key` và `value` kiểu `string` vào API:

| Property | Type | Required | Description |
|---|---|---|---|
| key | `string` | Yes | Tên khóa mà bạn muốn tạo/cập nhật. |
| value | `string` | Yes | Giá trị mà bạn muốn cung cấp cho khóa mà bạn đang tạo/cập nhật. |
