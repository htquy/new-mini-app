---
sourceType: api-reference
slug: MA/api/advertising/setupAd
title: setupAd
source: https://docs.zaloplatforms.com/docs/MA/api/advertising/setupAd
---
```ts
import { setupAd } from "zmp-sdk";
```

API cấu hình các thông tin dùng để chạy quảng cáo. API cần được gọi khi khởi tạo ứng dụng.

## Ví dụ

```ts
setupAd({
  publisherId: "YOUR_PUBLISHER_ID",
});
```

## Tham số

| Property | Type | Required | Description |
|---|---|---|---|
| publisherId | `string` | Yes | ID nhà xuất bản quảng cáo. |
