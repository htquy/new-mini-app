---
sourceType: api-reference
slug: MA/api/native-storage/getNativeStorageInfo
title: getStorageInfo
source: https://docs.zaloplatforms.com/docs/MA/api/native-storage/getNativeStorageInfo
---
```ts
import { nativeStorage } from "zmp-sdk";
```

Lấy thông tin của cache theo cơ chế đồng bộ.

## Ví dụ

```ts
const { currentSize, limitSize } = nativeStorage.getStorageInfo();
```

> Xem hướng dẫn xử lý lỗi và bảng mô tả chi tiết mã lỗi [tại đây](/docs/MA/api/errorCode).

## Kết quả trả về

API trả về `StorageInfo` chứa thông tin của cache.

### StorageInfo

| Property | Type | Required | Description |
|---|---|---|---|
| currentSize | `number` | No | Không gian hiện tại bị chiếm (tính bằng KB) |
| limitSize | `number` | No | Giới hạn kích thước không gian (tính bằng KB) |
