---
sourceType: api-reference
slug: MA/api/basics/getAppInfo
title: getAppInfo
source: https://docs.zaloplatforms.com/docs/MA/api/basics/getAppInfo
---
```ts
import { getAppInfo } from "zmp-sdk";
```

API truy xuất thông tin Zalo Mini App hiện tại.

## Ví dụ

Lấy tên và phiên bản live hiện tại:

```ts
const { name, version } = await getAppInfo({});
```

> Xem hướng dẫn xử lý lỗi và bảng mô tả chi tiết mã lỗi [tại đây](/docs/MA/api/errorCode).

## Kết quả trả về

API trả về `Promise<GetAppInfoReturns>` chứa các thông tin Zalo Mini App hiện tại.

### GetAppInfoReturns

| Property | Type | Required | Description |
|---|---|---|---|
| name | `string` | No | Tên Zalo Mini App. |
| description | `string` | No | Mô tả Zalo Mini App. |
| version | `string` | No | Phiên bản live hiện tại. |
| appUrl | `string` | No | Link chia sẻ Zalo Mini App. |
| qrCodeUrl | `string` | No | Link QR của Zalo Mini App. |
| logoUrl | `string` | No | Đường dẫn đến hình ảnh logo của Zalo Mini App. |
