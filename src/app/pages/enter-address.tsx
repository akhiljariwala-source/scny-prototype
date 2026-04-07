import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, Search, MapPin, X, HelpCircle } from "lucide-react";
import { useUser } from "../context/UserContext";
import svgPaths from "../../imports/svg-w8f7hw0bed";
import imgImageConEdison from "figma:asset/f2fb4548cf1df6873e35ad4578fdf4175a324932.png";
import imgImageOrangeRockland from "figma:asset/d6d2422b2c5dc2a946d736a3418a591adb55bee9.png";

interface AddressSuggestion {
  display_name: string;
  address: {
    house_number?: string;
    road?: string;
    city?: string;
    state?: string;
    postcode?: string;
    country?: string;
  };
  lat: string;
  lon: string;
}

export function EnterAddress() {
  const navigate = useNavigate();
  const { updateAddress } = useUser();
  const [searchQuery, setSearchQuery] = useState("19 Morris Avenue");
  const [suggestions, setSuggestions] = useState<AddressSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Fetch address suggestions from OpenStreetMap Nominatim API
  const fetchAddressSuggestions = async (query: string) => {
    if (query.length < 3) {
      setSuggestions([]);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?` +
        new URLSearchParams({
          q: query,
          format: 'json',
          addressdetails: '1',
          limit: '5',
          countrycodes: 'us', // Limit to US addresses for SmartCharge NY
        }),
        {
          headers: {
            'Accept': 'application/json',
          }
        }
      );
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error('Error fetching address suggestions:', error);
      setSuggestions([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Debounce search to avoid too many API calls
  useEffect(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    if (searchQuery.trim()) {
      debounceTimerRef.current = setTimeout(() => {
        fetchAddressSuggestions(searchQuery);
      }, 300);
    } else {
      setSuggestions([]);
    }

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [searchQuery]);

  const handleAddressSelect = (suggestion: AddressSuggestion) => {
    const { house_number, road, city, state, postcode } = suggestion.address;
    const street = road
      ? `${house_number || ''} ${road}`.trim()
      : suggestion.display_name.split(',')[0];

    // Save to context
    updateAddress({
      street,
      apartment: "",
      city: city || "",
      state: state || "",
      zip: postcode || "",
    });

    // Navigate to confirmation page with the selected address
    navigate('/confirm-address', {
      state: {
        address: suggestion.display_name,
        details: suggestion.address
      }
    });
  };

  const formatAddressLine1 = (suggestion: AddressSuggestion) => {
    const { house_number, road } = suggestion.address;
    if (house_number && road) {
      return `${house_number} ${road}`;
    }
    if (road) {
      return road;
    }
    return suggestion.display_name.split(',')[0];
  };

  const formatAddressLine2 = (suggestion: AddressSuggestion) => {
    const { city, state, postcode } = suggestion.address;
    const parts = [];
    if (city) parts.push(city);
    if (state) parts.push(state);
    if (postcode) parts.push(postcode);
    return parts.join(', ') || suggestion.display_name.split(',').slice(1, 3).join(',').trim();
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSuggestions([]);
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
        <div className="flex items-center justify-between mb-16">
          <button
            onClick={() => navigate('/home-address-intro')}
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
        <h1 className="text-[#0a0a0a] text-[30px] font-bold leading-9 mb-8">
          Enter your home address
        </h1>

        {/* Search Input */}
        <div className="relative mb-4">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="25 Fulton St"
              className="w-full h-[52px] pl-12 pr-12 py-3 border-2 border-[#d1d5dc] rounded-[10px] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#00a0df] focus:border-transparent"
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
            {/* Clear Button */}
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center hover:opacity-70 transition-opacity"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                  <path 
                    d={svgPaths.p2a4db200} 
                    stroke="#99A1AF" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="1.66667" 
                  />
                  <path 
                    d={svgPaths.p354ab980} 
                    stroke="#99A1AF" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="1.66667" 
                  />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Can't find your address */}
        <p className="text-[#364153] text-[16px] leading-6 mb-12">
          Can't find your address?{" "}
          <button
            onClick={() => navigate('/enter-address-manual')}
            className="text-[#0e2b2e] font-medium underline hover:opacity-70 transition-opacity"
          >
            Enter it manually
          </button>
        </p>

        {/* Address Suggestions */}
        {suggestions.length > 0 && (
          <div className="space-y-0">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleAddressSelect(suggestion)}
                className="w-full h-20 flex items-center gap-4 px-4 hover:bg-[#f9fafb] transition-colors"
              >
                {/* Location Icon */}
                <div className="w-5 h-5 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                    <path 
                      d={svgPaths.p26ddc800} 
                      stroke="#364153" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="1.66667" 
                    />
                    <path 
                      d={svgPaths.p35ba4680} 
                      stroke="#364153" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="1.66667" 
                    />
                  </svg>
                </div>
                {/* Address Text */}
                <div className="flex flex-col items-start flex-1">
                  <p className="text-[#101828] text-[16px] font-bold leading-6">
                    {formatAddressLine1(suggestion)}
                  </p>
                  <p className="text-[#6a7282] text-[16px] font-medium leading-6">
                    {formatAddressLine2(suggestion)}
                  </p>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Loading state */}
        {isLoading && (
          <div className="text-center py-8">
            <p className="text-[#6a7282] text-[16px]">Searching for addresses...</p>
          </div>
        )}

        {/* No results state */}
        {!isLoading && searchQuery.length >= 3 && suggestions.length === 0 && (
          <div className="text-center py-8">
            <p className="text-[#6a7282] text-[16px] mb-4">No addresses found.</p>
            <button
              onClick={() => navigate('/enter-address-manual')}
              className="text-[#0e2b2e] font-medium underline hover:opacity-70 transition-opacity"
            >
              Enter your address manually
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
