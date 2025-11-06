import React, { use, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import AuthContext from "../../Context/AuthContext";
import { useNavigate } from "react-router";

const Login = () => {
  const { loginWithGoogle } = use(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setError("");
  };

  // navigation
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate validation
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setIsLoading(false);
      return;
    }

    // Simulate login
    console.log("Login attempt:", formData);
    setIsLoading(false);
    // On success, redirect or show success animation
  };

  const handleGoogleSignIn = async () => {
    try {
      const user = await loginWithGoogle();
      if (user) {
        navigate("/");
      }
    } catch (error) {
      console.log("Google login error: ", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center pt-20 md:pt-0 p-4 sm:p-6 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md md:max-w-lg lg:max-w-xl"
      >
        {/* Login Card */}
        <motion.div
          animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.4 }}
          className="bg-[#1E1E1E] rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 border border-[#2A2A2A]"
        >
          {/* Logo/Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center mb-6 sm:mb-8"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#E0E0E0] mb-2 sm:mb-3 bg-gradient-to-r from-[#BB86FC] to-[#9B6EF1] bg-clip-text text-transparent">
              Welcome Back
            </h1>
            <p className="text-[#B0B0B0] text-xs sm:text-sm leading-relaxed">
              Sign in to reconnect, network, and explore alumni opportunities
            </p>
          </motion.div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm"
            >
              {error}
            </motion.div>
          )}

          {/* Login Form */}
          <div className="space-y-5 sm:space-y-6">
            {/* Email Input */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <label className="block text-[#E0E0E0] text-sm font-medium mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#B0B0B0]"
                  size={20}
                />
                <motion.input
                  whileFocus={{
                    scale: 1.01,
                    boxShadow: "0 0 0 2px rgba(187, 134, 252, 0.3)",
                  }}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@university.edu"
                  className="w-full pl-11 pr-4 py-3 sm:py-3.5 bg-[#2A2A2A] text-[#E0E0E0] rounded-lg border border-[#3A3A3A] focus:outline-none focus:border-[#BB86FC] transition-all text-sm sm:text-base"
                />
              </div>
            </motion.div>

            {/* Password Input */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <label className="block text-[#E0E0E0] text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#B0B0B0]"
                  size={20}
                />
                <motion.input
                  whileFocus={{
                    scale: 1.01,
                    boxShadow: "0 0 0 2px rgba(187, 134, 252, 0.3)",
                  }}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className="w-full pl-11 pr-12 py-3 sm:py-3.5 bg-[#2A2A2A] text-[#E0E0E0] rounded-lg border border-[#3A3A3A] focus:outline-none focus:border-[#BB86FC] transition-all text-sm sm:text-base"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#B0B0B0] hover:text-[#E0E0E0] transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </motion.div>

            {/* Remember Me & Forgot Password */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-between gap-3"
            >
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="w-4 h-4 rounded bg-[#2A2A2A] border-[#3A3A3A] text-[#BB86FC] focus:ring-2 focus:ring-[#BB86FC] focus:ring-offset-0"
                />
                <span className="text-[#B0B0B0] text-sm">Remember me</span>
              </label>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/forgot-password"
                className="text-[#BB86FC] text-sm hover:text-[#9B6EF1] transition-colors"
              >
                Forgot Password?
              </motion.a>
            </motion.div>

            {/* Login Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 30px rgba(187, 134, 252, 0.5)",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full py-3 sm:py-3.5 rounded-lg font-semibold text-white relative overflow-hidden transition-all text-sm sm:text-base"
              style={{
                background: "linear-gradient(135deg, #BB86FC, #9B6EF1)",
              }}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-2"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Signing in...
                </span>
              ) : (
                "Sign In"
              )}
            </motion.button>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="relative my-6"
            >
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#2A2A2A]"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-[#1E1E1E] text-[#B0B0B0]">
                  Or continue with
                </span>
              </div>
            </motion.div>

            {/* Google Sign-In Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ scale: 1.02, backgroundColor: "#2A2A2A" }}
              whileTap={{ scale: 0.98 }}
              onClick={handleGoogleSignIn}
              className="w-full py-3 sm:py-3.5 rounded-lg font-medium text-[#E0E0E0] bg-[#1E1E1E] border border-[#3A3A3A] hover:border-[#BB86FC] transition-all flex items-center justify-center space-x-3 text-sm sm:text-base"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#EA4335"
                  d="M5.27 9.76A7.46 7.46 0 0 1 12 4.5c1.98 0 3.73.71 5.11 1.88l3.81-3.81A11.96 11.96 0 0 0 12 0C7.31 0 3.25 2.62 1.24 6.48l4.03 3.28z"
                />
                <path
                  fill="#34A853"
                  d="M16.04 18.01A7.4 7.4 0 0 1 12 19.5a7.46 7.46 0 0 1-6.73-5.24l-4.03 3.28A11.96 11.96 0 0 0 12 24c3.24 0 6.14-1.31 8.24-3.42l-4.2-3.57z"
                />
                <path
                  fill="#FBBC05"
                  d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47a5.54 5.54 0 0 1-2.43 3.64l4.2 3.57c2.43-2.24 3.75-5.53 3.75-9.45z"
                />
                <path
                  fill="#4285F4"
                  d="M5.27 14.26A7.43 7.43 0 0 1 4.5 12c0-.83.15-1.63.42-2.38L1.24 6.48A11.94 11.94 0 0 0 0 12c0 1.93.46 3.76 1.27 5.38l4.03-3.12z"
                />
              </svg>
              <span>Sign in with Google</span>
            </motion.button>
          </div>

          {/* Register Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-6 text-center"
          >
            <p className="text-[#B0B0B0] text-xs sm:text-sm">
              Don't have an account?{" "}
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/register"
                className="text-[#BB86FC] hover:text-[#9B6EF1] font-medium transition-colors inline-block"
              >
                Register
              </motion.a>
            </p>
          </motion.div>
        </motion.div>

        {/* Footer Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-center mt-6 text-[#B0B0B0] text-[10px] sm:text-xs"
        >
          By continuing, you agree to our Terms of Service and Privacy Policy
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Login;
