import { useEffect, useState } from 'react';

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-800 text-black dark:text-white p-2 rounded-full shadow hover:scale-105 transition"
    >
      {darkMode ? '🌙' : '☀️'}
    </button>
  );
}

export default ThemeToggle;
