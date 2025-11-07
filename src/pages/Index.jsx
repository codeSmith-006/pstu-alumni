import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Calendar,
  Briefcase,
  MessageCircle,
  Heart,
  MapPin,
} from "lucide-react";

export default function Index() {
  const features = [
    {
      icon: Users,
      title: "Connect with Alumni",
      description:
        "Network with thousands of alumni from your institution and build meaningful professional relationships.",
    },
    {
      icon: Calendar,
      title: "Exclusive Events",
      description:
        "Attend networking events, workshops, and conferences hosted by the alumni community.",
    },
    {
      icon: Briefcase,
      title: "Career Opportunities",
      description:
        "Discover job opportunities and mentorship programs exclusively for alumni members.",
    },
    {
      icon: MessageCircle,
      title: "Community & Forums",
      description:
        "Engage in discussions, share experiences, and stay updated with the latest alumni news.",
    },
    {
      icon: Heart,
      title: "Give Back",
      description:
        "Support your institution through donations and contribute to scholarships for future generations.",
    },
    {
      icon: Users,
      title: "Mentorship Program",
      description:
        "Get guidance from experienced professionals or mentor the next generation of students.",
    },
  ];

  const featuredAlumni = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Software Engineer at Google",
      department: "Computer Science",
      year: 2018,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager at Meta",
      department: "Business Administration",
      year: 2016,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Data Scientist at McKinsey",
      department: "Data Science",
      year: 2019,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Founder & CEO, TechStartup Inc",
      department: "Computer Science",
      year: 2015,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Alumni Networking Mixer",
      date: "Mar 15, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "Tech Hub Downtown",
      description:
        "Connect with alumni and expand your professional network over drinks and appetizers.",
    },
    {
      id: 2,
      title: "Career Development Workshop",
      date: "Mar 22, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "University Campus",
      description:
        "Learn resume writing, interview skills, and career advancement strategies.",
    },
    {
      id: 3,
      title: "Annual Gala & Reunion",
      date: "Apr 5, 2024",
      time: "7:00 PM - 11:00 PM",
      location: "Grand Hotel Ballroom",
      description:
        "Celebrate your alma mater with fellow alumni at our prestigious annual gala.",
    },
  ];

  const newsItems = [
    {
      id: 1,
      title: "Class of 2023 First Reunion a Huge Success",
      date: "Feb 28, 2024",
      excerpt:
        "Over 500 alumni from the Class of 2023 gathered for their first reunion. Photos and highlights available.",
      category: "Reunion",
    },
    {
      id: 2,
      title: "Alumni Scholarship Fund Reaches $2M Milestone",
      date: "Feb 20, 2024",
      excerpt:
        "Thanks to generous donations from our alumni, we've reached our $2 million scholarship goal.",
      category: "Achievement",
    },
    {
      id: 3,
      title: "New Mentorship Program Launch",
      date: "Feb 15, 2024",
      excerpt:
        "We're excited to announce the launch of our new mentorship program connecting students with alumni professionals.",
      category: "Program",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1E1E1E]">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-[#2A2A2A] rounded-full border border-[#3A3A3A]">
            <span className="text-[#A9A9A9] text-sm font-medium">
              Welcome to Your Alumni Network
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Stay Connected. Grow Together.{" "}
            <span className="bg-gradient-to-r from-[#6464F1] to-[#7C7CFF] bg-clip-text text-transparent">
              Reconnect
            </span>{" "}
            with Your University Family.
          </h1>

          <p className="text-lg sm:text-xl text-[#A9A9A9] mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of alumni worldwide. Network, find opportunities,
            mentor others, and stay connected to your alma mater. The Alumni
            Network is your gateway to lifelong connections.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              to="/register"
              className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-[#6464F1] to-[#7C7CFF] text-white font-semibold rounded-lg hover:from-[#7474F1] hover:to-[#8C8CFF] transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              Get Started
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              to="/alumni"
              className="w-full sm:w-auto px-8 py-3 bg-[#2A2A2A] text-white font-semibold rounded-lg border border-[#3A3A3A] hover:bg-[#3A3A3A] transition-colors duration-200"
            >
              Explore Alumni
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto pt-8 border-t border-[#3A3A3A]">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#6464F1] mb-2">
                50K+
              </div>
              <p className="text-[#A9A9A9] text-sm">Active Alumni</p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#6464F1] mb-2">
                200+
              </div>
              <p className="text-[#A9A9A9] text-sm">Events Per Year</p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#6464F1] mb-2">
                1000+
              </div>
              <p className="text-[#A9A9A9] text-sm">Opportunities</p>
            </div>
          </div>
        </div>
      </section>

      {/* About the Alumni Network */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#2A2A2A]/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                About the Alumni Network
              </h2>
              <p className="text-[#A9A9A9] text-lg mb-4 leading-relaxed">
                Our Alumni Network is dedicated to fostering lifelong
                connections among graduates, students, and the university
                community.
              </p>
              <p className="text-[#A9A9A9] text-lg mb-6 leading-relaxed">
                We believe in the power of networking, mentorship, and
                collaboration. Whether you're starting your career, growing your
                business, or giving back to the community, our platform connects
                you with thousands of talented individuals who share your
                university heritage.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#6464F1] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-[#A9A9A9]">
                    Network with peers across industries
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#6464F1] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-[#A9A9A9]">
                    Find career opportunities and mentorship
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#6464F1] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-[#A9A9A9]">
                    Stay updated with university and alumni news
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#6464F1] to-[#7C7CFF] rounded-xl p-12 text-center text-white">
              <div className="text-6xl font-bold mb-4">Mission</div>
              <p className="text-lg">
                To create a vibrant, inclusive community where alumni and
                students can connect, collaborate, and thrive together while
                supporting the growth and success of our university.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Alumni */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Featured Alumni
            </h2>
            <p className="text-[#A9A9A9] text-lg">
              Success stories from our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredAlumni.map((alumni) => (
              <div
                key={alumni.id}
                className="bg-[#2A2A2A] rounded-lg border border-[#3A3A3A] overflow-hidden hover:border-[#6464F1] transition-all duration-300 group"
              >
                <img
                  src={alumni.image}
                  alt={alumni.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {alumni.name}
                  </h3>
                  <p className="text-[#6464F1] text-sm font-medium mb-3">
                    {alumni.role}
                  </p>
                  <p className="text-[#A9A9A9] text-sm mb-2">
                    {alumni.department}
                  </p>
                  <p className="text-[#A9A9A9] text-xs">
                    Class of {alumni.year}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/alumni"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#2A2A2A] text-white font-semibold rounded-lg border border-[#3A3A3A] hover:bg-[#3A3A3A] transition-colors duration-200 group"
            >
              View All Alumni
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Events & Reunions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#2A2A2A]/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Events & Reunions
            </h2>
            <p className="text-[#A9A9A9] text-lg">
              Upcoming activities and gatherings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-[#1E1E1E] rounded-lg border border-[#3A3A3A] p-6 hover:border-[#6464F1] transition-all duration-300 group"
              >
                <div className="mb-4">
                  <p className="text-[#6464F1] text-sm font-semibold">
                    {event.date} • {event.time}
                  </p>
                </div>
                <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-[#6464F1] transition-colors">
                  {event.title}
                </h3>
                <p className="text-[#A9A9A9] text-sm mb-4 leading-relaxed flex items-start gap-2">
                  <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                  {event.location}
                </p>
                <p className="text-[#A9A9A9] text-sm mb-6">
                  {event.description}
                </p>
                <button className="w-full px-4 py-2 bg-gradient-to-r from-[#6464F1] to-[#7C7CFF] text-white font-semibold rounded-lg hover:from-[#7474F1] hover:to-[#8C8CFF] transition-all duration-200">
                  Register
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/events"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#2A2A2A] text-white font-semibold rounded-lg border border-[#3A3A3A] hover:bg-[#3A3A3A] transition-colors duration-200 group"
            >
              View All Events
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* News & Updates */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              News & Updates
            </h2>
            <p className="text-[#A9A9A9] text-lg">
              Latest from our alumni community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {newsItems.map((item) => (
              <article
                key={item.id}
                className="bg-[#2A2A2A] rounded-lg border border-[#3A3A3A] p-6 hover:border-[#6464F1] transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[#6464F1] text-xs font-semibold uppercase tracking-wide">
                    {item.category}
                  </span>
                  <span className="text-[#A9A9A9] text-xs">{item.date}</span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-[#6464F1] transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-[#A9A9A9] text-sm leading-relaxed">
                  {item.excerpt}
                </p>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/news"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#6464F1] to-[#7C7CFF] text-white font-semibold rounded-lg hover:from-[#7474F1] hover:to-[#8C8CFF] transition-all duration-200 group"
            >
              Read All News
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#2A2A2A]/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Join Our Alumni Network?
            </h2>
            <p className="text-[#A9A9A9] text-lg">
              Everything you need to stay connected and grow your career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-[#1E1E1E] rounded-lg border border-[#3A3A3A] hover:border-[#6464F1] transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#6464F1] to-[#7C7CFF] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#A9A9A9] text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Join?
          </h2>
          <p className="text-[#A9A9A9] text-lg mb-8 max-w-2xl mx-auto">
            Be part of a thriving community of professionals. Register now and
            start connecting with alumni from your institution.
          </p>
          <Link
            to="/register"
            className="px-8 py-3 bg-gradient-to-r from-[#6464F1] to-[#7C7CFF] text-white font-semibold rounded-lg hover:from-[#7474F1] hover:to-[#8C8CFF] transition-all duration-200 inline-flex items-center gap-2 group"
          >
            Create Your Account
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}
