import { Header } from "../components/header";
import { useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";
import { useUser } from "../context/UserContext";

export function VehicleIncompatible() {
  const navigate = useNavigate();
  const { userData } = useUser();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-[1000px] mx-auto px-8 py-12">
        <div className="max-w-[650px] mx-auto">
          <button
            onClick={() => navigate('/select-trim')}
            className="mb-12 text-[#4a5565] hover:text-[#0a0a0a] transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex justify-center mb-12">
            <svg width="180" height="160" viewBox="0 0 180 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Car body */}
              <path d="M20 105H140V95C140 93 139 91 137 90L120 82H40L23 90C21 91 20 93 20 95V105Z" stroke="#0E2B2E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              {/* Car roof */}
              <path d="M40 82L55 55H105L120 82" stroke="#0E2B2E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              {/* Windows */}
              <path d="M58 78L68 60H92L102 78" stroke="#0E2B2E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="80" y1="60" x2="80" y2="78" stroke="#0E2B2E" strokeWidth="2"/>
              {/* Wheels */}
              <circle cx="50" cy="108" r="12" stroke="#0E2B2E" strokeWidth="3"/>
              <circle cx="50" cy="108" r="4" fill="#0E2B2E"/>
              <circle cx="115" cy="108" r="12" stroke="#0E2B2E" strokeWidth="3"/>
              <circle cx="115" cy="108" r="4" fill="#0E2B2E"/>
              {/* Headlight lines */}
              <line x1="140" y1="92" x2="148" y2="89" stroke="#0E2B2E" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="140" y1="97" x2="150" y2="97" stroke="#0E2B2E" strokeWidth="2.5" strokeLinecap="round"/>
              {/* Spark lines on car */}
              <line x1="15" y1="70" x2="5" y2="60" stroke="#0E2B2E" strokeWidth="3" strokeLinecap="round"/>
              <line x1="10" y1="80" x2="0" y2="80" stroke="#0E2B2E" strokeWidth="3" strokeLinecap="round"/>
              <line x1="15" y1="90" x2="5" y2="100" stroke="#0E2B2E" strokeWidth="3" strokeLinecap="round"/>
              {/* Gear/cog */}
              <circle cx="148" cy="45" r="18" stroke="#0E2B2E" strokeWidth="3"/>
              <circle cx="148" cy="45" r="8" stroke="#0E2B2E" strokeWidth="2.5"/>
              {/* Gear teeth */}
              <line x1="148" y1="24" x2="148" y2="18" stroke="#0E2B2E" strokeWidth="3" strokeLinecap="round"/>
              <line x1="148" y1="66" x2="148" y2="72" stroke="#0E2B2E" strokeWidth="3" strokeLinecap="round"/>
              <line x1="127" y1="45" x2="121" y2="45" stroke="#0E2B2E" strokeWidth="3" strokeLinecap="round"/>
              <line x1="169" y1="45" x2="175" y2="45" stroke="#0E2B2E" strokeWidth="3" strokeLinecap="round"/>
              <line x1="134" y1="31" x2="130" y2="27" stroke="#0E2B2E" strokeWidth="3" strokeLinecap="round"/>
              <line x1="162" y1="59" x2="166" y2="63" stroke="#0E2B2E" strokeWidth="3" strokeLinecap="round"/>
              <line x1="134" y1="59" x2="130" y2="63" stroke="#0E2B2E" strokeWidth="3" strokeLinecap="round"/>
              <line x1="162" y1="31" x2="166" y2="27" stroke="#0E2B2E" strokeWidth="3" strokeLinecap="round"/>
              {/* Checkmark in gear */}
              <path d="M140 46L146 52L158 40" stroke="#0E2B2E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="text-center mb-8">
            <p className="text-[#6a7282] text-[18px] mb-2">We've set up your</p>
            <h1 className="text-[#0e2b2e] text-[32px] font-bold mb-12">
              {userData.vehicleMake} {userData.vehicleModel} {userData.vehicleTrim}
            </h1>
          </div>

          <div className="space-y-6 mb-12">
            <div className="flex justify-between items-center">
              <p className="text-[#6a7282] text-[18px]">Make</p>
              <p className="text-[#0e2b2e] text-[18px] font-semibold">{userData.vehicleMake}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#6a7282] text-[18px]">Model</p>
              <p className="text-[#0e2b2e] text-[18px] font-semibold">{userData.vehicleModel}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#6a7282] text-[18px]">Trim</p>
              <p className="text-[#0e2b2e] text-[18px] font-semibold">{userData.vehicleTrim}</p>
            </div>
          </div>

          <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-lg p-6 mb-12">
            <p className="text-[#4a5565] text-[16px] leading-relaxed text-center">
              Unfortunately, your EV is not compatible with this program. To participate in the program, please connect a compatible charging station.
            </p>
          </div>

          <button
            onClick={() => navigate('/connect-charger-intro')}
            className="w-full bg-[#0e2b2e] text-white py-3 rounded-full font-medium text-[16px] hover:bg-[#1a3f43] transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}