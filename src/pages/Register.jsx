import { use, useState } from "react";
import { data, Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { User, Mail, Lock, BookOpen, Building2, Check } from "lucide-react";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import { Upload, message, Spin } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { auth } from "../Auth/firebase.config";

export default function Register() {
  // keep using your project's custom `use` call (matches your original file)
  const { signUp, user, authAlert, authLoading } = use(AuthContext);

  // image state
  const [profilePicture, setProfilePicture] = useState(null);
  const [verificationDoc, setVerificationDoc] = useState(null);

  // submission state + top-level error
  const [submitted, setSubmitted] = useState(false);
  const [topError, setTopError] = useState("");

  // for navigation
  const navigate = useNavigate();

  // react-hook-form
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "Student",
      department: "CSE",
    },
  });

  const passwordValue = watch("password");

  // Cloudinary upload helper (returns url or null)
  const uploadToCloudinary = async (file) => {
    if (!file) return null;

    const fd = new FormData();
    fd.append("file", file);
    fd.append("upload_preset", "carecamp_unsigned"); // your preset

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dlr8t4tyc/image/upload",
        fd
      );
      return res.data.secure_url;
    } catch (err) {
      console.error("Cloudinary Upload Error:", err);
      message.error("Image upload failed. Please try again.");
      return null;
    }
  };

  // handler used by AntD Upload via beforeUpload
  const handleFileUpload = async (file, type) => {
    const url = await uploadToCloudinary(file);
    if (!url) return false;

    if (type === "profile") setProfilePicture(url);
    if (type === "verification") setVerificationDoc(url);

    // hide any top error if verification uploaded
    if (type === "verification") setTopError("");

    // return false so AntD doesn't auto-upload
    return false;
  };

  const onSubmit = async (data) => {
    setTopError("");

    // require verification doc
    if (!verificationDoc) {
      setTopError(
        "Please upload your ID card or certificate for verification."
      );
      message.error("Verification document is required.");
      return;
    }

    // prepare payload (you can post to backend here)
    const payload = {
      ...data,
      profilePicture,
      verificationDoc,
    };

    console.log("submitted data: ", payload);

    try {
      // awaiting signUp (auth provider will manage authLoading)
      const created = await signUp(payload.email, payload.password);
      // update users data
      const updateRes = await updateProfile(auth.currentUser, {
        displayName: payload?.fullName,
        photoURL:
          payload?.photoURL ||
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      });

      console.log("Update response: ", updateRes);

      // The AuthProvider normalizes user and populates context.user on success.
      // We check the context user - since signUp returned the firebase user on success,
      // proceed if created is truthy.
      if (created) {
        setSubmitted(true);
        toast.success(authAlert || "Account created successfully!");
        // optional: navigate('/login') or similar
      } else {
        // signUp returned null => error string available in authAlert
        toast.error(authAlert || "Signup failed.");
      }
    } catch (err) {
      console.error("Register onSubmit error:", err);
      toast.error("Something went wrong. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#1E1E1E] flex flex-col">
        <div className="flex-1 flex items-center justify-center px-4 py-20">
          <div className="w-full max-w-md text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#6464F1] to-[#7C7CFF] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Check className="text-white" size={32} />
            </div>

            <h1 className="text-3xl font-bold text-white mb-2">
              Thanks for Registering
            </h1>

            <p className="text-[#A9A9A9] mb-6">
              Your registration is received and is currently{" "}
              <span className="font-semibold text-white">
                pending verification
              </span>
              . An administrator will review your documents and confirm your
              account shortly.
            </p>

            <div className="bg-[#2A2A2A] border border-[#3A3A3A] rounded-lg p-6 mb-6 text-left">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-white text-sm mb-3 font-semibold">
                    Account Details
                  </p>
                  <p className="text-[#A9A9A9] text-sm mb-1">
                    Name: {watch("fullName")}
                  </p>
                  <p className="text-[#A9A9A9] text-sm mb-1">
                    Email: {watch("email")}
                  </p>
                  <p className="text-[#A9A9A9] text-sm">
                    Role: {watch("role")}
                  </p>
                </div>

                <div className="text-right">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-yellow-500/10 text-yellow-300 border border-yellow-600">
                    Pending
                  </span>
                  <p className="text-[#A9A9A9] text-xs mt-2">
                    You will be notified by email.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 justify-center mb-6">
              <Link
                to="/"
                className="inline-block px-6 py-3 bg-[#2A2A2A] border border-[#3A3A3A] text-[#A9A9A9] rounded-lg hover:border-[#6464F1] hover:text-white transition-colors duration-200"
              >
                Back to Home
              </Link>

              <Link
                to="/contact"
                className="inline-block px-6 py-3 bg-gradient-to-r from-[#6464F1] to-[#7C7CFF] text-white font-semibold rounded-lg hover:from-[#7474F1] hover:to-[#8C8CFF] transition-all duration-200"
              >
                Contact Support
              </Link>
            </div>

            <p className="text-[#A9A9A9] text-xs">
              If you need faster verification, reply to the verification email
              or contact{" "}
              <a
                href="mailto:helpdesk@alumni.university.edu"
                className="text-[#6464F1] hover:text-[#7C7CFF]"
              >
                helpdesk@alumni.university.edu
              </a>
              .
            </p>
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
            <h1 className="text-3xl font-bold text-white mb-2">
              Create Your Account
            </h1>
            <p className="text-[#A9A9A9]">Join the alumni network today</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                  type="text"
                  placeholder="Rehan Islam"
                  {...register("fullName", {
                    required: "Full name is required",
                    minLength: { value: 2, message: "Name is too short" },
                  })}
                  className="w-full bg-[#2A2A2A] text-white placeholder-[#666666] rounded-lg pl-10 pr-4 py-3 border border-[#3A3A3A] focus:border-[#6464F1] focus:outline-none transition-colors duration-200"
                />
              </div>
              {errors.fullName && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.fullName.message}
                </p>
              )}
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
                  type="email"
                  placeholder="ug2302000@cse.pstu.ac.bd"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                    validate: (v) =>
                      v.endsWith(".pstu.ac.bd") ||
                      "You must use your university email (e.g., ug2302000@cse.pstu.ac.bd)",
                  })}
                  className="w-full bg-[#2A2A2A] text-white placeholder-[#666666] rounded-lg pl-10 pr-4 py-3 border border-[#3A3A3A] focus:border-[#6464F1] focus:outline-none transition-colors duration-200"
                />
              </div>
              <p className="text-[#A9A9A9] text-xs mt-1">
                Must end with .pstu.ac.bd
              </p>
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
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
                  type="password"
                  placeholder="Min 8 characters"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long",
                    },
                  })}
                  className="w-full bg-[#2A2A2A] text-white placeholder-[#666666] rounded-lg pl-10 pr-4 py-3 border border-[#3A3A3A] focus:border-[#6464F1] focus:outline-none transition-colors duration-200"
                />
              </div>
              {errors.password && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
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
                  type="password"
                  placeholder="Confirm your password"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (v) =>
                      v === passwordValue || "Passwords do not match",
                  })}
                  className="w-full bg-[#2A2A2A] text-white placeholder-[#666666] rounded-lg pl-10 pr-4 py-3 border border-[#3A3A3A] focus:border-[#6464F1] focus:outline-none transition-colors duration-200"
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Role + Department */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white text-sm font-semibold mb-2">
                  Role *
                </label>
                <Controller
                  control={control}
                  name="role"
                  rules={{ required: "Role is required" }}
                  render={({ field }) => (
                    <select
                      {...field}
                      className="w-full bg-[#2A2A2A] text-white rounded-lg px-4 py-3 border border-[#3A3A3A] focus:border-[#6464F1] focus:outline-none transition-colors duration-200"
                    >
                      <option>Student</option>
                      <option>Alumni</option>
                    </select>
                  )}
                />
                {errors.role && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.role.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-white text-sm font-semibold mb-2">
                  Department / Faculty *
                </label>
                <Controller
                  control={control}
                  name="department"
                  rules={{ required: "Department is required" }}
                  render={({ field }) => (
                    <select
                      {...field}
                      className="w-full bg-[#2A2A2A] text-white rounded-lg px-4 py-3 border border-[#3A3A3A] focus:border-[#6464F1] focus:outline-none transition-colors duration-200"
                    >
                      <option value="CSE">Computer Science Engineering</option>
                      <option value="ECE">Electronics & Communication</option>
                      <option value="ME">Mechanical Engineering</option>
                      <option value="CIVIL">Civil Engineering</option>
                      <option value="OTHER">Others (Under Development)</option>
                    </select>
                  )}
                />
                {errors.department && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.department.message}
                  </p>
                )}
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

            {/* Profile Picture + Verification (side-by-side, small gap) */}
            <div className="flex items-start gap-6">
              {/* Profile Picture (Optional) */}
              <div>
                <label className="block text-white text-sm font-semibold mb-2">
                  Profile Picture
                </label>

                <div className="bg-[#2A2A2A] rounded-lg border flex items-center justify-center border-[#3A3A3A] hover:border-[#6464F1] transition-colors duration-200">
                  <Upload
                    listType="picture-card"
                    accept="image/*"
                    maxCount={1}
                    beforeUpload={(file) => {
                      handleFileUpload(file, "profile");
                      return false;
                    }}
                    showUploadList={false}
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

              {/* Verification (Mandatory) */}
              <div>
                <label className="block text-white text-sm font-semibold mb-2">
                  ID Card / Certificate{" "}
                  <span className="ml-1" aria-hidden>
                    *
                  </span>
                  <span className="sr-only">required</span>
                </label>

                <div
                  className="bg-[#2A2A2A] rounded-lg border w-fit
                 flex items-center justify-center border-[#3A3A3A] hover:border-[#6464F1] transition-colors duration-200"
                >
                  <Upload
                    listType="picture-card"
                    accept="image/*"
                    maxCount={1}
                    beforeUpload={(file) => {
                      handleFileUpload(file, "verification");
                      return false;
                    }}
                    showUploadList={false}
                  >
                    {verificationDoc ? (
                      <img
                        src={verificationDoc}
                        alt="Verification Document"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-[#A9A9A9]">
                        <PlusOutlined className="text-[#A9A9A9] text-2xl" />
                        <p className="mt-1 text-xs">Upload Required</p>
                      </div>
                    )}
                  </Upload>
                </div>
              </div>
            </div>

            {/* Top-level error */}
            {topError && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                <p className="text-red-400 text-sm">{topError}</p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={!isValid || isSubmitting || !verificationDoc}
              className="w-full px-6 py-3 bg-gradient-to-r from-[#6464F1] to-[#7C7CFF] text-white font-semibold rounded-lg hover:from-[#7474F1] hover:to-[#8C8CFF] transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Creating..." : "Create Account"}
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
