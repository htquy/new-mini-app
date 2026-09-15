---
sourceType: api-reference
slug: MA/api/device/contact/openPhone
title: openPhone
source: https://docs.zaloplatforms.com/docs/MA/api/device/contact/openPhone
---
```ts
import { openPhone } from "zmp-sdk";
```

API cho phép mở màn hình cuộc gọi với một số điện thoại cụ thể.

## Ví dụ

```ts
await openPhone({
  phoneNumber: "0123456789",
});
```

## Tham số

| Property | Type | Required | Description |
|---|---|---|---|
| phoneNumber | `string` | Yes | Số điện thoại cần gọi. |
