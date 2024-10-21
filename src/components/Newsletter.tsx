import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  return (
    <section className="py-20 animated-gradient relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Stay Updated with AI Innovations</h2>
          <p className="text-lg mb-8 text-gray-200">Subscribe to our newsletter for the latest AI trends and insights.</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
            />
            <button
              type="submit"
              className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-md hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center glow-on-hover"
            >
              Subscribe
              <Send className="ml-2 w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
      <div className="absolute inset-0 bg-blue-600 opacity-50"></div>
    </section>
  );
};

export default Newsletter;