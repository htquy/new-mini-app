---
sourceType: api-reference
slug: MA/api/user/authorization/authorize
title: authorize
source: https://docs.zaloplatforms.com/docs/MA/api/user/authorization/authorize
---
```ts
import { authorize } from "zmp-sdk";
```

### Cấp quyền sử dụng API

Một số API cần sự cho phép của người dùng trước khi có thể được gọi. Các API này được chia thành nhiều phạm vi (Scope):

| Scope | Corresponding APIs | Description |
| --- | --- | --- |
| `scope.userInfo` | `getUserInfo` | Thông tin user (tên, avatar...) |
| `scope.userLocation` | `getLocation` | Thông tin vị trí user |
| `scope.userPhonenumber` | `getPhoneNumber` | Số điện thoại |

## Ví dụ

Khởi tạo cấp quyền:

```ts
try {
  const data = await authorize({
    scopes: ["scope.userLocation", "scope.userPhonenumber"],
  });
  console.log(data["scope.userLocation"]); // `true` nếu người dùng đồng ý cấp vị trí
  console.log(data["scope.userPhonenumber"]); // `true` nếu người dùng đồng ý cấp số điện thoại
} catch (error) {
  const code = (error as AppError).code;
  if (code === -201) {
    console.log("Người dùng đã từ chối cấp quyền");
  }
}
```

## Tham số

| Property | Type | Required | Description |
|---|---|---|---|
| scopes | `string[]` | No | Danh sách các quyền cần được cấp. Mặc định xin quyền `userInfo`. |

## Kết quả trả về

Trả về `Promise<Scopes>` chứa các trạng thái của các quyền được cấp.
