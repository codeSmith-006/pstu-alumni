import { Mail, Linkedin, Twitter, Github, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2A2A2A] border-t border-[#3A3A3A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="w-8 h-8 bg-gradient-to-br from-[#6464F1] to-[#7C7CFF] rounded-lg flex items-center justify-center mb-4">
              <span className="text-white font-bold">A</span>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">
              Alumni Network
            </h3>
            <p className="text-[#A9A9A9] text-sm">
              Connecting students and alumni worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link
                to="/"
                className="text-[#A9A9A9] hover:text-white transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                to="/alumni"
                className="text-[#A9A9A9] hover:text-white transition-colors text-sm block"
              >
                Alumni
              </Link>
              <Link
                to="/events"
                className="text-[#A9A9A9] hover:text-white transition-colors text-sm block"
              >
                Events
              </Link>
              <Link
                to="/news"
                className="text-[#A9A9A9] hover:text-white transition-colors text-sm block"
              >
                News
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <div className="space-y-2">
              <Link
                to="/contact"
                className="text-[#A9A9A9] hover:text-white transition-colors text-sm block"
              >
                Contact Us
              </Link>
              <a
                href="mailto:helpdesk@alumni.university.edu"
                className="text-[#A9A9A9] hover:text-white transition-colors text-sm flex items-center gap-2"
              >
                <Mail size={14} />
                Helpdesk
              </a>
              <a
                href="#"
                className="text-[#A9A9A9] hover:text-white transition-colors text-sm block"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-[#3A3A3A] rounded-lg flex items-center justify-center text-[#A9A9A9] hover:bg-[#6464F1] hover:text-white transition-all duration-200"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#3A3A3A] rounded-lg flex items-center justify-center text-[#A9A9A9] hover:bg-[#6464F1] hover:text-white transition-all duration-200"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#3A3A3A] rounded-lg flex items-center justify-center text-[#A9A9A9] hover:bg-[#6464F1] hover:text-white transition-all duration-200"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#3A3A3A] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-[#A9A9A9] text-sm">
            <p>
              &copy; {currentYear} University Alumni Network. All rights
              reserved.
            </p>
            <div className="mt-4 md:mt-0 flex items-center gap-2">
              <Phone size={14} />
              <a
                href="tel:+1234567890"
                className="hover:text-white transition-colors"
              >
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
