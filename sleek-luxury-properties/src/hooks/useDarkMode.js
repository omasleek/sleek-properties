
import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return (
      localStorage.getItem("dark-mode") === "true" ||
      (window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("dark-mode", "true");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("dark-mode", "false");
    }
  }, [isDarkMode]);

  return { isDarkMode, toggleDarkMode };
};

export default useDarkMode;
