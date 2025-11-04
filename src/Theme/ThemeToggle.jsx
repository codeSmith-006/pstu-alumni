import React, { useState } from "react";
import { useThemeContext } from "./ThemeProvider";

export default function ThemeToggle({ renderButton }) {
  const { theme, setTheme } = useThemeContext();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const defaultRenderButton = () => (
    <button
      onClick={toggleDropdown}
      className="px-3 py-2 bg-gray-200 dark:bg-gray-800 rounded"
    >
      Theme: {theme}
    </button>
  );

  return (
    <div className="relative">
      {renderButton
        ? renderButton({ theme, toggleDropdown })
        : defaultRenderButton()}

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-900 rounded shadow-lg">
          {["light", "dark", "auto"].map((mode) => (
            <button
              key={mode}
              onClick={() => {
                setTheme(mode);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${
                theme === mode
                  ? "font-semibold bg-gray-100 dark:bg-gray-700"
                  : ""
              }`}
            >
              {mode === "light"
                ? "🌞 Light"
                : mode === "dark"
                ? "🌙 Dark"
                : "🖥 Auto (System)"}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
