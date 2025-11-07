import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#1E1E1E] flex flex-col">
      <div className="flex-1 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-[#A9A9A9] text-lg">We'd love to hear from you. Get in touch with our team.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {/* Contact Info Cards */}
            <div className="bg-[#2A2A2A] border border-[#3A3A3A] rounded-lg p-8 hover:border-[#6464F1] transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[#6464F1] to-[#7C7CFF] rounded-lg flex items-center justify-center mb-4">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Email</h3>
              <p className="text-[#A9A9A9] mb-4">Send us an email and we'll get back to you as soon as possible.</p>
              <a href="mailto:helpdesk@alumni.university.edu" className="text-[#6464F1] hover:text-[#7C7CFF] font-semibold transition-colors">
                helpdesk@alumni.university.edu
              </a>
            </div>

            <div className="bg-[#2A2A2A] border border-[#3A3A3A] rounded-lg p-8 hover:border-[#6464F1] transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[#6464F1] to-[#7C7CFF] rounded-lg flex items-center justify-center mb-4">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Phone</h3>
              <p className="text-[#A9A9A9] mb-4">Call us during business hours (Monday-Friday, 9am-5pm EST).</p>
              <a href="tel:+1234567890" className="text-[#6464F1] hover:text-[#7C7CFF] font-semibold transition-colors">
                +1 (234) 567-890
              </a>
            </div>

            <div className="bg-[#2A2A2A] border border-[#3A3A3A] rounded-lg p-8 hover:border-[#6464F1] transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[#6464F1] to-[#7C7CFF] rounded-lg flex items-center justify-center mb-4">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Address</h3>
              <p className="text-[#A9A9A9]">Alumni Relations Office</p>
              <p className="text-[#A9A9A9]">University Campus</p>
              <p className="text-[#A9A9A9]">City, State 12345</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#2A2A2A] border border-[#3A3A3A] rounded-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">Send us a Message</h2>

            {submitted && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <p className="text-green-400 font-semibold">Thank you for your message! We'll get back to you soon.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-white text-sm font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full bg-[#1E1E1E] text-white placeholder-[#666666] rounded-lg px-4 py-3 border border-[#3A3A3A] focus:border-[#6464F1] focus:outline-none transition-colors duration-200"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-white text-sm font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full bg-[#1E1E1E] text-white placeholder-[#666666] rounded-lg px-4 py-3 border border-[#3A3A3A] focus:border-[#6464F1] focus:outline-none transition-colors duration-200"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-white text-sm font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can we help?"
                  className="w-full bg-[#1E1E1E] text-white placeholder-[#666666] rounded-lg px-4 py-3 border border-[#3A3A3A] focus:border-[#6464F1] focus:outline-none transition-colors duration-200"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-white text-sm font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us more about your inquiry..."
                  rows={6}
                  className="w-full bg-[#1E1E1E] text-white placeholder-[#666666] rounded-lg px-4 py-3 border border-[#3A3A3A] focus:border-[#6464F1] focus:outline-none transition-colors duration-200 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-[#6464F1] to-[#7C7CFF] text-white font-semibold rounded-lg hover:from-[#7474F1] hover:to-[#8C8CFF] transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
}
