---
sourceType: api-reference
slug: MA/api/lfs/getSavedFileList
title: getSavedFileList
source: https://docs.zaloplatforms.com/docs/MA/api/lfs/getSavedFileList
---
Lấy thông tin tất cả các local data file đã được lưu của mini app.

## Parameters

| Property | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| success | function | | | Callback function khi gọi api thành công |
| fail | function | | | Callback function khi gọi api thất bại |

## Return Values

| Property | Type | Description |
| --- | --- | --- |
| list | `Array<FileInfo>` | Danh sách file đã lưu cục bộ |

### FileInfo

| Property | Type | Description |
| --- | --- | --- |
| filePath | string | Đường dẫn tới file trong folder cục bộ của mini app. |
| size | number | Kích thước file (byte size) |
| createTime | number | Thời gian file được tạo |
| type | string | Type của file (Vd: image/jpeg, video/mp4) |

## Sample Code

```jsx
import { LFSStorage } from 'zmp-sdk/apis';

LFSStorage.getSavedFileList({
  success: (data) => {
    const { list } = data;
  },
  fail: (error) => {
    console.log(error);
  },
});
```

Hoặc sử dụng async/await:

```jsx
import { LFSStorage } from 'zmp-sdk/apis';

const getSavedFileList = async () => {
  try {
    const { list } = await LFSStorage.getSavedFileList({});
  } catch (error) {
    console.log(error);
  }
};
```
