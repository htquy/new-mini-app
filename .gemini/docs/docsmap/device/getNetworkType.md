---
sourceType: api-reference
slug: MA/api/device/network/getNetworkType
title: getNetworkType
source: https://docs.zaloplatforms.com/docs/MA/api/device/network/getNetworkType
---
```ts
import { getNetworkType } from "zmp-sdk";
```

API truy xuất kiểu kết nối mạng hiện tại.

## Ví dụ

```ts
const { networkType } = await getNetworkType();
```

## Kết quả trả về

`networkType`: `"none" | "wifi" | "cellular" | "unknown"`
