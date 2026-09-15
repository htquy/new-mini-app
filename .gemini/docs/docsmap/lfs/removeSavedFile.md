---
sourceType: api-reference
slug: MA/api/lfs/removeSavedFile
title: removeSavedFile
source: https://docs.zaloplatforms.com/docs/MA/api/lfs/removeSavedFile
---
Xoá local file đã lưu.

## Parameters

| Property | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| filePath | string | | true | Đường dẫn tới file trong folder đã lưu cục bộ |
| success | function | | | Callback function khi gọi api thành công |
| fail | function | | | Callback function khi gọi api thất bại |

## Sample Code

```jsx
import { LFSStorage } from 'zmp-sdk/apis';

LFSStorage.removeSavedFile({
  filePath: "Đường dẫn tới file",
  success: () => {
    // xử lý khi gọi api thành công
  },
  fail: (error) => {
    console.log(error);
  },
});
```

Hoặc sử dụng async/await:

```jsx
import { LFSStorage } from 'zmp-sdk/apis';

const removeSavedFile = async () => {
  try {
    await LFSStorage.removeSavedFile({
      filePath: "Đường dẫn tới file",
    });
  } catch (error) {
    console.log(error);
  }
};
```

## Errors

| Code | Message |
| --- | --- |
| -302 | File cannot be found. Please check your param again. |
