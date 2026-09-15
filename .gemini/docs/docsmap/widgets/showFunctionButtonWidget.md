---
sourceType: api-reference
slug: MA/api/widgets/showFunctionButtonWidget
title: showFunctionButtonWidget
source: https://docs.zaloplatforms.com/docs/MA/api/widgets/showFunctionButtonWidget
---
```ts
import { showFunctionButtonWidget } from "zmp-sdk";
```

Widget Function Button: Khi người dùng nhấn vào button này, Mini App nhận được interact token (có giá trị trong 1 giờ).

## Ví dụ

```ts
showFunctionButtonWidget({
  id: "orderButton",
  type: "ORDER",
  text: "Đặt hàng",
  color: "#0068FF",
  textColor: "#FFFFFF",
  borderRadius: "48px",
  onDataReceived: (interactToken) => {
    console.log(interactToken);
  },
  onError: (error) => {
    console.error("onError:", error.code, error.message);
  },
});
```

## Tham số

| Property | Type | Required | Description |
|---|---|---|---|
| id | `string` | Yes | ID của element HTML để render widget. |
| type | `"ORDER"` | Yes | Loại nút (`ORDER`). |
| text | `string` | Yes | Chuỗi hiển thị (vd: `Đặt hàng`, `Thanh toán`, `Đặt xe`). |
| fontSize | `string` | No | Font size (min 14px, default "16px"). |
| color | `string` | No | Màu nền HEX (default "#0068FF"). |
| textColor | `string` | No | Màu chữ HEX (default "#FFFFFF"). |
| borderRadius | `string` | No | Bo góc (default "48px"). |
| onDataReceived | `function` | No | Callback nhận `interactToken`. |
| onError | `function` | No | Callback lỗi. |
