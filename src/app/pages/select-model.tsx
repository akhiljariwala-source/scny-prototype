import { useState } from "react";
import { Header } from "../components/header";
import { useNavigate } from "react-router";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useUser } from "../context/UserContext";

const modelsByMake: Record<string, string[]> = {
  "Acura": ["ZDX"],
  "Alfa Romeo": ["Tonale"],
  "Audi": ["A3 e-tron", "A6 e-tron", "A7 Plug-in Hybrid", "A8 Plug-in Hybrid", "e-tron", "e-tron GT", "Q4 e-tron", "Q5 Plug-in Hybrid", "Q6 e-tron", "Q8 e-tron"],
  "Bentley": ["Bentayga", "Continental", "Flying Spur"],
  "BMW": ["3 Series Plug-in Hybrid", "5 Series Plug-in Hybrid", "7 Series Plug-in Hybrid", "i3 BEV", "i3 REx", "i4", "i5", "i7", "i8", "iX", "M5 Plug-in Hybrid", "X3 Plug-in Hybrid", "X5 Plug-in Hybrid", "XM"],
  "Cadillac": ["Celestiq", "CT6 Plug-in Hybrid", "ELR", "Escalade IQ", "Lyriq", "Optiq", "Vistiq"],
  "Chevrolet": ["Blazer EV", "Bolt", "BrightDrop", "Equinox EV", "Silverado EV", "Spark EV", "Volt"],
  "Chrysler": ["Pacifica Plug-in Hybrid"],
  "Dodge": ["Charger Daytona", "Hornet R/T"],
  "Ferrari": ["296", "SF90"],
  "Fiat": ["500e"],
  "Fisker": ["Karma", "Ocean"],
  "Ford": ["C-Max", "E-Transit", "Escape Plug-in Hybrid", "F-150 Lightning", "Focus", "Fusion", "Mustang Mach-E", "Transit Connect"],
  "Genesis": ["Electrified G80", "Electrified GV70", "GV60"],
  "GMC": ["Hummer EV", "Sierra EV"],
  "Honda": ["Accord Plug-in Hybrid", "Clarity Electric", "Clarity Plug-in Hybrid", "Fit EV", "Prologue"],
  "Hyundai": ["Ioniq 5", "Ioniq 6", "Ioniq 9", "Ioniq Electric", "Ioniq Plug-in Hybrid", "Kona Electric", "Santa Fe Plug-in Hybrid", "Sonata Plug-in Hybrid", "Tucson Plug-in Hybrid"],
  "Jaguar": ["I-PACE"],
  "Jeep": ["Grand Cherokee 4xe", "Recon", "Wagoneer S", "Wrangler 4xe"],
  "Karma": ["Revero"],
  "Kia": ["EV6", "EV9", "Niro EV", "Niro Plug-in Hybrid", "Optima Plug-in Hybrid", "Sorento Plug-in Hybrid", "Soul EV", "Sportage Plug-in Hybrid"],
  "Lamborghini": ["Revuelto", "Temerario", "Urus SE"],
  "Land Rover": ["Range Rover", "Range Rover Sport"],
  "Lexus": ["NX Plug-in Hybrid", "RX Plug-in Hybrid", "RZ", "TX Plug-in Hybrid"],
  "Lincoln": ["Aviator Grand Touring", "Corsair Grand Touring"],
  "Lotus": ["Eletre"],
  "Lucid": ["Air", "Gravity"],
  "Maserati": ["GranTurismo", "Grecale"],
  "Mazda": ["CX-70 Plug-in Hybrid", "CX-90 Plug-in Hybrid", "MX-30"],
  "McLaren": ["Artura"],
  "Mercedes-Benz": ["B-Class", "C-Class", "E-Class", "EQB", "EQE", "EQS", "eSprinter", "Electric G-Class", "GLC Plug-in Hybrid", "GLE Plug-in Hybrid", "S-Class Plug-in Hybrid", "SL-Class Plug-in Hybrid"],
  "Mini": ["Cooper Electric", "Countryman Electric", "Countryman Plug-in Hybrid"],
  "Mitsubishi": ["i-MiEV", "Outlander Plug-in Hybrid"],
  "Nissan": ["Ariya", "Leaf", "Rogue Plug-in Hybrid"],
  "Polestar": ["2", "3", "4"],
  "Porsche": ["918 Spyder", "Cayenne Plug-in Hybrid", "Macan Electric", "Panamera Plug-in Hybrid", "Taycan"],
  "Ram": ["ProMaster EV", "1500 REV"],
  "Rivian": ["EDV", "R1S", "R1T"],
  "Smart": ["EQ Fortwo"],
  "Subaru": ["Crosstrek Hybrid", "Solterra"],
  "Tesla": ["Cybertruck", "Model 3", "Model S", "Model X", "Model Y", "Roadster"],
  "Toyota": ["bZ", "bZ4X", "Prius Plug-in Hybrid", "Prius Prime", "RAV4 EV", "RAV4 Plug-in Hybrid", "RAV4 Prime"],
  "VinFast": ["VF 8", "VF 9"],
  "Volkswagen": ["e-Golf", "ID.4", "ID.Buzz"],
  "Volvo": ["C40 Recharge", "EC40", "EX30", "EX40", "EX90", "S60 Recharge", "S90 Recharge", "V60 Recharge", "V90 Recharge", "XC40 Recharge", "XC60 Plug-in Hybrid", "XC60 Recharge", "XC90 Plug-in Hybrid", "XC90 Recharge"],
};

export function SelectModel() {
  const navigate = useNavigate();
  const { userData, updateUser } = useUser();
  const [searchQuery, setSearchQuery] = useState("");

  const models = modelsByMake[userData.vehicleMake] || [];
  const filteredModels = models.filter((model) =>
    model.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectModel = (model: string) => {
    updateUser({ vehicleModel: model });
    navigate('/select-trim');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-[1000px] mx-auto px-8 py-12">
        <div className="max-w-[700px] mx-auto">
          <button
            onClick={() => navigate('/select-make')}
            className="mb-8 text-[#4a5565] hover:text-[#0a0a0a] transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <h1 className="text-[#0a0a0a] text-[32px] font-bold mb-8 text-center">Select model</h1>

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
            <p className="text-[#6a7282] text-[14px] font-semibold tracking-[0.35px] uppercase mb-4">{userData.vehicleMake || "Select a make first"}</p>
          </div>

          <div className="space-y-0">
            {filteredModels.map((model) => (
              <button
                key={model}
                onClick={() => handleSelectModel(model)}
                className="w-full flex items-center justify-between p-4 hover:bg-[#F9FAFB] transition-colors border-b border-[#E5E7EB] last:border-b-0"
              >
                <span className="text-[#364153] text-[16px] font-medium">{model}</span>
                <ChevronRight className="w-5 h-5 text-[#99A1AF]" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}