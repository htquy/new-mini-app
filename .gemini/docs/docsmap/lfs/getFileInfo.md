---
sourceType: api-reference
slug: MA/api/lfs/getFileInfo
title: getFileInfo
source: https://docs.zaloplatforms.com/docs/MA/api/lfs/getFileInfo
---
Lấy thông tin local file. File có thể ở dạng tạm hoặc đã được lưu bền (local cache hoặc local data).

## Parameters

| Property | Type | Default | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| filePath | string | | true | Đường dẫn tới file trong folder tạm hoặc đã lưu cục bộ | |
| digestAlgorithm | string | md5 | | Thuật toán băm để lấy file summary, hỗ trợ: `md5`, `sha1` | |
| success | function | | | Callback function khi gọi api thành công | |
| fail | function | | | Callback function khi gọi api thất bại | |

## Return Values

| Property | Type | Description |
| --- | --- | --- |
| size | number | Kích thước file (byte size) |
| digest | string | Giá trị băm được tính dựa trên thông số của file (gồm size và tên của file) |
| type | string | Kiểu file (Vd: image/jpeg, video/mp4) |

## Sample Code

```jsx
import { LFSStorage } from 'zmp-sdk/apis';

LFSStorage.getFileInfo({
  filePath: "[Đường dẫn tới file]",
  digestAlgorithm: "md5",
  success: (data) => {
    const { size, digest, type } = data;
  },
  fail: (error) => {
    console.log(error);
  },
});
```

Hoặc sử dụng async/await:

```jsx
import { LFSStorage } from 'zmp-sdk/apis';

const getFileInfo = async () => {
  try {
    const { size, digest, type } = await LFSStorage.getFileInfo({
      filePath: "[Đường dẫn tới file]",
      digestAlgorithm: "md5",
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
