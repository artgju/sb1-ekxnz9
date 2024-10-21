import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticle = () => {
      if (particlesRef.current) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDuration = Math.random() * 10 + 5 + 's';
        particlesRef.current.appendChild(particle);

        setTimeout(() => {
          particle.remove();
        }, 15000);
      }
    };

    const interval = setInterval(createParticle, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="particles" ref={particlesRef}></div>
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 typing-animation">
          Revolutionize Your Business with AI Automation
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-300">
          Harness the power of artificial intelligence to streamline your operations, boost productivity, and stay ahead of the competition.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300 glow-on-hover"
        >
          Get Started
          <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </div>
      <div className="mt-20 flex justify-center relative z-10">
        <div className="w-full max-w-4xl h-96 rounded-2xl shadow-2xl overflow-hidden hover-lift">
          <img
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="AI Visualization"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <span className="text-3xl font-bold text-white text-center px-4">
              Imagine the Future of AI-Powered Innovation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;