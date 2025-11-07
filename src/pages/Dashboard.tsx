import { Calendar, Users, Briefcase, BookOpen } from "lucide-react";
import Footer from "@/components/Footer";

export default function Dashboard() {
  const stats = [
    { icon: Calendar, label: "Events Registered", value: "8" },
    { icon: Users, label: "Connections", value: "127" },
    { icon: Briefcase, label: "Job Applications", value: "3" },
    { icon: BookOpen, label: "Resources Saved", value: "15" },
  ];

  const upcomingEvents = [
    { id: 1, title: "Alumni Networking Mixer", date: "Mar 15, 2024", type: "Networking" },
    { id: 2, title: "Career Development Workshop", date: "Mar 22, 2024", type: "Workshop" },
  ];

  const recentActivity = [
    { id: 1, action: "Registered for event", item: "Alumni Networking Mixer", date: "Today" },
    { id: 2, action: "Connected with", item: "Sarah Johnson", date: "Yesterday" },
    { id: 3, action: "Bookmarked job posting", item: "Senior Engineer - TechCorp", date: "2 days ago" },
  ];

  return (
    <div className="min-h-screen bg-[#1E1E1E] flex flex-col">
      <div className="flex-1 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">Welcome Back!</h1>
            <p className="text-[#A9A9A9] text-lg">Here's what's happening with your alumni account</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-[#2A2A2A] rounded-lg border border-[#3A3A3A] p-6 hover:border-[#6464F1] transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[#A9A9A9] text-sm mb-1">{stat.label}</p>
                      <p className="text-3xl font-bold text-white">{stat.value}</p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-[#6464F1] to-[#7C7CFF] rounded-lg flex items-center justify-center">
                      <Icon className="text-white" size={24} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Upcoming Events */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Upcoming Events</h2>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.id}
                    className="bg-[#2A2A2A] rounded-lg border border-[#3A3A3A] p-4 hover:border-[#6464F1] transition-all duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-white font-semibold mb-1">{event.title}</h3>
                        <p className="text-[#A9A9A9] text-sm">{event.date}</p>
                      </div>
                      <span className="text-[#6464F1] text-xs font-semibold bg-[#6464F1]/10 px-2 py-1 rounded">
                        {event.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div
                    key={activity.id}
                    className="bg-[#2A2A2A] rounded-lg border border-[#3A3A3A] p-4 hover:border-[#6464F1] transition-all duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-white font-semibold">
                          {activity.action} <span className="text-[#6464F1]">{activity.item}</span>
                        </p>
                        <p className="text-[#A9A9A9] text-sm">{activity.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-12 bg-gradient-to-r from-[#6464F1]/20 to-[#7C7CFF]/20 border border-[#6464F1]/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="px-6 py-2 bg-gradient-to-r from-[#6464F1] to-[#7C7CFF] text-white font-semibold rounded-lg hover:from-[#7474F1] hover:to-[#8C8CFF] transition-all duration-200">
                Browse Events
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-[#6464F1] to-[#7C7CFF] text-white font-semibold rounded-lg hover:from-[#7474F1] hover:to-[#8C8CFF] transition-all duration-200">
                Explore Alumni
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-[#6464F1] to-[#7C7CFF] text-white font-semibold rounded-lg hover:from-[#7474F1] hover:to-[#8C8CFF] transition-all duration-200">
                View Jobs
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
