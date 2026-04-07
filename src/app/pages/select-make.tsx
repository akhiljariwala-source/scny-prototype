import { useState } from "react";
import { Header } from "../components/header";
import { useNavigate } from "react-router";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useUser } from "../context/UserContext";

const LOGO_BASE = "https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/thumb";

const carMakes = [
  "Acura", "Alfa Romeo", "Audi", "Bentley", "BMW", "Cadillac", "Chevrolet",
  "Chrysler", "Dodge", "Ferrari", "Fiat", "Fisker", "Ford", "Genesis", "GMC",
  "Honda", "Hyundai", "Jaguar", "Jeep", "Karma", "Kia", "Lamborghini",
  "Land Rover", "Lexus", "Lincoln", "Lotus", "Lucid", "Maserati", "Mazda",
  "McLaren", "Mercedes-Benz", "Mini", "Mitsubishi", "Nissan", "Polestar",
  "Porsche", "Ram", "Rivian", "Smart", "Subaru", "Tesla", "Toyota", "VinFast",
  "Volkswagen", "Volvo",
];

const getLogoSlug = (make: string): string => {
  const slugMap: Record<string, string> = {
    "Alfa Romeo": "alfa-romeo",
    "Land Rover": "land-rover",
    "Mercedes-Benz": "mercedes-benz",
  };
  return slugMap[make] || make.toLowerCase();
};

export function SelectMake() {
  const navigate = useNavigate();
  const { updateUser } = useUser();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMakes = carMakes.filter((make) =>
    make.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectMake = (make: string) => {
    updateUser({ vehicleMake: make });
    navigate('/select-model');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-[1000px] mx-auto px-8 py-12">
        <div className="max-w-[700px] mx-auto">
          <button
            onClick={() => navigate('/connect-vehicle')}
            className="mb-8 text-[#4a5565] hover:text-[#0a0a0a] transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <h1 className="text-[#0a0a0a] text-[32px] font-bold mb-8 text-center">Select make</h1>

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

          <div className="space-y-0">
            {filteredMakes.map((make) => (
              <button
                key={make}
                onClick={() => handleSelectMake(make)}
                className="w-full flex items-center justify-between p-4 hover:bg-[#F9FAFB] transition-colors border-b border-[#E5E7EB] last:border-b-0"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={`${LOGO_BASE}/${getLogoSlug(make)}.png`}
                    alt={`${make} logo`}
                    className="w-10 h-10 object-contain"
                  />
                  <span className="text-[#364153] text-[16px] font-medium">{make}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-[#99A1AF]" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}