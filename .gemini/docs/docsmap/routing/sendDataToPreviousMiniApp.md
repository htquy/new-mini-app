---
sourceType: api-reference
slug: MA/api/routing/sendDataToPreviousMiniApp
title: sendDataToPreviousMiniApp
source: https://docs.zaloplatforms.com/docs/MA/api/routing/sendDataToPreviousMiniApp
---
```ts
import { sendDataToPreviousMiniApp } from "zmp-sdk";
```

Gửi dữ liệu cho Zalo Mini App trước đó.
Zalo Mini App trước đó cần lắng nghe sự kiện [OnDataCallback](/docs/MA/api/events#ondatacallback) để nhận dữ liệu.
Nếu API được gọi nhiều lần thì dữ liệu cuối cùng sẽ được gửi đi.

## Ví dụ

Ví dụ có 2 Zalo Mini App A với id là `2953132499190403100` và B với id là `2953132499190403200`. Để B có thể gửi dữ liệu cho A, chúng ta cần thực hiện những bước sau:

1. Lắng nghe sự kiện [OnDataCallback](/docs/MA/api/events#ondatacallback) ở app A:

```ts
import { events, EventName } from "zmp-sdk/apis";

const callback = (data) => {
  console.log(data);
};

events.on(EventName.OnDataCallback, callback);
```

2. Gọi API [openMiniApp](/docs/MA/api/routing/openMiniApp) để chuyển đến app B:

```ts
import { openMiniApp } from "zmp-sdk/apis";

openMiniApp({
  appId: "2953132499190403200",
});
```

3. Ở app B, gửi dữ liệu cho app A:

```ts
import { sendDataToPreviousMiniApp } from "zmp-sdk/apis";

sendDataToPreviousMiniApp({
  data: "Success",
});
```

4. Tắt app B bằng api [closeApp](/docs/MA/api/routing/closeApp) hoặc nhấn nút đóng.

5. Sau khi app B đóng hoàn toàn, app A sẽ nhận được dữ liệu đã gửi.

> Xem hướng dẫn xử lý lỗi và bảng mô tả chi tiết mã lỗi [tại đây](/docs/MA/api/errorCode).

## Tham số

Truyền tham số vào API dưới dạng object chứa các thuộc tính:

| Property | Type | Required | Description |
|---|---|---|---|
| data | `any` | Yes | Dữ liệu cần gửi. |
