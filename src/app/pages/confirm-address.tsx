import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { ChevronLeft } from "lucide-react";
import { useUser } from "../context/UserContext";
import svgPaths from "../../imports/svg-1hilnj4tb6";
import imgImageConEdison from "figma:asset/f2fb4548cf1df6873e35ad4578fdf4175a324932.png";
import imgImageOrangeRockland from "figma:asset/d6d2422b2c5dc2a946d736a3418a591adb55bee9.png";

export function ConfirmAddress() {
  const navigate = useNavigate();
  const location = useLocation();
  const { userData, updateAddress } = useUser();

  // Get address data from navigation state (priority) or context or defaults
  const addressData = location.state?.details || {};

  const [formData, setFormData] = useState(() => {
    // Router state from enter-address takes priority
    if (addressData.road || location.state?.address) {
      return {
        street: addressData.road
          ? `${addressData.house_number || ''} ${addressData.road}`.trim()
          : location.state?.address?.split(',')[0] || "",
        apartment: "",
        city: addressData.city || "",
        state: addressData.state || "",
        zipCode: addressData.postcode || "",
      };
    }
    // Fall back to context data if it exists
    if (userData.address.street) {
      return {
        street: userData.address.street,
        apartment: userData.address.apartment,
        city: userData.address.city,
        state: userData.address.state,
        zipCode: userData.address.zip,
      };
    }
    // Default values
    return {
      street: "25 Fulton St",
      apartment: "",
      city: "New York",
      state: "New York",
      zipCode: "10038",
    };
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateAddress({
      street: formData.street,
      apartment: formData.apartment,
      city: formData.city,
      state: formData.state,
      zip: formData.zipCode,
    });
    navigate('/connect-vehicle');
  };

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
        {/* Back Button and Help Button */}
        <div className="flex items-center justify-between mb-14">
          <button
            onClick={() => navigate('/enter-address')}
            className="w-6 h-6 flex items-center justify-center text-[#4a5565] hover:text-[#0a0a0a] transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="w-6 h-6 flex items-center justify-center text-[#4a5565] hover:text-[#0a0a0a] transition-colors"
            title="Get help"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
              <path 
                d={svgPaths.pb60700} 
                stroke="#4A5565" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
              />
              <path 
                d={svgPaths.p28bc0b40} 
                stroke="#4A5565" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2"
                transform="translate(8.5, 7)"
              />
            </svg>
          </button>
        </div>

        {/* Heading */}
        <h1 className="text-[#0a0a0a] text-[30px] font-bold leading-9 mb-4 text-center">
          Confirm your address
        </h1>

        {/* Subheading */}
        <p className="text-[#364153] text-[16px] leading-6 mb-8 text-center">
          Enter a unit number, if it's applicable.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Street address */}
          <div className="space-y-2">
            <label className="block text-[#101828] text-[16px] font-medium leading-6">
              Street address (Required)
            </label>
            <input
              type="text"
              value={formData.street}
              onChange={(e) => setFormData({ ...formData, street: e.target.value })}
              required
              className="w-full h-[52px] px-4 py-3 border-2 border-[#d1d5dc] rounded-[10px] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#00a0df] focus:border-transparent"
            />
          </div>

          {/* Apartment, suite, etc. */}
          <div className="space-y-2">
            <label className="block text-[#101828] text-[16px] font-medium leading-6">
              Apartment, suite, etc. (Optional)
            </label>
            <input
              type="text"
              value={formData.apartment}
              onChange={(e) => setFormData({ ...formData, apartment: e.target.value })}
              className="w-full h-[52px] px-4 py-3 border-2 border-[#d1d5dc] rounded-[10px] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#00a0df] focus:border-transparent"
            />
          </div>

          {/* City */}
          <div className="space-y-2">
            <label className="block text-[#101828] text-[16px] font-medium leading-6">
              City (Required)
            </label>
            <input
              type="text"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              required
              className="w-full h-[52px] px-4 py-3 border-2 border-[#d1d5dc] rounded-[10px] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#00a0df] focus:border-transparent"
            />
          </div>

          {/* State */}
          <div className="space-y-2">
            <label className="block text-[#101828] text-[16px] font-medium leading-6">
              State
            </label>
            <div className="relative">
              <input
                type="text"
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                required
                className="w-full h-[52px] pl-12 pr-4 py-3 border-2 border-[#d1d5dc] rounded-[10px] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#00a0df] focus:border-transparent"
              />
              {/* Search Icon */}
              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                  <path 
                    d={svgPaths.pcddfd00} 
                    stroke="#99A1AF" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="1.66667" 
                  />
                  <path 
                    d="M17.5 17.5L13.9167 13.9167" 
                    stroke="#99A1AF" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="1.66667" 
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* ZIP code */}
          <div className="space-y-2">
            <label className="block text-[#101828] text-[16px] font-medium leading-6">
              ZIP code (Required)
            </label>
            <input
              type="text"
              value={formData.zipCode}
              onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
              required
              className="w-full h-[52px] px-4 py-3 border-2 border-[#d1d5dc] rounded-[10px] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#00a0df] focus:border-transparent"
            />
          </div>

          {/* Confirm Button */}
          <button
            type="submit"
            className="w-full bg-[#0e2b2e] text-white h-14 rounded-full font-medium text-[16px] hover:bg-[#1a3f43] transition-colors"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}
