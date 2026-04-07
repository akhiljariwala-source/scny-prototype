import { useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";
import { useUser } from "../context/UserContext";
import svgPaths from "../../imports/svg-bnaxrcqnr0";
import imgImageConEdison from "figma:asset/f2fb4548cf1df6873e35ad4578fdf4175a324932.png";
import imgImageOrangeRockland from "figma:asset/d6d2422b2c5dc2a946d736a3418a591adb55bee9.png";
import imgImageWelcomeIllustration from "figma:asset/25b348da4e81caf3984966a759ac5ebdad89dba3.png";

export function WelcomePage() {
  const navigate = useNavigate();
  const { userData } = useUser();

  const displayName = userData.firstName && userData.lastName
    ? `${userData.firstName} ${userData.lastName}`
    : "there";

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
          onClick={() => navigate('/verify-eligibility')}
          className="mb-8 text-[#4a5565] hover:text-[#0a0a0a] transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Welcome Illustration */}
        <div className="flex justify-center mb-12">
          <img
            alt="Welcome illustration"
            className="w-40 h-40 object-contain"
            src={imgImageWelcomeIllustration}
          />
        </div>

        {/* Content */}
        <div className="text-center mb-16">
          <p className="text-[#4a5565] text-[16px] leading-6 mb-2">
            Hello {displayName}
          </p>
          <h1 className="text-[#0a0a0a] text-[30px] font-bold leading-9 mb-2">
            Welcome to ev.energy
          </h1>
          <p className="text-[#364153] text-[16px] leading-6">
            To get started, add details about your
          </p>
        </div>

        {/* Options */}
        <div className="space-y-4 mb-16">
          {/* Home address */}
          <div className="bg-[#f9fafb] rounded-[10px] h-14 px-4 flex items-center gap-4">
            <svg className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24">
              <path d={svgPaths.p2bbf6680} stroke="#364153" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d={svgPaths.p206ad900} stroke="#364153" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
            <p className="text-[#101828] text-[16px] leading-6">Home address</p>
          </div>

          {/* Vehicle make and model */}
          <div className="bg-[#f9fafb] rounded-[10px] h-14 px-4 flex items-center gap-4">
            <svg className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24">
              <path d={svgPaths.p38e6dc00} stroke="#364153" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d={svgPaths.p298d6480} stroke="#364153" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d="M9 17H15" stroke="#364153" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d={svgPaths.p29835400} stroke="#364153" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
            <p className="text-[#101828] text-[16px] leading-6">Vehicle make and model</p>
          </div>

          {/* Home charging setup */}
          <div className="bg-[#f9fafb] rounded-[10px] h-14 px-4 flex items-center gap-4">
            <svg className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24">
              <path d={svgPaths.p1b8b3180} stroke="#364153" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
            <p className="text-[#101828] text-[16px] leading-6">Home charging setup</p>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => navigate('/home-address-intro')}
          className="w-full bg-[#0e2b2e] text-white h-12 rounded-full font-medium text-[16px] hover:bg-[#1a3f43] transition-colors"
        >
          Let's Get Started
        </button>
      </div>
    </div>
  );
}
