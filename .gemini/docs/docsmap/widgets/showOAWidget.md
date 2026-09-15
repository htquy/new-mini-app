---
sourceType: api-reference
slug: MA/api/widgets/showOAWidget
title: showOAWidget
source: https://docs.zaloplatforms.com/docs/MA/api/widgets/showOAWidget
---
```ts
import { showOAWidget } from "zmp-sdk";
```

Widget Quan tâm OA: Người dùng bấm nút "Quan tâm" trên widget để quan tâm OA ngay lập tức.

## Ví dụ

```ts
showOAWidget({
  id: "oaWidget",
  guidingText: "Nhận thông báo khuyến mãi mới nhất từ cửa hàng",
  color: "#0068FF",
  onStatusChange: (status) => {
    console.log(status);
  },
});
```

## Tham số

| Property | Type | Required | Description |
|---|---|---|---|
| id | `string` | Yes | ID của element render widget. |
| guidingText | `string` | No | Chuỗi hướng dẫn người dùng. |
| color | `string` | No | Màu widget (HEX). |
| onStatusChange | `function` | No | Callback khi trạng thái quan tâm thay đổi. |
