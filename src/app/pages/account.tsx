import { useNavigate } from "react-router";
import { Settings } from "lucide-react";
import imgImageConEdison from "figma:asset/f2fb4548cf1df6873e35ad4578fdf4175a324932.png";
import imgImageOrangeRockland from "figma:asset/d6d2422b2c5dc2a946d736a3418a591adb55bee9.png";
import { useUser } from "../context/UserContext";

export function Account() {
  const navigate = useNavigate();
  const { userData } = useUser();

  const fullName = [userData.firstName, userData.lastName].filter(Boolean).join(" ") || "N/A";
  const vehicleName = [userData.vehicleMake, userData.vehicleModel].filter(Boolean).join(" ") || "N/A";
  const vehicleTrim = userData.vehicleTrim || "N/A";
  const chargerInfo = [userData.chargerBrand, userData.chargerModel].filter(Boolean).join(" ") || "N/A";
  const utilityLabel = userData.utility === "conEdison" ? "Con Edison" : userData.utility === "oAndR" ? "Orange & Rockland" : userData.utility || "N/A";
  const addressLine = [userData.address.street, userData.address.apartment].filter(Boolean).join(", ") || "";
  const cityStateZip = [userData.address.city, userData.address.state, userData.address.zip].filter(Boolean).join(", ") || "";
  const fullAddress = [addressLine, cityStateZip].filter(Boolean).join(", ") || "N/A";

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
              <button
                onClick={() => navigate('/dashboard-verified')}
                className="text-[#4a5565] text-[16px] font-medium pb-2 border-b-2 border-transparent hover:text-[#101828]"
              >
                Dashboard
              </button>
              <button onClick={() => navigate('/dashboard-verified')} className="text-[#4a5565] text-[16px] font-medium pb-2 border-b-2 border-transparent hover:text-[#101828]">
                Charging
              </button>
              <button onClick={() => navigate('/dashboard-verified')} className="text-[#4a5565] text-[16px] font-medium pb-2 border-b-2 border-transparent hover:text-[#101828]">
                Incentives
              </button>
              <button onClick={() => navigate('/account')} className="text-[#101828] text-[16px] font-semibold pb-2 border-b-2 border-[#101828]">
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
      <div className="max-w-[600px] mx-auto px-6 py-12">
        <p className="text-[#4a5565] text-[18px] font-medium mb-2">Program</p>
        <h1 className="text-[#101828] text-[36px] font-bold mb-10 leading-tight">
          SmartCharge New York
        </h1>

        {/* Account Status Card */}
        <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[#101828] text-[20px] font-bold">Account</h2>
            <div className="bg-white border border-[#d1d5dc] rounded-full px-4 py-1 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#3a7165]"></div>
              <span className="text-[#3a7165] text-[16px] font-medium">Eligible</span>
            </div>
          </div>
          <p className="text-[#3a7165] text-[16px] leading-relaxed">
            Your account has been verified. You can now receive incentive payouts from SmartCharge New York
          </p>
        </div>

        {/* Program Benefits */}
        <div className="mb-10">
          <h2 className="text-[#101828] text-[24px] font-bold mb-4">Program benefits</h2>
          
          <p className="text-[#364153] text-[16px] mb-4 leading-relaxed">
            <span className="font-bold">Earn ~$400+ annually</span> through{" "}
            <span className="font-bold">off-peak charging</span> to support grid reliability.
          </p>

          <ul className="list-disc space-y-3 pl-5">
            <li className="text-[#364153] text-[16px] leading-relaxed">
              Get <span className="font-bold">$0.10/kWh</span> for{" "}
              <span className="font-bold">off-peak charging (12-8am)</span> in Con Ed service area or{" "}
              <span className="font-bold">$0.07/kWh</span> in O&R service area
            </li>
            <li className="text-[#364153] text-[16px] leading-relaxed">
              Earn <span className="font-bold">$25 bonus</span> per vehicle/charger after 3 months
            </li>
            <li className="text-[#364153] text-[16px] leading-relaxed">
              Receive up to <span className="font-bold">$175 summer bonus</span> for{" "}
              <span className="font-bold">avoiding peak hours (2pm-6pm)</span> Jun-Sep
            </li>
            <li className="text-[#364153] text-[16px] leading-relaxed">
              Get <span className="font-bold">$25 per referral</span> plus bonus rewards
            </li>
          </ul>
        </div>

        {/* How to be eligible */}
        <div className="mb-10">
          <h2 className="text-[#101828] text-[24px] font-bold mb-4">How to be eligible</h2>
          
          <p className="text-[#364153] text-[16px] mb-4 leading-relaxed">
            Eligibility is checked monthly based on your account information. For you to{" "}
            <span className="font-bold">qualify as eligible, you must</span>:
          </p>

          <ul className="list-disc space-y-3 pl-5">
            <li className="text-[#364153] text-[16px] leading-relaxed">
              Be on a residential (E1) or small business (EL2) rate; TOU customers are ineligible
            </li>
          </ul>
        </div>

        <div className="text-center">
          <button className="text-[#4fbeeb] text-[16px] font-medium hover:underline">
            More about the program
          </button>
        </div>
      </div>
    </div>
  );
}
