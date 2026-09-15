---
sourceType: api-reference
slug: MA/api/user/user-information/getAccessToken
title: getAccessToken
source: https://docs.zaloplatforms.com/docs/MA/api/user/user-information/getAccessToken
---
```ts
import { getAccessToken } from "zmp-sdk";
```

API dùng để lấy thông tin xác thực (access token) của người dùng.

## Ví dụ

```ts
const accessToken = await getAccessToken();
```

## Kết quả trả về

Trả về `Promise<string>` chứa `accessToken`.
