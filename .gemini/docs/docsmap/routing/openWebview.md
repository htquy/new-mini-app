---
sourceType: api-reference
slug: MA/api/routing/openWebview
title: openWebview
source: https://docs.zaloplatforms.com/docs/MA/api/routing/openWebview
---
```ts
import { openWebview } from "zmp-sdk";
```

Tải một trang web bằng Webview.
Để biết khi nào Webview được đóng, vui lòng lắng nghe sự kiện [WebviewClosed](/docs/MA/api/events#webviewclosed).

## Ví dụ

Mở trang chủ của Zalo Mini App:

```ts
openWebview({
  url: "https://mini.zalo.me",
});
```

Mở trang chủ của Zalo Mini App toàn màn hình:

```ts
openWebview({
  url: "https://mini.zalo.me",
  config: {
    style: "normal",
  },
});
```

> Xem hướng dẫn xử lý lỗi và bảng mô tả chi tiết mã lỗi [tại đây](/docs/MA/api/errorCode).

## Tham số

Truyền tham số vào API dưới dạng object chứa các thuộc tính:

| Property | Type | Required | Description |
|---|---|---|---|
| url | `string` | Yes | Đường dẫn của trang web cần tải. |
| style | `"bottomSheet" \| "normal"` | No | Kiểu hiển thị của Webview: (default: "bottomSheet") |
| leftButton | `"back" \| "none"` | No | Nút bên trái thanh header: (chỉ hỗ trợ cho style 'bottomSheet') (default: "back") |
