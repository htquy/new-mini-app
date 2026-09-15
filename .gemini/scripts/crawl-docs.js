#!/usr/bin/env node
/**
 * Script tự động tải toàn bộ tài liệu Zalo Mini App API
 * từ docs.zaloplatforms.com và lưu thành file markdown local.
 *
 * Chạy: node .gemini/scripts/crawl-docs.js
 * Output: .gemini/docs/docsmap/...
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE_URL = "https://docs.zaloplatforms.com";
const OUTPUT_DIR = path.resolve(__dirname, "../docs/docsmap");

// Toàn bộ danh sách trang tài liệu lấy từ sidebar.html
const DOC_PAGES = [
  // ─── Top-level ───────────────────────────────────────────
  { href: "/docs/MA/api/intro",      category: "",           title: "Giới Thiệu" },
  { href: "/docs/MA/api/events",     category: "",           title: "Events" },
  { href: "/docs/MA/api/errorCode",  category: "",           title: "Errors" },
  { href: "/docs/MA/api/changelog",  category: "",           title: "Change Log" },

  // ─── Basic ───────────────────────────────────────────────
  { href: "/docs/MA/api/basics/getAppInfo",       category: "basic",   title: "getAppInfo" },
  { href: "/docs/MA/api/basics/getContextAsync",  category: "basic",   title: "getContextAsync" },
  { href: "/docs/MA/api/basics/getDeviceIdAsync", category: "basic",   title: "getDeviceIdAsync" },
  { href: "/docs/MA/api/basics/getSystemInfo",    category: "basic",   title: "getSystemInfo" },

  // ─── Routing ─────────────────────────────────────────────
  { href: "/docs/MA/api/routing/closeApp",                   category: "routing", title: "closeApp" },
  { href: "/docs/MA/api/routing/getRouteParams",             category: "routing", title: "getRouteParams" },
  { href: "/docs/MA/api/routing/openMiniApp",                category: "routing", title: "openMiniApp" },
  { href: "/docs/MA/api/routing/openWebview",                category: "routing", title: "openWebview" },
  { href: "/docs/MA/api/routing/sendDataToPreviousMiniApp",  category: "routing", title: "sendDataToPreviousMiniApp" },

  // ─── Storage ─────────────────────────────────────────────
  { href: "/docs/MA/api/native-storage/setItem",               category: "storage", title: "setItem" },
  { href: "/docs/MA/api/native-storage/getItem",               category: "storage", title: "getItem" },
  { href: "/docs/MA/api/native-storage/getNativeStorageInfo",  category: "storage", title: "getStorageInfo" },
  { href: "/docs/MA/api/native-storage/removeItem",            category: "storage", title: "removeItem" },
  { href: "/docs/MA/api/native-storage/clear",                 category: "storage", title: "clear" },

  // ─── Local File Storage ───────────────────────────────────
  { href: "/docs/MA/api/lfs/localFileSystem",  category: "lfs", title: "Tổng quan về local file" },
  { href: "/docs/MA/api/lfs/isSupportLFS",     category: "lfs", title: "isSupportLFS" },
  { href: "/docs/MA/api/lfs/getFileInfo",      category: "lfs", title: "getFileInfo" },
  { href: "/docs/MA/api/lfs/getSavedFileList", category: "lfs", title: "getSavedFileList" },
  { href: "/docs/MA/api/lfs/removeSavedFile",  category: "lfs", title: "removeSavedFile" },
  { href: "/docs/MA/api/lfs/saveFile",         category: "lfs", title: "saveFile" },

  // ─── UI > Feedback ───────────────────────────────────────
  { href: "/docs/MA/api/user-interface/interative/closeLoading", category: "ui/feedback", title: "closeLoading" },
  { href: "/docs/MA/api/user-interface/interative/showToast",    category: "ui/feedback", title: "showToast" },

  // ─── UI > View ───────────────────────────────────────────
  { href: "/docs/MA/api/user-interface/view/configAppView",              category: "ui/view", title: "configAppView" },
  { href: "/docs/MA/api/user-interface/view/setNavigationBarColor",      category: "ui/view", title: "setNavigationBarColor" },
  { href: "/docs/MA/api/user-interface/view/setNavigationBarLeftButton", category: "ui/view", title: "setNavigationBarLeftButton" },
  { href: "/docs/MA/api/user-interface/view/setNavigationBarTitle",      category: "ui/view", title: "setNavigationBarTitle" },

  // ─── UI > Keyboard ───────────────────────────────────────
  { href: "/docs/MA/api/user-interface/keyboard/hideKeyboard", category: "ui/keyboard", title: "hideKeyboard" },

  // ─── Location ────────────────────────────────────────────
  { href: "/docs/MA/api/location/getLocation", category: "location", title: "getLocation" },

  // ─── Media > Camera ──────────────────────────────────────
  { href: "/docs/MA/api/media/camera/createCameraContext",                      category: "media/camera", title: "createCameraContext" },
  { href: "/docs/MA/api/media/camera/checkZaloCameraPermission",                category: "media/camera", title: "checkZaloCameraPermission" },
  { href: "/docs/MA/api/media/camera/requestCameraPermission",                  category: "media/camera", title: "requestCameraPermission" },
  { href: "/docs/MA/api/media/camera/cameraContext/start",                      category: "media/camera/cameraContext", title: "CameraContext.start" },
  { href: "/docs/MA/api/media/camera/cameraContext/stop",                       category: "media/camera/cameraContext", title: "CameraContext.stop" },
  { href: "/docs/MA/api/media/camera/cameraContext/pause",                      category: "media/camera/cameraContext", title: "CameraContext.pause" },
  { href: "/docs/MA/api/media/camera/cameraContext/resume",                     category: "media/camera/cameraContext", title: "CameraContext.resume" },
  { href: "/docs/MA/api/media/camera/cameraContext/isUsing",                    category: "media/camera/cameraContext", title: "CameraContext.isUsing" },
  { href: "/docs/MA/api/media/camera/cameraContext/updateMediaConstraints",     category: "media/camera/cameraContext", title: "CameraContext.updateMediaConstraints" },
  { href: "/docs/MA/api/media/camera/cameraContext/takePhoto",                  category: "media/camera/cameraContext", title: "CameraContext.takePhoto" },
  { href: "/docs/MA/api/media/camera/cameraContext/flip",                       category: "media/camera/cameraContext", title: "CameraContext.flip" },
  { href: "/docs/MA/api/media/camera/cameraContext/setMirror",                  category: "media/camera/cameraContext", title: "CameraContext.setMirror" },
  { href: "/docs/MA/api/media/camera/cameraContext/getCameraList",              category: "media/camera/cameraContext", title: "CameraContext.getCameraList" },
  { href: "/docs/MA/api/media/camera/cameraContext/getSelectedDeviceId",        category: "media/camera/cameraContext", title: "CameraContext.getSelectedDeviceId" },
  { href: "/docs/MA/api/media/camera/cameraContext/setDeviceId",                category: "media/camera/cameraContext", title: "CameraContext.setDeviceId" },
  { href: "/docs/MA/api/media/camera/cameraContext/on",                         category: "media/camera/cameraContext", title: "CameraContext.on" },
  { href: "/docs/MA/api/media/camera/cameraContext/off",                        category: "media/camera/cameraContext", title: "CameraContext.off" },

  // ─── Media > File ────────────────────────────────────────
  { href: "/docs/MA/api/media/file/chooseImage",         category: "media/file", title: "chooseImage" },
  { href: "/docs/MA/api/media/file/openMediaPicker",     category: "media/file", title: "openMediaPicker" },
  { href: "/docs/MA/api/media/file/saveImageToGallery",  category: "media/file", title: "saveImageToGallery" },
  { href: "/docs/MA/api/media/file/saveVideoToGallery",  category: "media/file", title: "saveVideoToGallery" },
  { href: "/docs/MA/api/media/file/downloadFile",        category: "media/file", title: "downloadFile" },
  { href: "/docs/MA/api/media/file/openDocument",        category: "media/file", title: "openDocument" },

  // ─── Device > Network ────────────────────────────────────
  { href: "/docs/MA/api/device/network/getNetworkType",         category: "device/network", title: "getNetworkType" },
  { href: "/docs/MA/api/device/network/onNetworkStatusChange",  category: "device/network", title: "onNetworkStatusChange" },

  // ─── Device > Contact ────────────────────────────────────
  { href: "/docs/MA/api/device/contact/openPhone", category: "device/contact", title: "openPhone" },
  { href: "/docs/MA/api/device/contact/openSMS",   category: "device/contact", title: "openSMS" },

  // ─── Device > Screen ─────────────────────────────────────
  { href: "/docs/MA/api/device/screen/keepScreen", category: "device/screen", title: "keepScreen" },

  // ─── Device > Vibrate ────────────────────────────────────
  { href: "/docs/MA/api/device/vibrate", category: "device/vibrate", title: "vibrate" },

  // ─── Device > Bio Authentication ─────────────────────────
  { href: "/docs/MA/api/device/bio-authentication/openBioAuthentication",             category: "device/bio-auth", title: "openBioAuthentication" },
  { href: "/docs/MA/api/device/bio-authentication/checkStateBioAuthentication",       category: "device/bio-auth", title: "checkStateBioAuthentication" },

  // ─── User > Authorization ────────────────────────────────
  { href: "/docs/MA/api/user/authorization/authorize", category: "user/authorization", title: "authorize" },

  // ─── User > User Information ─────────────────────────────
  { href: "/docs/MA/api/user/user-information/getUserID",       category: "user/info", title: "getUserID" },
  { href: "/docs/MA/api/user/user-information/getUserInfo",     category: "user/info", title: "getUserInfo" },
  { href: "/docs/MA/api/user/user-information/getAccessToken",  category: "user/info", title: "getAccessToken" },
  { href: "/docs/MA/api/user/user-information/getPhoneNumber",  category: "user/info", title: "getPhoneNumber" },

  // ─── User > Setting ──────────────────────────────────────
  { href: "/docs/MA/api/user/setting/getSetting", category: "user/setting", title: "getSetting" },

  // ─── Permission ──────────────────────────────────────────
  { href: "/docs/MA/api/permission/requestSendNotification",  category: "permission", title: "requestSendNotification" },
  { href: "/docs/MA/api/permission/openPermissionSetting",    category: "permission", title: "openPermissionSetting" },

  // ─── Advertising ─────────────────────────────────────────
  { href: "/docs/MA/api/advertising/setupAd",    category: "advertising", title: "setupAd" },
  { href: "/docs/MA/api/advertising/loadAd",     category: "advertising", title: "loadAd" },
  { href: "/docs/MA/api/advertising/displayAd",  category: "advertising", title: "displayAd" },
  { href: "/docs/MA/api/advertising/refreshAd",  category: "advertising", title: "refreshAd" },

  // ─── Zalo ────────────────────────────────────────────────
  { href: "/docs/MA/api/zalo/addRating",          category: "zalo", title: "addRating" },
  { href: "/docs/MA/api/zalo/createShortcut",     category: "zalo", title: "createShortcut" },
  { href: "/docs/MA/api/zalo/favoriteApp",        category: "zalo", title: "favoriteApp" },
  { href: "/docs/MA/api/zalo/followOA",           category: "zalo", title: "followOA" },
  { href: "/docs/MA/api/zalo/interactOA",         category: "zalo", title: "interactOA" },
  { href: "/docs/MA/api/zalo/minimizeApp",        category: "zalo", title: "minimizeApp" },
  { href: "/docs/MA/api/zalo/openChat",           category: "zalo", title: "openChat" },
  { href: "/docs/MA/api/zalo/openPostFeed",       category: "zalo", title: "openPostFeed" },
  { href: "/docs/MA/api/zalo/openProfile",        category: "zalo", title: "openProfile" },
  { href: "/docs/MA/api/zalo/openProfilePicker",  category: "zalo", title: "openProfilePicker" },
  { href: "/docs/MA/api/zalo/openShareSheet",     category: "zalo", title: "openShareSheet" },
  { href: "/docs/MA/api/zalo/requestUpdateZalo",  category: "zalo", title: "requestUpdateZalo" },
  { href: "/docs/MA/api/zalo/unfollowOA",         category: "zalo", title: "unfollowOA" },
  { href: "/docs/MA/api/zalo/viewOAQr",           category: "zalo", title: "viewOAQr" },

  // ─── Widgets ─────────────────────────────────────────────
  { href: "/docs/MA/api/widgets/showFunctionButtonWidget",  category: "widgets", title: "showFunctionButtonWidget" },
  { href: "/docs/MA/api/widgets/showOAWidget",              category: "widgets", title: "showOAWidget" },
];

/**
 * Fetch nội dung markdown thuần từ server Docusaurus (endpoint .md)
 */
async function fetchMarkdown(href) {
  const url = `${BASE_URL}${href}.md`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} – ${url}`);
  return await res.text();
}

/**
 * Chuyển href thành đường dẫn file output
 * Ví dụ: /docs/MA/api/basics/getSystemInfo → basic/getSystemInfo.md
 */
function hrefToOutputPath(href, category) {
  // Lấy tên file cuối cùng
  const filename = href.split("/").pop();
  if (category) {
    return path.join(OUTPUT_DIR, category, `${filename}.md`);
  }
  return path.join(OUTPUT_DIR, `${filename}.md`);
}

/**
 * Xóa phần frontmatter do tool tự thêm và chuẩn hóa nội dung
 */
function cleanContent(raw, page) {
  // Bỏ dòng đầu "Title: Live Content" nếu có
  let content = raw.replace(/^Title:.*\n\nDescription:.*\n\nSource:.*\n\n---\n\n/, "");
  return content.trim();
}

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function main() {
  console.log(`📂 Output dir: ${OUTPUT_DIR}`);
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const results = { success: [], failed: [] };

  for (let i = 0; i < DOC_PAGES.length; i++) {
    const page = DOC_PAGES[i];
    const outPath = hrefToOutputPath(page.href, page.category);
    const outDir = path.dirname(outPath);

    process.stdout.write(`[${i + 1}/${DOC_PAGES.length}] ${page.title} ... `);

    // Skip nếu đã tồn tại
    if (fs.existsSync(outPath)) {
      console.log("⏭ skipped (exists)");
      results.success.push(page.href);
      continue;
    }

    try {
      const raw = await fetchMarkdown(page.href);
      const cleaned = cleanContent(raw, page);

      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(outPath, cleaned, "utf-8");

      console.log(`✅ saved → ${path.relative(OUTPUT_DIR, outPath)}`);
      results.success.push(page.href);
    } catch (err) {
      console.log(`❌ ${err.message}`);
      results.failed.push({ href: page.href, error: err.message });
    }

    // Delay nhỏ để không bị rate-limit
    if (i < DOC_PAGES.length - 1) await sleep(200);
  }

  // ─── Tạo file README/index tổng hợp ─────────────────────
  generateIndex(results);

  console.log(`\n✨ Done! ${results.success.length} succeeded, ${results.failed.length} failed.`);
  if (results.failed.length > 0) {
    console.log("Failed pages:");
    results.failed.forEach(f => console.log(`  ✗ ${f.href}: ${f.error}`));
  }
}

function generateIndex(results) {
  const indexPath = path.join(OUTPUT_DIR, "README.md");
  const lines = [
    "# 📚 Zalo Mini App API – Tài liệu Local",
    "",
    "> Tài liệu này được tự động tải về từ [docs.zaloplatforms.com](https://docs.zaloplatforms.com) bởi script `crawl-docs.js`.",
    `> Cập nhật lần cuối: **${new Date().toLocaleString("vi-VN")}**`,
    "",
    "## Cấu trúc thư mục",
    "",
    "```",
    "docsmap/",
    "├── intro.md           # Giới thiệu tổng quan",
    "├── events.md          # Events API",
    "├── errorCode.md       # Bảng mã lỗi",
    "├── changelog.md       # Change Log",
    "├── basic/             # Basic APIs",
    "├── routing/           # Routing APIs",
    "├── storage/           # Storage APIs",
    "├── lfs/               # Local File Storage",
    "├── ui/                # User Interface (feedback, view, keyboard)",
    "├── location/          # Location APIs",
    "├── media/             # Media (camera, file)",
    "├── device/            # Device (network, contact, screen, vibrate, bio-auth)",
    "├── user/              # User (authorization, info, setting)",
    "├── permission/        # Permission APIs",
    "├── advertising/       # Advertising APIs",
    "├── zalo/              # Zalo APIs",
    "└── widgets/           # Widget APIs",
    "```",
    "",
    "## Danh sách tài liệu",
    "",
  ];

  const categories = {};
  for (const page of DOC_PAGES) {
    const cat = page.category || "_root";
    if (!categories[cat]) categories[cat] = [];
    categories[cat].push(page);
  }

  for (const [cat, pages] of Object.entries(categories)) {
    const label = cat === "_root" ? "Tổng quan" : cat;
    lines.push(`### ${label}`);
    lines.push("");
    for (const page of pages) {
      const filePath = path.relative(OUTPUT_DIR, hrefToOutputPath(page.href, page.category));
      const status = results.success.includes(page.href) ? "✅" : "❌";
      lines.push(`- ${status} [${page.title}](./${filePath})`);
    }
    lines.push("");
  }

  fs.writeFileSync(indexPath, lines.join("\n"), "utf-8");
  console.log(`\n📋 Index created: ${indexPath}`);
}

main().catch(console.error);
