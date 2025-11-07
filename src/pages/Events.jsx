import { useState, useMemo } from "react";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";

const eventsData = [
  {
    id: 1,
    title: "Alumni Networking Mixer",
    date: "Mar 15, 2024",
    time: "6:00 PM - 8:00 PM",
    location: "Tech Hub Downtown",
    description:
      "Connect with alumni and expand your professional network over drinks and appetizers.",
    category: "Networking",
    attendees: 245,
    organizer: "Alumni Relations Team",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    isPast: false,
  },
  {
    id: 2,
    title: "Career Development Workshop",
    date: "Mar 22, 2024",
    time: "2:00 PM - 4:00 PM",
    location: "University Campus",
    description:
      "Learn resume writing, interview skills, and career advancement strategies.",
    category: "Workshop",
    attendees: 156,
    organizer: "Career Services",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    isPast: false,
  },
  {
    id: 3,
    title: "Annual Gala & Reunion",
    date: "Apr 5, 2024",
    time: "7:00 PM - 11:00 PM",
    location: "Grand Hotel Ballroom",
    description:
      "Celebrate your alma mater with fellow alumni at our prestigious annual gala.",
    category: "Reunion",
    attendees: 512,
    organizer: "University Foundation",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    isPast: false,
  },
  {
    id: 4,
    title: "Startup Pitch Night",
    date: "Mar 8, 2024",
    time: "5:30 PM - 8:30 PM",
    location: "Innovation Hub",
    description:
      "Meet and support alumni entrepreneurs pitching their startup ideas.",
    category: "Entrepreneurship",
    attendees: 89,
    organizer: "Entrepreneurship Club",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    isPast: true,
  },
  {
    id: 5,
    title: "Tech Trends Webinar",
    date: "Feb 28, 2024",
    time: "4:00 PM - 5:00 PM",
    location: "Online",
    description:
      "Industry experts discuss the latest trends in technology and AI.",
    category: "Webinar",
    attendees: 432,
    organizer: "Tech Alumni Network",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    isPast: true,
  },
  {
    id: 6,
    title: "Women in Leadership Panel",
    date: "Apr 12, 2024",
    time: "3:00 PM - 4:30 PM",
    location: "Campus Auditorium",
    description:
      "Inspiring stories from successful women alumni leaders in various industries.",
    category: "Panel Discussion",
    attendees: 178,
    organizer: "Women Alumni Network",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    isPast: false,
  },
];

export default function Events() {
  const [filterType, setFilterType] = useState("Upcoming");

  const filteredEvents = useMemo(() => {
    if (filterType === "Upcoming") {
      return eventsData.filter((e) => !e.isPast);
    } else if (filterType === "Past") {
      return eventsData.filter((e) => e.isPast);
    }
    return eventsData;
  }, [filterType]);

  return (
    <div className="min-h-screen bg-[#1E1E1E] flex flex-col">
      <div className="flex-1 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Alumni Events
            </h1>
            <p className="text-[#A9A9A9] text-lg">
              Connect, learn, and celebrate with your alumni community
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-4 mb-12 justify-center">
            {["All", "Upcoming", "Past"].map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-6 py-2 font-semibold rounded-lg transition-all duration-200 ${
                  filterType === type
                    ? "bg-gradient-to-r from-[#6464F1] to-[#7C7CFF] text-white"
                    : "bg-[#2A2A2A] text-[#A9A9A9] border border-[#3A3A3A] hover:border-[#6464F1] hover:text-white"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-[#2A2A2A] rounded-lg border border-[#3A3A3A] overflow-hidden hover:border-[#6464F1] transition-all duration-300 group flex flex-col"
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-[#6464F1] text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {event.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-[#6464F1] transition-colors line-clamp-2">
                      {event.title}
                    </h3>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-[#A9A9A9] text-sm">
                        <Calendar size={16} />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#A9A9A9] text-sm">
                        <Calendar size={16} />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#A9A9A9] text-sm">
                        <MapPin size={16} />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#A9A9A9] text-sm">
                        <Users size={16} />
                        <span>{event.attendees} attending</span>
                      </div>
                    </div>

                    <p className="text-[#A9A9A9] text-sm mb-4 line-clamp-2">
                      {event.description}
                    </p>

                    <div className="pt-4 border-t border-[#3A3A3A] mt-auto">
                      <p className="text-[#A9A9A9] text-xs mb-4">
                        Organized by {event.organizer}
                      </p>
                      <button className="w-full px-4 py-2 bg-gradient-to-r from-[#6464F1] to-[#7C7CFF] text-white font-semibold rounded-lg hover:from-[#7474F1] hover:to-[#8C8CFF] transition-all duration-200 flex items-center justify-center gap-2 group">
                        {event.isPast ? "View Details" : "Register"}
                        <ArrowRight
                          size={16}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📅</div>
              <h3 className="text-2xl font-bold text-white mb-2">
                No Events Found
              </h3>
              <p className="text-[#A9A9A9]">Check back soon for more events</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
