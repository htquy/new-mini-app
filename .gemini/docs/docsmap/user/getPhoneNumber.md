---
sourceType: api-reference
slug: MA/api/user/user-information/getPhoneNumber
title: getPhoneNumber
source: https://docs.zaloplatforms.com/docs/MA/api/user/user-information/getPhoneNumber
---
```ts
import { getPhoneNumber } from "zmp-sdk";
```

Lấy thông tin số điện thoại của người dùng thông qua token.

## Ví dụ

```ts
const { token } = await getPhoneNumber();
```

Token này sau đó được gửi lên Server để giải mã ra số điện thoại thông qua Zalo Open API.

## Hướng dẫn giải mã từ Server

```bash
curl --location --request GET https://graph.zalo.me/v2.0/me/info \
--header access_token: <user_access_token> \
--header code: <token> \
--header secret_key: <zalo_app_secret_key>
```
