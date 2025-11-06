import React, { useState, useEffect, use, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import AuthContext from "../../Context/AuthContext";
import { Avatar, Dropdown, Tooltip } from "antd";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { user, logout } = use(AuthContext);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Alumni", path: "/alumni" },
    { name: "Events", path: "/events" },
    { name: "Jobs", path: "/jobs" },
    { name: "Community", path: "/community" },
    { name: "Donate", path: "/donate" },
  ];

  const profileOptions = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Settings", path: "/settings" },
    { name: "Logout", action: () => logout() },
  ];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#121212]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-[#121212]"
      }`}
      style={{ borderBottom: "1px solid #2A2A2A" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center cursor-pointer"
          >
            <span className="text-xl font-bold text-[#E0E0E0] bg-gradient-to-r from-[#BB86FC] to-[#9B6EF1] bg-clip-text text-transparent">
              Alumni Network
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative px-4 py-2 text-[#E0E0E0] font-medium transition-colors group"
              >
                <span className="relative z-10">{link.name}</span>
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: "linear-gradient(135deg, #BB86FC, #9B6EF1)",
                    filter: "blur(8px)",
                  }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.2 }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#BB86FC] to-[#9B6EF1]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Auth Buttons / Profile */}
          <div className="hidden md:flex items-center space-x-4">
            {!user ? (
              <>
                <Link to="/login">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 text-[#E0E0E0] hover:text-white transition-colors"
                  >
                    Login
                  </motion.button>
                </Link>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(187, 134, 252, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 rounded-lg font-medium text-white relative overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #BB86FC, #9B6EF1)",
                  }}
                  onClick={() => setIsAuthenticated(true)}
                >
                  <span className="relative z-10">Register</span>
                </motion.button>
              </>
            ) : (
              <div className="relative" ref={menuRef}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsProfileOpen((prev) => !prev)}
                  className="flex items-center space-x-2 focus:outline-none"
                >
                  <Dropdown
                    open={false} // we handle open manually via AnimatePresence
                  >
                    <Tooltip title={user?.displayName}>
                      <Avatar
                        src={user?.photoURL}
                        alt={user?.displayName}
                        className="cursor-pointer"
                        style={{
                          backgroundColor: "#2A2A2A",
                          color: "#E0E0E0",
                          fontWeight: "bold",
                          width: "50px",
                          height: "50px",
                        }}
                      >
                        {!user?.photoURL && user?.displayName?.[0]}
                      </Avatar>
                    </Tooltip>
                  </Dropdown>
                </motion.button>

                {/* Animated dropdown */}
                <AnimatePresence>
                  {isProfileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-48 bg-[#1E1E1E] rounded-lg shadow-xl overflow-hidden z-50"
                      style={{ border: "1px solid #2A2A2A" }}
                    >
                      {profileOptions.map((option, index) => (
                        <motion.button
                          key={option.name}
                          whileHover={{ backgroundColor: "#2A2A2A" }}
                          onClick={() => {
                            setIsProfileOpen(false);
                            option.action && option.action();
                          }}
                          className="w-full text-left px-4 py-3 text-[#E0E0E0] hover:text-white transition-colors"
                          style={{
                            borderBottom:
                              index < profileOptions.length - 1
                                ? "1px solid #2A2A2A"
                                : "none",
                          }}
                        >
                          {option.name}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col space-y-1.5 focus:outline-none"
          >
            <motion.span
              animate={
                isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
              }
              className="w-6 h-0.5 bg-[#E0E0E0] transition-all"
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-[#E0E0E0] transition-all"
            />
            <motion.span
              animate={
                isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
              }
              className="w-6 h-0.5 bg-[#E0E0E0] transition-all"
            />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-[#1E1E1E]"
            style={{ borderTop: "1px solid #2A2A2A" }}
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="block px-4 py-3 text-[#E0E0E0] hover:text-white hover:bg-[#2A2A2A] rounded-lg transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <div
                className="pt-4 space-y-2"
                style={{ borderTop: "1px solid #2A2A2A" }}
              >
                {!isAuthenticated ? (
                  <>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-4 py-3 text-[#E0E0E0] hover:bg-[#2A2A2A] rounded-lg transition-colors text-left"
                    >
                      Login
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsAuthenticated(true)}
                      className="w-full px-4 py-3 rounded-lg font-medium text-white"
                      style={{
                        background: "linear-gradient(135deg, #BB86FC, #9B6EF1)",
                      }}
                    >
                      Register
                    </motion.button>
                  </>
                ) : (
                  profileOptions.map((option) => (
                    <motion.button
                      key={option.name}
                      whileTap={{ scale: 0.95 }}
                      onClick={option.action || (() => {})}
                      className="w-full px-4 py-3 text-[#E0E0E0] hover:bg-[#2A2A2A] rounded-lg transition-colors text-left"
                    >
                      {option.name}
                    </motion.button>
                  ))
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
