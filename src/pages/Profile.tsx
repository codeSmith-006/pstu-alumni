import { useState } from "react";
import { User, Mail, Briefcase, GraduationCap, Edit2, Save, X } from "lucide-react";
import Footer from "@/components/Footer";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john.doe@university.edu",
    role: "Alumni",
    department: "Computer Science Engineering",
    graduationYear: 2020,
    bio: "Passionate about software development and mentoring the next generation of engineers.",
    position: "Senior Software Engineer at Tech Company",
    company: "Tech Company",
    location: "San Francisco, CA",
    linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
  });

  const [editData, setEditData] = useState(profileData);

  const handleEdit = () => {
    setIsEditing(true);
    setEditData(profileData);
  };

  const handleSave = () => {
    setProfileData(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-[#1E1E1E] flex flex-col">
      <div className="flex-1 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-[#6464F1] to-[#7C7CFF] rounded-t-lg p-8 mb-0">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-[#6464F1] text-4xl font-bold">
                  {profileData.name.charAt(0)}
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">{profileData.name}</h1>
                  <p className="text-white/90 text-lg">{profileData.position}</p>
                  <p className="text-white/80">{profileData.company}</p>
                </div>
              </div>
              {!isEditing && (
                <button
                  onClick={handleEdit}
                  className="px-4 py-2 bg-white text-[#6464F1] font-semibold rounded-lg hover:bg-white/90 transition-colors flex items-center gap-2"
                >
                  <Edit2 size={18} />
                  Edit Profile
                </button>
              )}
            </div>
          </div>

          {/* Profile Content */}
          <div className="bg-[#2A2A2A] border border-t-0 border-[#3A3A3A] rounded-b-lg p-8">
            {isEditing ? (
              // Edit Mode
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={editData.name}
                      onChange={handleChange}
                      className="w-full bg-[#1E1E1E] text-white rounded-lg px-4 py-3 border border-[#3A3A3A] focus:border-[#6464F1] focus:outline-none transition-colors duration-200"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={editData.email}
                      onChange={handleChange}
                      className="w-full bg-[#1E1E1E] text-white rounded-lg px-4 py-3 border border-[#3A3A3A] focus:border-[#6464F1] focus:outline-none transition-colors duration-200"
                    />
                  </div>

                  {/* Department */}
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">Department</label>
                    <input
                      type="text"
                      name="department"
                      value={editData.department}
                      onChange={handleChange}
                      className="w-full bg-[#1E1E1E] text-white rounded-lg px-4 py-3 border border-[#3A3A3A] focus:border-[#6464F1] focus:outline-none transition-colors duration-200"
                    />
                  </div>

                  {/* Graduation Year */}
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">Graduation Year</label>
                    <input
                      type="number"
                      name="graduationYear"
                      value={editData.graduationYear}
                      onChange={handleChange}
                      className="w-full bg-[#1E1E1E] text-white rounded-lg px-4 py-3 border border-[#3A3A3A] focus:border-[#6464F1] focus:outline-none transition-colors duration-200"
                    />
                  </div>

                  {/* Position */}
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">Position</label>
                    <input
                      type="text"
                      name="position"
                      value={editData.position}
                      onChange={handleChange}
                      className="w-full bg-[#1E1E1E] text-white rounded-lg px-4 py-3 border border-[#3A3A3A] focus:border-[#6464F1] focus:outline-none transition-colors duration-200"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={editData.company}
                      onChange={handleChange}
                      className="w-full bg-[#1E1E1E] text-white rounded-lg px-4 py-3 border border-[#3A3A3A] focus:border-[#6464F1] focus:outline-none transition-colors duration-200"
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">Location</label>
                    <input
                      type="text"
                      name="location"
                      value={editData.location}
                      onChange={handleChange}
                      className="w-full bg-[#1E1E1E] text-white rounded-lg px-4 py-3 border border-[#3A3A3A] focus:border-[#6464F1] focus:outline-none transition-colors duration-200"
                    />
                  </div>

                  {/* LinkedIn */}
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">LinkedIn URL</label>
                    <input
                      type="url"
                      name="linkedin"
                      value={editData.linkedin}
                      onChange={handleChange}
                      className="w-full bg-[#1E1E1E] text-white rounded-lg px-4 py-3 border border-[#3A3A3A] focus:border-[#6464F1] focus:outline-none transition-colors duration-200"
                    />
                  </div>

                  {/* Twitter */}
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">Twitter URL</label>
                    <input
                      type="url"
                      name="twitter"
                      value={editData.twitter}
                      onChange={handleChange}
                      className="w-full bg-[#1E1E1E] text-white rounded-lg px-4 py-3 border border-[#3A3A3A] focus:border-[#6464F1] focus:outline-none transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* Bio */}
                <div>
                  <label className="block text-white text-sm font-semibold mb-2">Bio</label>
                  <textarea
                    name="bio"
                    value={editData.bio}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-[#1E1E1E] text-white rounded-lg px-4 py-3 border border-[#3A3A3A] focus:border-[#6464F1] focus:outline-none transition-colors duration-200 resize-none"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-6 border-t border-[#3A3A3A]">
                  <button
                    onClick={handleSave}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-[#6464F1] to-[#7C7CFF] text-white font-semibold rounded-lg hover:from-[#7474F1] hover:to-[#8C8CFF] transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <Save size={18} />
                    Save Changes
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex-1 px-6 py-3 bg-[#1E1E1E] text-[#A9A9A9] font-semibold rounded-lg border border-[#3A3A3A] hover:border-[#6464F1] hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <X size={18} />
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              // View Mode
              <div className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Personal Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <User className="text-[#6464F1] mt-1" size={20} />
                      <div>
                        <p className="text-[#A9A9A9] text-sm">Full Name</p>
                        <p className="text-white font-semibold">{profileData.name}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="text-[#6464F1] mt-1" size={20} />
                      <div>
                        <p className="text-[#A9A9A9] text-sm">Email</p>
                        <p className="text-white font-semibold">{profileData.email}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <GraduationCap className="text-[#6464F1] mt-1" size={20} />
                      <div>
                        <p className="text-[#A9A9A9] text-sm">Department</p>
                        <p className="text-white font-semibold">{profileData.department}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <GraduationCap className="text-[#6464F1] mt-1" size={20} />
                      <div>
                        <p className="text-[#A9A9A9] text-sm">Graduation Year</p>
                        <p className="text-white font-semibold">{profileData.graduationYear}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Career Information */}
                <div className="border-t border-[#3A3A3A] pt-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Career Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <Briefcase className="text-[#6464F1] mt-1" size={20} />
                      <div>
                        <p className="text-[#A9A9A9] text-sm">Position</p>
                        <p className="text-white font-semibold">{profileData.position}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Briefcase className="text-[#6464F1] mt-1" size={20} />
                      <div>
                        <p className="text-[#A9A9A9] text-sm">Company</p>
                        <p className="text-white font-semibold">{profileData.company}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <p className="text-[#A9A9A9] text-sm mb-2">Location</p>
                    <p className="text-white font-semibold">{profileData.location}</p>
                  </div>
                </div>

                {/* Bio */}
                <div className="border-t border-[#3A3A3A] pt-8">
                  <h2 className="text-2xl font-bold text-white mb-4">About Me</h2>
                  <p className="text-[#A9A9A9] leading-relaxed">{profileData.bio}</p>
                </div>

                {/* Social Links */}
                <div className="border-t border-[#3A3A3A] pt-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Social Links</h2>
                  <div className="flex gap-4">
                    {profileData.linkedin && (
                      <a
                        href={profileData.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-[#1E1E1E] text-[#6464F1] font-semibold rounded-lg border border-[#3A3A3A] hover:border-[#6464F1] transition-colors"
                      >
                        LinkedIn
                      </a>
                    )}
                    {profileData.twitter && (
                      <a
                        href={profileData.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-[#1E1E1E] text-[#6464F1] font-semibold rounded-lg border border-[#3A3A3A] hover:border-[#6464F1] transition-colors"
                      >
                        Twitter
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
