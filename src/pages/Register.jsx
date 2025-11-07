import { use, useState } from "react";
import { Link } from "react-router-dom";
import { User, Mail, Lock, BookOpen, Building2, Check } from "lucide-react";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import { Upload, Image } from "antd";
import { PlusOutlined } from "@ant-design/icons";

export default function Register() {
  const { signUp, user } = use(AuthContext);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "Student",
    department: "CSE",
  });
  const [profilePicture, setProfilePicture] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  console.log(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    console.log("file type: ", file);

    // Create FormData for Cloudinary upload
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "carecamp_unsigned"); // replace with your Cloudinary preset

    try {
      // Upload to Cloudinary
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/dlr8t4tyc/image/upload`,
        formData
      );

      const imgUrl = res.data.secure_url;
      setProfilePicture(imgUrl);
      console.log("image url: ", imgUrl);
    } catch (err) {
      console.error(err);
    }
  };

  const validateForm = () => {
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill in all required fields");
      return false;
    }

    // if (!formData.email.endsWith("@university.edu")) {
    //   setError(
    //     "You must use your university email (e.g., name@university.edu)"
    //   );
    //   return false;
    // }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long");
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) {
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    const user = signUp(formData.email, formData.password);
    return (
      <div className="min-h-screen bg-[#1E1E1E] flex flex-col">
        <div className="flex-1 flex items-center justify-center px-4 py-20">
          <div className="w-full max-w-md text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#6464F1] to-[#7C7CFF] rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="text-white" size={32} />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">
              Thank You for Registering
            </h1>
            <p className="text-[#A9A9A9] mb-6">
              Your account has been created successfully. Your account is now
              active and you can log in immediately.
            </p>
            <div className="bg-[#2A2A2A] border border-[#3A3A3A] rounded-lg p-6 mb-8">
              <p className="text-white text-sm mb-3 font-semibold">
                Account Details
              </p>
              <p className="text-[#A9A9A9] text-sm mb-2">
                Name: {formData.fullName}
              </p>
              <p className="text-[#A9A9A9] text-sm mb-2">
                Email: {formData.email}
              </p>
              <p className="text-[#A9A9A9] text-sm">Role: {formData.role}</p>
            </div>
            <Link
              to="/login"
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#6464F1] to-[#7C7CFF] text-white font-semibold rounded-lg hover:from-[#7474F1] hover:to-[#8C8CFF] transition-all duration-200"
            >
              Go to Login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1E1E1E] flex flex-col">
      <div className="flex-1 px-4 py-20">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-[#6464F1] to-[#7C7CFF] rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Create Your Account
            </h1>
            <p className="text-[#A9A9A9]">Join the alumni network today</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-white text-sm font-semibold mb-2">
                Full Name *
              </label>
              <div className="relative">
                <User
                  className="absolute left-3 top-3.5 text-[#A9A9A9]"
                  size={20}
                />
                <input
                  defaultValue="rehan"
                  type="text"
                  name="fullName"
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-[#2A2A2A] text-white placeholder-[#666666] rounded-lg pl-10 pr-4 py-3 border border-[#3A3A3A] focus:border-[#6464F1] focus:outline-none transition-colors duration-200"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-white text-sm font-semibold mb-2">
                University Email *
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-3.5 text-[#A9A9A9]"
                  size={20}
                />
                <input
                  defaultValue="ryanrehan.pc@gmail.com"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="john.doe@university.edu"
                  className="w-full bg-[#2A2A2A] text-white placeholder-[#666666] rounded-lg pl-10 pr-4 py-3 border border-[#3A3A3A] focus:border-[#6464F1] focus:outline-none transition-colors duration-200"
                />
              </div>
              <p className="text-[#A9A9A9] text-xs mt-1">
                Must end with @university.edu
              </p>
            </div>

            {/* Password */}
            <div>
              <label className="block text-white text-sm font-semibold mb-2">
                Password *
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-3.5 text-[#A9A9A9]"
                  size={20}
                />
                <input
                  defaultValue="12345678@Rr"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="Min 8 characters"
                  className="w-full bg-[#2A2A2A] text-white placeholder-[#666666] rounded-lg pl-10 pr-4 py-3 border border-[#3A3A3A] focus:border-[#6464F1] focus:outline-none transition-colors duration-200"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-white text-sm font-semibold mb-2">
                Confirm Password *
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-3.5 text-[#A9A9A9]"
                  size={20}
                />
                <input
                  defaultValue="12345678@Rr"
                  type="password"
                  name="confirmPassword"
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="w-full bg-[#2A2A2A] text-white placeholder-[#666666] rounded-lg pl-10 pr-4 py-3 border border-[#3A3A3A] focus:border-[#6464F1] focus:outline-none transition-colors duration-200"
                />
              </div>
            </div>

            {/* Role Selection */}
            <div>
              <label className="block text-white text-sm font-semibold mb-2">
                Role *
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full bg-[#2A2A2A] text-white rounded-lg px-4 py-3 border border-[#3A3A3A] focus:border-[#6464F1] focus:outline-none transition-colors duration-200"
              >
                <option>Student</option>
                <option>Alumni</option>
              </select>
            </div>

            {/* Department */}
            <div>
              <label className="block text-white text-sm font-semibold mb-2">
                Department / Faculty *
              </label>
              <div className="relative">
                <BookOpen
                  className="absolute left-3 top-3.5 text-[#A9A9A9]"
                  size={20}
                />
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full bg-[#2A2A2A] text-white rounded-lg pl-10 pr-4 py-3 border border-[#3A3A3A] focus:border-[#6464F1] focus:outline-none transition-colors duration-200"
                >
                  <option value="CSE">Computer Science Engineering</option>
                  <option value="ECE">Electronics & Communication</option>
                  <option value="ME">Mechanical Engineering</option>
                  <option value="CIVIL">Civil Engineering</option>
                  <option value="OTHER">Others (Under Development)</option>
                </select>
              </div>
            </div>

            {/* University (Auto-filled) */}
            <div>
              <label className="block text-white text-sm font-semibold mb-2">
                University (Auto-filled)
              </label>
              <div className="relative">
                <Building2
                  className="absolute left-3 top-3.5 text-[#A9A9A9]"
                  size={20}
                />
                <input
                  type="text"
                  value="University Name"
                  disabled
                  className="w-full bg-[#3A3A3A] text-[#A9A9A9] rounded-lg pl-10 pr-4 py-3 border border-[#3A3A3A] opacity-50 cursor-not-allowed"
                />
              </div>
            </div>

            {/* Profile Picture Upload */}
            <div>
              <div>
                <label className="block text-white text-sm font-semibold mb-2">
                  Profile Picture (Optional)
                </label>

                <div className="bg-[#2A2A2A] rounded-lg border w-fit border-[#3A3A3A] hover:border-[#6464F1] transition-colors duration-200 flex items-center justify-center">
                  <Upload
                    listType="picture-card"
                    accept="image/*"
                    maxCount={1}
                    beforeUpload={(file) => {
                      handleFileUpload({ target: { files: [file] } }); // your function
                      return false; // prevent auto-upload
                    }}
                    className="dark-upload w-full h-full flex items-center justify-center"
                    showUploadList={false} // hide default AntD thumbnail
                  >
                    {profilePicture ? (
                      <img
                        src={profilePicture}
                        alt="Profile"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-[#A9A9A9]">
                        <PlusOutlined className="text-[#A9A9A9] text-2xl" />
                        <p className="mt-1 text-xs">Click to Upload</p>
                      </div>
                    )}
                  </Upload>
                </div>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={
                !formData.fullName ||
                !formData.email ||
                !formData.password ||
                !formData.confirmPassword
              }
              className="w-full px-6 py-3 bg-gradient-to-r from-[#6464F1] to-[#7C7CFF] text-white font-semibold rounded-lg hover:from-[#7474F1] hover:to-[#8C8CFF] transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Create Account
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-8 text-center">
            <p className="text-[#A9A9A9]">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-[#6464F1] hover:text-[#7C7CFF] font-semibold transition-colors"
              >
                Sign in here
              </Link>
            </p>
          </div>

          {/* Help Message */}
          <div className="mt-6 p-4 bg-[#2A2A2A] border border-[#3A3A3A] rounded-lg">
            <p className="text-[#A9A9A9] text-sm">
              <strong>Don't have university email access?</strong> Please
              contact{" "}
              <a
                href="mailto:helpdesk@alumni.university.edu"
                className="text-[#6464F1] hover:text-[#7C7CFF]"
              >
                helpdesk@alumni.university.edu
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
