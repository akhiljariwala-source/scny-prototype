import { useState } from "react";
import { Header } from "../components/header";
import { useNavigate } from "react-router";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useUser } from "../context/UserContext";
import imgAcuraLogo from "figma:asset/a28cd1e2595f356d56950c4bb8e6ef422be74fce.png";
import imgAutelLogo from "figma:asset/128d9859532f4666385693fa6a195150d8f4a35c.png";
import imgChargePointLogo from "figma:asset/4cc26f003b054e83558e22a1b473200f80689dbc.png";
import imgTeslaLogo from "figma:asset/08737406dafe01ead0737a5315f0b7b27fbafd51.png";
import imgWallboxLogo from "figma:asset/6c85bc80d416fc9b3c63962cba57611785e9d5e6.png";

const chargers = [
  { name: "Acura", beta: true },
  { name: "Autel", beta: true },
  { name: "ChargePoint", beta: false },
  { name: "Emporia", beta: false },
  { name: "Honda", beta: true },
  { name: "Tesla", beta: false },
  { name: "Wallbox", beta: true },
];

const logoMap: Record<string, string> = {
  Acura: imgAcuraLogo,
  Autel: imgAutelLogo,
  ChargePoint: imgChargePointLogo,
  Honda: "https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/thumb/honda.png",
  Tesla: imgTeslaLogo,
  Wallbox: imgWallboxLogo,
};

export function SelectCharger() {
  const navigate = useNavigate();
  const { updateUser } = useUser();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredChargers = chargers.filter((charger) =>
    charger.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectCharger = (charger: string) => {
    updateUser({ chargerBrand: charger });
    navigate('/charger-login');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-[1000px] mx-auto px-8 py-12">
        <div className="max-w-[700px] mx-auto">
          <button
            onClick={() => navigate('/connect-charger-intro')}
            className="mb-8 text-[#4a5565] hover:text-[#0a0a0a] transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

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

          <div className="space-y-0 mb-8">
            {filteredChargers.map((charger) => (
              <button
                key={charger.name}
                onClick={() => handleSelectCharger(charger.name)}
                className="w-full flex items-center justify-between p-4 hover:bg-[#F9FAFB] transition-colors border-b border-[#E5E7EB] last:border-b-0"
              >
                <div className="flex items-center gap-4">
                  {logoMap[charger.name] ? (
                    <img
                      src={logoMap[charger.name]}
                      alt={charger.name}
                      className="w-10 h-10 object-contain rounded"
                    />
                  ) : charger.name === "Emporia" ? (
                    <div className="w-10 h-10 flex items-center justify-center">
                      <span className="text-[#B0C236] text-[11px] font-bold tracking-tight">emporia</span>
                    </div>
                  ) : (
                    <div className="w-10 h-10 bg-[#F3F4F6] rounded-lg flex items-center justify-center">
                      <span className="text-[#6B7280] text-[14px] font-semibold">
                        {charger.name.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                  )}
                  <span className="text-[#0a0a0a] text-[16px] font-medium">{charger.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  {charger.beta && (
                    <span className="text-[#0e7a6e] text-[11px] font-semibold px-2.5 py-0.5 border border-[#0e7a6e] rounded-full">
                      BETA
                    </span>
                  )}
                  <ChevronRight className="w-5 h-5 text-[#9CA3AF]" />
                </div>
              </button>
            ))}
          </div>

          <div className="text-center">
            <button className="text-[#4A9EE0] text-[16px] hover:text-[#3B9EE5]">
              My charger is not listed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}