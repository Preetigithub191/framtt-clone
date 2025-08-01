import React from 'react';

const features = [
  {
    title: 'AI Marketing',
    description: 'Automated marketing to reach the right passengers at the right time.',
    icon: '🧠',
  },
  {
    title: 'Live Tracking',
    description: 'Real-time vehicle tracking with instant status updates.',
    icon: '📍',
  },
  {
    title: 'Booking Dashboard',
    description: 'Smart dashboard to manage, monitor, and modify bookings efficiently.',
    icon: '📊',
  },
];

function Features() {
  return (
    <section className="py-20 px-6 bg-white text-center">
      <h2 className="text-4xl font-bold text-blue-800 mb-12">
        Powerful Features to Grow Your Bus Business
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="bg-blue-50 p-8 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
