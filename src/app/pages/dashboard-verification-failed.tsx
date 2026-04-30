import { useNavigate } from "react-router";
import { Settings, Zap, Home } from "lucide-react";
import imgImageConEdison from "figma:asset/f2fb4548cf1df6873e35ad4578fdf4175a324932.png";
import imgImageOrangeRockland from "figma:asset/d6d2422b2c5dc2a946d736a3418a591adb55bee9.png";
import { useUser } from "../context/UserContext";

export function DashboardVerificationFailed() {
  const navigate = useNavigate();
  const { userData } = useUser();
  const vehicleName = userData.vehicleMake && userData.vehicleModel
    ? `${userData.vehicleMake} ${userData.vehicleModel}`
    : "Your Vehicle";

  const charges = [
    { kWh: 10, date: "Mon Jan 05, 2026", intensity: "N/A" },
    { kWh: 5, date: "Sun Jan 04, 2026", intensity: "N/A" },
    { kWh: 42, date: "Sun Dec 28, 2025", intensity: "N/A" },
  ];

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      {/* Header */}
      <div className="bg-white border-b border-[rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-10 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex gap-2 items-center">
                <p className="font-bold text-[18px] text-[#0a0a0a]">SmartCharge</p>
                <p className="font-medium text-[18px] text-[#0a0a0a]">New York</p>
              </div>
              <div className="flex gap-3 items-center">
                <img alt="Con Edison" className="h-4 object-contain" src={imgImageConEdison} />
                <img alt="Orange & Rockland" className="h-4 object-contain" src={imgImageOrangeRockland} />
              </div>
            </div>

            <nav className="flex items-center gap-8">
              <button onClick={() => navigate('/dashboard-verification-failed')} className="text-[#101828] text-[16px] font-semibold pb-2 border-b-2 border-[#101828]">
                Dashboard
              </button>
              <button onClick={() => navigate('/dashboard-verification-failed')} className="text-[#4a5565] text-[16px] font-medium pb-2 border-b-2 border-transparent hover:text-[#101828]">
                Charging
              </button>
              <button onClick={() => navigate('/dashboard-verification-failed')} className="text-[#4a5565] text-[16px] font-medium pb-2 border-b-2 border-transparent hover:text-[#101828]">
                Incentives
              </button>
              <button onClick={() => navigate('/account')} className="text-[#4a5565] text-[16px] font-medium pb-2 border-b-2 border-transparent hover:text-[#101828]">
                Account
              </button>
              <button onClick={() => navigate('/account')} className="text-[#4a5565] pb-2 border-b-2 border-transparent hover:text-[#101828]">
                <Settings className="w-5 h-5" />
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[600px] mx-auto px-6 py-8">
        {userData.firstName && (
          <p className="text-[#4a5565] text-[16px] mb-1">Welcome back, {userData.firstName}</p>
        )}
        <h1 className="text-[#101828] text-[24px] font-bold mb-6">{vehicleName}</h1>

        {/* Verification Failed Banner */}
        <div className="bg-[#ffe5e5] border border-[#fca5a5] rounded-[14px] p-5 mb-6 flex items-start justify-between">
          <div>
            <h3 className="text-black text-[16px] font-bold mb-2">Verification failed</h3>
            <p className="text-black text-[16px] leading-relaxed">
              You'll need a licensed electrician to install your charger and submit documentation to your utility to join the program.
            </p>
          </div>
          <button className="text-[#3a7165] text-[16px] font-medium underline hover:text-[#2d5a51] whitespace-nowrap ml-4">
            Learn more
          </button>
        </div>

        {/* Vehicle Status Card */}
        <div className="bg-white rounded-lg overflow-hidden mb-6 shadow-sm">
          <div className="bg-[#0e2b2e] text-white p-6">
            <h2 className="text-[18px] font-semibold mb-1">Unplugged</h2>
            <p className="text-[#d1d5dc] text-[14px]">Plug in your vehicle to charge</p>
          </div>
          <div className="bg-[#f3f4f6] py-12 flex items-center justify-center">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <rect x="12" y="14" width="28" height="38" rx="6" stroke="#0E2B2E" strokeWidth="2.5" fill="white"/>
              <circle cx="26" cy="30" r="6" fill="#4A9EE0" stroke="#0E2B2E" strokeWidth="1.5"/>
              <path d="M38 22C44 22 46 18 48 14C50 10 52 8 54 8" stroke="#0E2B2E" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              <circle cx="54" cy="6" r="3" stroke="#0E2B2E" strokeWidth="2" fill="white"/>
            </svg>
          </div>
        </div>

        {/* Charge History */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[#101828] text-[18px] font-semibold">Charge history</h2>
            <button className="text-[#4a9ee0] text-[14px] font-medium hover:underline">
              See all
            </button>
          </div>

          <div className="bg-white rounded-lg overflow-hidden">
            {charges.map((charge, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-6 ${
                  index !== charges.length - 1 ? 'border-b border-[rgba(0,0,0,0.1)]' : ''
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[rgba(74,158,224,0.1)] flex items-center justify-center">
                    {index === 0 ? (
                      <Zap className="w-5 h-5 text-[#4A9EE0]" />
                    ) : (
                      <Home className="w-5 h-5 text-[#4A9EE0]" />
                    )}
                  </div>
                  <div>
                    <p className="text-[#101828] text-[16px] font-semibold">
                      {charge.kWh} <span className="text-[#6a7282] text-[14px] font-normal">kWh</span>
                    </p>
                    <p className="text-[#6a7282] text-[14px]">Subsc • {charge.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[#101828] text-[16px] font-semibold">{charge.intensity}</p>
                  <p className="text-[#6a7282] text-[14px]">cg/kWh</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
