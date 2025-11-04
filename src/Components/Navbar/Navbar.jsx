import React from "react";

import { Sun, Moon } from "lucide-react"; // any icons
import { ThemeProvider } from "../../Theme/ThemeProvider";
import ThemeToggle from "../../Theme/ThemeToggle";

export default function Navbar() {
  return (
    <ThemeProvider>
      <nav className="flex justify-between items-center p-4">
        <div className="text-xl font-bold">MyApp</div>

        <ThemeToggle
          renderButton={({ theme, toggleDropdown }) => (
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              {theme === "dark" ? <Moon /> : <Sun />}
              {theme === "auto"
                ? "Auto"
                : theme.charAt(0).toUpperCase() + theme.slice(1)}
            </button>
          )}
        />
      </nav>
    </ThemeProvider>
  );
}
