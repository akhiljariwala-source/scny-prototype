import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronRight, Eye, EyeOff } from "lucide-react";
import imgImageConEdison from "figma:asset/f2fb4548cf1df6873e35ad4578fdf4175a324932.png";
import imgImageOrangeRockland from "figma:asset/d6d2422b2c5dc2a946d736a3418a591adb55bee9.png";
import { useUser } from "../context/UserContext";

export function CreateAccountStep1() {
  const navigate = useNavigate();
  const { userData, updateUser } = useUser();
  const [formData, setFormData] = useState({
    firstName: userData.firstName || "",
    lastName: userData.lastName || "",
    email: userData.email || "",
    confirmEmail: userData.email || "",
    password: userData.password || "",
    confirmPassword: userData.password || "",
    phone: userData.phone || "",
    promoCode: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPromoCode, setShowPromoCode] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (field: string, value: string) => {
    switch (field) {
      case "firstName":
        return value.trim() === "" ? "First name is required" : "";
      case "lastName":
        return value.trim() === "" ? "Last name is required" : "";
      case "email":
        if (value.trim() === "") return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Enter a valid email address";
        return "";
      case "confirmEmail":
        if (value.trim() === "") return "Please confirm your email";
        if (value !== formData.email) return "Emails do not match";
        return "";
      case "password":
        if (value.trim() === "") return "Password is required";
        if (value.length < 8) return "Password must be at least 8 characters";
        if (!/[A-Z]/.test(value)) return "Password must include an uppercase letter";
        if (!/[0-9]/.test(value)) return "Password must include a number";
        if (!/[^A-Za-z0-9]/.test(value)) return "Password must include a special character";
        return "";
      case "confirmPassword":
        if (value.trim() === "") return "Please confirm your password";
        if (value !== formData.password) return "Passwords do not match";
        return "";
      case "phone":
        if (value.trim() === "") return "Phone number is required";
        if (value.replace(/\D/g, "").length < 10) return "Enter a valid 10-digit phone number";
        return "";
      default:
        return "";
    }
  };

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    if (digits.length === 0) return "";
    if (digits.length <= 3) return `(${digits}`;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const handleChange = (field: string, value: string) => {
    const newValue = field === "phone" ? formatPhone(value) : value;
    const newFormData = { ...formData, [field]: newValue };
    setFormData(newFormData);
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validateField(field, newValue) }));
    }
    // Re-validate confirm fields when their counterpart changes
    if (field === "email" && touched.confirmEmail) {
      setErrors((prev) => ({
        ...prev,
        confirmEmail: newFormData.confirmEmail && newFormData.confirmEmail !== value ? "Emails do not match" : "",
      }));
    }
    if (field === "password" && touched.confirmPassword) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: newFormData.confirmPassword && newFormData.confirmPassword !== value ? "Passwords do not match" : "",
      }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validateField(field, (formData as any)[field]) }));
  };

  const isFormValid = () => {
    const fields = ["firstName", "lastName", "email", "confirmEmail", "password", "confirmPassword", "phone"];
    return fields.every((field) => validateField(field, (formData as any)[field]) === "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fields = ["firstName", "lastName", "email", "confirmEmail", "password", "confirmPassword", "phone"];
    const newErrors: Record<string, string> = {};
    const newTouched: Record<string, boolean> = {};
    fields.forEach((field) => {
      newErrors[field] = validateField(field, (formData as any)[field]);
      newTouched[field] = true;
    });
    setErrors(newErrors);
    setTouched(newTouched);

    if (isFormValid()) {
      updateUser({
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim(),
        phone: formData.phone,
        password: formData.password,
      });
      navigate("/verify-eligibility");
    }
  };

  const inputClass = (field: string) =>
    `w-full h-[50px] px-4 py-3 border rounded-[10px] text-[16px] placeholder:text-[rgba(10,10,10,0.5)] focus:outline-none focus:ring-2 ${
      touched[field] && errors[field]
        ? "border-red-500 focus:ring-red-300"
        : "border-[#d1d5dc] focus:ring-[#00a0df]"
    }`;

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
            <img alt="Con Edison" className="h-5 object-contain" src={imgImageConEdison} />
            <img alt="Orange & Rockland" className="h-5 object-contain" src={imgImageOrangeRockland} />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[600px] mx-auto px-6 pt-12 pb-8">
        {/* Progress */}
        <div className="mb-8">
          <p className="text-[#0a0a0a] text-[20px] font-medium text-center mb-4">
            1/2 Your details
          </p>
          <div className="bg-[#e5e7eb] h-2 rounded-full overflow-hidden">
            <div className="bg-[#00a0df] h-full w-1/2" />
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-[#4fbeeb] rounded-[10px] p-6 mb-8 flex items-center justify-between cursor-pointer hover:bg-[#3db0dd] transition-colors">
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
          <p className="text-[#364153] text-[16px] leading-6 mb-8">
            First, enter your details
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="First name"
                value={formData.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                onBlur={() => handleBlur("firstName")}
                className={inputClass("firstName")}
              />
              {touched.firstName && errors.firstName && (
                <p className="text-red-500 text-[13px] mt-1 ml-1">{errors.firstName}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                placeholder="Last name"
                value={formData.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                onBlur={() => handleBlur("lastName")}
                className={inputClass("lastName")}
              />
              {touched.lastName && errors.lastName && (
                <p className="text-red-500 text-[13px] mt-1 ml-1">{errors.lastName}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                onBlur={() => handleBlur("email")}
                className={inputClass("email")}
              />
              {touched.email && errors.email && (
                <p className="text-red-500 text-[13px] mt-1 ml-1">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Confirm email address"
                value={formData.confirmEmail}
                onChange={(e) => handleChange("confirmEmail", e.target.value)}
                onBlur={() => handleBlur("confirmEmail")}
                className={inputClass("confirmEmail")}
              />
              {touched.confirmEmail && errors.confirmEmail && (
                <p className="text-red-500 text-[13px] mt-1 ml-1">{errors.confirmEmail}</p>
              )}
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={formData.password}
                onChange={(e) => handleChange("password", e.target.value)}
                onBlur={() => handleBlur("password")}
                className={`${inputClass("password")} pr-12`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-[14px]"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5 text-[#6a7282]" />
                ) : (
                  <Eye className="w-5 h-5 text-[#6a7282]" />
                )}
              </button>
              {touched.password && errors.password && (
                <p className="text-red-500 text-[13px] mt-1 ml-1">{errors.password}</p>
              )}
            </div>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={(e) => handleChange("confirmPassword", e.target.value)}
                onBlur={() => handleBlur("confirmPassword")}
                className={`${inputClass("confirmPassword")} pr-12`}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-[14px]"
              >
                {showConfirmPassword ? (
                  <EyeOff className="w-5 h-5 text-[#6a7282]" />
                ) : (
                  <Eye className="w-5 h-5 text-[#6a7282]" />
                )}
              </button>
              {touched.confirmPassword && errors.confirmPassword && (
                <p className="text-red-500 text-[13px] mt-1 ml-1">{errors.confirmPassword}</p>
              )}
            </div>

            <div>
              <input
                type="tel"
                placeholder="(555) 555-5555"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                onBlur={() => handleBlur("phone")}
                className={inputClass("phone")}
              />
              <p className="text-[#6a7282] text-[14px] leading-5 mt-2 ml-1">
                e.g. (###) ###-####
              </p>
              {touched.phone && errors.phone && (
                <p className="text-red-500 text-[13px] mt-1 ml-1">{errors.phone}</p>
              )}
            </div>

            {showPromoCode ? (
              <input
                type="text"
                placeholder="Enter promo or referral code"
                value={formData.promoCode}
                onChange={(e) => handleChange("promoCode", e.target.value)}
                className="w-full h-[50px] px-4 py-3 border border-[#d1d5dc] rounded-[10px] text-[16px] placeholder:text-[rgba(10,10,10,0.5)] focus:outline-none focus:ring-2 focus:ring-[#00a0df]"
              />
            ) : (
              <div className="text-center py-2">
                <button
                  type="button"
                  onClick={() => setShowPromoCode(true)}
                  className="text-[#364153] text-[16px] font-medium"
                >
                  Have a promo code or referral code?{" "}
                  <span className="underline">Add</span>
                </button>
              </div>
            )}

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
