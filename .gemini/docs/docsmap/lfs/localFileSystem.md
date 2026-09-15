---
sourceType: api-reference
slug: MA/api/lfs/localFileSystem
title: Tổng quan về local file
source: https://docs.zaloplatforms.com/docs/MA/api/lfs/localFileSystem
---
> **Thông tin:** Để kiểm tra LFS có được hỗ trợ hay không, vui lòng sử dụng API [isSupportLFS](/docs/MA/api/lfs/isSupportLFS).

Trong quá trình sử dụng các API (vd: [openMediaPicker](/docs/MA/api/media/file/openMediaPicker), [saveFile](/docs/MA/api/lfs/saveFile)) sẽ sinh ra các local file (file cục bộ). Dựa vào mục đích sử dụng, local file được chia làm 2 loại sau:

## Local cache file

Format:
- Android: `https://miniprogram/MPStorage/LFS/caches/[file name+extension]`
- iOS: `miniappres://miniprogram/MPStorage/LFS/caches/[file name+extension]`

File sinh ra khi gọi API như [openMediaPicker](/docs/MA/api/media/file/openMediaPicker). Các file này được lưu tạm thời và sẽ được xóa khi app khởi động lại. Nếu app có nhu cầu lưu lại file để sử dụng cho lần sau thì dùng api [saveFile](/docs/MA/api/lfs/saveFile) để chuyển thành local data file.

## Local data file

Format:
- Android: `https://miniprogram/MPStorage/LFS/data/[file name+extension]`
- iOS: `miniappres://miniprogram/MPStorage/LFS/data/[file name+extension]`

File sinh ra khi gọi API [saveFile](/docs/MA/api/lfs/saveFile) để tải file từ internet hoặc file tạm (local cache) về vùng nhớ cục bộ (local data). Dung lượng lưu trữ tối đa cho local data files là **10MB** cho mỗi ứng dụng. Quá giới hạn này sẽ báo lỗi `-300`. App chủ động việc xóa bớt file không cần thiết để giải phóng dung lượng lưu trữ bằng API [removeSavedFile](/docs/MA/api/lfs/removeSavedFile).
