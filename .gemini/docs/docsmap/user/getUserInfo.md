---
sourceType: api-reference
slug: MA/api/user/user-information/getUserInfo
title: getUserInfo
source: https://docs.zaloplatforms.com/docs/MA/api/user/user-information/getUserInfo
---
```ts
import { getUserInfo } from "zmp-sdk";
```

API truy xuất thông tin người dùng (ID, Tên, Avatar).

## Ví dụ

```ts
const { userInfo } = await getUserInfo({
  autoRequestPermission: true,
});
```

## Tham số

| Property | Type | Required | Description |
|---|---|---|---|
| avatarType | `"small" \| "normal" \| "large"` | No | Kích thước ảnh avatar. (default: "small") |
| autoRequestPermission | `boolean` | No | Nếu `true`, tự động hiển thị form xin quyền. (default: false) |

## Kết quả trả về

### UserInfo

| Property | Type | Description |
|---|---|---|
| id | `string` | Chuỗi định danh người dùng. |
| name | `string` | Tên hiển thị người dùng. |
| avatar | `string` | URL ảnh đại diện. |
| idByOA | `string` | Định danh người dùng theo Official Account (nếu có). |
| followedOA | `boolean` | Trạng thái theo dõi Official Account. |
| isSensitive | `boolean` | Trạng thái tài khoản đặc biệt theo quy định pháp luật. |
