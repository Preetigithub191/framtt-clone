import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import SmartForm from './components/SmartForm';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen">
      <ThemeToggle />

      <Hero />
      <Features />
      <SmartForm />

      <footer className="py-6 text-center text-gray-600 dark:text-gray-400 dark:bg-gray-800 bg-white">
        © {new Date().getFullYear()} Framtt AI Solutions Pvt Ltd. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
