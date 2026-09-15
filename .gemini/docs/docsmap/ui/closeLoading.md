---
sourceType: api-reference
slug: MA/api/user-interface/interative/closeLoading
title: closeLoading
source: https://docs.zaloplatforms.com/docs/MA/api/user-interface/interative/closeLoading
---
```ts
import { closeLoading } from "zmp-sdk";
```

Khi người dùng mở Zalo Mini App, một màn hình loading sẽ được hiển thị trong lúc chờ Mini App được tải. Màn hình này gọi là Splash Loading.
Mặc định Splash Loading sẽ tự động đóng khi Mini App được tải xong. Tuy nhiên, phía tích hợp có thể chọn thời điểm phù hợp để đóng loading bằng cách:

- Thêm thiết lập `selfControlLoading: true` trong `app-config.json`.
- Gọi `closeLoading` ở thời điểm thích hợp để đóng Splash Loading.

Lưu ý:
- Nếu thiết lập `selfControlLoading: true` mà API này không được gọi, **Mini App sẽ stuck ở màn hình Splash Loading**.
- Do code gọi API này chỉ được thực thi sau khi Mini App đã được tải xong, nên Splash Loading sẽ được đóng trễ hơn so me với bình thường.

## Ví dụ

Đóng loading sau khi HomePage đã render xong:

```ts
function HomePage() {
  useEffect(() => {
    closeLoading();
  }, []);
}
```
