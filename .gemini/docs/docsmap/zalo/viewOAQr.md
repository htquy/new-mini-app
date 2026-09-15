---
sourceType: api-reference
slug: MA/api/zalo/viewOAQr
title: viewOAQr
source: https://docs.zaloplatforms.com/docs/MA/api/zalo/viewOAQr
---
```ts
import { viewOAQr } from "zmp-sdk";
```

API hiển thị QR code của Official Account.

## Ví dụ

```ts
await viewOAQr({
  id: "765465772305886642",
  displayName: "Galaxy Cinema",
});
```

## Tham số

| Property | Type | Required | Description |
|---|---|---|---|
| id | `string` | Yes | Id của OA. |
| displayName | `string` | No | Tên hiển thị của QR code. |
