---
sourceType: api-reference
slug: MA/api/media/camera/createCameraContext
title: createCameraContext
source: https://docs.zaloplatforms.com/docs/MA/api/media/camera/createCameraContext
---
```ts
import { createCameraContext, FacingMode } from "zmp-sdk/apis";
```

Khởi tạo context camera với class `ZMACamera` hỗ trợ streaming, chụp ảnh, chuyển camera trước/sau.

## Ví dụ

```ts
const camera = createCameraContext({
  videoElement: videoElement,
  mediaConstraints: {
    width: 640,
    height: 480,
    facingMode: FacingMode.BACK,
    audio: false,
  },
});
```

## Phương thức điều khiển

- `start()`: Bắt đầu streaming camera.
- `stop()`: Dừng và giải phóng camera/micro.
- `pause()` / `resume()`: Tạm dừng / tiếp tục streaming.
- `takePhoto()`: Chụp ảnh từ camera.
- `flip()`: Đổi camera trước/sau.
- `setMirror(boolean)`: Bật/tắt chế độ gương.
