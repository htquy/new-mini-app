---
sourceType: api-reference
slug: MA/api/advertising/loadAd
title: loadAd
source: https://docs.zaloplatforms.com/docs/MA/api/advertising/loadAd
---
```ts
import { loadAd } from "zmp-sdk";
```

API dùng để tải quảng cáo trước khi hiển thị.

## Ví dụ

```ts
loadAd({
  placementId: "YOUR_PLACEMENT_ID",
  onAdLoaded: () => {
    console.log("Quảng cáo đã tải xong");
  },
  onAdFailedToLoad: (error) => {
    console.error("Tải quảng cáo thất bại", error);
  },
});
```
