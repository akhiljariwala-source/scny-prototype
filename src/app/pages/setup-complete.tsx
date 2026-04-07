import { Header } from "../components/header";
import { useNavigate } from "react-router";
import { ChevronLeft, CheckCircle2 } from "lucide-react";

export function SetupComplete() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-[600px] mx-auto px-6 py-8">
        <button
          onClick={() => navigate('/charger-connected')}
          className="mb-12 text-[#4a5565] hover:text-[#0a0a0a] transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="text-center max-w-md mx-auto">
          <div className="w-32 h-32 mx-auto mb-8 flex items-center justify-center">
            <svg className="w-32 h-32" viewBox="0 0 128 128" fill="none">
              <path
                d="M40 60L50 70L75 45M64 118C93.8234 118 118 93.8234 118 64C118 34.1766 93.8234 10 64 10C34.1766 10 10 34.1766 10 64C10 93.8234 34.1766 118 64 118Z"
                stroke="#0a0a0a"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="90" cy="35" r="8" fill="#0a0a0a" />
              <circle cx="105" cy="50" r="5" fill="#0a0a0a" />
              <path
                d="M25 35L30 30M35 25L40 20"
                stroke="#0a0a0a"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <h1 className="text-[#0a0a0a] text-[24px] font-bold mb-12 leading-tight">
            Your home address and charger location are set up
          </h1>

          <button
            onClick={() => navigate('/dashboard')}
            className="w-full bg-[#0e2b2e] text-white py-3 rounded-full font-medium text-[16px] hover:bg-[#1a3f43] transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
