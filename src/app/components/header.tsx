import imgImageConEdison from "figma:asset/f2fb4548cf1df6873e35ad4578fdf4175a324932.png";
import imgImageOrangeRockland from "figma:asset/d6d2422b2c5dc2a946d736a3418a591adb55bee9.png";
import { useNavigate } from "react-router";
import { ExternalLink, SquarePen } from "lucide-react";

export function Header() {
  const navigate = useNavigate();

  return (
    <div className="bg-white w-full border-b border-[rgba(0,0,0,0.1)] py-4 px-8">
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
  );
}

export function HeaderWithButtons() {
  const navigate = useNavigate();

  return (
    <div className="bg-white w-full border-b border-[rgba(0,0,0,0.1)] py-4 px-8">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="border border-[#e5e7eb] rounded-full px-5 py-2">
            <span className="font-bold text-[16px] text-[#0a0a0a]">SmartCharge </span>
            <span className="font-medium text-[16px] text-[#0a0a0a]">New York</span>
          </div>
          <div className="flex gap-8 items-center">
            <img
              alt="Con Edison"
              className="h-6 object-contain"
              src={imgImageConEdison}
            />
            <img
              alt="Orange & Rockland"
              className="h-6 object-contain"
              src={imgImageOrangeRockland}
            />
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <button
            onClick={() => navigate('/create-account')}
            className="bg-[#6AB43C] text-white px-5 py-2.5 rounded-full font-medium text-[15px] hover:bg-[#5a9d33] transition-colors flex items-center gap-2"
          >
            Enroll now
            <SquarePen className="w-4 h-4" />
          </button>
          <button className="border border-[#d1d5dc] text-[#0a0a0a] px-5 py-2.5 rounded-full font-medium text-[15px] hover:bg-[#f9fafb] transition-colors flex items-center gap-2">
            Support
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
