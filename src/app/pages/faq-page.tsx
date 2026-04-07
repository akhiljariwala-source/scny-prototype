import { useState } from "react";
import { HeaderWithButtons } from "../components/header";
import { useNavigate } from "react-router";
import { ChevronRight, Plus, X } from "lucide-react";

const tabs = [
  "Eligibility",
  "Connectivity",
  "Incentives",
  "Data and Privacy",
  "General",
  "Web Portal",
  "Safety",
];

const faqData = [
  {
    question: "Which electric vehicle models and chargers are compatible with the SmartCharge New York platform?",
    answer: "Details about compatible EV models and chargers...",
  },
  {
    question: "Do I need to provide a utility account number to participate?",
    answer: `• During account registration, if you are a Con Edison or Orange & Rockland customer, you have the option to provide a utility account number

• If you plan to participate by connecting your charger, you must provide a valid utility account number before you can receive incentives from the program. Your utility account number allows us to verify your eligibility for the program, including confirming that your charger is located within the utility service territory and that required installation inspections have been completed.

• If you don't provide your utility account number during initial account registration, you'll be notified via email and see in the web portal that action is required. You can easily add your utility account number afterward through the web portal or mobile app.

• If you plan to participate by connecting your vehicle, you are not required to provide a utility account number. However, we still encourage you to provide it so that we can offer you the best service possible.

• Your utility account number is an 11 digit number in the format 01234-56789-0. You can find your utility account number on a recent bill or in your utility account portal.`,
  },
  {
    question: "What if my vehicle and charger are not compatible with SmartCharge New York?",
    answer: "Information about incompatible vehicles and chargers...",
  },
  {
    question: "Can I enroll and earn incentives in SmartCharge New York if I am on a Con Edison residential or small business Time of Use Rate (TOU)?",
    answer: "Information about TOU rates and eligibility...",
  },
  {
    question: "If my vehicles are part of a municipal or commercial fleet, am I eligible?",
    answer: "Information about fleet eligibility...",
  },
];

export function FAQPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Eligibility");

  return (
    <div className="min-h-screen bg-white">
      <HeaderWithButtons />
      
      <div className="max-w-[1200px] mx-auto px-8 py-12">
        {/* Page Title */}
        <h1 className="text-[#0a0a0a] text-[36px] font-bold leading-tight mb-8">
          SmartCharge New York FAQs
        </h1>

        {/* Info Banner */}
        <div className="border-t border-[#e5e7eb] pt-6 mb-8 flex items-center justify-between">
          <p className="text-[#4a5565] text-[16px]">
            Click the button to learn more about the SmartCharge New York Program.
          </p>
          <button className="bg-[#6AB43C] text-white px-6 py-2.5 rounded-full font-medium text-[16px] hover:bg-[#5a9d33] transition-colors whitespace-nowrap">
            Learn more
          </button>
        </div>

        {/* FAQ Tabs */}
        <div className="mb-8">
          <div className="flex gap-8 border-b border-[#d1d5dc]">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-[16px] pb-3 ${
                  activeTab === tab
                    ? "border-b-2 border-[#0a0a0a] text-[#0a0a0a] font-semibold"
                    : "text-[#6a7282] font-medium hover:text-[#0a0a0a]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          <FAQItem
            question="Which electric vehicle models and chargers are compatible with the SmartCharge New York platform?"
            answer="Compatible vehicles and chargers information..."
          />
          <FAQItem
            question="Do I need to provide a utility account number to participate?"
            answer={`• During account registration, if you are a Con Edison or Orange & Rockland customer, you have the option to provide a utility account number

• If you plan to participate by connecting your charger, you must provide a valid utility account number before you can receive incentives from the program. Your utility account number allows us to verify your eligibility for the program, including confirming that your charger is located within the utility service territory and that required installation inspections have been completed.

• If you don't provide your utility account number during initial account registration, you'll be notified via email and see in the web portal that action is required. You can easily add your utility account number afterward through the web portal or mobile app.

• If you plan to participate by connecting your vehicle, you are not required to provide a utility account number. However, we still encourage you to provide it so that we can offer you the best service possible.

• Your utility account number is an 11 digit number in the format 01234-56789-0. You can find your utility account number on a recent bill or in your utility account portal.`}
            isOpen
          />
          <FAQItem
            question="What if my vehicle and charger are not compatible with SmartCharge New York?"
            answer="Information about incompatible vehicles and chargers..."
          />
          <FAQItem
            question="Can I enroll and earn incentives in SmartCharge New York if I am on a Con Edison residential or small business Time of Use Rate (TOU)?"
            answer="Information about TOU rates and eligibility..."
          />
          <FAQItem
            question="If my vehicles are part of a municipal or commercial fleet, am I eligible?"
            answer="Information about fleet eligibility..."
          />
        </div>
      </div>
    </div>
  );
}

function FAQItem({ question, answer, isOpen = false }: { question: string, answer: string, isOpen?: boolean }) {
  const [expanded, setExpanded] = useState(isOpen);

  return (
    <div className="border border-[#E5E7EB] rounded-lg">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F9FAFB] transition-colors"
      >
        <p className="text-[#0a0a0a] text-[16px] font-medium pr-4">
          {question}
        </p>
        {expanded ? (
          <X className="w-5 h-5 text-[#4a5565] flex-shrink-0" />
        ) : (
          <Plus className="w-5 h-5 text-[#4a5565] flex-shrink-0" />
        )}
      </button>
      {expanded && (
        <div className="px-6 pb-6 text-[#4a5565] text-[16px] whitespace-pre-line leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}