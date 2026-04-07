import { useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";
import imgImageConEdison from "figma:asset/f2fb4548cf1df6873e35ad4578fdf4175a324932.png";
import imgImageOrangeRockland from "figma:asset/d6d2422b2c5dc2a946d736a3418a591adb55bee9.png";
import imgImageCarIcon from "figma:asset/276a299c6a51135f6c6853e0497273b39ef4a960.png";

export function ConnectVehicle() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-[rgba(0,0,0,0.1)] py-4">
        <div className="max-w-[600px] mx-auto flex flex-col gap-2 items-center">
          <div className="flex gap-2 items-center">
            <p className="font-bold text-[18px] text-[#0a0a0a]">SmartCharge</p>
            <p className="font-medium text-[18px] text-[#0a0a0a]">New York</p>
          </div>
          <div className="flex gap-12 items-center px-4">
            <img
              alt="Con Edison"
              className="h-5 object-contain"
              src={imgImageConEdison}
            />
            <img
              alt="Orange & Rockland"
              className="h-5 object-contain"
              src={imgImageOrangeRockland}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[600px] mx-auto px-6 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/confirm-address')}
          className="mb-32 text-[#4a5565] hover:text-[#0a0a0a] transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Content Container */}
        <div className="flex flex-col gap-6">
          {/* Car Icon */}
          <img
            alt="Car icon"
            className="w-12 h-12 object-contain"
            src={imgImageCarIcon}
          />

          {/* Heading */}
          <h1 className="text-[#0a0a0a] text-[30px] font-bold leading-9">
            Connect your vehicle
          </h1>

          {/* Paragraph */}
          <p className="text-[#364153] text-[16px] leading-[26px] max-w-[542px]">
            To ensure a seamless charging experience for your vehicle and to unlock rewards, connect a vehicle or charger that's compatible with our system.
          </p>

          {/* Continue Button */}
          <button
            onClick={() => navigate('/select-make')}
            className="w-full bg-[#0e2b2e] text-white h-12 rounded-full font-medium text-[16px] hover:bg-[#1a3f43] transition-colors mt-[234px]"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
