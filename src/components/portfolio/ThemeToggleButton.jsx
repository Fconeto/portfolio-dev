import React from 'react';
import { Sun, Moon } from "lucide-react";

export default function ThemeToggleButton({ theme, setTheme }) {
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden bg-[var(--color-highlight)]"
      aria-label="Toggle theme"
    >
      <div className={`flex flex-col transition-transform duration-500 ease-in-out ${theme === 'dark' ? '-translate-y-4' : 'translate-y-4'}`}>
        <Sun className="w-5 h-5 text-[var(--color-background)] m-1.5" />
        <Moon className="w-5 h-5 text-[var(--color-background)] m-1.5" />
      </div>
    </button>
  );
};