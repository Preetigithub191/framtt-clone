import React, { useState } from 'react';

const questions = [
    "Do you take online bookings?",
    "Do you face customer communication delays?",
    "Can your passengers track buses in real-time?",
    "Do you use any kind of AI for marketing?",
    "Do you find it hard to manage multiple buses?",
];

function SmartForm() {
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));
    const [submitted, setSubmitted] = useState(false);

    const handleAnswer = (index, value) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (answers.includes(null)) {
            alert("Please answer all questions.");
            return;
        }
        setSubmitted(true);
    };

    return (
        <section className="py-20 px-4 bg-gradient-to-t from-gray-100 via-white to-gray-100">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 text-center mb-12">
                 Quick Business Check
            </h2>

            {submitted ? (
               <div className="absolute w-full backface-hidden p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-blue-200 text-center">
  <div className="prose dark:prose-invert max-w-none text-left">
    <h3 className="text-2xl font-bold text-blue-700 mb-6">🎯 Recommended Features</h3>
    <ul className="text-left text-gray-700 list-disc pl-6 space-y-2 text-lg">
      <li><strong>AI Marketing:</strong> Automate promotions & increase bookings</li>
      <li><strong>Live Tracking:</strong> Let passengers track bus status in real time</li>
      <li><strong>Booking Dashboard:</strong> Manage all routes in one place</li>
    </ul>
    <p className="mt-6 text-gray-700 text-lg">
      ✅ Want a demo?{' '}
      <a
        href="https://framtt.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline hover:text-blue-800 transition"
      >
        Click here to visit framtt.com
      </a>
    </p>
  </div>
   </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-8 max-w-3xl mx-auto">
                    {questions.map((q, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100"
                        >
                            <p className="text-lg md:text-xl font-semibold text-gray-800 mb-4">{q}</p>
                            <div className="flex justify-center gap-8">
                                {["Yes", "No"].map((option) => (
                                    <button
                                        key={option}
                                        type="button"
                                        className={`px-6 py-2 rounded-full border-2 font-medium transition-all duration-200 ${answers[idx] === option
                                                ? 'bg-blue-600 text-white border-blue-600 scale-105 shadow'
                                                : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                                            }`}
                                        onClick={() => handleAnswer(idx, option)}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}

                    <div className="text-center mt-8">
                        <button
                            type="submit"
                            className="relative inline-flex items-center justify-center px-10 py-4 text-white text-lg font-semibold transition-all duration-300 ease-in-out bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-800 active:scale-95"
                        >
                            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-cyan-500 opacity-20 blur-lg animate-pulse z-0"></span>
                            <span className="relative z-10">Show My Personalized Solution</span>
                        </button>
                    </div>
                </form>
            )}
        </section>
    );
}

export default SmartForm;
