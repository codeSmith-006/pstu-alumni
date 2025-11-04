import { useState, useEffect, useCallback } from "react";

function getInitialTheme() {
  const stored = localStorage.getItem("hs_theme");
  if (stored === "light" || stored === "dark") return stored;
  return "auto";
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  const applyTheme = useCallback((theme) => {
    const html = document.documentElement;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (theme === "dark" || (theme === "auto" && prefersDark)) {
      html.classList.add("dark");
      html.classList.remove("light");
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
    }
  }, []);

  const setThemeAndStore = useCallback(
    (newTheme) => {
      setTheme(newTheme);
      localStorage.setItem("hs_theme", newTheme);
      applyTheme(newTheme);
    },
    [applyTheme]
  );

  useEffect(() => {
    applyTheme(theme);

    // Listen to system theme changes if in “auto” mode
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = () => {
      if (theme === "auto") {
        applyTheme("auto");
      }
    };
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, [theme, applyTheme]);

  return { theme, setTheme: setThemeAndStore };
}
