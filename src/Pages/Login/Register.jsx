import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Eye, EyeOff, Upload } from "lucide-react";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [profilePreview, setProfilePreview] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const password = watch("password");

  const onSubmit = (data) => {
    // Backend integration placeholder
    console.log("Register data:", data);

    if (!data.email.endsWith("@youruniversity.edu")) {
      alert("Please contact the university helpdesk at helpline@university.edu");
      return;
    }

    setSubmitted(true);
  };

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center p-4 sm:p-6 md:p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md md:max-w-lg lg:max-w-xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#1E1E1E] rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 border border-[#2A2A2A]"
        >
          <h1 className="text-center text-3xl font-bold text-[#E0E0E0] mb-3 bg-gradient-to-r from-[#BB86FC] to-[#9B6EF1] bg-clip-text text-transparent">
            Create Account
          </h1>
          <p className="text-center text-sm text-[#B0B0B0] mb-6">
            Register to access alumni opportunities and networking
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm text-center"
            >
              Thank you for registering. Your account is pending verification. You
              will receive an email once verified.
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5 sm:space-y-6"
            >
              {/* Profile Picture */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex flex-col items-center"
              >
                <label className="flex flex-col items-center cursor-pointer">
                  <div className="w-24 h-24 rounded-full bg-[#2A2A2A] flex items-center justify-center overflow-hidden border border-[#3A3A3A] mb-2">
                    {profilePreview ? (
                      <img
                        src={profilePreview}
                        alt="Profile Preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Upload size={24} className="text-[#B0B0B0]" />
                    )}
                  </div>
                  <span className="text-sm text-[#B0B0B0]">
                    Upload Profile Picture (optional)
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleProfileChange}
                  />
                </label>
              </motion.div>

              {/* Full Name */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <input
                  type="text"
                  placeholder="Full Name"
                  {...register("fullName", { required: "Full name is required" })}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.fullName
                      ? "border-red-500"
                      : "border-[#3A3A3A]"
                  } bg-[#2A2A2A] text-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#BB86FC] transition-all`}
                />
                {errors.fullName && (
                  <p className="text-red-400 text-xs mt-1">{errors.fullName.message}</p>
                )}
              </motion.div>

              {/* University Email */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <input
                  type="email"
                  placeholder="University Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+$/,
                      message: "Invalid email format",
                    },
                  })}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.email ? "border-red-500" : "border-[#3A3A3A]"
                  } bg-[#2A2A2A] text-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#BB86FC] transition-all`}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                )}
              </motion.div>

              {/* Password */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.password ? "border-red-500" : "border-[#3A3A3A]"
                  } bg-[#2A2A2A] text-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#BB86FC] transition-all`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#B0B0B0] hover:text-[#E0E0E0]"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
                {errors.password && (
                  <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>
                )}
              </motion.div>

              {/* Confirm Password */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="relative"
              >
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  {...register("confirmPassword", {
                    required: "Confirm your password",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.confirmPassword ? "border-red-500" : "border-[#3A3A3A]"
                  } bg-[#2A2A2A] text-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#BB86FC] transition-all`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#B0B0B0] hover:text-[#E0E0E0]"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
                {errors.confirmPassword && (
                  <p className="text-red-400 text-xs mt-1">{errors.confirmPassword.message}</p>
                )}
              </motion.div>

              {/* Role */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <select
                  {...register("role", { required: "Role is required" })}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.role ? "border-red-500" : "border-[#3A3A3A]"
                  } bg-[#2A2A2A] text-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#BB86FC] transition-all`}
                >
                  <option value="">Select Role</option>
                  <option value="Student">Student</option>
                  <option value="Alumni">Alumni</option>
                </select>
                {errors.role && (
                  <p className="text-red-400 text-xs mt-1">{errors.role.message}</p>
                )}
              </motion.div>

              {/* University */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <input
                  type="text"
                  value="Your University"
                  disabled
                  className="w-full px-4 py-3 rounded-lg border border-[#3A3A3A] bg-[#2A2A2A] text-[#B0B0B0]"
                />
              </motion.div>

              {/* Department */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <select
                  {...register("department", { required: "Department is required" })}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.department ? "border-red-500" : "border-[#3A3A3A]"
                  } bg-[#2A2A2A] text-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#BB86FC] transition-all`}
                >
                  <option value="">Select Department / Faculty</option>
                  <option value="CSE">CSE</option>
                  <option value="Other">Other (under development)</option>
                </select>
                {errors.department && (
                  <p className="text-red-400 text-xs mt-1">{errors.department.message}</p>
                )}
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={!isValid}
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(187,134,252,0.5)" }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-lg font-semibold text-white transition-all ${
                  isValid
                    ? "bg-gradient-to-r from-[#BB86FC] to-[#9B6EF1]"
                    : "bg-gray-600 cursor-not-allowed"
                }`}
              >
                Register
              </motion.button>

              {/* Login Link */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-center text-sm text-[#B0B0B0]"
              >
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-[#BB86FC] hover:text-[#9B6EF1] font-medium transition-colors"
                >
                  Login
                </a>
              </motion.p>
            </form>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Register;
