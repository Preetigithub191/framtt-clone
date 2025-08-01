import React from 'react';

function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen flex flex-col justify-center items-center text-center px-4 py-20">
      <h1 className="text-5xl md:text-6xl font-extrabold text-blue-800 leading-tight mb-6">
        Empower Your Bus Business <br /> with <span className="text-blue-600">Framtt</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8">
        AI-powered solutions for real-time tracking, marketing automation, and smart booking systems.
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-md transition-transform duration-300 hover:scale-105">
        Get Started
      </button>
    </section>
  );
}

export default Hero;
