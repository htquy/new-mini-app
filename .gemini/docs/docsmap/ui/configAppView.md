---
sourceType: api-reference
slug: MA/api/user-interface/view/configAppView
title: configAppView
source: https://docs.zaloplatforms.com/docs/MA/api/user-interface/view/configAppView
---
```ts
import { configAppView } from "zmp-sdk";
```

API tuỳ chỉnh các thành phần giao diện chính trên Mini App, bao gồm:
- Status bar
- Action bar
- Bottom Navigation (Android) / Safe Area Inset Bottom (iOS)

## Ví dụ

Thay đổi tiêu đề action bar:

```ts
configAppView({
  actionBar: {
    title: "Giỏ hàng",
  },
});
```

Để có được giao diện toàn màn hình:

```ts
configAppView({
  hideAndroidBottomNavigationBar: true,
  hideIOSSafeAreaBottom: true,
  statusBarType: "transparent",
  actionBar: {
    hide: true,
  },
});
```

## Tham số

| Property | Type | Required | Description |
|---|---|---|---|
| headerColor | `string` | No | Mã màu HEX, ví dụ `#000000`. |
| headerTextColor | `"white" \| "black"` | No | Màu của text và icon trên thanh action bar và status bar. |
| statusBarType | `"normal" \| "hidden" \| "transparent"` | No | Kiểu hiển thị của status bar. (default: "normal") |
| hideAndroidBottomNavigationBar | `boolean` | No | Ẩn thanh navigation bar trên Android. (default: false) |
| hideIOSSafeAreaBottom | `boolean` | No | Ẩn thanh safe area inset bottom trên iOS. (default: false) |
| hide | `boolean` | No | Ẩn action bar. |
| title | `string` | No | Tiêu đề hiển thị trên action bar. |
| leftButton | `"back" \| "none"` | No | Tuỳ chỉnh nút điều hướng bên trái action bar. (default: "back") |
| textAlign | `"left" \| "center"` | No | Vị trí tiêu đề trên action bar. (default: "left") |
