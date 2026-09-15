---
sourceType: api-reference
slug: MA/api/events
title: Events
source: https://docs.zaloplatforms.com/docs/MA/api/events
---
> **Lưu ý:** Từ phiên bản API 2.25.2, `EventName` được thêm làm alias của `Events` để tên gọi rõ ràng hơn; `Events` vẫn tiếp tục được export.

## API

### on(eventName, listener)

- eventName \: Tên của sự kiện
- listener \: Hàm xử lý sự kiện

Thêm một hàm vào cuối mảng chứa hàm xử lý đã có của sự kiện theo tên biến **eventName**. Khi sự kiện xảy ra, tất cả các hàm xử lý của sự kiện đó sẽ được gọi.

```js
import { events, EventName } from "zmp-sdk/apis";

const callback = (data) => {
  console.log(data);
};
events.on(EventName.NetworkChanged, callback);
```

### once(eventName, listener)

- eventName \: Tên của sự kiện
- listener \: Callback function

Thêm hàm xử lý một lần cho sự kiện theo tên biến **eventName**. Khi sự kiện xảy ra, hàm xử lý này sẽ bị xoá và sau đó thực thi.

```js
import { events, EventName } from "zmp-sdk/apis";

const callback = (data) => {
  console.log(data);
};
events.once(EventName.NetworkChanged, callback);
```

### off(eventName, listener)

- eventName \: Tên của sự kiện
- listener \: Callback function

Xoá một hàm xử lý cụ thể trong mảng các hàm xử lý của sự kiện theo tên biến **eventName**

```js
import { events, EventName } from "zmp-sdk/apis";

const callback = (data) => {
  console.log(data);
};

events.on(EventName.NetworkChanged, callback);

// ...

events.off(EventName.NetworkChanged, callback);
```

### removeAllListeners(eventName)

- eventName \: Tên của sự kiện

Xoá tất cả hàm xử lý của sự kiện theo tên biến **eventName**

```js
import { events, EventName } from "zmp-sdk/apis";

events.removeAllListeners(EventName.NetworkChanged);
```

## Events

Zalo Mini App hỗ trợ các event sau đây:

### AppPaused

Sự kiện này xảy ra khi Zalo Mini App chuyển từ foreground sang background

```js
import { events, EventName } from "zmp-sdk/apis";

events.on(EventName.AppPaused, () => {
  console.log("App paused");
});
```

### AppResumed

Sự kiện này xảy ra khi Zalo Mini App chuyển từ background sang foreground

```js
import { events, EventName } from "zmp-sdk/apis";

events.on(EventName.AppResumed, () => {
  console.log("App resumed");
});
```

### NetworkChanged

Sự kiện này xảy ra khi phát hiện thay đổi mạng của thiết bị

```js
import { events, EventName } from "zmp-sdk/apis";

events.on(EventName.NetworkChanged, (data) => {
  const { state } = data;
  console.log("Network State:", state);
});
```

### OnDataCallback

Sự kiện này xảy ra khi nhận được data từ api [sendDataToPreviousMiniApp](/docs/MA/api/routing/sendDataToPreviousMiniApp)

```js
import { events, EventName } from "zmp-sdk/apis";

events.on(EventName.OnDataCallback, (data) => {
  console.log("Callback data:", data);
});
```

### OpenApp

> Bắt đầu hỗ trợ:
>
> - API phiên bản: 2.16.0
> - IOS: 22.02.01
> - Android: 22.03.02

Khi Mini App đang chạy ở chế độ nền (chưa tắt hẳn) mà được mở lại bằng các entrypoint như link, QR code,... thì sự kiện [OpenApp](#openapp) sẽ
xảy ra, giá trị nhận được là path của entrypoint đó.

```js
import { events, EventName } from "zmp-sdk/apis";

events.on(EventName.OpenApp, (data) => {
  console.log("Callback data:", data.path);
});
```

### WebviewClosed

> Bắt đầu hỗ trợ:
>
> - API phiên bản: 2.30.0

Sự kiện xảy ra khi webview mở từ miniapp được đóng lại.

```js
import { events, EventName } from "zmp-sdk/apis";

events.on(EventName.WebviewClosed, () => {
  console.log("WebviewClosed");
});
```
