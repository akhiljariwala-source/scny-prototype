import { useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";
import imgImageConEdison from "figma:asset/f2fb4548cf1df6873e35ad4578fdf4175a324932.png";
import imgImageOrangeRockland from "figma:asset/d6d2422b2c5dc2a946d736a3418a591adb55bee9.png";

export function EmailVerified() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Gmail header bar */}
      <div className="bg-white px-6 py-4 border-b border-[#dadce0]">
        <div className="max-w-[1100px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg width="32" height="24" viewBox="0 0 32 24" fill="none">
              <path d="M2 4L16 16L30 4" fill="#EA4335"/>
              <path d="M0 4C0 1.79 1.79 0 4 0H12L16 4L2 16V4C2 2.9 1.1 2 0 2V4Z" fill="#EA4335"/>
              <path d="M0 4V20C0 22.21 1.79 24 4 24H8V12L0 4Z" fill="#4285F4"/>
              <path d="M32 4V20C32 22.21 30.21 24 28 24H24V12L32 4Z" fill="#34A853"/>
              <path d="M24 24V12L16 16L8 12V24H24Z" fill="#C5221F"/>
              <path d="M0 4L8 12V2H4C1.79 2 0 3.21 0 4Z" fill="#C5221F"/>
              <path d="M32 4L24 12V2H28C30.21 2 32 3.21 32 4Z" fill="#188038"/>
              <path d="M32 4L24 12L20 8L32 0V4Z" fill="#34A853"/>
              <path d="M0 4L8 12L12 8L0 0V4Z" fill="#FBBC05"/>
            </svg>
            <span className="text-[#5f6368] text-[22px]">Gmail</span>
          </div>
          <span className="text-[#5f6368] text-[14px]">Zara Harper &lt;zara.harper@ev.energy&gt;</span>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-[1100px] mx-auto px-6 py-4">
        {/* Back button */}
        <button
          onClick={() => navigate('/dashboard-verification-progress')}
          className="flex items-center gap-1 text-[#5f6368] text-[14px] mb-4 hover:text-[#202124]"
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </button>

        {/* Subject and message count */}
        <div className="mb-2">
          <h1 className="text-[#202124] text-[20px] font-bold mb-0.5">
            Your account is now verified 🎉
          </h1>
          <p className="text-[#5f6368] text-[12px]">1 message</p>
        </div>

        <hr className="border-[#dadce0] mb-4" />

        {/* Sender row */}
        <div className="flex items-start justify-between mb-1">
          <div>
            <p className="text-[#202124] text-[14px]">
              <span className="font-bold">ev.energy</span>
              {" "}<span className="text-[#5f6368]">&lt;evenergy@news.ev.energy&gt;</span>
            </p>
            <p className="text-[#5f6368] text-[12px]">Reply-To: support@ev.energy</p>
            <p className="text-[#5f6368] text-[12px]">To: zara.harper@ev.energy</p>
          </div>
          <span className="text-[#5f6368] text-[13px] whitespace-nowrap">11 February 2026 at 14:03</span>
        </div>

        {/* Email body - centered card */}
        <div className="flex justify-center py-8 bg-[#f2f2f2]">
          <div className="w-full max-w-[640px] rounded-lg overflow-hidden">
            {/* Logo header area */}
            <div className="bg-white px-8 pt-8 pb-4">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <img
                    alt="Con Edison"
                    className="h-7 object-contain object-left"
                    src={imgImageConEdison}
                  />
                  <img
                    alt="Orange & Rockland"
                    className="h-7 object-contain object-left"
                    src={imgImageOrangeRockland}
                  />
                </div>
                <div className="flex flex-col items-end gap-0.5">
                  <p className="text-[#5f6368] text-[12px]">Powered by</p>
                  <div className="flex items-center gap-1.5">
                    <div className="w-9 h-9 bg-[#0e2b2e] rounded-full flex items-center justify-center">
                      <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
                        <text x="0" y="12" fill="#6AB43C" fontSize="13" fontWeight="bold" fontFamily="Arial">ev.</text>
                      </svg>
                    </div>
                    <p className="text-[#0e2b2e] text-[22px] font-bold leading-tight tracking-tight">energy</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SmartCharge New York banner */}
            <div className="relative overflow-hidden h-[140px] bg-gradient-to-r from-[#4A8BA8] via-[#4A8BA8] to-[#5A9AB5]">
              {/* Right side: EV charger photo effect */}
              <div className="absolute right-0 top-0 h-full w-3/5">
                <div className="absolute inset-0 bg-gradient-to-r from-[#4A8BA8] to-transparent z-10" />
                <svg width="100%" height="100%" viewBox="0 0 400 140" fill="none" className="opacity-40">
                  <rect x="280" y="20" width="80" height="100" rx="8" fill="white"/>
                  <rect x="300" y="40" width="40" height="50" rx="4" fill="#5BA8D0"/>
                  <path d="M320 30V20" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                  <path d="M280 90C240 100 220 110 200 120" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                  <path d="M180 60H260V100C260 105 255 110 250 110H190C185 110 180 105 180 100V60Z" fill="white"/>
                  <path d="M200 60L210 35H250L260 60" fill="white"/>
                  <circle cx="200" cy="105" r="10" fill="#5BA8D0"/>
                  <circle cx="250" cy="105" r="10" fill="#5BA8D0"/>
                </svg>
              </div>
              {/* Text content */}
              <div className="relative z-20 px-8 py-6">
                <h2 className="text-white text-[24px] font-bold mb-3">SmartCharge New York</h2>
                <div className="flex items-center gap-2">
                  <span className="text-white/80 text-[14px]">Powered by</span>
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <span className="text-[#0e2b2e] text-[8px] font-bold"><span className="text-[#6AB43C]">ev.</span></span>
                  </div>
                  <span className="text-white text-[14px] font-semibold">energy</span>
                </div>
              </div>
            </div>

            {/* Email content */}
            <div className="bg-white px-8 py-8">
              <h2 className="text-[#202124] text-[22px] font-bold text-center mb-8">Your account has been verified!</h2>

              <p className="text-[#364153] text-[15px] mb-5">Hi there,</p>

              <p className="text-[#364153] text-[15px] leading-[1.7] mb-5">
                Great news — your account has been verified by SmartCharge New York.
              </p>

              {/* CTA Button */}
              <div className="flex justify-center mb-8">
                <button
                  onClick={() => navigate('/dashboard-verified')}
                  className="bg-[#3B9EE5] text-white px-12 py-3.5 rounded-lg font-semibold text-[16px] hover:bg-[#2d7ab8] transition-colors"
                >
                  Continue to dashboard
                </button>
              </div>

              <p className="text-[#364153] text-[15px] leading-[1.7] mb-5">
                Head to your dashboard to explore your charging benefits and features.
              </p>

              <p className="text-[#364153] text-[15px] leading-[1.7] font-semibold mb-4">
                Happy charging!
              </p>
            </div>

            {/* Footer */}
            <div className="bg-white px-8 pb-8 pt-4 border-t border-[#e5e7eb]">
              <div className="text-center">
                <p className="text-[#5f6368] text-[12px] mb-3">
                  FAQs | Contact Support | Privacy Policy | Terms and Conditions
                </p>
                <p className="text-[#5f6368] text-[11px] leading-relaxed mb-4">
                  Copyright © 2026 ev.energy. All rights reserved. ev.energy,{" "}
                  <span className="underline">86-90 Paul Street, London, EC2A 4NE, United Kingdom</span>, Impressum
                </p>
                <p className="text-[#5f6368] text-[10px] leading-relaxed mb-3">
                  You are receiving this e-mail because you either created an account with ev.energy, or because<br />
                  your charger supplier contracted us to complete your charger setup. If you believe you have<br />
                  received this email in error, contact scny@ev.energy.
                </p>
                <p className="text-[#5f6368] text-[10px]">
                  Don't want to receive any more emails from us? <span className="underline">Unsubscribe</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
