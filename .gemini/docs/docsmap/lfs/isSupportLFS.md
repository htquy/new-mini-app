---
sourceType: api-reference
slug: MA/api/lfs/isSupportLFS
title: isSupportLFS
source: https://docs.zaloplatforms.com/docs/MA/api/lfs/isSupportLFS
---
Kiểm tra xem LFS có được hỗ trợ không.

## Sample Code

```jsx
import { LFSStorage } from 'zmp-sdk/apis';

const isSupportLFS = async () => {
  try {
    const { support } = await LFSStorage.isSupportLFS();
    if (support) {
      // LFS được hỗ trợ
    } else {
      // LFS không được hỗ trợ
    }
  } catch (error) {
    // xử lý khi gọi api thất bại
    console.log(error);
  }
};
```
