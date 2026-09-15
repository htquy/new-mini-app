---
sourceType: api-reference
slug: MA/api/device/contact/openSMS
title: openSMS
source: https://docs.zaloplatforms.com/docs/MA/api/device/contact/openSMS
---
```ts
import { openSMS } from "zmp-sdk";
```

API mở ứng dụng tin nhắn với nội dung và số điện thoại cụ thể.

## Ví dụ

```ts
await openSMS({
  content: "text",
  phoneNumber: "+84123456789",
});
```

## Tham số

| Property | Type | Required | Description |
|---|---|---|---|
| content | `string` | Yes | Nội dung tin nhắn. |
| phoneNumber | `string` | Yes | Số điện thoại nhận tin nhắn. |
