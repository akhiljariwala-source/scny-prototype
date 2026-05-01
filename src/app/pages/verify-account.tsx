import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Settings, ChevronLeft, CheckCircle2, X } from "lucide-react";
import imgImageConEdison from "figma:asset/f2fb4548cf1df6873e35ad4578fdf4175a324932.png";
import imgImageOrangeRockland from "figma:asset/d6d2422b2c5dc2a946d736a3418a591adb55bee9.png";
import { useUser } from "../context/UserContext";

export function VerifyAccount() {
  const navigate = useNavigate();
  const { userData, updateUser } = useUser();

  const formatAccountNumber = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 5) return digits;
    if (digits.length <= 10) return `${digits.slice(0, 5)}-${digits.slice(5)}`;
    return `${digits.slice(0, 5)}-${digits.slice(5, 10)}-${digits.slice(10)}`;
  };

  const [accountNumber, setAccountNumber] = useState(() => {
    // Pre-fill from context if available
    const existing = userData.verificationAccountNumber || userData.utilityAccountNumber;
    return existing ? formatAccountNumber(existing) : "";
  });
  const [installedByElectrician, setInstalledByElectrician] = useState<boolean | null>(null);
  const [submittedDocumentation, setSubmittedDocumentation] = useState<boolean | null>(null);
  const [error, setError] = useState("");
  const [activeModal, setActiveModal] = useState<"electrician" | "documentation" | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (activeModal) {
      setIsClosing(false);
      const t = setTimeout(() => setIsModalVisible(true), 10);
      return () => clearTimeout(t);
    }
  }, [activeModal]);

  const openModal = (type: "electrician" | "documentation") => {
    setActiveModal(type);
  };

  const closeModal = () => {
    setIsClosing(true);
    setIsModalVisible(false);
    setTimeout(() => {
      setActiveModal(null);
      setIsClosing(false);
    }, 300);
  };

  const modalContent = {
    electrician: {
      title: "Charger installation",
      body: "You need a licensed electrician to install your charger to join the program.",
    },
    documentation: {
      title: "Documentation",
      body: "You'll need to submit documentation of your charger installation to join the program.",
    },
  };

  const handleAccountNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatAccountNumber(e.target.value);
    setAccountNumber(formatted);
    // Clear error when user types
    if (error) setError("");
  };

  const getDigitCount = (value: string) => value.replace(/\D/g, "").length;

  const bothQuestionsAnswered = installedByElectrician !== null && submittedDocumentation !== null;
  const canSubmit = getDigitCount(accountNumber) === 11 && bothQuestionsAnswered;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (getDigitCount(accountNumber) !== 11) {
      setError("Please enter a valid 11-digit utility account number.");
      return;
    }
    const failed = installedByElectrician === false || submittedDocumentation === false;
    updateUser({
      verificationAccountNumber: accountNumber,
      electricianInstalled: installedByElectrician!,
      documentationSubmitted: submittedDocumentation!,
      verificationStatus: failed ? "failed" : "in_progress",
    });
    navigate(failed ? '/dashboard-verification-failed' : '/dashboard-verification-progress');
  };

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
              <button className="text-[#101828] text-[16px] font-semibold pb-2 border-b-2 border-[#101828]">
                Dashboard
              </button>
              <button className="text-[#4a5565] text-[16px] font-medium pb-2 border-b-2 border-transparent hover:text-[#101828]">
                Charging
              </button>
              <button className="text-[#4a5565] text-[16px] font-medium pb-2 border-b-2 border-transparent hover:text-[#101828]">
                Incentives
              </button>
              <button className="text-[#4a5565] text-[16px] font-medium pb-2 border-b-2 border-transparent hover:text-[#101828]">
                Account
              </button>
              <button className="text-[#4a5565] pb-2 border-b-2 border-transparent hover:text-[#101828]">
                <Settings className="w-5 h-5" />
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[600px] mx-auto px-6 py-12">
        <button
          onClick={() => navigate('/dashboard')}
          className="mb-12 text-[#19332E] hover:text-[#0a0a0a] transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <form onSubmit={handleSubmit}>
          <h1 className="text-[#0a0a0a] text-[28px] font-bold mb-4">
            Verify your account
          </h1>
          
          <p className="text-[rgba(0,0,0,0.8)] text-[16px] mb-8 leading-relaxed">
            Enter information from your Con Edison or Orange & Rockland account.
          </p>

          <div className="mb-6">
            <label className="block text-[#111c18] text-[16px] font-bold mb-2 pl-2">
              Utility Account Number
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="00000-00000-0"
                value={accountNumber}
                onChange={handleAccountNumberChange}
                className={`w-full px-4 py-3 pr-12 bg-[#fbfdfc] border-2 rounded-[10px] text-[16px] focus:outline-none focus:ring-2 transition-colors ${
                  getDigitCount(accountNumber) === 11
                    ? "border-[#22c55e] focus:ring-[#22c55e]/30 focus:border-[#22c55e]"
                    : error
                    ? "border-red-500 focus:ring-red-300 focus:border-red-500"
                    : "border-[#b3c6c8] focus:ring-[#3B9EE5] focus:border-transparent"
                }`}
              />
              {getDigitCount(accountNumber) === 11 && (
                <CheckCircle2 className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-[#22c55e]" />
              )}
            </div>
            {getDigitCount(accountNumber) === 11 ? (
              <p className="text-[#22c55e] text-[13px] mt-2 pl-2 font-medium">Looks good!</p>
            ) : (
              <p className="text-[#111c18] text-[12px] mt-2 pl-2 leading-tight">
                Your 11-digit utility account number as it appears on your bill. If you're using your home charger, you'll need to provide this number.
              </p>
            )}
            {error && (
              <p className="text-red-600 text-[13px] mt-2 pl-2 font-medium">{error}</p>
            )}
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <label className="text-[#364153] text-[16px] font-medium">
                Was your charger installed by a licensed electrician?
              </label>
              <button
                type="button"
                onClick={() => openModal("electrician")}
                className="w-5 h-5 rounded-full border-2 border-[#6b7280] flex items-center justify-center text-[#6b7280] hover:border-[#4a5565] hover:text-[#4a5565] transition-colors shrink-0"
              >
                <span className="text-[12px] font-semibold">?</span>
              </button>
            </div>
            <div className="flex border-2 border-[#0e2b2e] rounded-[14px] overflow-hidden">
              <button
                type="button"
                onClick={() => setInstalledByElectrician(true)}
                className={`flex-1 py-3 font-medium text-[16px] transition-colors ${
                  installedByElectrician === true ? 'bg-[#0e2b2e] text-white' :
                  'bg-[#fbfdfc] text-[#4a5565] border-r border-[#c2c9c6]'
                }`}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => setInstalledByElectrician(false)}
                className={`flex-1 py-3 font-medium text-[16px] transition-colors ${
                  installedByElectrician === false ? 'bg-[#0e2b2e] text-white' :
                  'bg-[#fbfdfc] text-[#4a5565]'
                }`}
              >
                No
              </button>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <label className="text-[#364153] text-[16px] font-medium">
                Did you submit documentation to your utility when your charger was installed?
              </label>
              <button
                type="button"
                onClick={() => openModal("documentation")}
                className="w-5 h-5 rounded-full border-2 border-[#6b7280] flex items-center justify-center text-[#6b7280] hover:border-[#4a5565] hover:text-[#4a5565] transition-colors shrink-0"
              >
                <span className="text-[12px] font-semibold">?</span>
              </button>
            </div>
            <div className="flex border-2 border-[#0e2b2e] rounded-[14px] overflow-hidden">
              <button
                type="button"
                onClick={() => setSubmittedDocumentation(true)}
                className={`flex-1 py-3 font-medium text-[16px] transition-colors ${
                  submittedDocumentation === true ? 'bg-[#0e2b2e] text-white' :
                  'bg-[#fbfdfc] text-[#4a5565] border-r border-[#c2c9c6]'
                }`}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => setSubmittedDocumentation(false)}
                className={`flex-1 py-3 font-medium text-[16px] transition-colors ${
                  submittedDocumentation === false ? 'bg-[#0e2b2e] text-white' :
                  'bg-[#fbfdfc] text-[#4a5565]'
                }`}
              >
                No
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={!canSubmit}
            className={`w-full py-3 rounded-full font-medium text-[16px] transition-colors ${
              canSubmit
                ? 'bg-[#0e2b2e] text-white hover:bg-[#1a3f43]'
                : 'bg-[#d1d5dc] text-[#6a7282] cursor-not-allowed'
            }`}
          >
            Submit
          </button>
        </form>
      </div>

      {activeModal && (
        <>
          {/* Backdrop */}
          <div
            onClick={closeModal}
            className={`fixed inset-0 bg-[#111c18] z-40 transition-opacity duration-300 ${isClosing ? "ease-in" : "ease-out"} ${
              isModalVisible ? "opacity-40" : "opacity-0"
            }`}
          />
          {/* Bottom sheet */}
          <div
            className={`fixed bottom-0 left-1/2 -translate-x-1/2 bg-[#fbfdfc] rounded-tl-[16px] rounded-tr-[16px] w-[375px] flex flex-col gap-4 p-4 shadow-[0px_2px_19px_rgba(0,0,0,0.07)] z-50 transition-transform duration-300 ${isClosing ? "ease-in" : "ease-out"} ${
              isModalVisible ? "translate-y-0" : "translate-y-full"
            }`}
          >
            {/* Header */}
            <div className="flex items-center h-[44px]">
              <button
                onClick={closeModal}
                className="w-6 h-6 flex items-center justify-center text-black hover:text-[#4a5565] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2 text-black">
              <p className="font-bold text-[18px] leading-[24px]">
                {modalContent[activeModal].title}
              </p>
              <p className="text-[16px] leading-[20px] font-normal">
                {modalContent[activeModal].body}
              </p>
            </div>

            {/* Got it button */}
            <button
              onClick={closeModal}
              className="w-full h-12 bg-[#0e2b2e] text-[#f4fbf9] rounded-full font-bold text-[16px] hover:bg-[#1a3f43] transition-colors"
            >
              Got it
            </button>

            {/* Learn More link */}
            <div className="flex items-center justify-center">
              <button className="text-[#3a7165] text-[16px] font-bold underline leading-[20px]">
                Learn More
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}