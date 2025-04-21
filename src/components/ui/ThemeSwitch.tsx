import { useState } from "react";
import { Moon } from "lucide-react"; // optional icon, can be replaced

export const ThemeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className={`w-10 h-5 rounded-full p-[2px] flex items-center transition-all duration-300 ${
        darkMode ? "bg-primary justify-end" : "bg-secondary justify-start border"
      }`}
    >
      {darkMode ? (
        <div className="w-4 h-4 bg-secondary rounded-full" />
      ) : (
        <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center text-[10px] text-secondary">
          <Moon className="w-[10px] h-[10px] text-accent fill-white" strokeWidth={1.5} />
        </div>
      )}
    </button>
  );
};
