---
sourceType: api-reference
slug: MA/api/basics/getSystemInfo
title: getSystemInfo
source: https://docs.zaloplatforms.com/docs/MA/api/basics/getSystemInfo
---
```ts
import { getSystemInfo } from "zmp-sdk";
```

API truy xuất thông tin hệ thống, thiết bị đang sử dụng.

## Ví dụ

Lấy các thông tin phiên bản:

```ts
const { version, apiVersion, zaloVersion } = getSystemInfo();
```

> Xem hướng dẫn xử lý lỗi và bảng mô tả chi tiết mã lỗi [tại đây](/docs/MA/api/errorCode).

## Kết quả trả về

API trả về `SystemInfo` chứa các thông tin về phiên bản, ngôn ngữ, theme của hệ thống.

### SystemInfo

| Property | Type | Required | Description |
|---|---|---|---|
| version | `string` | No | Phiên bản đang được sử dụng của Zalo Mini App này. |
| apiVersion | `string` | No | Phiên bản đang sử dụng của ZMP SDK. |
| zaloVersion | `string` | No | Phiên bản của ứng dụng Zalo trên thiết bị. |
| platform | `'android' \| 'iOS' \| 'wp' \| 'unknown' \| ''` | No | Thông tin hệ điều hành của thiết bị. |
| language | `string` | No | Ngôn ngữ hiển thị của thiết bị. |
| zaloLanguage | `string` | No | Ngôn ngữ hiển thị của ứng dụng Zalo trên thiết bị. |
| zaloTheme | `string` | No | Theme hiện tại của ứng dụng Zalo trên thiết bị. |
