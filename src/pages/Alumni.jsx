import { useState, useMemo } from "react";
import { Search, Filter } from "lucide-react";

const alumniData = [
  {
    id: 1,
    name: "Sarah Johnson",
    department: "CSE",
    graduationYear: 2018,
    role: "Alumni",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    position: "Software Engineer at Google",
  },
  {
    id: 2,
    name: "Michael Chen",
    department: "MBA",
    graduationYear: 2016,
    role: "Alumni",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    position: "Product Manager at Meta",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    department: "Data Science",
    graduationYear: 2019,
    role: "Alumni",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    position: "Data Scientist at McKinsey",
  },
  {
    id: 4,
    name: "David Kim",
    department: "CSE",
    graduationYear: 2015,
    role: "Alumni",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    position: "Founder & CEO, TechStartup Inc",
  },
  {
    id: 5,
    name: "Jessica Williams",
    department: "ECE",
    graduationYear: 2020,
    role: "Alumni",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica",
    position: "Electrical Engineer at Tesla",
  },
  {
    id: 6,
    name: "Alex Patel",
    department: "CSE",
    graduationYear: 2024,
    role: "Student",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
  },
  {
    id: 7,
    name: "Lisa Anderson",
    department: "Civil Engineering",
    graduationYear: 2017,
    role: "Alumni",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    position: "Senior Architect at Arup",
  },
  {
    id: 8,
    name: "Mark Thompson",
    department: "CSE",
    graduationYear: 2021,
    role: "Alumni",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mark",
    position: "DevOps Engineer at AWS",
  },
  {
    id: 9,
    name: "Sophia Lee",
    department: "Data Science",
    graduationYear: 2023,
    role: "Student",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia",
  },
  {
    id: 10,
    name: "James Wilson",
    department: "MBA",
    graduationYear: 2014,
    role: "Alumni",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    position: "CFO at Fortune 500 Company",
  },
  {
    id: 11,
    name: "Rachel Garcia",
    department: "ECE",
    graduationYear: 2022,
    role: "Alumni",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rachel",
    position: "Firmware Engineer at Intel",
  },
  {
    id: 12,
    name: "Oliver Brown",
    department: "CSE",
    graduationYear: 2024,
    role: "Student",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Oliver",
  },
];

export default function Alumni() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("All");
  const [filterDepartment, setFilterDepartment] = useState("All");

  const departments = ["All", ...Array.from(new Set(alumniData.map((a) => a.department)))];

  const filteredAlumni = useMemo(() => {
    return alumniData.filter((member) => {
      const matchesSearch =
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.department.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesRole = filterRole === "All" || member.role === filterRole;
      const matchesDept = filterDepartment === "All" || member.department === filterDepartment;

      return matchesSearch && matchesRole && matchesDept;
    });
  }, [searchTerm, filterRole, filterDepartment]);

  return (
    <div className="min-h-screen bg-[#1E1E1E] flex flex-col">
      <div className="flex-1 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Alumni Directory</h1>
            <p className="text-[#A9A9A9] text-lg">Connect with verified alumni and students from your institution</p>
          </div>

          {/* Search and Filters */}
          <div className="bg-[#2A2A2A] rounded-lg border border-[#3A3A3A] p-6 mb-12">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-3.5 text-[#A9A9A9]" size={20} />
                <input
                  type="text"
                  placeholder="Search by name or department..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-[#1E1E1E] text-white placeholder-[#666666] rounded-lg pl-10 pr-4 py-3 border border-[#3A3A3A] focus:border-[#6464F1] focus:outline-none transition-colors duration-200"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Role Filter */}
              <div>
                <label className="flex items-center gap-2 text-white text-sm font-semibold mb-2">
                  <Filter size={16} /> Role
                </label>
                <select
                  value={filterRole}
                  onChange={(e) => setFilterRole(e.target.value)}
                  className="w-full bg-[#1E1E1E] text-white rounded-lg px-4 py-2 border border-[#3A3A3A] focus:border-[#6464F1] focus:outline-none transition-colors duration-200"
                >
                  <option value="All">All Roles</option>
                  <option value="Student">Students</option>
                  <option value="Alumni">Alumni Only</option>
                </select>
              </div>

              {/* Department Filter */}
              <div>
                <label className="flex items-center gap-2 text-white text-sm font-semibold mb-2">
                  <Filter size={16} /> Department
                </label>
                <select
                  value={filterDepartment}
                  onChange={(e) => setFilterDepartment(e.target.value)}
                  className="w-full bg-[#1E1E1E] text-white rounded-lg px-4 py-2 border border-[#3A3A3A] focus:border-[#6464F1] focus:outline-none transition-colors duration-200"
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept === "All" ? "All Departments" : dept}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-[#A9A9A9] text-sm">
              Showing <span className="text-[#6464F1] font-semibold">{filteredAlumni.length}</span> result
              {filteredAlumni.length !== 1 ? "s" : ""}
            </p>
          </div>

          {/* Alumni Grid */}
          {filteredAlumni.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredAlumni.map((member) => (
                <div
                  key={member.id}
                  className="bg-[#2A2A2A] rounded-lg border border-[#3A3A3A] overflow-hidden hover:border-[#6464F1] transition-all duration-300 group"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4">
                    <h3 className="text-white font-semibold text-lg mb-1">{member.name}</h3>
                    {member.position && (
                      <p className="text-[#6464F1] text-sm font-medium mb-2 line-clamp-1">{member.position}</p>
                    )}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[#A9A9A9] text-xs bg-[#1E1E1E] px-2 py-1 rounded">
                        {member.department}
                      </span>
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded ${
                          member.role === "Alumni"
                            ? "bg-[#6464F1]/20 text-[#6464F1]"
                            : "bg-[#A9A9A9]/20 text-[#A9A9A9]"
                        }`}
                      >
                        {member.role}
                      </span>
                    </div>
                    <p className="text-[#A9A9A9] text-xs mb-3">Class of {member.graduationYear}</p>
                    <button className="w-full px-3 py-2 bg-[#1E1E1E] text-[#6464F1] font-semibold rounded-lg border border-[#3A3A3A] hover:bg-[#6464F1] hover:text-white transition-all duration-200 text-sm">
                      View Profile
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No Results Found</h3>
              <p className="text-[#A9A9A9]">Try adjusting your search filters</p>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
