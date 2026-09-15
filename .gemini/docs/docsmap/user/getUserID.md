---
sourceType: api-reference
slug: MA/api/user/user-information/getUserID
title: getUserID
source: https://docs.zaloplatforms.com/docs/MA/api/user/user-information/getUserID
---
```ts
import { getUserID } from "zmp-sdk";
```

API cho phép truy xuất ID người dùng. Chuỗi này là duy nhất cho mỗi người dùng trên mỗi ID Zalo App. API này không cần yêu cầu người dùng xác nhận.

## Ví dụ

```ts
const userID = await getUserID({});
```

## Kết quả trả về

API trả về `Promise<string>` chứa ID người dùng.
