'use client';

import { useTheme } from '@/context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      style={{
        background: theme === 'dark' 
          ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
      }}
      aria-label="Toggle theme"
    >
      <div
        className={`absolute top-1 flex items-center justify-center w-5 h-5 bg-white rounded-full shadow-lg transition-all duration-300 transform ${
          theme === 'dark' ? 'translate-x-8' : 'translate-x-1'
        }`}
      >
        {theme === 'dark' ? (
          <FiMoon className="w-3 h-3 text-purple-600" />
        ) : (
          <FiSun className="w-3 h-3 text-orange-500" />
        )}
      </div>
    </button>
  );
}
