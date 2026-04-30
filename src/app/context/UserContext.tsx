import { createContext, useContext, useState, ReactNode } from "react";

export interface UserData {
  // Account step 1
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;

  // Account step 2
  utility: "conEdison" | "oAndR" | "other";
  utilityAccountNumber: string;
  accountType: "residential" | "business";
  touRate: boolean;
  vehicleType: "passenger" | "commercial";
  termsAgreed: boolean;

  // Address
  address: {
    street: string;
    apartment: string;
    city: string;
    state: string;
    zip: string;
  };

  // Vehicle
  vehicleMake: string;
  vehicleModel: string;
  vehicleTrim: string;
  vehicleCompatible: boolean;

  // Charger
  chargerBrand: string;
  chargerModel: string;
  chargerConnected: boolean;

  // Verification
  verificationStatus: "none" | "action_needed" | "in_progress" | "verified" | "failed";
  verificationAccountNumber: string;
  electricianInstalled: boolean;
  documentationSubmitted: boolean;
}

const defaultUserData: UserData = {
  firstName: "Zara",
  lastName: "Harper",
  email: "zara.harper@ev.energy",
  phone: "(212) 555-0147",
  password: "SmartCharge2026!",

  utility: "conEdison",
  utilityAccountNumber: "",
  accountType: "residential",
  touRate: false,
  vehicleType: "passenger",
  termsAgreed: false,

  address: {
    street: "",
    apartment: "",
    city: "",
    state: "",
    zip: "",
  },

  vehicleMake: "",
  vehicleModel: "",
  vehicleTrim: "",
  vehicleCompatible: false,

  chargerBrand: "",
  chargerModel: "",
  chargerConnected: false,

  verificationStatus: "none",
  verificationAccountNumber: "",
  electricianInstalled: true,
  documentationSubmitted: true,
};

interface UserContextType {
  userData: UserData;
  updateUser: (updates: Partial<UserData>) => void;
  updateAddress: (updates: Partial<UserData["address"]>) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState<UserData>(defaultUserData);

  const updateUser = (updates: Partial<UserData>) => {
    setUserData((prev) => ({ ...prev, ...updates }));
  };

  const updateAddress = (updates: Partial<UserData["address"]>) => {
    setUserData((prev) => ({
      ...prev,
      address: { ...prev.address, ...updates },
    }));
  };

  return (
    <UserContext.Provider value={{ userData, updateUser, updateAddress }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
