---
sourceType: api-reference
slug: MA/api/location/getLocation
title: getLocation
source: https://docs.zaloplatforms.com/docs/MA/api/location/getLocation
---
```ts
import { getLocation } from "zmp-sdk";
```

API truy xuất vị trí hiện tại của người dùng (thông qua token).

## Ví dụ

```ts
const { token } = await getLocation();
```

Token được gửi lên Server để quy đổi thành tọa độ (latitude, longitude) qua Zalo Open API (`https://graph.zalo.me/v2.0/me/info`).
