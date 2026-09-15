---
sourceType: api-reference
slug: MA/api/basics/getDeviceIdAsync
title: getDeviceIdAsync
source: https://docs.zaloplatforms.com/docs/MA/api/basics/getDeviceIdAsync
---
```ts
import { getDeviceIdAsync } from "zmp-sdk";
```

API trả về chuỗi Device ID của thiết bị đã được hash. Các tài khoản người dùng khác nhau đăng nhập trên cùng 1 thiết bị và sử dụng cùng 1 Mini App (hoặc các Mini App có chung Zalo App ID) sẽ có giá trị Device ID giống nhau. Nếu không lấy được Device ID thì giá trị trả về là `unknown`.

## Ví dụ

Sử dụng kết hợp với `await`:

```ts
const deviceId = await getDeviceIdAsync();
```

> Xem hướng dẫn xử lý lỗi và bảng mô tả chi tiết mã lỗi [tại đây](/docs/MA/api/errorCode).

## Kết quả trả về

API trả về `Promise<string>` chứa chuỗi Device ID của thiết bị đã được hash.
