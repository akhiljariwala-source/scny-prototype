import { useState } from "react";
import { Header } from "../components/header";
import { useNavigate } from "react-router";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useUser } from "../context/UserContext";

const genericTrims = [
  "Standard",
  "Premium",
  "Long Range",
  "Performance",
];

export function SelectTrim() {
  const navigate = useNavigate();
  const { userData, updateUser } = useUser();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTrims = genericTrims.filter((trim) =>
    trim.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectTrim = (trim: string) => {
    updateUser({ vehicleTrim: trim });
    navigate('/vehicle-incompatible');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-[1000px] mx-auto px-8 py-12">
        <div className="max-w-[700px] mx-auto">
          <button
            onClick={() => navigate('/select-model')}
            className="mb-8 text-[#4a5565] hover:text-[#0a0a0a] transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <h1 className="text-[#0a0a0a] text-[32px] font-bold mb-8 text-center">Select trim</h1>

          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9CA3AF]" />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-[#D1D5DB] rounded-lg text-[16px] focus:outline-none focus:ring-2 focus:ring-[#3B9EE5] focus:border-transparent"
            />
          </div>

          <div className="mb-6">
            <p className="text-[#6a7282] text-[14px] font-semibold tracking-[0.35px] uppercase">{(userData.vehicleMake && userData.vehicleModel) ? `${userData.vehicleMake} ${userData.vehicleModel}` : "Select a vehicle first"}</p>
          </div>

          <div className="space-y-0 mb-8">
            {filteredTrims.map((trim, index) => (
              <button
                key={index}
                onClick={() => handleSelectTrim(trim)}
                className="w-full flex items-center justify-between p-4 hover:bg-[#F9FAFB] transition-colors border-b border-[#E5E7EB] last:border-b-0"
              >
                <span className="text-[#364153] text-[16px] font-medium">{trim}</span>
                <ChevronRight className="w-5 h-5 text-[#99A1AF]" />
              </button>
            ))}
          </div>

          <div className="text-center">
            <button className="text-[#0e2b2e] text-[16px] font-medium underline hover:text-[#4a5565]">
              Can't find your trim?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}