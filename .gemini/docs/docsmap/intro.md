---
sourceType: api-reference
slug: MA/api/intro
title: Giới Thiệu
source: https://docs.zaloplatforms.com/docs/MA/api/intro
---
Zalo Mini App API cung cấp các api để bạn tương tác với ứng dụng Zalo. Một số API yêu cầu bạn gửi xét duyệt trước khi được sử dụng.

:::tip
Với tài khoản là **Admin của Ứng dụng**, bạn có thể sử dụng toàn bộ các API trong quá trình phát triển ứng dụng mà không cần đợi xét duyệt.
:::

## Cài Đặt

```sh
npm install zmp-sdk
```

## Events API

| Tên                                                            | Mô tả                                                                                               | Note         |
| -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------ |
| [on](/docs/MA/api/events#oneventname-listener)                        | Thêm một hàm xử lý cho sự kiện. Khi sự kiện xảy ra, tất cả các hàm xử lý của sự kiện đó sẽ được gọi |              |
| [once](/docs/MA/api/events#onceeventname-listener)                    | Thêm hàm xử lý một lần cho sự kiện. Khi sự kiện xảy ra, hàm xử lý này sẽ bị xoá và sau đó thực thi  |              |
| [off](/docs/MA/api/events#offeventname-listener)                      | Xoá một hàm xử lý cụ thể trong mảng các hàm xử lý của sự kiện                                       |              |
| [removeAllListeners](/docs/MA/api/events#removealllistenerseventname) | Xoá tất cả hàm xử lý của sự kiện                                                                    |              |
| onConfirmToExit                                                | Dùng để lắng nghe sự kiện khi user nhấn đóng mini app                                               | Ngừng hỗ trợ |
| offConfirmToExit                                               | Hủy nghe sự kiện user nhấn đóng mini app                                                            | Ngừng hỗ trợ |
| [onNetworkStatusChange](/docs/MA/api/device/network/onNetworkStatusChange)           | Dùng để lắng nghe sự kiện thay đổi mạng                                                             |              |

## Events Name

| Tên                                           | Mô tả                                                                         |
| --------------------------------------------- | ----------------------------------------------------------------------------- |
| [AppPaused](/docs/MA/api/events#apppaused)           | Sự kiện này xảy ra khi Zalo Mini App chuyển từ foreground sang background     |
| [AppResumed](/docs/MA/api/events#appresumed)         | Sự kiện này xảy ra khi Zalo Mini App chuyển từ background sang foreground     |
| [NetworkChanged](/docs/MA/api/events#networkchanged) | Sự kiện này xảy ra khi phát hiện thay đổi kết nối mạng                        |
| [OnDataCallback](/docs/MA/api/events#ondatacallback) | Sự kiện này xảy ra khi nhận được data từ Mini App được mở trước đó            |
| [OpenApp](/docs/MA/api/events#openapp)               | Sự kiện này xảy ra khi Zalo Mini App được mở lại từ chế độ nền (chưa tắt hẳn) |

## User

### Authorization

| Tên                         | Mô tả                 |
| --------------------------- | --------------------- |
| [authorize](/docs/MA/api/user/authorization/authorize) | Cấp quyền sử dụng API |

### User Information

| Tên                                    | Mô tả                                      |
| -------------------------------------- | ------------------------------------------ |
| [getUserID](/docs/MA/api/user/user-information/getUserID)           | Lấy ID của người dùng                      |
| [getUserInfo](/docs/MA/api/user/user-information/getUserInfo)       | Lấy thông tin của người dùng               |
| [getAccessToken](/docs/MA/api/user/user-information/getAccessToken) | Lấy token dùng để định danh người dùng     |
| [getPhoneNumber](/docs/MA/api/user/user-information/getPhoneNumber) | Lấy thông tin số điện thoại của người dùng |

### User Settings

| Tên                            | Mô tả                                          |
| ------------------------------ | ---------------------------------------------- |
| [getSetting](/docs/MA/api/user/setting/getSetting) | Lấy thông tin cài đặt hiện tại của người dùng. |

## Basic

| Tên                                        | Mô tả                                              |
| ------------------------------------------ | -------------------------------------------------- |
| [getAppInfo](/docs/MA/api/basics/getAppInfo)             | Lấy thông tin của Zalo Mini App                    |
| [getSystemInfo](/docs/MA/api/basics/getSystemInfo)       | Lấy thông tin của Zalo App và thiết bị             |
| [getDeviceIdAsync](/docs/MA/api/basics/getDeviceIdAsync) | Lấy chuỗi định danh duy nhất cho từng thiết bị.    |
| [getContextAsync](/docs/MA/api/basics/getContextAsync)   | Lấy thông tin về ngữ cảnh mà Zalo Mini App được mở |

## Routing

| Tên                                                          | Mô tả                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------ |
| [closeApp](/docs/MA/api/routing/closeApp)                                   | Đóng mini app                                          |
| [openMiniApp](/docs/MA/api/routing/openMiniApp)                             | Mở mini app                                            |
| [openWebview](/docs/MA/api/routing/openWebview)                             | Mở webview                                             |
| [sendDataToPreviousMiniApp](/docs/MA/api/routing/sendDataToPreviousMiniApp) | Gửi dữ liệu cho mini app trước đó                      |
| [getRouteParams](/docs/MA/api/routing/getRouteParams)                       | Lấy các param được gửi đến trang hiện tại của mini app |

## Storage

| Tên                                          | Mô tả                                                                                            |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| [setItem](/docs/MA/api/native-storage/setItem)                     | Lưu trữ dữ liệu xuống bộ đệm theo cơ chế đồng bộ. Dữ liệu sẽ được lưu ở thiết bị của người dùng. |
| [getItem](/docs/MA/api/native-storage/getItem)                     | Lấy dữ liệu đã lưu ở bộ đệm theo cơ chế đồng bộ                                                  |
| [removeItem](/docs/MA/api/native-storage/removeItem)               | Xóa dữ liệu đã lưu ở bộ đệm theo cơ chế đồng bộ                                                  |
| [clear](/docs/MA/api/native-storage/clear)                         | Xóa tất cả dữ liệu đã lưu ở bộ đệm theo cơ chế đồng bộ                                           |
| [getStorageInfo](/docs/MA/api/native-storage/getNativeStorageInfo) | Lấy thông tin bộ đệm theo cơ chế đồng bộ                                                         |

## Local File Storage

| Tên                                              | Mô tả                                                          |
| ------------------------------------------------ | -------------------------------------------------------------- |
| [Tổng quan về local file](/docs/MA/api/lfs/localFileSystem) | Giới thiệu tổng quan về hệ thống local file của mini app.      |
| [isSupportLFS](/docs/MA/api/lfs/isSupportLFS)               | Kiểm tra xem LFS có được hỗ trợ không.                         |
| [getFileInfo](/docs/MA/api/lfs/getFileInfo)                 | Lấy thông tin của local file (local cache hoặc local data).    |
| [getSavedFileList](/docs/MA/api/lfs/getSavedFileList)       | Lấy thông tin tất cả các local file đã lưu của mini app.       |
| [removeSavedFile](/docs/MA/api/lfs/removeSavedFile)         | Xoá local file đã lưu.                                         |
| [saveFile](/docs/MA/api/lfs/saveFile)                       | Lưu file từ đường dẫn tạm thời về vùng nhớ cục bộ (local data) |

## UI

### Feedback

| Tên                                | Mô tả                                          |
| ---------------------------------- | ---------------------------------------------- |
| [showToast](/docs/MA/api/user-interface/interative/showToast)       | Hiển thị toast và tự ẩn sau 1 khoảng thời gian |
| [closeLoading](/docs/MA/api/user-interface/interative/closeLoading) | Tắt màn hình Splash Loading                    |

### View

| Tên                                                            | Mô tả                                                                                                                             |
| -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| [configAppView](/docs/MA/api/user-interface/view/configAppView)                           | Ẩn/ hiện, tuỳ chỉnh màu sắc, kiểu hiển thị của status bar, action bar, bottom navigation (Android) / safe area inset bottom (iOS) |
| [setNavigationBarColor](/docs/MA/api/user-interface/view/setNavigationBarColor)           | Đặt lại màu thanh điều hướng của trang hiện tại                                                                                   |
| [setNavigationBarLeftButton](/docs/MA/api/user-interface/view/setNavigationBarLeftButton) | Đặt lại nút bên trái (Home, Back) trên thanh điều hướng của trang hiện tại                                                        |
| [setNavigationBarTitle](/docs/MA/api/user-interface/view/setNavigationBarTitle)           | Đặt lại tiêu đề trên thanh điều hướng của trang hiện tại                                                                          |

### Keyboard

| Tên                                | Mô tả       |
| ---------------------------------- | ----------- |
| [hideKeyboard](/docs/MA/api/user-interface/keyboard/hideKeyboard) | Ẩn bàn phím |

## Location

| Tên                              | Mô tả                              |
| -------------------------------- | ---------------------------------- |
| [getLocation](/docs/MA/api/location/getLocation) | Lấy vị trí hiện tại của người dùng |

## Media

### Camera

| Tên                                                                 | Mô tả                                                      |
| ------------------------------------------------------------------- | ---------------------------------------------------------- |
| [createCameraContext](/docs/MA/api/media/camera/createCameraContext)                     | Tạo đối tượng quản lý streaming                            |
| [start](/docs/MA/api/media/camera/cameraContext/start)                                   | Bắt đầu streaming từ camera                                |
| [stop](/docs/MA/api/media/camera/cameraContext/stop)                                     | Kết thúc streaming từ camera                               |
| [pause](/docs/MA/api/media/camera/cameraContext/pause)                                   | Tạm dừng streaming                                         |
| [resume](/docs/MA/api/media/camera/cameraContext/resume)                                 | Tiếp tục lại streaming                                     |
| [isUsing](/docs/MA/api/media/camera/cameraContext/isUsing)                               | Kiểm tra trạng thái streaming                              |
| [updateMediaConstraints](/docs/MA/api/media/camera/cameraContext/updateMediaConstraints) | Update cấu hình streaming                                  |
| [takePhoto](/docs/MA/api/media/camera/cameraContext/takePhoto)                           | Chụp ảnh từ camera                                         |
| [flip](/docs/MA/api/media/camera/cameraContext/flip)                                     | Chuyển camera trước/sau                                    |
| [setMirror](/docs/MA/api/media/camera/cameraContext/setMirror)                           | Bật/tắt chế độ gương cho ảnh.                              |
| [getCameraList](/docs/MA/api/media/camera/cameraContext/getCameraList)                   | Lấy danh sách camera đang active trên điện thoại           |
| [getSelectedDeviceId](/docs/MA/api/media/camera/cameraContext/getSelectedDeviceId)       | Lấy deviceId của camera đang active                        |
| [setDeviceId](/docs/MA/api/media/camera/cameraContext/setDeviceId)                       | Chuyển camera active bằng deviceId                         |
| [on](/docs/MA/api/media/camera/cameraContext/on)                                         | Lắng nghe các sự kiện CameraEvents                         |
| [off](/docs/MA/api/media/camera/cameraContext/off)                                       | Ngừng lắng nghe sự kiện CameraEvents                       |
| [checkZaloCameraPermission](/docs/MA/api/media/camera/checkZaloCameraPermission)        | Cho phép ứng dụng kiểm tra quyền truy cập camera của Zalo  |
| [requestCameraPermission](/docs/MA/api/media/camera/requestCameraPermission)            | Cho phép ứng dụng yêu cầu device cấp quyền truy cập camera |

### Media

| Tên                                            | Mô tả                                                       |
| ---------------------------------------------- | ----------------------------------------------------------- |
| [chooseImage](/docs/MA/api/media/file/chooseImage)               | Chọn hình ảnh từ album hoặc camera                          |
| [openMediaPicker](/docs/MA/api/media/file/openMediaPicker)       | Mở cửa sổ chọn media (camera, ảnh, file, video) từ thiết bị |
| [saveImageToGallery](/docs/MA/api/media/file/saveImageToGallery) | Lưu ảnh vào thư viện media của thiết bị                     |
| [saveVideoToGallery](/docs/MA/api/media/file/saveVideoToGallery) | Lưu video vào thư viện media của thiết bị                   |
| [downloadFile](/docs/MA/api/media/file/downloadFile)             | Dowload file về máy                                         |
| [openDocument](/docs/MA/api/media/file/openDocument)             | Mở tài liệu PDF từ URL                                      |

## Device

### Network

| Tên                                    | Mô tả                      |
| -------------------------------------- | -------------------------- |
| [getNetworkType](/docs/MA/api/device/network/getNetworkType) | Lấy thông tin kết nối mạng |
| [downloadFile](/docs/MA/api/media/file/downloadFile)     | Dowload file về máy        |

### Contact

| Tên                          | Mô tả                                   |
| ---------------------------- | --------------------------------------- |
| [openPhone](/docs/MA/api/device/contact/openPhone) | Mở ứng dụng gọi điện thoại của thiết bị |
| [openSMS](/docs/MA/api/device/contact/openSMS)     | Mở ứng dụng tin nhắn của thiết bị       |

### Screen

| Tên                            | Mô tả                 |
| ------------------------------ | --------------------- |
| [keepScreen](/docs/MA/api/device/screen/keepScreen) | Giữ màn hình luôn bật |

### Vibrate

| Tên                      | Mô tả                              |
| ------------------------ | ---------------------------------- |
| [vibrate](/docs/MA/api/device/vibrate) | Kích hoạt chế độ rung của thiết bị |

### Biometric Authentication

| Tên                                                              | Mô tả                                     |
| ---------------------------------------------------------------- | ----------------------------------------- |
| [openBioAuthentication](/docs/MA/api/device/bio-authentication/openBioAuthentication)             | Mở giao diện đăng nhập sinh trắc học      |
| [checkStateBioAuthentication](/docs/MA/api/device/bio-authentication/checkStateBioAuthentication) | Kiểm tra thông tin xác thực sinh trắc học |

## Permission

| Tên                                                      | Mô tả                                                              |
| -------------------------------------------------------- | ------------------------------------------------------------------ |
| [requestSendNotification](/docs/MA/api/permission/requestSendNotification) | Yêu cầu người dùng cho phép ứng dụng gửi thông báo qua OA Mini App |
| [openPermissionSetting](/docs/MA/api/permission/openPermissionSetting)     | Mở cửa sổ cài đặt quyền mà người dùng đã cấp cho ứng dụng          |

## Zalo

| Tên                                          | Mô tả                                                                                   |
| -------------------------------------------- | --------------------------------------------------------------------------------------- |
| [openProfile](/docs/MA/api/zalo/openProfile)             | Mở màn hình thông tin của người dùng hoặc Official Account                              |
| [openProfilePicker](/docs/MA/api/zalo/openProfilePicker) | Mở cửa sổ chọn bạn bè trong Zalo                                                        |
| [openChat](/docs/MA/api/zalo/openChat)                   | Mở cửa sổ nhắn tin với người dùng hoặc Official Account                                 |
| [followOA](/docs/MA/api/zalo/followOA)                   | Theo dõi Official Account                                                               |
| [unfollowOA](/docs/MA/api/zalo/unfollowOA)               | Bỏ theo dõi Official Account                                                            |
| [openShareSheet](/docs/MA/api/zalo/openShareSheet)       | Mở cửa sổ chia sẻ trong Zalo                                                            |
| [openPostFeed](/docs/MA/api/zalo/openPostFeed)           | Mở cửa sổ chia sẻ lên nhật ký trong Zalo                                                |
| [createShortcut](/docs/MA/api/zalo/createShortcut)       | Tạo shorcut của mini app trên màn hình thiết bị                                         |
| [viewOAQr](/docs/MA/api/zalo/viewOAQr)                   | Hiển thị QR code của Official Account                                                   |
| [requestUpdateZalo](/docs/MA/api/zalo/requestUpdateZalo) | Chủ động điều hướng người dùng tới AppStore/CH Play để cập nhật phiên bản Zalo mới nhất |
| [minimizeApp](/docs/MA/api/zalo/minimizeApp)             | Thu nhỏ mini app                                                                        |
| [favoriteApp](/docs/MA/api/zalo/favoriteApp)             | Thêm ứng dụng vào danh sách ưa thích ở Mini Store                                       |
| [addRating](/docs/MA/api/zalo/addRating)                 | Mở cửa sổ đánh giá ứng dụng                                                             |

## Advertising

| Tên                          | Mô tả                                           |
| ---------------------------- | ----------------------------------------------- |
| [setupAd](/docs/MA/api/advertising/setupAd)     | Cấu hình các thông tin dùng để chạy quảng cáo.  |
| [loadAd](/docs/MA/api/advertising/loadAd)       | API dùng để tải quảng cáo                       |
| [displayAd](/docs/MA/api/advertising/displayAd) | API dùng để hiển thị quảng cáo sau khi tải xong |
| [refreshAd](/docs/MA/api/advertising/refreshAd) | API dùng để xóa quảng cáo ở phiên hiện tại      |

## Widgets

| Tên                                                        | Mô tả                           |
| ---------------------------------------------------------- | ------------------------------- |
| [showOAWidget](/docs/MA/api/widgets/showOAWidget)                         | Hiển thị Widget Quan tâm OA     |
| [showFunctionButtonWidget](/docs/MA/api/widgets/showFunctionButtonWidget) | Hiển thị Widget Function Button |