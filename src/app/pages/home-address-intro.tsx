import { useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";
import svgPaths from "../../imports/svg-2n2rviad0y";
import imgImageConEdison from "figma:asset/f2fb4548cf1df6873e35ad4578fdf4175a324932.png";
import imgImageOrangeRockland from "figma:asset/d6d2422b2c5dc2a946d736a3418a591adb55bee9.png";

export function HomeAddressIntro() {
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
          onClick={() => navigate('/welcome')}
          className="mb-12 text-[#4a5565] hover:text-[#0a0a0a] transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Icon */}
        <div className="mb-6">
          <div className="h-16 w-16 relative">
            <svg className="absolute block w-full h-full" fill="none" viewBox="0 0 64 64">
              {/* Door */}
              <path 
                d={svgPaths.p21c9a700} 
                stroke="#1E2939" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="4"
                transform="scale(0.8) translate(20, 20)"
              />
              {/* House */}
              <path 
                d={svgPaths.p95bbc00} 
                stroke="#1E2939" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="4"
                transform="scale(0.96) translate(1.2, 3.2)"
              />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-[#0a0a0a] text-[24px] font-bold leading-8 mb-6 max-w-[479px]">
          What is your home address and charging location?
        </h1>

        {/* Description */}
        <p className="text-[#4a5565] text-[16px] leading-6 mb-96">
          This increases charging accuracy and unlocks advanced features.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate('/enter-address')}
          className="w-full bg-[#0e2b2e] text-white h-12 rounded-full font-medium text-[16px] hover:bg-[#1a3f43] transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
