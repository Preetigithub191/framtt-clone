import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import SmartForm from './components/SmartForm';

function App() {
  return (
    <>
      <Hero />
      <Features />
      <SmartForm />
    </>
  );
}

<footer className="py-6 text-center text-gray-600 bg-white">
  © {new Date().getFullYear()} Framtt AI Solutions Pvt Ltd. All rights reserved.
</footer>


export default App;

