---
sourceType: api-reference
slug: MA/api/user/setting/getSetting
title: getSetting
source: https://docs.zaloplatforms.com/docs/MA/api/user/setting/getSetting
---
```ts
import { getSetting } from "zmp-sdk";
```

API lấy thông tin cài đặt cấp quyền hiện tại của người dùng.

## Ví dụ

```ts
const { authSetting } = await getSetting();
```

## Scopes

| Scope | Corresponding APIs | Description |
| --- | --- | --- |
| `scope.userInfo` | `getUserInfo` | Thông tin user |
| `scope.userLocation` | `getLocation` | Vị trí user |
| `scope.userPhonenumber` | `getPhoneNumber` | Số điện thoại |
| `scope.camera` | `createCameraContext` | Camera |
