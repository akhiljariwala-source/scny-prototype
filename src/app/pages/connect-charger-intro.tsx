import { Header } from "../components/header";
import { useNavigate } from "react-router";
import { ChevronLeft, Plug } from "lucide-react";

export function ConnectChargerIntro() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-[600px] mx-auto px-8 py-12">
        <button
          onClick={() => navigate('/vehicle-incompatible')}
          className="mb-10 text-[#4a5565] hover:text-[#0a0a0a] transition-colors inline-block"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="mb-8">
          <Plug className="w-16 h-16 text-[#1E2939]" strokeWidth={2} />
        </div>

        <h1 className="text-[#101828] text-[32px] font-bold mb-4 leading-tight">
          Connect your charger
        </h1>

        <p className="text-[#364153] text-[17px] mb-16 leading-relaxed">
          This ensures your vehicle charges smoothly, even when we can't connect to your vehicle. It also enhances charging accuracy.
        </p>

        <button
          onClick={() => navigate('/select-charger')}
          className="w-full bg-[#0e2b2e] text-white py-4 rounded-full font-medium text-[17px] hover:bg-[#1a3f43] transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );
}