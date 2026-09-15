import React, { useState, useEffect } from "react";

// Types
interface URLParams {
  tracking_id: string;
  campaign_id: string;
}

interface Product {
  id: string;
  title: string;
  originalPrice: string;
  dealPrice: string;
  discount: string;
  image: string;
  platform: "shopee" | "lazada";
  sold: string;
  rating: number;
  targetUrl: string;
}

interface Voucher {
  id: string;
  title: string;
  subTitle: string;
  code: string;
  platform: "shopee" | "lazada";
  minSpend: string;
  expiry: string;
  targetUrl: string;
}

export const CampaignLandingPage: React.FC = () => {
  // 1. URL Parameters State
  const [params, setParams] = useState<URLParams>({
    tracking_id: "",
    campaign_id: "",
  });

  // User Info Mock
  const user = {
    name: "Nguyễn Văn A",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    phone: "098***6789",
    zaloUid: "ZALO_UID_88392104",
  };

  // 2. State for Redirection Feedback
  const [redirectingItem, setRedirectingItem] = useState<string | null>(null);

  // 3. Live Countdown Timer (HH:MM:SS:MS)
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 42,
    seconds: 18,
    ms: 9,
  });

  // Extract URL parameters & Simulate Backend Log Payload on Mount
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const trackingId = searchParams.get("tracking_id") || "AFF_ZALO_99882";
    const campaignId = searchParams.get("campaign_id") || "SIEU_HOI_1111";

    const parsedParams = {
      tracking_id: trackingId,
      campaign_id: campaignId,
    };
    setParams(parsedParams);

    // Simulate Background Log Payload to Backend
    console.log("[BE Payload Sent - Page Load]", {
      event: "CAMPAIGN_LANDING_VIEW",
      timestamp: new Date().toISOString(),
      zalo_uid: user.zaloUid,
      url_params: parsedParams,
      device_info: {
        userAgent: navigator.userAgent,
        screen: `${window.innerWidth}x${window.innerHeight}`,
      },
    });

    // Countdown interval
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.ms > 0) return { ...prev, ms: prev.ms - 1 };
        if (prev.seconds > 0) return { ...prev, seconds: 59, ms: 9 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59, ms: 9 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59, ms: 9 };
        return prev;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  // 4. Delayed Redirection & Tracking Handler
  const handleItemClick = (
    e: React.MouseEvent,
    platform: "shopee" | "lazada",
    targetUrl: string,
    itemName: string
  ) => {
    e.preventDefault();
    setRedirectingItem(itemName);

    const actionType = platform === "shopee" ? "CLICK_SHOPEE" : "CLICK_LAZADA";

    // Required Console Log Format
    console.log(
      `Tracking Event: [${user.phone}] clicked [Action: ${actionType}] on URL [${targetUrl}]`
    );

    // Detailed Log Payload
    console.log("[Analytics Payload]", {
      action: actionType,
      user_phone: user.phone,
      zalo_uid: user.zaloUid,
      item_name: itemName,
      target_url: targetUrl,
      tracking_id: params.tracking_id,
      campaign_id: params.campaign_id,
      timestamp: new Date().toISOString(),
    });

    // 300ms Delay before Redirection
    setTimeout(() => {
      setRedirectingItem(null);
      if (typeof window !== "undefined") {
        window.open(targetUrl, "_blank", "noopener,noreferrer");
      }
    }, 300);
  };

  // Mock Vouchers
  const vouchers: Voucher[] = [
    {
      id: "vch-shopee-1",
      title: "Voucher Shopee 50k",
      subTitle: "Đơn từ 0Đ • Giảm trực tiếp 50.000đ",
      code: "SHOPEE50K",
      platform: "shopee",
      minSpend: "0Đ",
      expiry: "Còn 2 tiếng",
      targetUrl: "https://shopee.vn/m/ma-giam-gia?tracking_id=" + params.tracking_id,
    },
    {
      id: "vch-lazada-1",
      title: "Voucher Lazada 11%",
      subTitle: "Giảm tối đa 150k • HSD Hôm nay",
      code: "LAZ11PERCENT",
      platform: "lazada",
      minSpend: "199k",
      expiry: "Hôm nay",
      targetUrl: "https://www.lazada.vn/voucher?tracking_id=" + params.tracking_id,
    },
  ];

  // Mock Featured Products
  const products: Product[] = [
    {
      id: "prod-1",
      title: "Tai Nghe Bluetooth TWS Pro Max Âm Thanh Hi-Fi Chống Ồn",
      originalPrice: "590.000đ",
      dealPrice: "249.000đ",
      discount: "-58%",
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&auto=format&fit=crop&q=80",
      platform: "shopee",
      sold: "3.4k",
      rating: 4.9,
      targetUrl: "https://shopee.vn/product/12345?tracking_id=" + params.tracking_id,
    },
    {
      id: "prod-2",
      title: "Sạc Dự Phòng Anker PowerCore 20.000mAh Sạc Nhanh 22.5W",
      originalPrice: "850.000đ",
      dealPrice: "489.000đ",
      discount: "-42%",
      image: "https://images.unsplash.com/photo-1609592424109-dd9892f1b177?w=400&auto=format&fit=crop&q=80",
      platform: "lazada",
      sold: "1.8k",
      rating: 4.8,
      targetUrl: "https://www.lazada.vn/products/i67890.html?tracking_id=" + params.tracking_id,
    },
    {
      id: "prod-3",
      title: "Đồng Hồ Thông Minh Smartwatch Series 9 Màn Hình OLED",
      originalPrice: "1.200.000đ",
      dealPrice: "699.000đ",
      discount: "-41%",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&auto=format&fit=crop&q=80",
      platform: "shopee",
      sold: "5.1k",
      rating: 5.0,
      targetUrl: "https://shopee.vn/product/54321?tracking_id=" + params.tracking_id,
    },
    {
      id: "prod-4",
      title: "Loa Bluetooth JBL Pocket Mini Chống Nước IPX7 Bas Siêu Trầm",
      originalPrice: "790.000đ",
      dealPrice: "399.000đ",
      discount: "-49%",
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&auto=format&fit=crop&q=80",
      platform: "lazada",
      sold: "2.9k",
      rating: 4.9,
      targetUrl: "https://www.lazada.vn/products/jbl-mini.html?tracking_id=" + params.tracking_id,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center text-slate-800 antialiased selection:bg-orange-500 selection:text-white">
      {/* Mobile-Viewport Container */}
      <div className="w-full max-w-md bg-slate-50 min-h-screen shadow-2xl relative overflow-hidden pb-14">
        
        {/* 1. Header Section */}
        <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 px-4 py-3 flex items-center justify-between shadow-sm">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img
                src={user.avatar}
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-orange-400 shadow-sm"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
            </div>
            <div>
              <div className="text-xs font-medium text-gray-500">Chào bạn,</div>
              <div className="text-sm font-bold text-gray-900 leading-tight">
                {user.name} <span className="inline-block text-xs font-normal text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded-full border border-orange-200 ml-1">VIP</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-sm">
              <svg className="w-3 h-3 mr-1 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
              </svg>
              Sàn Hot
            </span>
          </div>
        </header>

        {/* 2. Hero Banner Section */}
        <section className="p-4">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 p-5 text-white shadow-xl">
            {/* Visual background glow elements */}
            <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -mb-6 -ml-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl pointer-events-none"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-bold uppercase tracking-wider mb-2">
                <span>🔥 SIÊU HỘI MUA SẮM 11/11</span>
              </div>

              <h1 className="text-xl font-extrabold leading-snug tracking-tight bg-gradient-to-r from-white via-amber-100 to-orange-200 bg-clip-text text-transparent">
                Siêu Hội Mua Sắm Sàn Thương Mại Điện Tử - Ưu Đãi Độc Quyền
              </h1>

              <p className="text-xs text-indigo-200 mt-2 font-light">
                Săn Voucher đến 50k & Sale kịch sàn từ Shopee & Lazada duy nhất hôm nay trên Zalo Mini App!
              </p>

              <div className="mt-4 flex items-center justify-between bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-2.5">
                <div className="flex items-center space-x-2">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                  <span className="text-xs font-semibold text-white">Số lượng quà tặng có hạn</span>
                </div>
                <span className="text-[11px] font-bold text-amber-300 underline underline-offset-2">XEM NGAY</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Event Countdown Section */}
        <section className="px-4 py-1">
          <div className="bg-gradient-to-r from-red-600 via-rose-600 to-orange-600 rounded-xl p-3.5 text-white shadow-md flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <svg className="w-5 h-5 text-amber-300 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.381z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-black uppercase tracking-wider text-amber-200">KẾT THÚC TRONG</div>
                <div className="text-[10px] text-white/80">Nhanh tay trước khi hết Deal!</div>
              </div>
            </div>

            {/* Countdown Boxes */}
            <div className="flex items-center space-x-1 font-mono">
              <div className="bg-black/30 border border-white/20 px-2 py-1 rounded-md text-center min-w-[32px]">
                <span className="text-sm font-bold text-white leading-none block">
                  {String(timeLeft.hours).padStart(2, "0")}
                </span>
                <span className="text-[9px] text-gray-300 block">Giờ</span>
              </div>
              <span className="text-white font-bold text-sm">:</span>
              <div className="bg-black/30 border border-white/20 px-2 py-1 rounded-md text-center min-w-[32px]">
                <span className="text-sm font-bold text-white leading-none block">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </span>
                <span className="text-[9px] text-gray-300 block">Phút</span>
              </div>
              <span className="text-white font-bold text-sm">:</span>
              <div className="bg-black/30 border border-white/20 px-2 py-1 rounded-md text-center min-w-[32px]">
                <span className="text-sm font-bold text-rose-300 leading-none block">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
                <span className="text-[9px] text-gray-300 block">Giây</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Voucher / Reward Section */}
        <section className="px-4 py-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-extrabold text-gray-900 uppercase tracking-wide flex items-center">
              <span className="text-base mr-1.5">🎁</span> Voucher Độc Quyền
            </h2>
            <span className="text-xs text-orange-600 font-medium">Chạm để thu thập</span>
          </div>

          <div className="space-y-3">
            {vouchers.map((voucher) => {
              const isShopee = voucher.platform === "shopee";
              return (
                <div
                  key={voucher.id}
                  onClick={(e) => handleItemClick(e, voucher.platform, voucher.targetUrl, voucher.title)}
                  className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 active:scale-[0.98] border shadow-md ${
                    isShopee
                      ? "bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 border-orange-300"
                      : "bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 border-blue-300"
                  }`}
                >
                  {/* Active Pulse Glow Aura */}
                  <div className="absolute inset-0 bg-white/10 animate-pulse pointer-events-none"></div>

                  <div className="p-3.5 text-white flex items-center justify-between relative z-10">
                    <div className="flex items-center space-x-3">
                      {/* Platform Icon Badge */}
                      <div className="w-11 h-11 rounded-lg bg-white p-1.5 flex items-center justify-center shadow-inner flex-shrink-0">
                        {isShopee ? (
                          <span className="text-orange-600 font-extrabold text-xs tracking-tighter uppercase">Shopee</span>
                        ) : (
                          <span className="text-blue-600 font-extrabold text-xs tracking-tighter uppercase">Lazada</span>
                        )}
                      </div>

                      <div>
                        <div className="flex items-center space-x-1.5">
                          <h3 className="font-extrabold text-sm text-white leading-tight">{voucher.title}</h3>
                          <span className="bg-white/20 text-white text-[10px] px-1.5 py-0.5 rounded font-mono font-bold">
                            {voucher.code}
                          </span>
                        </div>
                        <p className="text-xs text-white/90 mt-0.5">{voucher.subTitle}</p>
                        <div className="text-[10px] text-white/75 mt-1 flex items-center space-x-2">
                          <span>HSD: {voucher.expiry}</span>
                          <span>•</span>
                          <span>Đơn từ: {voucher.minSpend}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button className="bg-white text-gray-900 hover:bg-gray-100 px-3 py-1.5 rounded-lg text-xs font-extrabold shadow-sm flex items-center space-x-1 flex-shrink-0">
                      <span>LẤY MÃ</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                  {/* Coupon Sawtooth Divider Circles */}
                  <div className="absolute -left-2.5 top-1/2 -translate-y-1/2 w-5 h-5 bg-slate-50 rounded-full"></div>
                  <div className="absolute -right-2.5 top-1/2 -translate-y-1/2 w-5 h-5 bg-slate-50 rounded-full"></div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 5. Featured Products Feed */}
        <section className="px-4 py-2">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-extrabold text-gray-900 uppercase tracking-wide flex items-center">
              <span className="text-base mr-1.5">🔥</span> Sản Phẩm Bán Chạy
            </h2>
            <span className="text-xs text-gray-500 font-medium">Giảm kịch sàn</span>
          </div>

          {/* 2-Column Product Grid */}
          <div className="grid grid-cols-2 gap-3">
            {products.map((product) => {
              const isShopee = product.platform === "shopee";
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    {/* Image Container */}
                    <div className="relative aspect-square bg-gray-100 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      {/* Discount Tag */}
                      <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded shadow-sm">
                        {product.discount}
                      </span>
                      {/* Platform Tag */}
                      <span
                        className={`absolute bottom-2 right-2 text-[10px] font-extrabold text-white px-1.5 py-0.5 rounded shadow-sm ${
                          isShopee ? "bg-orange-500" : "bg-blue-600"
                        }`}
                      >
                        {isShopee ? "Shopee" : "Lazada"}
                      </span>
                    </div>

                    {/* Product Info */}
                    <div className="p-2.5">
                      <h3 className="text-xs font-semibold text-gray-800 line-clamp-2 leading-snug h-8">
                        {product.title}
                      </h3>

                      <div className="mt-2 flex items-baseline justify-between">
                        <span className="text-xs text-gray-400 line-through">{product.originalPrice}</span>
                        <span className="text-sm font-extrabold text-red-600">{product.dealPrice}</span>
                      </div>

                      <div className="mt-1 flex items-center justify-between text-[10px] text-gray-500">
                        <span className="text-amber-500 font-bold">★ {product.rating}</span>
                        <span>Đã bán {product.sold}</span>
                      </div>
                    </div>
                  </div>

                  {/* Prominent CTA Button */}
                  <div className="p-2.5 pt-0">
                    <button
                      onClick={(e) => handleItemClick(e, product.platform, product.targetUrl, product.title)}
                      className={`w-full py-2 px-2 rounded-lg text-xs font-bold text-white transition-all duration-200 shadow-sm flex items-center justify-center space-x-1 active:scale-95 ${
                        isShopee
                          ? "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-orange-500/20"
                          : "bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-blue-500/20"
                      }`}
                    >
                      <span>{isShopee ? "MUA TRÊN SHOPEE" : "MUA TRÊN LAZADA"}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 6. Footer Tracking Info Badge (Debug & Verification Bar) */}
        <footer className="mt-6 mx-4 p-3 bg-gray-100 rounded-xl border border-gray-200 text-[11px] text-gray-500 text-center space-y-1">
          <div className="font-semibold text-gray-700">📌 Thông Tin Tracking Hệ Thống</div>
          <div className="flex justify-center space-x-3 font-mono text-[10px]">
            <span>Tracking ID: <strong className="text-orange-600">{params.tracking_id}</strong></span>
            <span>|</span>
            <span>Campaign: <strong className="text-blue-600">{params.campaign_id}</strong></span>
          </div>
        </footer>

        {/* 7. Redirection Delay Toast / Loading Indicator Overlay */}
        {redirectingItem && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-5 max-w-xs w-full text-center shadow-2xl animate-in fade-in zoom-in duration-200">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-orange-600 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-sm">Đang ghi nhận lượt click...</h3>
              <p className="text-xs text-gray-500 mt-1 line-clamp-1">{redirectingItem}</p>
              <div className="mt-3 text-[10px] text-gray-400 font-mono">Redirecting in 300ms</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CampaignLandingPage;
