import React, { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const authContext = useContext(AuthContext);
  const user = authContext?.user || null;
  const logout = authContext?.logout || (() => {});
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Alumni", path: "/alumni" },
    { name: "Events", path: "/events" },
    { name: "News", path: "/news" },
    { name: "Contact", path: "/contact" },
  ];

  const profileOptions = [
    { name: "My Profile", path: "/profile" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Logout", action: logout },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        isScrolled ? "bg-[#1E1E1E] shadow-lg" : "bg-[#1E1E1E]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-8 h-8 bg-gradient-to-br from-[#6464F1] to-[#7C7CFF] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-white font-bold text-lg hidden sm:inline">
              Alumni Network
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-3 py-2 text-sm font-medium text-[#A9A9A9] hover:text-white transition-colors duration-150"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Auth Buttons / Profile */}
          <div className="flex items-center space-x-4">
            {!user ? (
              <div className="hidden sm:flex items-center space-x-3">
                <Link to="/login">
                  {" "}
                  <button className="px-4 py-2 text-sm font-medium text-[#A9A9A9] hover:text-white transition-colors duration-150">
                    Login
                  </button>
                </Link>
                <Link to="register">
                  {" "}
                  <button className="px-4 py-2 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-[#6464F1] to-[#7C7CFF] hover:from-[#7474F1] hover:to-[#8C8CFF] transition-colors duration-150">
                    Register
                  </button>
                </Link>
              </div>
            ) : (
              <div className="hidden sm:flex items-center" ref={menuRef}>
                <button
                  onClick={() => setIsProfileOpen((prev) => !prev)}
                  className="flex items-center space-x-2 focus:outline-none group"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-[#6464F1] to-[#7C7CFF] rounded-full flex items-center justify-center text-white text-sm font-medium">
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt={user.displayName}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      user.displayName?.[0]
                    )}
                  </div>
                  <span className="text-sm text-[#A9A9A9] group-hover:text-white transition-colors duration-150">
                    {user.displayName}
                  </span>
                </button>

                {isProfileOpen && (
                  <div className="absolute top-16 right-0 w-48 bg-[#2A2A2A] rounded-lg border border-[#3A3A3A] shadow-lg">
                    {profileOptions.map((option, index) => (
                      <button
                        key={option.name}
                        onClick={() => {
                          setIsProfileOpen(false);
                          if (option.action) {
                            option.action();
                          }
                        }}
                        className="w-full text-left px-4 py-3 text-sm text-[#A9A9A9] hover:text-white hover:bg-[#3A3A3A] transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg"
                      >
                        {option.path ? (
                          <Link to={option.path} className="block w-full">
                            {option.name}
                          </Link>
                        ) : (
                          option.name
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center text-[#A9A9A9] hover:text-white transition-colors duration-150"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#2A2A2A] border-t border-[#3A3A3A]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block px-3 py-2 text-base font-medium text-[#A9A9A9] hover:text-white hover:bg-[#3A3A3A] rounded-lg transition-colors duration-150"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-2 mt-2 border-t border-[#3A3A3A]">
                {!user ? (
                  <div className="space-y-2">
                    <Link to="/login">
                      {" "}
                      <button className="w-full px-3 py-2 text-base font-medium text-[#A9A9A9] hover:text-white hover:bg-[#3A3A3A] rounded-lg transition-colors duration-150 text-left">
                        Login
                      </button>
                    </Link>
                    <Link to="/register">
                      {" "}
                      <button className="w-full px-3 py-2 text-base font-medium text-white rounded-lg bg-gradient-to-r from-[#6464F1] to-[#7C7CFF] hover:from-[#7474F1] hover:to-[#8C8CFF] transition-colors duration-150">
                        Register
                      </button>
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-1">
                    {profileOptions.map((option) => (
                      <button
                        key={option.name}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          if (option.action) {
                            option.action();
                          }
                        }}
                        className="w-full text-left px-3 py-2 text-base font-medium text-[#A9A9A9] hover:text-white hover:bg-[#3A3A3A] rounded-lg transition-colors duration-150"
                      >
                        {option.path ? (
                          <Link to={option.path} className="block w-full">
                            {option.name}
                          </Link>
                        ) : (
                          option.name
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
