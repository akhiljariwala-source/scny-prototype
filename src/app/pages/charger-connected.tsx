import { useEffect } from "react";
import { Header } from "../components/header";
import { useNavigate } from "react-router";
import { useUser } from "../context/UserContext";

export function ChargerConnected() {
  const navigate = useNavigate();
  const { userData, updateUser } = useUser();

  useEffect(() => {
    updateUser({ chargerConnected: true });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-[1000px] mx-auto px-8 py-12">
        <div className="max-w-[650px] mx-auto">
          <div className="flex justify-center mb-12">
            <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Charger box */}
              <rect x="30" y="50" rx="8" ry="8" width="75" height="100" stroke="#0E2B2E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              {/* Lightning bolt on charger */}
              <path d="M60 75L52 100H70L62 125" stroke="#0E2B2E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              {/* Spark lines */}
              <line x1="25" y1="65" x2="12" y2="52" stroke="#0E2B2E" strokeWidth="3" strokeLinecap="round"/>
              <line x1="20" y1="80" x2="8" y2="80" stroke="#0E2B2E" strokeWidth="3" strokeLinecap="round"/>
              <line x1="25" y1="95" x2="14" y2="106" stroke="#0E2B2E" strokeWidth="3" strokeLinecap="round"/>
              {/* Cable from charger */}
              <path d="M105 75C120 75 125 60 135 55C145 50 150 40 150 30" stroke="#0E2B2E" strokeWidth="3" strokeLinecap="round" fill="none"/>
              {/* Plug head */}
              <ellipse cx="150" cy="24" rx="12" ry="8" transform="rotate(-25 150 24)" stroke="#0E2B2E" strokeWidth="3"/>
              {/* Plug pins */}
              <circle cx="144" cy="20" r="2" fill="#0E2B2E"/>
              <circle cx="152" cy="17" r="2" fill="#0E2B2E"/>
              <circle cx="156" cy="24" r="2" fill="#0E2B2E"/>
            </svg>
          </div>

          <div className="text-center mb-8">
            <p className="text-[#6a7282] text-[18px] mb-2">We've successfully connected to your</p>
            <h1 className="text-[#0e2b2e] text-[32px] font-bold mb-12">
              {userData.chargerBrand || "Your"} Classic Level 2 EV Charger
            </h1>
          </div>

          <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-lg p-6 space-y-4 mb-12">
            <div className="flex justify-between items-center">
              <p className="text-[#6a7282] text-[16px]">Status</p>
              <p className="text-[#0e2b2e] text-[16px] font-semibold">Connected</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#6a7282] text-[16px]">Last contact</p>
              <p className="text-[#0e2b2e] text-[16px] font-semibold">08:51 AM (25 mins ago)</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#6a7282] text-[16px]">Serial number</p>
              <p className="text-[#0e2b2e] text-[16px] font-semibold">EVHS0001</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#6a7282] text-[16px]">Make</p>
              <p className="text-[#0e2b2e] text-[16px] font-semibold">{userData.chargerBrand || "Emporia"}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#6a7282] text-[16px]">Model</p>
              <p className="text-[#0e2b2e] text-[16px] font-semibold">{userData.chargerModel || "Classic Level 2 EV Charger"}</p>
            </div>
          </div>

          <button
            onClick={() => {
              updateUser({ verificationStatus: "action_needed" });
              navigate('/dashboard-action');
            }}
            className="w-full bg-[#0e2b2e] text-white py-3 rounded-full font-medium text-[16px] hover:bg-[#1a3f43] transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}