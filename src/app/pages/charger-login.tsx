import { useState } from "react";
import { useNavigate } from "react-router";
import { Apple } from "lucide-react";
import { useUser } from "../context/UserContext";

export function ChargerLogin() {
  const navigate = useNavigate();
  const { userData, updateUser } = useUser();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateUser({ chargerConnected: true });
    navigate('/charger-connected');
  };

  return (
    <div className="min-h-screen bg-[#999] flex items-center justify-center p-4">
      <div className="bg-white rounded shadow-lg max-w-[850px] w-full overflow-hidden">
        {/* Emporia Logo Header */}
        <div className="bg-[#e8e8e8] py-12 flex items-center justify-center">
          <div className="text-green-600 text-2xl font-bold tracking-wide">{userData.chargerBrand || "emporia"}</div>
        </div>

        {/* Content */}
        <div className="p-12">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-12">
            {/* Social Login */}
            <div>
              <h2 className="text-[#1e2939] text-[18px] font-medium mb-6">
                Sign in with your social account
              </h2>

              <div className="space-y-4 mb-6">
                <button className="w-full bg-black text-white py-3 px-4 rounded flex items-center justify-center gap-3 hover:bg-gray-900 transition-colors">
                  <Apple className="w-5 h-5" />
                  <span className="text-[16px] font-medium">Continue with Apple</span>
                </button>

                <button className="w-full bg-[#4285f4] text-white py-3 px-4 rounded flex items-center justify-center gap-3 hover:bg-[#3367d6] transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                    <path d="M18.17 8.36H10.18V11.82H14.82C14.33 14.16 12.38 15.27 10.18 15.27C7.45 15.27 5.27 13.09 5.27 10.36C5.27 7.63 7.45 5.45 10.18 5.45C11.45 5.45 12.63 5.91 13.54 6.73L16.18 4.09C14.63 2.63 12.54 1.82 10.18 1.82C5.54 1.82 1.82 5.54 1.82 10.18C1.82 14.82 5.54 18.54 10.18 18.54C14.45 18.54 18.54 15.27 18.54 10.18C18.54 9.54 18.45 8.91 18.17 8.36Z" fill="white"/>
                  </svg>
                  <span className="text-[16px] font-medium">Continue with Google</span>
                </button>
              </div>

              <p className="text-[#6a7282] text-[14px] leading-relaxed">
                We won't post to any of your accounts without asking first
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:flex items-center justify-center">
              <div className="text-[#99a1af] text-[14px]">or</div>
            </div>

            {/* Email/Password Login */}
            <div>
              <h2 className="text-[#1e2939] text-[18px] font-medium mb-6">
                Sign in with your email and password
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[#364153] text-[14px] font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="name@host.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-[#d1d5dc] rounded text-[16px] focus:outline-none focus:ring-2 focus:ring-[#4285f4] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-[#364153] text-[14px] font-medium mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full px-4 py-2 border border-[#d1d5dc] rounded text-[16px] focus:outline-none focus:ring-2 focus:ring-[#4285f4] focus:border-transparent"
                  />
                </div>

                <button
                  type="button"
                  className="text-[#4285f4] text-[14px] font-medium hover:underline"
                >
                  Forgot your password?
                </button>

                <button
                  type="submit"
                  className="w-full bg-[#4285f4] text-white py-3 rounded font-medium text-[16px] hover:bg-[#3367d6] transition-colors"
                >
                  Sign in
                </button>

                <div className="text-center">
                  <p className="text-[#4a5565] text-[14px]">
                    Need an account?{" "}
                    <button type="button" className="text-[#4285f4] font-medium hover:underline">
                      Sign up
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
