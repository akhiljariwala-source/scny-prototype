import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronRight, ChevronLeft, HelpCircle } from "lucide-react";
import imgImageConEdison from "figma:asset/f2fb4548cf1df6873e35ad4578fdf4175a324932.png";
import imgImageOrangeRockland from "figma:asset/d6d2422b2c5dc2a946d736a3418a591adb55bee9.png";
import { useUser } from "../context/UserContext";

export function CreateAccountStep2() {
  const navigate = useNavigate();
  const { userData, updateUser } = useUser();
  const [formData, setFormData] = useState({
    utility: userData.utility === "conEdison" ? "con-edison" : userData.utility === "oAndR" ? "or" : "other",
    accountNumber: userData.utilityAccountNumber || "",
    accountType: userData.accountType || "residential",
    touRate: userData.touRate ? "yes" : "no",
    vehicleType: userData.vehicleType || "passenger",
    agreedToTerms: userData.termsAgreed || false,
  });
  const [accountNumberError, setAccountNumberError] = useState("");

  const formatAccountNumber = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 5) return digits;
    if (digits.length <= 10) return `${digits.slice(0, 5)}-${digits.slice(5)}`;
    return `${digits.slice(0, 5)}-${digits.slice(5, 10)}-${digits.slice(10)}`;
  };

  const handleAccountNumberChange = (value: string) => {
    const formatted = formatAccountNumber(value);
    setFormData({ ...formData, accountNumber: formatted });
    if (formatted && formatted.replace(/\D/g, "").length > 0 && formatted.replace(/\D/g, "").length !== 11) {
      setAccountNumberError("Account number must be 11 digits (format: 00000-00000-0)");
    } else {
      setAccountNumberError("");
    }
  };

  const isFormValid = () => {
    if (!formData.agreedToTerms) return false;
    if (formData.accountNumber && formData.accountNumber.replace(/\D/g, "").length !== 11 && formData.accountNumber.replace(/\D/g, "").length !== 0) return false;
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid()) {
      const utilityMap: Record<string, "conEdison" | "oAndR" | "other"> = {
        "con-edison": "conEdison",
        "or": "oAndR",
        "other": "other",
      };
      updateUser({
        utility: utilityMap[formData.utility],
        utilityAccountNumber: formData.accountNumber,
        accountType: formData.accountType as "residential" | "business",
        touRate: formData.touRate === "yes",
        vehicleType: formData.vehicleType as "passenger" | "commercial",
        termsAgreed: formData.agreedToTerms,
      });
      navigate('/welcome');
    }
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
      <div className="max-w-[600px] mx-auto px-6 pt-12 pb-8">
        {/* Progress with Back Button */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => navigate('/create-account')}
              className="w-6 h-6 flex items-center justify-center text-[#4a5565] hover:text-[#0a0a0a] transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <p className="text-[#0a0a0a] text-[20px] font-medium text-center">
              2/2 Verify eligibility
            </p>
            <div className="w-6 h-6" /> {/* Spacer */}
          </div>
          <div className="bg-[#00a0df] h-2 rounded-full" />
        </div>

        {/* Info Banner */}
        <div className="bg-[#4fbeeb] rounded-[10px] p-6 mb-8 flex items-center justify-between">
          <p className="text-white text-[16px] font-medium leading-6 max-w-[443px]">
            Click here to learn more about the SmartCharge New York program
          </p>
          <ChevronRight className="w-5 h-5 text-white flex-shrink-0" />
        </div>

        {/* Form */}
        <div className="mb-8">
          <h1 className="text-[#0a0a0a] text-[30px] font-bold leading-9 mb-2">
            Create an account
          </h1>
          <p className="text-[#364153] text-[16px] leading-6 mb-6">
            What is your electric utility?
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Utility Selection */}
            <div className="border-2 border-[#0e2b2e] rounded-[14px] overflow-hidden p-0.5">
              <div className="flex">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, utility: "con-edison" })}
                  className={`flex-1 h-[48px] font-medium text-[16px] transition-colors rounded-[12px] ${
                    formData.utility === "con-edison"
                      ? "bg-[#0e2b2e] text-white"
                      : "bg-white text-[#4a5565]"
                  }`}
                >
                  Con Edison
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, utility: "or" })}
                  className={`flex-1 h-[48px] font-medium text-[16px] transition-colors rounded-[12px] ${
                    formData.utility === "or"
                      ? "bg-[#0e2b2e] text-white"
                      : "bg-white text-[#4a5565]"
                  }`}
                >
                  O&R
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, utility: "other" })}
                  className={`flex-1 h-[48px] font-medium text-[16px] transition-colors rounded-[12px] ${
                    formData.utility === "other"
                      ? "bg-[#0e2b2e] text-white"
                      : "bg-white text-[#4a5565]"
                  }`}
                >
                  Other
                </button>
              </div>
            </div>

            {/* Utility Account Number */}
            <div>
              <label className="block text-[#364153] text-[16px] font-medium mb-2">
                Utility Account Number (optional)
              </label>
              <input
                type="text"
                placeholder="00000-00000-0"
                value={formData.accountNumber}
                onChange={(e) => handleAccountNumberChange(e.target.value)}
                className={`w-full h-[52px] px-4 py-3 border-2 rounded-[10px] text-[16px] placeholder:text-[rgba(10,10,10,0.5)] focus:outline-none focus:ring-2 ${
                  accountNumberError ? "border-red-500 focus:ring-red-300" : "border-[#d1d5dc] focus:ring-[#00a0df]"
                }`}
              />
              {accountNumberError && (
                <p className="text-red-500 text-[13px] mt-1 ml-1">{accountNumberError}</p>
              )}
              <p className="text-[#6a7282] text-[14px] leading-5 mt-2 ml-1">
                Your 11-digit utility account number as it appears on your bill. If you plan to participate using your home charger, you must provide a utility account number.
              </p>
            </div>

            {/* Account Type */}
            <div>
              <label className="block text-[#364153] text-[16px] font-medium mb-2">
                What kind of utility account do you have?
              </label>
              <div className="border-2 border-[#0e2b2e] rounded-[14px] overflow-hidden p-0.5">
                <div className="flex">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, accountType: "residential" })}
                    className={`flex-1 h-[48px] font-medium text-[16px] transition-colors rounded-[12px] ${
                      formData.accountType === "residential"
                        ? "bg-[#0e2b2e] text-white"
                        : "bg-white text-[#4a5565]"
                    }`}
                  >
                    Residential
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, accountType: "business" })}
                    className={`flex-1 h-[48px] font-medium text-[16px] transition-colors rounded-[12px] ${
                      formData.accountType === "business"
                        ? "bg-[#0e2b2e] text-white"
                        : "bg-white text-[#4a5565]"
                    }`}
                  >
                    Business
                  </button>
                </div>
              </div>
            </div>

            {/* TOU Rate */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <label className="text-[#364153] text-[16px] font-medium">
                  Are you on a Time of Use (TOU) rate?
                </label>
                <button
                  type="button"
                  className="w-5 h-5 rounded-full border-2 border-[#6a7282] flex items-center justify-center text-[#6a7282] hover:border-[#4a5565] hover:text-[#4a5565] transition-colors"
                  title="Get help with this question"
                >
                  <span className="text-[12px] font-semibold">?</span>
                </button>
              </div>
              <div className="border-2 border-[#0e2b2e] rounded-[14px] overflow-hidden p-0.5">
                <div className="flex">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, touRate: "no" })}
                    className={`flex-1 h-[48px] font-medium text-[16px] transition-colors rounded-[12px] ${
                      formData.touRate === "no"
                        ? "bg-[#0e2b2e] text-white"
                        : "bg-white text-[#4a5565]"
                    }`}
                  >
                    No
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, touRate: "yes" })}
                    className={`flex-1 h-[48px] font-medium text-[16px] transition-colors rounded-[12px] ${
                      formData.touRate === "yes"
                        ? "bg-[#0e2b2e] text-white"
                        : "bg-white text-[#4a5565]"
                    }`}
                  >
                    Yes
                  </button>
                </div>
              </div>
            </div>

            {/* Vehicle Type */}
            <div>
              <label className="block text-[#364153] text-[16px] font-medium mb-2 leading-6">
                Are the vehicles you plan to enroll in the program registered as Passenger or Commercial vehicles?
              </label>
              <div className="border-2 border-[#0e2b2e] rounded-[14px] overflow-hidden p-0.5">
                <div className="flex">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, vehicleType: "passenger" })}
                    className={`flex-1 h-[48px] font-medium text-[16px] transition-colors rounded-[12px] ${
                      formData.vehicleType === "passenger"
                        ? "bg-[#0e2b2e] text-white"
                        : "bg-white text-[#4a5565]"
                    }`}
                  >
                    Passenger
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, vehicleType: "commercial" })}
                    className={`flex-1 h-[48px] font-medium text-[16px] transition-colors rounded-[12px] ${
                      formData.vehicleType === "commercial"
                        ? "bg-[#0e2b2e] text-white"
                        : "bg-white text-[#4a5565]"
                    }`}
                  >
                    Commercial
                  </button>
                </div>
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                checked={formData.agreedToTerms}
                onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
                className="mt-0.5 w-[18px] h-[18px] border-2 border-[#d1d5dc] rounded"
              />
              <label htmlFor="terms" className="text-[#364153] text-[14px] leading-5">
                I have read and agree to the SmartCharge New York{" "}
                <a href="#" className="text-[#4a9ee0] underline">
                  Participation Agreement
                </a>
                {" "}(Required).
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isFormValid()}
              className={`w-full h-[48px] rounded-full font-medium text-[16px] transition-colors ${
                isFormValid()
                  ? "bg-[#0e2b2e] text-white hover:bg-[#1a3f43]"
                  : "bg-[#d1d5dc] text-[#6a7282] cursor-not-allowed"
              }`}
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}