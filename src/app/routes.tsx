import { createHashRouter } from "react-router";
import {
  FAQPage,
  CreateAccountStep1,
  CreateAccountStep2,
  WelcomePage,
  HomeAddressIntro,
  EnterAddress,
  ConfirmAddress,
  ConnectVehicle,
  SetupComplete,
  SelectMake,
  SelectModel,
  SelectTrim,
  VehicleIncompatible,
  ConnectChargerIntro,
  SelectCharger,
  ChargerLogin,
  ChargerConnected,
  Dashboard,
  DashboardWithAction,
  VerifyAccount,
  DashboardVerificationProgress,
  EmailConfirmation,
  DashboardVerified,
  EmailVerified,
  Account,
} from "./pages";

export const router = createHashRouter([
  {
    path: "/",
    Component: FAQPage,
  },
  {
    path: "/create-account",
    Component: CreateAccountStep1,
  },
  {
    path: "/verify-eligibility",
    Component: CreateAccountStep2,
  },
  {
    path: "/welcome",
    Component: WelcomePage,
  },
  {
    path: "/home-address-intro",
    Component: HomeAddressIntro,
  },
  {
    path: "/enter-address",
    Component: EnterAddress,
  },
  {
    path: "/confirm-address",
    Component: ConfirmAddress,
  },
  {
    path: "/connect-vehicle",
    Component: ConnectVehicle,
  },
  {
    path: "/setup-complete",
    Component: SetupComplete,
  },
  {
    path: "/select-make",
    Component: SelectMake,
  },
  {
    path: "/select-model",
    Component: SelectModel,
  },
  {
    path: "/select-trim",
    Component: SelectTrim,
  },
  {
    path: "/vehicle-incompatible",
    Component: VehicleIncompatible,
  },
  {
    path: "/connect-charger-intro",
    Component: ConnectChargerIntro,
  },
  {
    path: "/select-charger",
    Component: SelectCharger,
  },
  {
    path: "/charger-login",
    Component: ChargerLogin,
  },
  {
    path: "/charger-connected",
    Component: ChargerConnected,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
  {
    path: "/dashboard-action",
    Component: DashboardWithAction,
  },
  {
    path: "/verify-account",
    Component: VerifyAccount,
  },
  {
    path: "/dashboard-verification-progress",
    Component: DashboardVerificationProgress,
  },
  {
    path: "/email-confirmation",
    Component: EmailConfirmation,
  },
  {
    path: "/email-verified",
    Component: EmailVerified,
  },
  {
    path: "/dashboard-verified",
    Component: DashboardVerified,
  },
  {
    path: "/account",
    Component: Account,
  },
]);